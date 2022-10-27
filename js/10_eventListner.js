//an event listern is a method that attaches to a DOM object and waits for interaction
// complete list of events https://developer.mozilla.org/en-US/docs/Web/Events
// list of common events https://www.w3schools.com/jsref/dom_obj_event.asp



let h1 = document.getElementById('headerOne');
h1.addEventListener("click", function(){
    console.log('Hello World');
})


//You can add multiple event listeners to a single object

// h1.addEventListener("mouseover", function(){
//     document.body.style.color = 'aqua';
// })

// You can add events via html attributes
function test(){
    console.log('test was successful')
}

console.log(window)
