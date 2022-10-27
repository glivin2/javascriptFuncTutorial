//Get Attribute of html element class, href etc...

let link = document.getElementById('link');
let showLink = link.getAttribute('href');
console.log(showLink);


//Set Attribute
link.setAttribute('href','nextPage.html');

//console.log(window)
for (x = 0; x <= 10000; x++)
    if (x == 10000){
        window.location.replace('pages/nextPage.html')
    }
