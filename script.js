// Need to set up a way for he player to add their own name.

let charaStats = {
    name: "",
    age: 00,
    Physical: 10,
    social: 12,
    logical: 14,
    skills: 16,
    health: 14,
    combat: 18,
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

let i = 0;
let speed = 50;
let txt = "Testing Testing 1 2!"
const typeWriter = () => {
    if (i < txt.length) {
        document.getElementById("txtingB").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

typeWriter()