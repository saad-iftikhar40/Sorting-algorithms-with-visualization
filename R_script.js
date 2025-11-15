// Sample data: Time taken by each algorithm for different array sizes (in milliseconds)
const empiricalData = {
  arraySizes: [100, 500, 1000, 5000, 10000, 50000, 100000],
  bubble: [],
  insertion: [],
  selection: [],
  merge: [],
  quick: [],
  heap: [],
  radix: [],
  bucket: [],
  count: [],
};

// Function to simulate sorting times and fill the table
function fillTableWithTimes() {
  const table = document
    .getElementById("empirical-table")
    .getElementsByTagName("tbody")[0];
  const algorithms = [
    "bubble",
    "insertion",
    "selection",
    "merge",
    "quick",
    "heap",
    "radix",
    "bucket",
    "count",
  ];

  empiricalData.arraySizes.forEach((size, rowIndex) => {
    const row = table.rows[rowIndex];

    algorithms.forEach((algo, colIndex) => {
      // Simulate sorting times (in milliseconds) for demo purposes
      const timeTaken = (Math.random() * size) / 10; // Replace this with real time if available
      empiricalData[algo].push(timeTaken.toFixed(2));

      // Fill the table cell
      row.cells[colIndex + 1].innerText = timeTaken.toFixed(2);
    });
  });
}

function plotGraph() {
  console.log(empiricalData); // Check if data is being populated correctly

  const ctx = document.getElementById("time-graph").getContext("2d");

  const data = {
    labels: empiricalData.arraySizes, // Array sizes on the x-axis
    datasets: [
      {
        label: "Bubble Sort",
        data: empiricalData.bubble,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Insertion Sort",
        data: empiricalData.insertion,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Selection Sort",
        data: empiricalData.selection,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Merge Sort",
        data: empiricalData.merge,
        borderColor: "purple",
        fill: false,
      },
      {
        label: "Quick Sort",
        data: empiricalData.quick,
        borderColor: "orange",
        fill: false,
      },
      {
        label: "Heap Sort",
        data: empiricalData.heap,
        borderColor: "brown",
        fill: false,
      },
      {
        label: "Radix Sort",
        data: empiricalData.radix,
        borderColor: "pink",
        fill: false,
      },
      {
        label: "Bucket Sort",
        data: empiricalData.bucket,
        borderColor: "yellow",
        fill: false,
      },
      {
        label: "Count Sort",
        data: empiricalData.count,
        borderColor: "grey",
        fill: false,
      },
    ],
  };

  new Chart(ctx, {
    type: "line", // Line chart to represent time vs array size
    data: data,
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Array Size",
          },
        },
        y: {
          title: {
            display: true,
            text: "Time (milliseconds)",
          },
          type: "logarithmic", // Logarithmic scale for better visualization
        },
      },
    },
  });
}

// Call functions on page load
document.addEventListener("DOMContentLoaded", () => {
  fillTableWithTimes(); // Fill table with data
  plotGraph(); // Plot graph
});
