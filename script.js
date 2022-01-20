let charaStats = {

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