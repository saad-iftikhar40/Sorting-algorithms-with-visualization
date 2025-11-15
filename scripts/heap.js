export async function heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    await heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    swapBars(0, i);
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
    await new Promise((resolve) => setTimeout(resolve, 300));
    await heapify(arr, i, 0);
  }
}

async function heapify(arr, n, i) {
  const bars = document.getElementsByClassName("bar");

  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    swapBars(i, largest);
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    await new Promise((resolve) => setTimeout(resolve, 300)); // Animation delay
    await heapify(arr, n, largest);
  }
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
