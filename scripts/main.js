import { selectionSort } from "./selection.js";
import { bubbleSort } from "./bubble.js";
import { insertionSort } from "./insertion.js";
import { mergeSort } from "./merge.js";
import { heapSort } from "./heap.js";
import { radixSort } from "./radix.js";
import { quickSort } from "./quick.js";
import { bucketSort } from "./bucket.js";
import { countSort } from "./count.js";

// Main Variables
let array = [];
let arraySize = 50; // Default size
let sortingSpeed = 500; // Default speed (lower means faster)

// DOM Elements
const algoSelect = document.getElementById("algo");
const sizeSlider = document.getElementById("size");
const sortButton = document.getElementById("sort");
const shuffleButton = document.getElementById("shuffle");
const arrayContainer = document.getElementById("array_container");

// Initialize Array and Visualize Bars
function initArray() {
  array = Array.from(
    { length: arraySize },
    () => Math.floor(Math.random() * 100) + 1
  );
  renderArray();
}

// Render Array as Bars with Numbers
function renderArray() {
  arrayContainer.innerHTML = ""; // Clear previous bars

  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`; // Adjust height for better visual representation
    bar.style.width = `${100 / array.length}%`; // Make bar width dynamic based on array size
    bar.style.backgroundColor = "turquoise"; // Default color

    // Add a span to display the number on the bar
    const barLabel = document.createElement("span");
    barLabel.classList.add("bar-label");
    barLabel.innerText = value; // The value of the bar (number)

    // Append the label to the bar
    bar.appendChild(barLabel);
    arrayContainer.appendChild(bar);
  });
}

// Shuffle Array
shuffleButton.addEventListener("click", () => {
  initArray();
});

// Sort Array (based on the selected algorithm)
sortButton.addEventListener("click", () => {
  const algo = algoSelect.value;
  console.log(algo);
  switch (algo) {
    case "bubble_sort":
      bubbleSort(array);
      break;
    case "insertion_sort":
      insertionSort(array);
      break;
    case "selection_sort":
      selectionSort(array);
      break;
    case "merge_sort":
      mergeSort(array);
      break;
    case "count_sort":
      countSort(array);
      break;
    case "heap_sort":
      heapSort(array);
      break;
    case "quick_sort":
      quickSort(array);
      break;
    case "radix_sort":
      radixSort(array);
      break;
    case "bucket_sort":
      bucketSort(array);
      break;
    // Add cases for other sorting algorithms here
  }
});

// Change Array Size
sizeSlider.addEventListener("input", (event) => {
  arraySize = event.target.value;
  initArray();
});

// Adjust Speed
document.getElementById("increase_speed").addEventListener("click", () => {
  sortingSpeed = Math.max(100, sortingSpeed - 100); // Increase speed by reducing delay
});

document.getElementById("decrease_speed").addEventListener("click", () => {
  sortingSpeed = Math.min(2000, sortingSpeed + 100); // Decrease speed by increasing delay
});

// Initialize Array on Load
initArray();
