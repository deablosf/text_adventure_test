// Need to set up a way for he player to add their own name.

let charaStats = {
    name: "Billy D. Williams",
    age: 00,
    traits: {
        Physical: 4,
        social: 6,
        semantic: 8,
        procedural: 4,
        health: 4,
        combat: 4,
        practices: 10,
    },
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
let txt = "Testing Testing 1 2! Here again at the crispy cream!";
const typeWriter = () => {
    if (i < txt.length) {
        document.getElementById("txtingB").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}


let statMapper = () => {
    statsList = Object.keys(charaStats.traits).map((key) => (key))
    document.getElementById("actualStats").innerHTML = statsList.map(stat => 
        '<div id="' + `'${stat}'` + 'Image" class="statButtonsIm" onclick="statViewer(' + `'${stat}'` + ')"></div>'
        + '<div id="' + `'${stat}'` + '" class="statButtons" onclick="statViewer(' + `'${stat}'` + ')">' + `${charaStats.traits[stat]}` + '</div>'
        ).join('');
        console.log("working")
};

typeWriter()
statMapper()
