// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" 
// instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples
// of both five and seven print "ChickenMonkey".
// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.


for (let i = 1; i <= 100; i++) {
    // Check to see if the number i is divisible by both 5 and 7 first, if so print Chicken Monkey
    if (i % 5 === 0 && i % 7 === 0) {
        console.log("Chicken Monkey")
    }
    //Next check to see if the number i is divisible by 5, if so print Chicken
      else if (i % 5 === 0) {
    console.log("Chicken "); // Only 5, 10, 15 will appear
    //Next check to see if the number i is divisible by 7, if so print Monkey
    } else if (i % 7 === 0) {
        console.log("Monkey"); // Only 7, 14, 21 will appear
    //If the number i is divisible by neither 5 or 7, just print the number
    } else {
        console.log(i)
    }
}