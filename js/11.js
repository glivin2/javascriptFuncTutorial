
function hoverChange_color(){
    document.body.style.backgroundColor = "red"
    x = document.getElementById("fifthElm")
    x.innerText = "5th elm modifyed"
    // document.body.style.backgroundColor = ""
    console.log(x)
}

function changePage(event){
    event.preventDefault();
    console.log("change page ran")
    window.location.replace('pages/nextPage.html')
}

function scale_size(){
    t2 = document.getElementById("triangle2")
    while (xSize < 1000) {
        t2.style.borderBottomWidth = `${xSize}px`;
        xSize++
      }     
    console.log(t2)
}


function changeTriangle_color(){
    // console.log(`change triangle ran`)
    tList = document.getElementsByClassName('triangle');
    // console.log(tList);
    t0 = tList[0]
    // console.log(t0);
    if (t0.style.borderBottomColor == 'blue'){
        t0.style.borderBottomColor = 'red'}
    else{
        t0.style.borderBottomColor = 'blue'
    }
    // console.log(t0.style.borderBottomColor)
 

}

// function addItmem_2mem(){
//     x = true;
//     sessionStorage.setItem("onHome", x)
//     console.log(sessionStorage)
// }



console.log(window)
