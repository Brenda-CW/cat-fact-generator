const button = document.querySelector("button");
const btnShort = document.querySelector(".short");
const btnLong = document.querySelector(".long");
const factBox = document.querySelector(".fact-container");
const catFact = document.querySelector(".cat-fact");


const getShortFact = async function () {
    const res = await fetch("https://catfact.ninja/fact?max_length=32");
    const fact = await res.json();
    //console.log(fact);
    displayFact(fact);
}

const getLongFact = async function () {
    const res = await fetch("https://catfact.ninja/fact?max_length=150");
    const fact = await res.json();
    //console.log(fact);
    displayFact(fact);
}


const displayFact = function (fact) {
    let newFact = fact.fact
    console.log(newFact);
    catFact.innerText = newFact;
    factBox.classList.remove("hide");
}

btnShort.addEventListener('click', function() {
    catFact.innerText = "";
    getShortFact();
});

btnLong.addEventListener('click', function() {
    catFact.innerText = "";
    getLongFact();
});


