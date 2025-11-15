export async function radixSort(arr) {
  const bars = document.getElementsByClassName("bar");

  let max = Math.max(...arr);
  let exp = 1;

  // Do counting sort for every digit, starting from the least significant digit
  while (Math.floor(max / exp) > 0) {
    await countSortForRadix(arr, exp);
    exp *= 10;
  }
}

// Counting sort based on the digit represented by exp
async function countSortForRadix(arr, exp) {
  const bars = document.getElementsByClassName("bar");
  let n = arr.length;
  let output = new Array(n);
  let count = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
    bars[i].style.backgroundColor = "yellow"; // Mark bar being counted
    await new Promise((resolve) => setTimeout(resolve, 200)); // Animation delay
  }

  // Accumulate the count array
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // Copy the output array to the original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    bars[i].style.height = `${arr[i] * 3}px`;
    bars[i].querySelector(".bar-label").innerText = arr[i]; // Update label
    bars[i].style.backgroundColor = "green"; // Mark sorted
    await new Promise((resolve) => setTimeout(resolve, 200)); // Animation delay
  }
}
