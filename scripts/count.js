export async function countSort(arr) {
  const bars = document.getElementsByClassName("bar");
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(arr.length);

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
    bars[i].style.backgroundColor = "yellow"; // Mark bar being counted
    await new Promise((resolve) => setTimeout(resolve, 200)); // Animation delay
  }

  // Accumulate count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // Copy the output array to original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
    bars[i].style.height = `${arr[i] * 3}px`;
    bars[i].querySelector(".bar-label").innerText = arr[i]; // Update label
    bars[i].style.backgroundColor = "green"; // Mark sorted
    await new Promise((resolve) => setTimeout(resolve, 200)); // Animation delay
  }
}
