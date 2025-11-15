export async function quickSort(arr, low = 0, high = arr.length - 1) {
  const bars = document.getElementsByClassName("bar");

  if (low < high) {
    let pivotIndex = await partition(arr, low, high);
    await quickSort(arr, low, pivotIndex - 1); // Sort left half
    await quickSort(arr, pivotIndex + 1, high); // Sort right half
  }
}

async function partition(arr, low, high) {
  const bars = document.getElementsByClassName("bar");
  let pivot = arr[high];
  let i = low - 1;

  bars[high].style.backgroundColor = "yellow"; // Mark pivot

  for (let j = low; j < high; j++) {
    bars[j].style.backgroundColor = "red"; // Current comparison
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
      swapBars(i, j);
    }
    await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
    bars[j].style.backgroundColor = "turquoise"; // Reset color
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in correct position
  swapBars(i + 1, high);
  bars[i + 1].style.backgroundColor = "green"; // Pivot sorted

  return i + 1;
}

function swapBars(i, j) {
  const bars = document.getElementsByClassName("bar");
  let tempHeight = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = tempHeight;

  let tempLabel = bars[i].querySelector(".bar-label").innerText;
  bars[i].querySelector(".bar-label").innerText =
    bars[j].querySelector(".bar-label").innerText;
  bars[j].querySelector(".bar-label").innerText = tempLabel;
}
