const rulesBtnOpen = document.getElementById("rules");
const rulesBtnClose = document.getElementById("close");
const rulesPanel = document.querySelector(".rules-section")
rulesBtnOpen.addEventListener("click", panelIn)
rulesBtnClose.addEventListener("click", panelOut)
function panelIn() {
    rulesPanel.style.top = "0";
}
function panelOut() {
    rulesPanel.style.top = "-100%";
}