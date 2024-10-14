// if statement
let random_number = 4;

if(random_number % 2 == 0){
    console.log("EVEN");
}

// if statement with else
let another_random_number = 3;

if(another_random_number % 2 == 0){
    console.log("EVEN");
}
else {
    console.log("ODD");
}

// AND (&&) operator
let y = 4;
if (y > 0 && y < 10){
    console.log("Y is within 1 to 10");
}

// examples using boolean values
let is_raining = true;
let is_cloudy = true;

// if(is_raining == true && is_cloudy == true){
//     console.log("is both cloudy and raining");
// }

if(is_raining && is_cloudy){
    console.log("is both cloudy and raining");
}

// OR(||) operator with boolean values
let is_rain = false;
let is_sun = true;

if(is_rain || is_sun){
    console.log("brng umbrella");
}

// if, else if, else statement
let z = 9;

if (z > 10){
    console.log("more than 10")
}
else if(z > 5){ 
    console.log("more than 5")
}
else{
    console.log("more than zero")
}

// longer conditions should be at the top
let is_raining_again = true;
let is_cloudy_again = true;

if (is_raining_again && is_cloudy_again){

}
else if(is_raining_again){

}
else if(is_cloudy_again){

}
else{
    
}

/**
 * 
create an if- else if - else statement

if divisible by 3, print "fizz"
if divisible by 5, print "buzz"
if divisible by 3 and 5, print "fizzbuzz"
if not divisible by any, print the number

 */
let some_number = 2;

if(some_number % 3 == 0 && some_number % 5 == 0){
    console.log("fizzbuzz");
}
else if(some_number % 3 == 0){
    console.log("fizz");
}
else if(some_number % 5 == 0){
    console.log("buzz");
}
else{
    console.log(some_number);
}