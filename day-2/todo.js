let todo = [];

let req = prompt("Enter your request: ");

while (true) {
    if (req == "quit") {
        console.log("Qutiting app");
        break;
    }


    if (req == "list") {
        for (let i = 1; i <= todo.length; i++) {
            console.log(i, todo[i]);
        }
    } else if (req == "add") {
        let task = prompt("Enter the task you want to add: ");
        todo.push(task);
        console.log("Task added");
    } else if (req == "delete") {
        let idx = prompt("Enter the task index you want to delete: ");
        todo.splice(idx, 1);
    } else {
        console.log("Wrong input")
    }

    req = prompt("Enter your request: ");

}