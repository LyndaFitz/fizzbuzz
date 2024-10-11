// Loop through all numbers from 1 to 100 If a number is divisible by 3, log “Fizz.” -->
// If a number is divisible by 5, log “Buzz.” -->
// If a number is divisible by both 3 and 5, log “Fizz Buzz.” -->
// If a number is not divisible by either 3 or 5, log the number. -->
 
for(i = 1; i<=100; i++) if(i % 3===0 && i % 5===0) console.log("FizzBuzz");


// Declare an arbitrary number, n. -->
// Create a loop that searches for the next prime number, starting at n and incrementing from there. -->
// As soon as you find the prime number, log that number and exit the loop. -->

let n = 4

while (true) {
  
}

    // Declare an arbitrary number, n. -->
     // Create a loop that searches for the next prime number, starting at n and incrementing from there. -->
     // As soon as you find the prime number, log that number and exit the loop. -->
    let n = 4
    
    while (true) {
    n++
    let isPrime = true
    let div = 2
    while (div <= n / 2) { if (n % div==0) { isPrime=false break } div++ } if (isPrime) { console.log(n) break } }

    function parseCSV(csvString) {
  let rows = csvString.split('\n'); // Split the string into rows
  for (let row of rows) {
    let cells = row.split(','); // Split each row into individual cells by commas
    if (cells.length === 4) { // Assuming exactly 4 cells per row
      console.log(cells[0], cells[1], cells[2], cells[3]); // Log each cell in the row
    } else {
      console.log(...cells); // If the number of cells isn't 4, log all cells as a fallback
    }
  }
}
 // Example string provided in the question -->
let csvString1 =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
 // Test the function with the first string -->
console.log("First CSV Test:");
parseCSV(csvString1);
 // Test the function with the second string -->
let csvString2 = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
console.log("\nSecond CSV Test:");
parseCSV(csvString2);

