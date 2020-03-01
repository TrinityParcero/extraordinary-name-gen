let genButton;
let genBox;
let generatedText;

let numButtons;

let sources = {};

let allSourceButton;

let selectedSources;
let selectedNum;

let possibleTrinkets = [];

const setUpReferences = () => {
    genButton = document.getElementById('genButton');
    genBox = document.getElementById('generator');
    generatedText = document.querySelector('#generated');

    //onclick of generator button
    genButton.onclick = () => {
        //clear old values
        generatedText.innerHTML = '';
        selectedSources = [];
        selectedNum = 0;

        setUpSearch();
        showTrinkets();
    };

    numButtons = document.querySelectorAll('input[name=num]');

    sources.phb = document.querySelector('#phb');
    sources.ee = document.querySelector('#ee');
    sources.cos = document.querySelector('#cos');
    sources.llok = document.querySelector('#llok');

    allSourceButton = document.querySelector('#sourceAll');
    allSourceButton.onclick = () => {
        for (const source of Object.values(sources)) {
            source.checked = !source.checked;
        }
    };
};

window.onload = setUpReferences();

const setUpSearch = () => {
    //put checked sources in selected
    for (const source of Object.values(sources)) {
        if (source.checked) {
            selectedSources.push(source.value);
        }
    }
    console.log(`sources: ${selectedSources}`);

    for (let i = 0; i < selectedSources.length; i++) {
        let propName = selectedSources[i];
        console.log(propName);
        if (trinkets[propName] != undefined) {
            possibleTrinkets.push(...trinkets[propName]);
        }
    }

    for (let i = 0; i < numButtons.length; i++) {
        if (numButtons[i].checked) {
            selectedNum = numButtons[i].value;
            console.log(`number: ${selectedNum}`);

            //futz with size of genBox
            if (selectedNum == 1) {
                genBox.style.height = '100px';
            }
            if (selectedNum == 5) {
                genBox.style.height = '400px';
            }
            if (selectedNum == 10) {
                genBox.style.minHeight = '700px';
            }
        }
    }
};

//show the random trinket(s)
const showTrinkets = () => {
    let genTrinkets = [];

    if (!possibleTrinkets.length) {
        return;
    }
    for (let i = 0; i < selectedNum; i++) {
        let rando = Math.floor(Math.random() * Math.floor(possibleTrinkets.length));
        while (rando == 0) {
            rando = Math.floor(Math.random() * Math.floor(possibleTrinkets.length));
        }
        if (possibleTrinkets[rando] != undefined) {
            console.log(rando);
            console.log(possibleTrinkets[rando]);
            genTrinkets[i] = possibleTrinkets[rando];
            generatedText.innerHTML += genTrinkets[i] + '<br>' + '<br>';
        }
    }
};
