// use &#9733 &#9734;
let stars = document.getElementById('stars')
for (let i = 0; i < 8; i++) {
    // make 8 stars
    let star = document.createElement('div')
    star.innerHTML = '&#9734;'
    star.style.fontSize = '50px'
    star.style.float = 'left'
    star.style.margin = '3px'
    
    //click event
    star.onclick = function(event) {
        star.innerHTML = '&#9733'
    }

    stars.append(star)
}