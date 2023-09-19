function printCV() {
  // Open the browser's print dialog
  window.print();
}

// Add an event listener to the button
const printButton = document.getElementById('print-button');
printButton.addEventListener('click', printCV);
