let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["Stick"];

const button1 = document.querySelector("#button1");
// when creating a variable whose value is constant
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpTest");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name: "Stick",
        power: 5
    },
    {
        name: "Dagger",
        power: 30
    },
    {
        name: "Claw Hammer",
        power: 50
    },
    {
        name: "Sword",
        power: 100
    }
];

const monsters = [
    {
        name: "Slime",
        level: 2,
        health: 15
    },
    {
        name: "Fanged Beast",
        level: 8,
        health: 60
    },
    {
        name: "Dragon",
        level: 20,
        health: 300
    }
];

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
    },
    {
        name: "Fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "Kill Monster",
        "button text": ["Go to Town Square", "Go to Town Square", "Go to Town Square"],
        "button functions": [goTown, goTown, goTown],
        text: "The monster screams 'Argh!' and dies. You win! Gain xp and find gold."
    },
    {
        name: "Lose",
        "button text": ["Replay?", "Replay?", "Replay?"],
        "button functions": [restart, restart, restart],
        text: "Game Over! You die. ☠👻"
    },
    {
        name: "Win",
        "button text": ["Replay?", "Replay?", "Replay?"],
        "button functions": [restart, restart, restart],
        text: "You defeated the Dragon! You Win! 🎉"
    }

] //empty array

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

//create function
function update(location) {
    monsterStats.style.display = "none";  //monsterStats no longer show up
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
    update(locations[1]);  //in second array of locations
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "Not enough gold to buy health.";
    }//update details

}

// ---------  WEAPONS   --------

function buyWeapon() {
    if (currentWeapon < weapons.length - 1){
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++; //increase by 1
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;  //update inventory
        }
        else {
            text.innerText = "Not enough gold to buy a weapon.";
        }
    }
    else {
        text.innerText= "You already have the most powerful weapon.";
        button2.onclick = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;
    }

}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory; //update inventory
    }
    else {
        text.innerText = "Don't sell your only weapon!";
    }
}

// ------------ FIGHTING MONSTERS ------------

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightBeast() {
    fighting = 1;
    goFight();
}

function fightDragon() {
    fighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";  //display and update css to show the stats
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText = "You attack it with your " + weapons[currentWeapon].name + " .";
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    //monster gets damage, .floor - round dow to nearest whole no.
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;

    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        /* if (fighting == 2) {
            winGame();
        } else {
            defeatMonster();
        } */
        fighting === 2 ? winGame() : defeatMonster();
        //fighting the dragon {turnary operator: if...else}
    }
}

function dodge() {
    text.innerText = "You dodged the attack from " + monsters[fighting].name + ".";
}

function run() {

}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level;
    goldText.innerText = gold;
	xpText.innerText = xp;
    update(locations[4]);
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart() {
    //reset all values
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["Stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
}