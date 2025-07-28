async function greet() {
    return "hello";
}

greet()
    .then((meg) => {
        console.log("Promise was resolved");
        console.log("Message is", meg);
    })
    .catch((err) => {
        console.log("Promise was rejected");
        console.log("ERROR: ", err);
    });