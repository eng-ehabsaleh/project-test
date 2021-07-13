"use strict";
let userReviw = [];
let userData = [];
let userStar;
let input1;
let input2;
let input3;
let input4;
let input5;
let field;
let starValue;

function User(name, location, cellpanells, userwatt, invwatt, feed, stars) {
  this.name = name;
  this.location = location;
  this.cellpanells = cellpanells;
  this.userwatt = userwatt;
  this.invwatt = invwatt;
  this.feed = feed;
  this.stars = stars;
  userData.push(this);
}

let button = document.getElementById("popupform");
button.addEventListener("click", show);
let div = document.getElementById("form1");
function show() {
  button.removeEventListener("click", show);
  let form = document.createElement("form");
  div.appendChild(form);
  field = document.createElement("fieldset");
  form.appendChild(field);
  field.setAttribute("id", "fieldset");
  let legend = document.createElement("legend");
  field.appendChild(legend);
  legend.textContent = "enter your survey";
  let label1 = document.createElement("label");
  field.appendChild(label1);
  label1.setAttribute("for", "first");
  label1.setAttribute("class", "label");
  label1.textContent = "name ";
  let input1 = document.createElement("input");
  label1.appendChild(input1);
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "full name");
  input1.setAttribute("id", "first");
  // input1.setAttribute("required", "please fill out this field");

  // console.log(input1.value);
  let br1 = document.createElement("br");
  field.appendChild(br1);
  let label2 = document.createElement("label");
  field.appendChild(label2);
  label2.setAttribute("for", "second");
  label2.setAttribute("class", "label");
  label2.textContent = "location ";
  let input2 = document.createElement("input");
  label2.appendChild(input2);
  input2.setAttribute("type", "text");
  input2.setAttribute("placeholder", "location");
  input2.setAttribute("id", "second");
  // input2.setAttribute("onfocus", "");
  // input2.setAttribute("required", "please fill out this field");

  let br3 = document.createElement("br");
  field.appendChild(br3);
  let label3 = document.createElement("label");
  field.appendChild(label3);
  label3.setAttribute("for", "third");
  label3.setAttribute("class", "label");
  label3.textContent = "number of used cell panels ";
  let input3 = document.createElement("input");
  label3.appendChild(input3);
  input3.setAttribute("type", "number");
  input3.setAttribute("placeholder", "cell panels used ");
  input3.setAttribute("id", "third");
  // input3.setAttribute("required", "please fill out this field");

  let br4 = document.createElement("br");
  field.appendChild(br4);
  let label4 = document.createElement("label");
  field.appendChild(label4);
  label4.setAttribute("for", "fourth");
  label4.setAttribute("class", "label");
  label4.textContent =
    "how was your usually usage of electricity per month in kilo watt ";
  let input4 = document.createElement("input");
  label4.appendChild(input4);
  input4.setAttribute("type", "number");
  input4.setAttribute("placeholder", "usually usage in kw");
  input4.setAttribute("id", "fourth");
  // input4.setAttribute("required", "please fill out this field");

  let br5 = document.createElement("br");
  field.appendChild(br5);
  let label5 = document.createElement("label");
  field.appendChild(label5);
  label5.setAttribute("for", "fifth");
  label5.setAttribute("class", "label");
  label5.textContent = "how many wattage of your inverter in kilo watt ";
  let input5 = document.createElement("input");
  label5.appendChild(input5);
  input5.setAttribute("type", "number");
  input5.setAttribute("placeholder", "inverter capacity in kw");
  input5.setAttribute("id", "fifth");
  let br7 = document.createElement("br");
  field.appendChild(br7);
  let label6 = document.createElement("label");
  field.appendChild(label6);
  label6.textContent = "give us any thing you would like to add";
  let feedback = document.createElement("textarea");
  field.appendChild(feedback);
  feedback.setAttribute("id", "feedback");
  feedback.setAttribute("placeholder", "add anything you like in here");
  //   let br7 = document.createElement("br");
  //   field.appendChild(br7);
  // input5.setAttribute("required", "please fill out this field");

  let rate = document.createElement("p");
  field.appendChild(rate);
  rate.setAttribute("id", "rateid");
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
    // rates[i].addEventListener("click", function () {
    //   console.log("why");
    // });
    ["click", "mouseover", "mouseout"].forEach(function (e) {
      rates[i].addEventListener(e, showrating);
    });
  }
  function showrating(e) {
    let type = e.type;
    // console.log(type);
    starValue = this.starValue;
    // console.log(starValue);
    if (type === "click") {
      if (starValue >= 1) {
        // console.log(input1.value, starValue);
        // console.log(`${input1.value} rated his pv system ${starValue} stars`);

        // `and he rated his experience with pv system with ${starValue} stars`
        new User(
          input1.value,
          input2.value,
          input3.value,
          input4.value,
          input5.value,
          feedback.value,
          starValue
        );
        // userStar = starValue;
        // console.log(userStar);
        console.log(input1.value);
        console.log(input2.value);
        console.log(input3.value);
        console.log(input4.value);
        console.log(input5.value);
        console.log(userReviw);
        output.innerHTML = `${input1.value} rated his pv system with ${starValue} stars`;
      }
    }
    rates.forEach(function (elem, ind) {
      if (type === "click") {
        if (ind < starValue) {
          elem.classList.add("orange");
        } else {
          elem.classList.remove("orange");
        }
      }
      if (type === "mouseover") {
        if (ind < starValue) {
          elem.classList.add("yellow");
        } else {
          elem.classList.remove("yellow");
        }
      }
      if (type === "mouseout") {
        elem.classList.remove("yellow");
      }
    });
  }
  let submet = document.createElement("button");
  field.appendChild(submet);
  submet.setAttribute("id", "submetb");
  submet.textContent = "submet";
  submet.addEventListener("click", handelsubmet);

  // console.log(userReviw);
  function handelsubmet() {
    event.preventDefault();
    // localStorage.setItem("user", userReviw);
    let data = localStorage.getItem("user");
    let parsedData = JSON.parse(data);
    for (let i = 0; i < userData.length; i++) {
      parsedData.push(userData[i]);
    }
    let convertUser = JSON.stringify(parsedData);
    localStorage.setItem("user", convertUser);
    console.log(convertUser);

    // console.log(bas);
    // console.log(userReviw);
    // document.querySelector(".thanks").style.display = "block";
    // document.querySelector(".contact-form").style.display = "none";
    window.location.reload();
  }
}
// console.log(userReviw);
// submet.removeEventlistener("click");

function userfeed() {
  let data = localStorage.getItem("user");

  console.log(data);
  let parsedData = JSON.parse(data);
  if (parsedData) {
    userReviw = parsedData;
    console.log(userReviw);
    renderData();
  }
  // userData = parsedData;
}
let reviws = document.getElementById("userList");
function renderData() {
  // reviws.textContent = "";
  console.log("this is the reviw", userReviw);
  // let feed = document.querySelector(".");
  for (let i = 0; i < userReviw.length; i++) {
    let reviwsList = document.createElement("li");
    reviws.appendChild(reviwsList);

    reviwsList.setAttribute("id", "reviwfeed");
    reviwsList.textContent = `${userReviw[i].name} built a pv system in ${userReviw[i].location} and he used ${userReviw[i].cellpanells} amount of cell panells while his usage of electricity was ${userReviw[i].userwatt} and he needed an inverter of ${userReviw[i].invwatt} and he gave his pv system ${userReviw[i].feed} stars  ${userReviw[i].stars}`;
    // console.log(userData);
  }
}
userfeed();
