let btn = document.querySelector('.btn');
let input = document.querySelector('input');
let ul = document.querySelector('ul');



btn.addEventListener('click', function () {

    let taskList = document.createElement("li");
    taskList.innerText = input.value;
    ul.appendChild(taskList);

    let del = document.createElement("button");
    del.innerText = "X";
    taskList.appendChild(del);
    del.addEventListener('click', function () {
        taskList.remove();
    });


    input.value = "";
});

input.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        // e.preventDefault();
        btn.click();
    }
})



