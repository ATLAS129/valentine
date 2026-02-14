// function expandBox() {
//   const box = document.querySelector(".box");
//   init_width = box.offsetWidth;
//   box.style.width = +init_width + 50 + "px";

//   init_height = box.offsetHeight;
//   box.style.height = +init_height + 50 + "px";
// }
function pressContinue() {
  const button = document.querySelector(".continue");
  const body = document.body;
  const box = document.querySelector(".box");
  const hearts = document.querySelector(".hearts");

  // button.style.transition = "2s all ease";
  // button.style.transform = "scale(100)";
  // button.style.backgroundColor = "#f7aca6";
  // button.style.position = "absolute";
  // button.style.width = "100vw";
  // button.style.height = "100vh";
  body.style.transition = "3s all";

  box.remove();

  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.style.backgroundColor = "var(--second-main-box-color)";
  newBox.innerHTML = `
    <img
      src="public/taylor-swift-falling-in-love-1420x798.jpg"
      alt="taylor"
      class="img-taylor"
    />
    <h1 class="willyou">Kira, will you be my Valentine?</h1>
    <div class="options">
      <button class="yes" onclick='pressYes()'>YES</button>
      <button class="no" onclick="pressNo()">NO</button>
    </div>
    `;

  hearts.style.backgroundColor = "#f7aca6";
  body.appendChild(newBox);
  newBox.animate(
    [
      // from
      { opacity: 0 },
      // to
      { opacity: 1 },
    ],
    {
      duration: 1000, // milliseconds
      iterations: 1, // number of times to run
      fill: "forwards", // remain in the final state after the animation ends
    },
  );
  // body.innerHTML += `<div class="box" style='background-color: var(--second-main-box-color)'>
  //   <img
  //     src="public/taylor-swift-falling-in-love-1420x798.jpg"
  //     alt="taylor"
  //     class="img-taylor"
  //   />
  //   <h1 class="willyou">Will you be my Valentine?</h1>
  //   <div class="options">
  //     <button class="yes" onclick='pressYes()'>YES</button>
  //     <button class="no" onclick="pressNo()">NO</button>
  //   </div>
  // </div>`;
  // body.innerHTML = `
  // <iframe
  //   src="Hearts/hearts.html"
  //   style="
  //     background-color: var(--second-bg-main-color);
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     bottom: 0;
  //     right: 0;
  //     width: 100%;
  //     height: 100%;
  //     border: none;
  //     margin: 0;
  //     padding: 0;
  //     overflow: hidden;
  //   "
  // ></iframe>

  // <div class="box" style='background-color: var(--second-main-box-color)'>
  //   <img
  //     src="public/taylor-swift-falling-in-love-1420x798.jpg"
  //     alt="taylor"
  //     class="img-taylor"
  //   />
  //   <h1 class="willyou">Will you be my Valentine?</h1>
  //   <div class="options">
  //     <button class="yes" onclick='pressYes()'>YES</button>
  //     <button class="no" onclick="pressNo()">NO</button>
  //   </div>
  // </div>`;
  // window.location.href = "willyoube/willubemyvalentine.html";
}

const words = ["Are you sure?", "Think twice", "SUREEEE????", "Last chance"];
let i = 0;

function pressNo() {
  const button_no = document.querySelector(".no");
  const button_yes = document.querySelector(".yes");

  button_yes.style.transform = `scale(${1 + i + 0.5})`;
  button_no.textContent = words[i];
  i++;
}

function pressYes() {
  const button_no = document.querySelector(".no");
  const button_yes = document.querySelector(".yes");
  const taylor = document.querySelector(".img-taylor");
  const valentine = document.querySelector(".willyou");
  const box = document.querySelector(".box");

  const gifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGMwYXNvZXB1MDZidGY3NDdkaWgwZG9xcXZuaWtlaWVsa3g1bW9ocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E21750tEE96PkCcAPD/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3ozbW5vazU2dTlvMmF3enFueW56Ymthd3FjYWNhbHl1aW9wbXNoNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OiU4E2Y8tSU0/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenRqcjdxcGE3aXVzNXdzNnU3aDU0MjM5NGEzNmhtbmo3MTlhN24zcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mpSk573IS958A/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJmdnFnOWlpaThkcHJzZWRkMGt6Z3Rmd2RxOGJmN20weml0MWc5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohBVzA7zuL2k8DQic/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnpxeDRxcHdqNjJhcnlqcXR6dzRic3A4OGdkaWVoajF0cjZqeDJodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uEoHWjFv4Ha1fMwMXj/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzR2bjU5aW1jeWR4ZmcweGw3Nmgzam11bnFhMnp4b2ZjeHoxMDV6biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o8lWzvsTDtNOgIU2im/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzQzYjF3Y2hpbmF1M25tOGYwd3QyNDc4YTAzdWN2aXJocjcwNWgxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HkWDPMVgv4w1O/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamg2bXhxaDhtNDQ5OW16eXlyejEwdGt6enViMHJvMHcybGtrdWRtMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o47bJcKKIeU0g/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2o4amVweHNpdXh0OTA4ZTh4NHA4dXVldnFmN3psYnY4bW12bjhzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YOGN4rRD44hPDlVdha/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamV3N2xjY20za2hkbjdkY2hxYm03ZHZxNnc3Y2VldGI2cng1N3V4NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4OIYoqyUDhBcs/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJmM3N3Y2pobGV2eDV5Yjh4c2oybGlkYzY0bXp4bW5vNnMyamRibSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1R9G7vPViOVd0faE/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRoZWN4azZ5ZHFndW91aXFxNGY0NjZvYnZlZTJpN2xxMWtnazZ0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pvByGtjcbyWwvIpB6R/giphy.gif",
  ];

  let lastIndex = Math.floor(Math.random() * gifs.length);
  let gif = gifs[lastIndex];

  taylor.remove();
  valentine.remove();

  button_no.remove();
  button_yes.remove();
  box.innerHTML = `<img
        src=${gif}
        alt="taylor"
        class="img-taylor"
      />
        <h1>YAAAAAAY🥰</h1>`;

  const imgTaylor = document.querySelector(".img-taylor");

  setInterval(() => {
    let index = Math.floor(Math.random() * gifs.length);
    if (index == lastIndex) {
      while (index == lastIndex) {
        index = Math.floor(Math.random() * gifs.length);
      }
    }
    imgTaylor.src = gifs[index];
  }, 2000);
}
