// |------------------------ Events in javascripts ------------------------------|

const secImg = document.querySelector('#second');

secImg.addEventListener('click', (e) => {
    alert("HEY, THIS IS SECOND IMAGE")
})


 document.getElementById('third').addEventListener('click', (e) => {
    e.preventDefault()
        alert("Clicked the 3rd project")
    }, true)
