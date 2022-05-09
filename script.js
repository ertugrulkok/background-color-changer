function changeBg() {
  var images = [
    "url(./images/1.jpg)",
    "url(./images/2.jpg)",
    "url(./images/3.jpg)",
    "url(./images/4.jpg)",
    "url(./images/5.jpg)",
    "url(./images/6.jpg)",
    "url(./images/7.jpg)",
    "url(./images/8.jpg)",
    "url(./images/9.jpg)",
    "url(./images/10.jpg)",
    "url(./images/11.jpg)",
    "url(./images/12.jpg)",
    "url(./images/13.jpg)",
    "url(./images/14.jpg)",
    "url(./images/15.jpg)",
    "url(./images/16.jpg)",
    "url(./images/17.jpg)",
    "url(./images/18.jpg)",
    "url(./images/19.jpg)",
    "url(./images/20.jpg)",
    "url(./images/21.jpg)",
    "url(./images/22.jpg)",
    "url(./images/23.jpg)",
    "url(./images/24.jpg)",
    "url(./images/25.jpg)",
  ];
  const btn = document.getElementById("btn");
  const section = document.getElementById("master_image");
  const bg = images[Math.floor(Math.random() * images.length)];
  section.style.backgroundImage = bg;
  
}
function changeColor() {
  const btn = document.getElementById("btn");
  const section = document.getElementById("master_image");
  const oval = document.getElementById("oval");
  document.body.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";

  changeBg();
  btn.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";

  oval.style.backgroundColor = 
  "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
    section.style.borderColor = 
     
  "rgb(" +
  Math.round(Math.random() * 255) +
  "," +
  Math.round(Math.random() * 255) +
  "," +
  Math.round(Math.random() * 255) +
  ")";

    
}
