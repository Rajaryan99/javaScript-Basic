// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();
// ---------------------- Promise ------------------------------

// function savetoDb(data, success, failoure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failoure();
//     }
// }

// savetoDb("hello world", () => {
//     console.log(" Success: Your data was saved!");
//     savetoDb("love you code", () => {
//         console.log(" success2: Your data2 was saved!");
//     }, () => {
//         console.log("faliour2: weak connection, Data not saved...")
//     });
// },
//     () => {
//         console.log(" failour1: weak connection, Data not saved...");
//     });

// ---------------resolve & reject------------------------------
function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success: Data was saved!");
        } else {
            reject("faliour: weak connection");
        }
    });

}

// -----------------then & Catch---------------------------------------
savetoDb("rajAryan").
    then((result) => {
        console.log("Promise was successed");
        console.log("result of promise: ", result);
        return savetoDb("Sakshi panda");

    })
    .then((result) => {
        console.log("Made Promise to sakshi");
        console.log("result of promise: ", result);
        return savetoDb("Dakota Johnson");
    })
    .then((result) => {
        console.log("Prmise made to Dakota Jhonson as well");
        console.log("result of promise: ", result);
        return savetoDb("sydney sweeney");
    })
    .then((result) => {
        console.log("Promise made to sydney Sweeney too")
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("Prmoise was rejected")
        console.log("error of promise: ", error);
        console.log(request);
    });
