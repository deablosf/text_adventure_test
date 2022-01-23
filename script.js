// Need to set up a way for he player to add their own name.

let charaStats = {
    name: "Billy D. Williams",
    age: 00,
    Physical: 4,
    social: 6,
    semantic: 8,
    procedural: 4,
    health: 4,
    combat: 4,
    practices: 10,
    inventory: {
        potion: 2
    },
    equipment: {
        weapon: {
            name: "",
            damage: 00,
        }
    }
}

document.getElementById("youN").innerText = charaStats.name;

let i = 0;
let speed = 50;
let txt = "Testing Testing 1 2! Here again at the crispy cream!"
const typeWriter = () => {
    if (i < txt.length) {
        document.getElementById("txtingB").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

typeWriter()