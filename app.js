    const btn = document.getElementById("themeToggle");

      btn.onclick = () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
          btn.textContent = "☀️";
        } else {
          btn.textContent = "🌙";
        }
      };

// let name = "neelab";
// console .log ("my name is "+ name);

// let age = 22;
// alert ("my age is "+ age+ "years old");   


// let age = prompt ("what is your age ?");
// console .log ("my age is "+ age + "years old");
 


// let x = 5;
// let y = 10;

// alert (x != y);

// let number = 5;
// number += 50;
// console .log (number);


// let age = prompt("what is your age ?");

// if (age >= 18) {
//   alert("agree");
// } else {
//   alert("disagree");
// }

// let age = prompt ("what is your age ?");
// if ( age >= 18 ) {
//     console .log ("you can vote");
// }
// else {
//     console .log ("you can't vote");
// }

// let scour = prompt ("what is your scour ?");

// if ( scour >=90){
//   alert ("your grade is A+");
// }
//  else if ( scour >=50){
//   alert ("your grade is B");
//  }

//  else if ( scour >=30){
//   alert ("your grade is C");
//  }
//   else { alert ("your grade is F");
//   }

// let age = prompt ("what is your age ?");{
//   console.log ("your age is "+ age + "years old");
// }

// let name = prompt ("what is your name ?");{
//   alert ("my name is "+ name);
// }

// const x  = "neelab";
// console .log ("my name is "+ x);


// let x = 5;
// let y = 5;

// console.log (x == y);


// let number = 18;

// if ( age >= 18 ) {
//   alert ("you re able to join ");

// }

// else {
//   alert ("you re not able to join ");
// }


// alert (age);


// let age = prompt("what is your age ?");

// if (age >= 18) {
//   alert("تو بزرگسال هستی ✅");
// }

// else if (age >= 13) {
//   alert("تو نوجوان هستی ⚠️");
// }

// else {
//   alert("تو هنوز کودک هستی ❌");
// }

// let score = prompt("what is your score ?");

// if (score >= 90) {
//   alert("آفرین عالی 👏");
// } else if (score >= 50) {
//   alert("قبول شدی 🙂");
// } else {
//   alert("متاسفانه رد شدی 😢");
// }

// function sayHello() {
//   alert("wellcome to my wibsites!");
// }


// sayHello();

// function introduce() {
//   let name = prompt("اسمت چیه؟");
//   let age = Number(prompt("چند سالته؟"));
//   let city = prompt("کجایی؟");
//   alert("سلام " + name + " 🌸 تو " + age + " ساله هستی." + city + "yor form");
// }

// introduce();

// function guessNumber() {
//   let secret = 7;
//   let guess = Number(prompt("یک عدد بین 1 تا 10 حدس بزن:"));
  
//   if (guess === secret) {
//     alert("آفرین درست حدس زدی ");
//   } else {
//     alert("اشتباه شد 😅 عدد درست " + secret + " بود.");
//   }
// }

// guessNumber();
// function calculateAge() {
//   let birthYear = Number(prompt("سال تولدت رو وارد کن:"));
//   let currentYear = new Date().getFullYear();
//   let age = currentYear - birthYear;
//   alert("سن شما: " + age);
// }

// calculateAge();



// alert ("hello world");
// console.log ("hello world from neelab");


// let name = prompt ("what is your name ?");
// let age = prompt ("what is your age ? ");
// alert ("my name is " + name + " my age is "+ age + " years old");

// let city = prompt ("where do you live ?");
// alert ("i live in "+ city);

let age = Number(prompt ("what is your age?"));
alert ("next year you will" +  (age + 1) );