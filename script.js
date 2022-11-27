
let mainDiv = document.getElementById("main-circle");
let mainDiv2 = document.getElementById("main-circle2");
let mainDiv3 = document.getElementById("main-circle3");
let mainDiv4 = document.getElementById("main-circle4");
let mainDiv5 = document.getElementById("main-circle5");


// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("one")) {
        mainDiv.style.background="red"

    } else if (styles.contains("two")) {
        mainDiv2.style.background="blue"

    } else if (styles.contains("three")) {
        mainDiv3.style.background="yellow"

    } else if (styles.contains("four")) {
        mainDiv4.style.background="green"

    } else if (styles.contains("five")) {
        mainDiv5.style.background="purple"

      }

    
   
  });
});
