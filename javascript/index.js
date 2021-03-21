let myText = "type writer effect on text";
console.log(myText[0]);

let i = 0;
myAddButton = document.getElementById("add");
myClearButton = document.getElementById("clear");

myAddButton.onclick = function () {
  "use strict";
  let typeWriter = setInterval(function () {
    if (i !== myText.length) {
      document.getElementById("type");
      document.getElementById("type").textContent += myText[i++];
      console.log("add");
    } else clearInterval(typeWriter);
  }, 200);
};

myClearButton.onclick = function () {
  "use strict";
  document.getElementById("type").textContent = "";
  i = 0;
};
