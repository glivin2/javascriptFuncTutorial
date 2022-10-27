function changePage(event){
    event.preventDefault();
    console.log("change page ran")
    // window.location.replace('pages/nextPage.html')
    formToMemory();
}

function formToMemory(){
    inputList = document.getElementsByTagName('input')
    for (x = 0; x <= (inputList.length-2); x++){
        keyName = `input${x}`
        keyValue = inputList[x].value
        // makeElem(keyValue);
        sessionStorage.setItem(keyName, `${keyValue}`);
        inputList[x].value = ""
    }
    
    console.log(sessionStorage)
}


// function makeElem(keyValue){
//     newElm = document.createElement("p");
//     newTxt = document.createTextNode(`${keyValue}`)
//     textClass = document.createAttribute(class="textClass")
//     newElm.appendChild(newTxt)

//     posInDoc = document.getElementsByClassName("testing");
//     document.body.insertBefore(newElm, posInDoc)
// }

function makeKey(){
    sessionStorage.setItem("gateKey", true);
    console.log(sessionStorage)
}



function clearMem(){
    sessionStorage.clear();
}



function checkForKey(){
    
    if (sessionStorage.getItem("gateKey") == 'true'){
        console.log("got key")
        document.getElementById('gate1').style.visibility = 'visible'
    }
    console.log(sessionStorage)
    // console.log('hello')

}

function submitToMemory(key, value){
    sessionStorage.setItem(key, true);
}



function btnToMemeory(identifier){
    if (identifier == 1)
        buttonID = 'BTN1'
    else if (identifier == 2)
        buttonID = 'BTN2'
    else if (identifier == 3)
        buttonID = 'BTN3'

    x = document.getElementById(buttonID)

    sessionStorage.setItem(buttonID, `${x.innerText}`)

    console.log(sessionStorage)

}