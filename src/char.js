let genButton;
let genBox;
let generatedText;

let races = {};
let selectedRaces = [];

let bgs = {};
let selectedBgs = [];

let classes = {};
let selectedClasses = [];

let firstNames = [];
let lastNames = [];
let female;
let male;
let both;
let lastNameEnabled;


const setUpReferences = () => {
    //last names and number of names
    female = document.getElementById('gender1');
    male = document.getElementById('gender2');
    both = document.getElementById('gender3');
    lastNameEnabled = document.getElementById('last1');


    let raceAllButtons = document.querySelectorAll('input[name=race]');
    let bgAllButtons = document.querySelectorAll('input[name=bg]');
    let classAllButtons = document.querySelectorAll('input[name=class]');

    genButton = document.getElementById('genButton');
    genBox = document.getElementById('generator');
    generatedText = document.querySelector('#generated');

    let alignments = document.querySelectorAll('input[name=align]');
    let alignmentsSelected = [];
};

//RACEGEN

//BACKGROUNDGEN

//CLASSGEN

//ALIGMENTGEN

//NAMEGEN
//name strings

//SET UP SEARCH. takes input and figures out what the user actually wants
const setUpSearch = () => {
    const ethsSelected = [];

    //go thru checkboxes, add relevant eths to ethsselected
    const british = document.querySelector('#english');
    const mediterranean = document.querySelector('#mediterranean');
    const eastEuropean = document.querySelector('#eastEuropean');
    const european = document.querySelector('#european');
    const asian = document.querySelector('#asian');
    const other = document.querySelector('#other');

    if (british.checked) {
        ethsSelected.push('welsh');
        ethsSelected.push('cornish');
        ethsSelected.push('english');
        ethsSelected.push('medieval');
        ethsSelected.push('gaelic');
    }
    if (mediterranean.checked) {
        ethsSelected.push('greek');
        ethsSelected.push('ancientGreek');
        ethsSelected.push('arabic');
        ethsSelected.push('italian');
    }
    if (eastEuropean.checked) {
        ethsSelected.push('russian');
        ethsSelected.push('polish');
        ethsSelected.push('hungarian');
        ethsSelected.push('finnish');
        ethsSelected.push('armenian');
    }
    if (european.checked) {
        ethsSelected.push('spanish');
        ethsSelected.push('dutch');
        ethsSelected.push('french');
        ethsSelected.push('gaulic');
        ethsSelected.push('german');
        ethsSelected.push('norse');
    }
    if (asian.checked) {
        ethsSelected.push('chinese');
        ethsSelected.push('japanese');
        ethsSelected.push('mongolian');
        ethsSelected.push('korean');
        ethsSelected.push('indian');
    }
    if (other.checked) {
        ethsSelected.push('african');
        ethsSelected.push('amerindian');
        ethsSelected.push('aboriginal');
        ethsSelected.push('hebrew');
        ethsSelected.push('romani');
    }

    //for each ethselected
    for (let i = 0; i < ethsSelected.length; i++) {
        //string property name to search names for
        let propName;

        //check the gender buttons
        if (female.checked) {
            //return eth + Female to firstNames
            if (ethsSelected[i]) {
                //welsh is a special case
                //names are unisex
                if (ethsSelected[i] == 'welsh') {
                    firstNames += names['welsh'];
                } else {
                    propName = ethsSelected[i] + 'Female';
                    firstNames += names[propName];
                }
            }
        }
        if (male.checked) {
            //return eth + Male to firstNames
            if (ethsSelected[i]) {
                //welsh is a special case
                //names are unisex
                if (ethsSelected[i] == 'welsh') {
                    firstNames += names['welsh'];
                } else {
                    propName = ethsSelected[i] + 'Male';
                    firstNames += names[propName];
                }
            }
        }
        if (both.checked) {
            //return eth + Female and eth + Male to firstNames
            if (ethsSelected[i] && ethsSelected != 'welsh') {
                propName = ethsSelected[i] + 'Female';
                firstNames += names[propName];
            }
            if (ethsSelected[i] && ethsSelected != 'welsh') {
                propName = ethsSelected[i] + 'Male';
                firstNames += names[propName];
            } else {
                //welsh is a special case
                //names are unisex
                if (ethsSelected[i] == 'welsh') {
                    firstNames += names['welsh'];
                }
            }
        }

        //check the last name button
        if (last.checked) {
            //return eth + Family to lastNames
            if (ethsSelected[i]) {
                propName = ethsSelected[i] + 'Family';
                //not all eths have a family category
                if (names[propName]) {
                    lastNames += names[propName];
                }
            }
        }
    }
};

//loads the names in the sections selected
let loadNames = function () {
    //split firstNames by commas, trim off spaces
    if (firstNames.length != 0) {
        firstNames = firstNames.trim();
        firstNames = firstNames.split(',');
    }
    //if last.checked, split by commas, trim off spaces
    if (last.checked && lastNames.length != 0) {
        console.log(lastNames);
        lastNames = lastNames.trim();
        lastNames = lastNames.split(',');
    }
};

let showNames = function () {
    let firstName;
    let lastName;
    //generate first name
    let rando = Math.floor(Math.random() * Math.floor(firstNames.length));
    firstName = firstNames[rando];

    //if last is true, generate last name
    if (last.checked) {
        rando = Math.floor(Math.random() * Math.floor(lastNames.length));
        lastName = lastNames[rando];
    }

    //put generated names in generated

    if (lastName != undefined) {
        p.innerHTML += firstName + ' ' + lastName + '<br>';
    } else {
        p.innerHTML += firstName + '<br>';
    }
};

//onclick of generator button
//call name functions
genButton.addEventListener('click', function () {
    //clear old values
    p.innerHTML = '';
    firstNames = [];
    lastNames = [];
    ethsSelected = [];

    setUpSearch();
    loadNames();
    showNames();
});
