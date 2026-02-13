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

  button.textContent = "";
  button.style.transition = "2s all ease";
  // button.style.transform = "scale(100)";
  button.style.position = "absolute";
  button.style.width = "100vw";
  button.style.height = "100vh";

  setTimeout(() => {
    body.style.backgroundColor = "#f7aca6";
    body.innerHTML = `
    <iframe
      src="Hearts/hearts.html"
      style="
        background-color: var(--second-bg-main-color);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      "
    ></iframe>
    
    <div class="box" style='background-color: var(--second-main-box-color)'>
      <img
        src="public/taylor-swift-falling-in-love-1420x798.jpg"
        alt="taylor"
        class="img-taylor"
      />
      <h1 class="willyou">Will you be my Valentine?</h1>
      <div class="options">
        <button class="yes" onclick='pressYes()'>YES</button>
        <button class="no" onclick="pressNo()">NO</button>
      </div>
    </div>`;
    // window.location.href = "willyoube/willubemyvalentine.html";
  }, 2000);
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

  box.innerHTML = `<iframe
      src="yes/yes.html"
      style="
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      "
    ></iframe>`;
  taylor.remove();
  valentine.remove();

  button_no.remove();
  button_yes.remove();
}
