const textinput = document.querySelector(".text_input");
const textoutput = document.querySelector(".text_output");
const imgMuneco = document.getElementById("imgMuneco");
const textGuia = document.getElementById("textGuia");
const buttonCopy = document.getElementById("buttonCopy");
const contentOutput = document.getElementById("contentOutput");
const textOutput = document.getElementById("textOutput");

textinput.addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s]/g, '');
});

function buttonencrypt(){
    const textencrypt = encrypt(textinput.value);
    textoutput.value = textencrypt;
    imgMuneco.classList.add("ocultar");
    textGuia.classList.add("ocultar");
    buttonCopy.classList.remove("button_copy__ocultar");
    contentOutput.classList.remove("content_output__center");
    textOutput.classList.add("textOutput__End");
}

function buttondecrypt(){
    const textdecrypt = decrypt(textinput.value);
    textoutput.value = textdecrypt;
    imgMuneco.classList.add("ocultar");
    textGuia.classList.add("ocultar");
    buttonCopy.classList.remove("button_copy__ocultar");
    contentOutput.classList.remove("content_output__center");
    textOutput.classList.add("textOutput__End");
}

function buttoncopy(){
    navigator.clipboard.writeText(textoutput.value);
    textinput.value = "";
    textoutput.value = "";
    textoutput.placeholder ="";
}


function encrypt(stringencrypted){
    let llavesencrypt = [
        ["e", "enter"],
        ["i", "imes"],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
        ];
        stringencrypted = stringencrypted.toLowerCase();
    for(let y = 0; y < llavesencrypt.length; y++){
        if(stringencrypted.includes(llavesencrypt[y][0])){
        stringencrypted = stringencrypted.replaceAll(llavesencrypt[y][0], llavesencrypt[y][1])}
    }
    return stringencrypted;
}

function decrypt(stringdecrypted){
    let llavesencrypt = [
        ["e", "enter"],
        ["i", "imes"],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat'],
        ];
        stringdecrypted = stringdecrypted.toLowerCase();
    for(let y = 0; y < llavesencrypt.length; y++){
        if(stringdecrypted.includes(llavesencrypt[y][1])){
        stringdecrypted = stringdecrypted.replaceAll(llavesencrypt[y][1], llavesencrypt[y][0])}
    }
    return stringdecrypted;
}