const world = 'world';
console.log(`Hello ${world}`);

document.getElementById('review-button').addEventListener('click', function(){
    let element = document.getElementById('thanks-text')
    element.style.display = "revert";
})

