//Selecting Elements
const buttonBG = document.querySelectorAll(".buttons");
const bodyBG = document.querySelector("body");

//lopping and event
buttonBG.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    switch (event.target.id) {
      case "white":
        bodyBG.style.backgroundColor = event.target.id;
        bodyBG.style.color = "black";
        break;
      case "black":
        bodyBG.style.backgroundColor = "black";
        bodyBG.style.color = "lime";
        break;
      case "lightGrey":
        bodyBG.style.backgroundColor = "#949398ff";
        bodyBG.style.color = "#f4df4eff";
        break;
      case "green":
        bodyBG.style.backgroundColor = "#B4CDAF";
        bodyBG.style.color = "#284229";
        break;
      default:
        break;
    }
  });
});
