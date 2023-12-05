function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  alert("Hi");
  // You are going to write the code here before the curly braces 
  let heightM = height/100;
  let BMI = weight/(heightM*heightM);
  alert(BMI);
  

// function bmi(weight, height) {let bmi = weight / (height ** 2)

//  if (bmi <=20) {return "underweight";}

// else if (bmi <= 25) {return " Normal"} 
//  else if (bmi <=30) { return "Overweight"}
//  else if (bmi > 50) {return "Obese"}
//  }
// console.log(bmi(20))
// alert()

// let BMI = weight/100

// let BMI = (weight / (height*0.01))^2;
//  alert (BMI);
//  if (BMI <=25) {return"Underweight";}
//   else if(BMI<=30){ return "Overweight;"}
//  else if(BMI> && BMI<=29.9)
//  {alert("Overweight")};

// using the result you calculated in challenge 1 and check the BMI state
// Below 18.5 Underweight
// 18.5 – 24.9 Healthy Weight
// 25.0 – 29.9 Overweight
// 30.0 and Above Obesity
// show the BMI state in an alert

if(BMI<18.5){alert ("Underweight");
}else if(BMI >= 18.5 && BMI <24.9){
  alert ("Normal wieght");

}
else if (BMI >= 25 && BMI <=29.9 )
{alert ("Overweight");}
else { alert("Above Obesilty");}
}
