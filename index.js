let link = document.getElementById("lnk");
let image = document.getElementById("bt");
let btn1 = document.getElementById("btn");
var IsDarkMode;

btn1.addEventListener("click", () => {
  link.href = "darkmode.css";
  image.setAttribute("src", "image/sun.svg");
  var IsDarkMode = true;
});

if (IsDarkMode == "true") {
  btn1.addEventListener("click", () => {
    link.href = "index.css";
    image.setAttribute("src", "image/night.svg");
    var IsDarkMode = false;
  });
}
