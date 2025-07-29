// async function greet() {
//     return "hello";
// }

// greet()
//     .then((meg) => {
//         console.log("Promise was resolved");
//         console.log("Message is", meg);
//     })
//     .catch((err) => {
//         console.log("Promise was rejected");
//         console.log("ERROR: ", err);
//     });

// --------------------Handling APIS-------------------
let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();

        console.log("data1 = ", data.fact);

        let res1 = await fetch(url);
        let data1 = await res.json();

        console.log("data2 = ", data1.fact);
    } catch (e) {
        console.log("ERROR - ", e);
    }
    console.log("bye");
}
