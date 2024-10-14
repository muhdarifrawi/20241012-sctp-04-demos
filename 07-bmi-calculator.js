
// BMI Calculator
// BMI = weight / (height * height)

let weight = parseFloat(prompt("Type in your weight (kg): "));
while(weight<0 || weight>300){
    weight = parseFloat(prompt("Type in your weight (kg): "));
}

let height = parseFloat(prompt("Type in your height (meter): "));
while(height<0 || height > 3){
    height = parseFloat(prompt("Type in your height (meter): "));
}

let bmi = weight / (height * height);

console.log("Your BMI is: ", bmi);

if(bmi<18.5){
    console.log("lesser than normal. please consult doctor.")
}
else if(bmi>=18.5 && bmi<=22.9){
    console.log("Normal BMI");
}
else if(bmi>22.9 && bmi <= 27.4){
    console.log("Overweight");
}
else if(bmi>27.4){
    console.log("Obese")
}

