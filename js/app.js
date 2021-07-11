"use strict";

let button = document.getElementById("popupform");

button.addEventListener("click", show);
let div = document.getElementById("form1");
function show() {
  let form = document.createElement("form");
  div.appendChild(form);
  let field = document.createElement("fieldset");
  form.appendChild(field);
  let legend = document.createElement("legend");
  field.appendChild(legend);
  legend.textContent = "enter your survey";
  let label1 = document.createElement("label");
  field.appendChild(label1);
  label1.setAttribute("for", "first");
  label1.textContent = "name ";
  let input1 = document.createElement("input");
  label1.appendChild(input1);
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "full name");
  input1.setAttribute("id", "first");
  //   input1.setAttribute("required");

  let br1 = document.createElement("br");
  field.appendChild(br1);
  let label2 = document.createElement("label");
  field.appendChild(label2);
  label2.setAttribute("for", "second");
  label2.textContent = "location ";
  let input2 = document.createElement("input");
  label2.appendChild(input2);
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "location");
  input2.setAttribute("id", "second");
  //   input2.setAttribute("required");

  let br3 = document.createElement("br");
  field.appendChild(br3);
  let label3 = document.createElement("label");
  field.appendChild(label3);
  label3.setAttribute("for", "third");
  label3.textContent = "number of used cell panels ";
  let input3 = document.createElement("input");
  label3.appendChild(input3);
  input3.setAttribute("type", "number");
  input3.setAttribute("placeholder", "cell panels used ");
  input3.setAttribute("id", "third");
  //   input3.setAttribute("required");

  let br4 = document.createElement("br");
  field.appendChild(br4);
  let label4 = document.createElement("label");
  field.appendChild(label4);
  label4.setAttribute("for", "fourth");
  label4.textContent =
    "how was your usually usage of electricity per month in kilo watt ";
  let input4 = document.createElement("input");
  label4.appendChild(input4);
  input4.setAttribute("type", "number");
  input4.setAttribute("placeholder", "usually usage in kw");
  input4.setAttribute("id", "fourth");
  //   input3.setAttribute("required");

  let br5 = document.createElement("br");
  field.appendChild(br5);
  let label5 = document.createElement("label");
  field.appendChild(label5);
  label5.setAttribute("for", "fifth");
  label5.textContent = "how many wattage of your inverter in kilo watt ";
  let input5 = document.createElement("input");
  label5.appendChild(input5);
  input5.setAttribute("type", "number");
  input5.setAttribute("placeholder", "inverter capacity in kw");
  input5.setAttribute("id", "fifth");
  //   input3.setAttribute("required");
  //   let br7 = document.createElement("br");
  //   field.appendChild(br7);
  let rate = document.createElement("p");
  field.appendChild(rate);
  rate.textContent = "how do you rate your pv system";
  let br6 = document.createElement("br");
  field.appendChild(br6);
  let stars = document.createElement("div");
  field.appendChild(stars);
  stars.setAttribute("class", "star-rating");
  let uno = document.createElement("ul");
  stars.appendChild(uno);
  uno.setAttribute("class", "stars");
  let li1 = document.createElement("li");
  uno.appendChild(li1);
  li1.setAttribute("class", "star");
  let i1 = document.createElement("i");
  li1.appendChild(i1);
  i1.setAttribute("class", "fa fa-star");

  let li2 = document.createElement("li");
  uno.appendChild(li2);
  li2.setAttribute("class", "star");
  let i2 = document.createElement("i");
  li2.appendChild(i2);
  i2.setAttribute("class", "fa fa-star");

  let li3 = document.createElement("li");
  uno.appendChild(li3);
  li3.setAttribute("class", "star");
  let i3 = document.createElement("i");
  li3.appendChild(i3);
  i3.setAttribute("class", "fa fa-star");

  let li4 = document.createElement("li");
  uno.appendChild(li4);
  li4.setAttribute("class", "star");
  let i4 = document.createElement("i");
  li4.appendChild(i4);
  i4.setAttribute("class", "fa fa-star");

  let li5 = document.createElement("li");
  uno.appendChild(li5);
  li5.setAttribute("class", "star");
  let i5 = document.createElement("i");
  li5.appendChild(i5);
  i5.setAttribute("class", "fa fa-star");

  const rates = document.querySelectorAll(".star");
  const output = document.querySelector(".output");
  for (let i = 0; i < rates.length; i++) {
    rates[i].starValue = i + 1;
    rates[i].addEventListener("click", function () {
      console.log("why");
    });
    ["click", "mouseover", "mouseout"].forEach(function (e) {
      rates[i].addEventListener(e, showrating);
    });
  }
}

function showrating(e) {
  let type = e.type;
  console.log(type);
}
