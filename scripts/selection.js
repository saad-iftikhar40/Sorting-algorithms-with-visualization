export async function selectionSort(arr) {
  const bars = document.getElementsByClassName("bar");
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Highlight the current bar being compared
    bars[minIndex].style.backgroundColor = "red";

    for (let j = i + 1; j < n; j++) {
      bars[j].style.backgroundColor = "yellow"; // Bar being compared

      if (arr[j] < arr[minIndex]) {
        if (minIndex !== i) {
          bars[minIndex].style.backgroundColor = "turquoise";
        }
        minIndex = j;
      } else {
        bars[j].style.backgroundColor = "turquoise";
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      await visualizeSwap(bars[i], bars[minIndex]);
    }

    bars[minIndex].style.backgroundColor = "turquoise";
    bars[i].style.backgroundColor = "green"; // Mark sorted
  }
}

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
