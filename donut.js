let count = 0;
let clickerUpgradesBought = 0;
let autoClickersBought = 0;

const donutImage = document.getElementById('clicker-image');

function increaseCount(amount) {
  count += amount;
  document.getElementById("count").innerText = "Donuts: " + Math.floor(count);
}

function increaseClickerUpgradeCount(amount) {
  clickerUpgradesBought += amount;
  document.getElementById("clicker-upgrades").innerText = "Clicker upgrades purchased: " + clickerUpgradesBought;
}

function increaseAutoClickerCount(amount) {
  autoClickersBought += amount;
  document.getElementById("auto-clickers").innerText = "Auto clickers purchased: " + autoClickersBought;
}


function donutMouseDown() {
  donutImage.style.width = '285px';
}

function donutMouseUp() {
  donutImage.style.width = '300px';
}

function donutClicked() {
  var playSound = document.getElementById("playSound");
  increaseCount(1.2 ** clickerUpgradesBought);
  if (playSound.checked) {
    let audio = new Audio();
    audio.src = 'munch.mp3';
    audio.play();
  }
}


function upgradeClicker() {
  let clickerUpgradeCost = 10 * (1.1 ** clickerUpgradesBought);
  if (count < clickerUpgradeCost) {
      alert("You need at least " + Math.ceil(clickerUpgradeCost) + " donuts to upgrade your clicker!");
  } else {
      increaseCount(-1 * clickerUpgradeCost);
      increaseClickerUpgradeCount(1);
      let perClick = 1.2 ** clickerUpgradesBought;
      alert("Success! You can now get " + perClick.toFixed(2) + " donuts with every click.");
  }
}

function upgradeAutoClick() {
  let autoClickerCost = 100 * (1.1 ** autoClickersBought);
  if (count < autoClickerCost) {
      alert("You need at least " + Math.ceil(autoClickerCost) + " donuts to upgrade your auto clicker!");
  } else {
      increaseCount(-1 * autoClickerCost);
      increaseAutoClickerCount(1);
      alert("Success! You can now get " + autoClickersBought + " donuts every second.");
  }
}

let autoClickCounter = 1;
function autoClick() {
  if (autoClickCounter < Math.ceil(200/autoClickersBought)) {
      autoClickCounter++;
  } else {
      autoClickCounter = 1;
      if (autoClickersBought > 200)
        increaseCount(1 + Math.floor((autoClickersBought - 200) / 200));
      else
        increaseCount(1);
  }
}
setInterval(autoClick, 5);

const settingsMenu = document.getElementById('settings-menu');
function openSettings() {
  settingsMenu.style.display = 'flex';
}

function closeSettings() {
  settingsMenu.style.display = 'none';
}

const resetPrompt = document.getElementById('reset-prompt');
function promptReset() {
  closeSettings();
  resetPrompt.style.display = 'flex';
}

function cancelReset() {
  resetPrompt.style.display = 'none';
  openSettings();
}

function resetAll() {
  increaseCount(-count);
  increaseClickerUpgradeCount(-clickerUpgradesBought);
  increaseAutoClickerCount(-autoClickersBought);
  resetPrompt.style.display = 'none';
}