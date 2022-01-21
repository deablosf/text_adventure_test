// Need to set up a way for he player to add their own name.

let charaStats = {
    name: "",
    age: 00,
    strength: 10,
    dexterity: 12,
    constitution: 14,
    wits: 16,
    intelligence: 14,
    charisma: 18,
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