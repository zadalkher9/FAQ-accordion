let answer = document.querySelectorAll('.paragraph');
let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');
let hidden = document.querySelectorAll(".hidden");
let question = document.querySelectorAll(".ques");


for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
      plus[i].classList.toggle("hidden");
      minus[i].classList.toggle("hidden");
      answer[i].classList.toggle("hidden");
      
    });
  }
  
  for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", function () {
      minus[i].classList.toggle("hidden");
      plus[i].classList.toggle("hidden");
      answer[i].classList.toggle("hidden");
     
    });
  }

  for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function () {
      plus[i].classList.toggle("hidden");
      minus[i].classList.toggle("hidden");
      answer[i].classList.toggle("hidden");
    });
  }