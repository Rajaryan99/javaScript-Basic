// |------------------------ Events in javascripts ------------------------------|

const secImg = document.querySelector('#second');

secImg.addEventListener('click', (e) => {
    alert("HEY, THIS IS SECOND IMAGE")
})


 document.getElementById('third').addEventListener('click', (e) => {
    e.preventDefault()
        alert("Clicked the 3rd project")
    }, true)


    document.getElementById('images').addEventListener('click', (e) => {
        console.log('elements inside UL was clicked!!')
    }, true)

    document.getElementById('fourth').addEventListener('click', (e) => {
        console.log('fourth image was clicked')
        e.stopPropagation()
    }, true)