let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1")
// when creating a variable whose value is constant
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const text = document.querySelector("#text")
const xpText = document.querySelector("#xpTest")
const healthText = document.querySelector("#healthText")
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats")
const monsterName = document.querySelector("#monsterName")
const monsterHealthText = document.querySelector("#monsterHealth")



//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//create function
function goTown() {
    button1.innerText = "Go to Store";
    button2.innerText = "Go to Cave";
    button3.innerText = "Fight Dragon";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You are in the Town Square. You see a sign that says 'STORE'.";
}
function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to Town Square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You entered the Store.";
}

function goCave() {
    console.log("Going to store.")
}

function fightDragon() {
    console.log("Fighting dragon.")
}

function buyHealth(){

}

function buyWeapon(){

}

