export async function mergeSort(arr, left, right) {
  const bars = document.getElementsByClassName("bar");

  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);

  // Sort the left half
  await mergeSort(arr, left, mid);

  // Sort the right half
  await mergeSort(arr, mid + 1, right);

  // Merge both halves
  await merge(arr, left, mid, right);
}

// Merge function to merge two sorted halves
async function merge(arr, left, mid, right) {
  const bars = document.getElementsByClassName("bar");

  let n1 = mid - left + 1;
  let n2 = right - mid;

  // Create temporary arrays
  let leftArr = new Array(n1);
  let rightArr = new Array(n2);

  // Copy data to temp arrays
  for (let i = 0; i < n1; i++) {
    leftArr[i] = arr[left + i];
    bars[left + i].style.backgroundColor = "yellow"; // Mark as part of the left half
  }
  for (let i = 0; i < n2; i++) {
    rightArr[i] = arr[mid + 1 + i];
    bars[mid + 1 + i].style.backgroundColor = "red"; // Mark as part of the right half
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  let i = 0,
    j = 0,
    k = left;

  // Merge the temp arrays back into the original array
  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      bars[k].style.height = `${leftArr[i] * 3}px`;
      bars[k].querySelector(".bar-label").innerText = leftArr[i]; // Update label
      bars[k].style.backgroundColor = "green"; // Mark sorted
      i++;
    } else {
      arr[k] = rightArr[j];
      bars[k].style.height = `${rightArr[j] * 3}px`;
      bars[k].querySelector(".bar-label").innerText = rightArr[j]; // Update label
      bars[k].style.backgroundColor = "green"; // Mark sorted
      j++;
    }
    k++;
    await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
  }

  // Copy the remaining elements of leftArr, if any
  while (i < n1) {
    arr[k] = leftArr[i];
    bars[k].style.height = `${leftArr[i] * 3}px`;
    bars[k].querySelector(".bar-label").innerText = leftArr[i]; // Update label
    bars[k].style.backgroundColor = "green"; // Mark sorted
    i++;
    k++;
    await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
  }

  // Copy the remaining elements of rightArr, if any
  while (j < n2) {
    arr[k] = rightArr[j];
    bars[k].style.height = `${rightArr[j] * 3}px`;
    bars[k].querySelector(".bar-label").innerText = rightArr[j]; // Update label
    bars[k].style.backgroundColor = "green"; // Mark sorted
    j++;
    k++;
    await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
  }
}
