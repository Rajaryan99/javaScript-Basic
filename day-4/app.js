function poem() {
    console.log("Twinkle-Teinkle Little Star.")
    console.log("How i wonder what yu are.")

}

poem();

function to roll a dice

function Roll_a_dice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log("The dice number is: ", dice);
}

Roll_a_dice();

function to give as the avegage of 3 numbers using(arguments & parameters)

function findAvg(n1, n2, n3) {
    let avg = (n1 + n2 + n3) / 2;
    console.log("The average of three numbers is: ", avg);
}


findAvg(3, 4, 5);


function to print a table of a number using loop

function printTable(num) {
    for (let i = 1; i <= 10; i++) {
    }

    function printTable(n) {
        for (let i = n; i <= n * 10; i = i + n) {
            console.log(i)

        }
    }

    printTable(9);

    function to concatinate the string in an arry

    let str = ["hi", "hello", " ", "How are you", "?"];
    let n = str.length;

    function concat(str) {
        let result = "";

        for (let i = 0; i < n; i++) {
            result += str[i];
        }

        return result;
    }


lexciol scope

    let greet = "hello";

    function chnageGreet() {
        let greet = "namaste";
        console.log(greet);

        function innergreet() {
            console.log(greet);
        }
        innergreet();
    }



    console.log(greet);
    chnageGreet();


high order function

        let multiGreet = function (func, n) { // high order function
            for (let i = 1; i <= n; i++) {
                func();
            }

        }


    let greet = function () {
        console.log("Hello!!");
    }


    multiGreet(greet, 4);

    methods

    const calculater = {
        add: function (a, b) {
            return a + b;
        },

        sub: function (a, b) {
            return a - b;
        },

        mul: function (a, b) {
            return a * b;
        },
    };

    // --------------------------Assignemt--------------------------------

    let arr = [];
    arr[0] = 33;
    console.log(arr)

    function returnLargest(num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > num) {
                console.log(arr[i]);
            }
        }
    }

    returnLargest(num);

    let str = "abasdfkhfsl";



    function countVowel(str) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
                count++;
            }
        }
        return count;
    }

    // countVowel(str);
    console.log(countVowel(str));




    function grnRandom(start, end) {
        let diff = end - start;

        return Math.floor(Math.random() * diff) + start;
    }

    console.log(grnRandom(400, 500));

    // --------------------Assignment------------------------------------------
    let arr = [1, 2, 3];
    const arrayAverage = (arr) => {
        let totle = 0;

        for (let numbres of arr) {
            total = total + numbres;
        }

        return total / arr.length;
    };

    let arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(arrayAverage(arr));

    let isEven = (n) => {
        if (n % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    console.log(isEven(5));


    onstobject =
    {
        message: 'Hello,World!',

        logMessage() {
            console.log(this.message);
        }
    };

    setTimeout(object.logMessage, 1000);






