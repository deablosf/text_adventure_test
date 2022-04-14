// Need to set up a way for he player to add their own name.

let charaStats = {
    name: "Billy D. Williams",
    age: 00,
    traits: {
        physical: 4,
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



const healthMaker = () => {
    console.log(charaStats.traits.health)
    for (i = 1; i <= charaStats.traits.health; i++) {
        healthDots.innerHTML += '<div class="mainCircle"> <div class="secondCircle" id="circle' + `${i}` + '"></div> </div>'
    }
}

const statDetails = {
    physical: "Running Jumping lifting.",
    social: "Feeling people out, making people feel yOu.",
    semantic: "Logic based skills",
    procedural: "Learned skills focused on muscle memory",
    health: "Your mind and body's health and durability",
    combat: "Can you throw more than a tantrum",
    practices: "Knowledge you've picked up",
}

let state = {
    statVisual: 1,
    progress: "3px"
}

let floater = document.getElementById("floater");
let progress = document.getElementById("progressFiller");
let healthDots = document.getElementById("healthDots");
document.getElementById("youN").innerText = charaStats.name;

progress.style.width = state.progress;


let statViewer = (x) => {
    if (state.statVisual == 1) {
        floater.onclick = statViewer
        floater.classList.remove("invisible");
        floater.classList.add("statBrakedown");
        floater.innerHTML = '<div class="statTop">' + `${x}` + '</div> <div class="statBottom" style="background-image: url(' + `${x}` + '.png);">' + `${statDetails[x]}` + '</div>'
        state.statVisual = 2;
        console.log(x)
    }else if (state.statVisual == 2) {
        floater.classList.remove("statBrakedown");
        floater.classList.add("invisible");
        state.statVisual = 1;
    }
}

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
        '<div id="' + `${stat}` + 'Image" class="statButtonsIm" onclick="statViewer(' + `'${stat}'` + ')"></div>'
        + '<div id="' + `'${stat}'` + '" class="statButtons" onclick="statViewer(' + `'${stat}'` + ')">' + `${charaStats.traits[stat]}` + '</div>'
        ).join('');
        console.log("working")
};

typeWriter()
statMapper()
healthMaker()