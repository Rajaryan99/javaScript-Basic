// |------------------------ Events in javascripts ------------------------------|

const secImg = document.querySelector('#second');
let img = document.getElementById('images')

// secImg.addEventListener('click', (e) => {
//     alert("HEY, THIS IS SECOND IMAGE")
// })


//  document.getElementById('third').addEventListener('click', (e) => {
//     e.preventDefault()
//         alert("Clicked the 3rd project")
//     }, true)


//     document.getElementById('images').addEventListener('click', (e) => {
//         console.log('elements inside UL was clicked!!')
//     })

//     document.getElementById('fourth').addEventListener('click', (e) => {
//         console.log('fourth image was clicked')
//         e.stopPropagation()
//     })



    img.addEventListener('click', (e) => {
            console.log(e.target.parentNode)
            let removeIt = e.target.parentNode
            removeIt.remove();
    })