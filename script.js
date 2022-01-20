let charaStats = {
    strength: 10,
    dexterity: 12,
    constitution: 14,
    wits: 16,
    intelligence: 14,
    charisma: 18,
    inventory: {
        potion: 2
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