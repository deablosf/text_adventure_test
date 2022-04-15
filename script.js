// Need to set up a way for he player to add their own name.

let charaStats = {
    name: "Billy D. Williams",
    age: 00,
    abilityPoints: 6,
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
};

let state = {
    statVisual: 1,
    progress: "3px"
};

const healthMaker = () => {
    for (i = 1; i <= charaStats.traits.health; i++) {
        healthDots.innerHTML += '<div class="healthCircle"> <div class="secondCircle" id="circle' + `${i}` + '"></div> </div>'
    }
};

const abilityMaker = () => {
    for (i = 1; i <= charaStats.abilityPoints; i++) {
        abilityDots.innerHTML += '<div class="abilityCircle"> <div class="secondCircle" id="circle' + `${i}` + '"></div> </div>'
    }
};

const statDetails = {
    physical: "Running Jumping lifting.",
    social: "Feeling people out, making people feel yOu.",
    semantic: "Logic based skills",
    procedural: "Learned skills focused on muscle memory",
    health: "Your mind and body's health and durability",
    combat: "Can you throw more than a tantrum",
    practices: "Knowledge you've picked up",
};

let floater = document.getElementById("floater");
let progress = document.getElementById("progressFiller");
let healthDots = document.getElementById("healthDots");
let abilityDots = document.getElementById("abilityDots");
let txtingB = document.getElementById("txtingB");
let Boottons = document.getElementById("Boottons")
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
};

let i = 0;
let speed = 20;
let txt = "Testing Testing 1 2! Here again at the crispy cream!";
const typeWriter = () => {
    if (i < txt.length) {
        txtingB.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    } else {
        console.log(txt)
        i = 0
    }
    
};

let statMapper = () => {
    statsList = Object.keys(charaStats.traits).map((key) => (key))
    document.getElementById("actualStats").innerHTML = statsList.map(stat => 
        '<div id="' + `${stat}` + 'Image" class="statButtonsIm" onclick="statViewer(' + `'${stat}'` + ')"></div>'
        + '<div id="' + `'${stat}'` + '" class="statButtons" onclick="statViewer(' + `'${stat}'` + ')">' + `${charaStats.traits[stat]}` + '</div>'
        ).join('');
        console.log("working")
};

    //Starts the text adventure
let showTextNode = (textNodeIndex) => {
    //textNode's value is set to be the object with the matching id inside of the array textNodes 
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    //This line takes the text from inside the "created" object textNode and places it in the html in the div value of textElement 
    txt = textNode.text
    typeWriter()
    //txtingB.innerText = textNode.text;
    //This removes the previous options that may be there from the last textNode and will only stop once all firstChild are gone
    while (Boottons.firstChild){
        Boottons.removeChild(Boottons.firstChild)
    }
    //This creates the option buttons by using forEach to go througth the textNode options and build a button for each
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            Boottons.appendChild(button)
        }
    })
    //Allows a fuction to be stored and used on specific textNodes
    if (textNode.sideEffect) {
        textNode.sideEffect();
    }

};
    //Checks if an option has a required State and if that stateis met. If not the option will not show
const showOption = (option) => {
    return option.requiredState == null || option.requiredState(state)
}
    //Selects the next path in the adventure
const selectOption = (option) => {
    const nextTextNodeId = option.nextText
    txtingB.innerHTML = "";
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state.currentRoom = nextTextNodeId;
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: " Rumbling, dark, cold, suffocating, you struggle to stretch out your arms. You feel your hand burst out into open space. You wriggle towards the empty space, your head breaches the surface. With a bit more struggling you’re able to pull your body out of what you can now tell is a thick Ultisols mub. The rain is coming down in obese droplets, your vision is better than you believe it should for this type of stormy night.",
        options: [
            {
                text: 'Continue',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "You rech, expelling dark red mub from your lungs and finally inhale. You onlynoticed now that you haven't beenbreathing. It's night and stormy but you can still see somewhat. But howcould you without street lights, what are street lights. Your head ppounds as lightening streaks through the sky.",
        // sideEffect: () => {},
        options: [
            {
                text: "Look around",
                //requiredState: (currentState) => currentState.blueGoo,
                //setState: {bluegoo: false, sword: true },
                nextText: 3
            },
            {
                text: "Look In the hole",
                nextText: 4
            }
            // {
            //     text: 'Trade the goo for a shield',
            //     requiredState: (currentState) => currentState.blueGoo,
            //     setState: {bluegoo: false, shield: true },
            //     nextText: 3
            // },
            
        ]
    },
    {
        id: 3,
        text: "Dim",
        options: [
            {
                text: "Look at the hole",
                nextText: 4
            }
        ]
    }
]


statMapper()
healthMaker()
abilityMaker()
showTextNode(1)