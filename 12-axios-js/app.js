let url = "https://catfact.ninja/fact";
let btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    let fact = await getfact();
    document.querySelector("p").innerHTML = `Fact no 1: <b>${fact}</b>`;
    console.log(fact);
});

async function getfact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("ERROR: -", e);
        return "fact not Found"
    }
}

