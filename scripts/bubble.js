export async function bubbleSort(arr) {
  const bars = document.getElementsByClassName("bar"); // Get the bars representing the array
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Change color of bars being compared
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      if (arr[j] > arr[j + 1]) {
        // Swap the heights (visually) and update the array
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        await visualizeSwap(bars[j], bars[j + 1]);
      }

      // Reset color after comparison
      bars[j].style.backgroundColor = "turquoise";
      bars[j + 1].style.backgroundColor = "turquoise";
    }
  }
}

// Helper function to animate bar height swap
function visualizeSwap(bar1, bar2) {
  return new Promise((resolve) => {
    const tempHeight = bar1.style.height;
    const tempText = bar1.querySelector(".bar-label").innerText;
    bar1.style.height = bar2.style.height;
    bar1.querySelector(".bar-label").innerText =
      bar2.querySelector(".bar-label").innerText;

    bar2.style.height = tempHeight;
    bar2.querySelector(".bar-label").innerText = tempText;

    setTimeout(() => {
      resolve();
    }, sortingspeed);
  });
}
