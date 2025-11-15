export async function insertionSort(arr) {
  const bars = document.getElementsByClassName("bar");
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    bars[i].style.backgroundColor = "yellow"; // Current element to be inserted

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      bars[j + 1].style.height = bars[j].style.height;

      // Update label with the new value
      bars[j + 1].querySelector(".bar-label").innerText = arr[j];

      bars[j].style.backgroundColor = "red"; // Comparison happening
      j--;

      await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
    }

    arr[j + 1] = key;
    bars[j + 1].style.height = `${key * 3}px`;

    // Update label to reflect the new value
    bars[j + 1].querySelector(".bar-label").innerText = key;

    bars[i].style.backgroundColor = "green"; // Mark sorted
  }
}
