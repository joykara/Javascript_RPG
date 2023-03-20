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

const locations = [
    {
        name: "Town Square",
        "button text": ["Go to Store", "Go to Cave", "Fight Dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the Town Square. You see a sign that says 'STORE'."
    },
    {
        name: "Store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to Town Square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You entered the Store."
    },
    {
        name: "Cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to Town Square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You entered the Cave. You see some monsters."
    }

] //empty array

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//create function
function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}
function goTown() {
    update(locations[0]);
}
function goStore() {
    update(locations[1])  //in second array of locations
}

function goCave() {
    update(locations[2])
}

function fightDragon() {
    console.log("Fighting dragon.")
}

function buyHealth() {
    if (condition) {
        gold -= 10
        health += 10
        goldText.innerText = gold;
        healthText.innerText = health;
    }  //update details

}

function buyWeapon(){

}

function fightSlime() {
    
}

function fightBeast() {
    
}


