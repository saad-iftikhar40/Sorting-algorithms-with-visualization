export async function bucketSort(arr) {
  const n = arr.length;
  const bars = document.getElementsByClassName("bar");

  // Step 1: Create empty buckets
  let bucketCount = Math.floor(Math.sqrt(n));
  let buckets = new Array(bucketCount).fill(null).map(() => []);

  // Step 2: Scatter the array into buckets
  let maxVal = Math.max(...arr);
  for (let i = 0; i < n; i++) {
    let bucketIndex = Math.floor((arr[i] / maxVal) * (bucketCount - 1));
    buckets[bucketIndex].push(arr[i]);
    bars[i].style.backgroundColor = "red"; // Color as the element is placed in a bucket
    await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
    bars[i].style.backgroundColor = "turquoise"; // Reset color
  }

  // Step 3: Sort each bucket individually (using Insertion Sort here)
  for (let i = 0; i < bucketCount; i++) {
    await insertionSort(buckets[i]);
  }

  // Step 4: Concatenate the sorted buckets
  let index = 0;
  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index] = buckets[i][j];

      bars[index].style.height = `${arr[index] * 3}px`;
      bars[index].querySelector(".bar-label").innerText = arr[index];
      bars[index].style.backgroundColor = "green"; // Sorted color
      await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
      index++;
    }
  }
}

async function insertionSort(bucket) {
  for (let i = 1; i < bucket.length; i++) {
    let key = bucket[i];
    let j = i - 1;

    while (j >= 0 && bucket[j] > key) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = key;
  }
}
