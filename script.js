console.log("O script.js foi carregado");

let score = 0;
let pointsPerClick = 1;
let upgradeClickCost = 30;
let autoClickerCost = 60;
let intervalUpgradeCost = 100;
let autoClickers = 0;
let autoClickInterval = 1000;

const increaseRate = 1.18;

document.getElementById('click-button').addEventListener('click', () => {
    score += pointsPerClick;
    document.getElementById('score').innerText = score;
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    if (score >= upgradeClickCost) {
        score -= upgradeClickCost;
        pointsPerClick++;
        upgradeClickCost = Math.round(upgradeClickCost * increaseRate);
        document.getElementById('score').innerText = score;
        document.getElementById('upgrade-button').innerText = `Aprimorar Clique\n(Custo: ${upgradeClickCost} pontos)`;
    }
});

document.getElementById('auto-clicker-button').addEventListener('click', () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.round(autoClickerCost * increaseRate);
        document.getElementById('score').innerText = score;
        document.getElementById('auto-clicker-button').innerText = `Clique Automático\n(Custo: ${autoClickerCost} pontos)`;
    }
});

document.getElementById('interval-upgrade-button').addEventListener('click', () => {
    if (score >= intervalUpgradeCost) {
        score -= intervalUpgradeCost;
        autoClickInterval *= 0.9;
        intervalUpgradeCost = Math.round(intervalUpgradeCost * increaseRate);
        document.getElementById('score').innerText = score;
        document.getElementById('interval-upgrade-button').innerText = `Reduzir Intervalo do Auto Click\n(Custo: ${intervalUpgradeCost} pontos)`;
        clearInterval(autoClickIntervalId);
        autoClickIntervalId = setInterval(autoClick, autoClickInterval);
    }
});

function autoClick() {
    score += autoClickers;
    document.getElementById('score').innerText = score;
}

let autoClickIntervalId = setInterval(autoClick, autoClickInterval);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upgrade-button').innerText = `Aprimorar Clique\n(Custo: ${upgradeClickCost} pontos)`;
    document.getElementById('auto-clicker-button').innerText = `Clique Automático\n(Custo: ${autoClickerCost} pontos)`;
    document.getElementById('interval-upgrade-button').innerText = `Reduzir Intervalo do Auto Click\n(Custo: ${intervalUpgradeCost} pontos)`;
});
