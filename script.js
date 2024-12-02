let light = document.getElementById('light');
let switchButton = document.getElementById('switch');
let isLightOn = false;
switchButton.addEventListener('click', function () {
    if (isLightOn) {
        light.src = "pic_bulboff.gif";
        light.style.width = "200px";
        light.style.height = "200px";

        switchButton.textContent = "Switch On the light";
        isLightOn = false;

    } else {
        light.src = "pic_bulbon.gif";
        light.innerText = ("<h1> bulb is now on </h1>");
        light.style.width = "200px";
        light.style.height = "200px";
        switchButton.textContent = " Switch Off the light";
        isLightOn = true;
    }
});


setInterval(function () {
    var colors = ["rgb(51, 51, 0)", "rgb(0, 68, 102)", "rgb(61, 61, 92)", "rgb(25, 102, 102)", "rgb(0, 0, 102)", "rgb(77, 51, 0)", "rgb(25, 77, 51)", "rgb(0, 32, 128)", "rgb(96, 32, 32)"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
},
    3000


)