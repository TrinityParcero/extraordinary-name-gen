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
let selectedNameOrigins = [];
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

    //select category buttons
    let british = document.querySelector('#english');
    let mediterranean = document.querySelector('#mediterranean');
    let eastEuropean = document.querySelector('#eastEuropean');
    let european = document.querySelector('#european');
    let asian = document.querySelector('#asian');
    let other = document.querySelector('#other');

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
let setUpSearch = function () {
    //go thru checkboxes, add relevant eths to ethsselected
    if (british.checked) {
        ethsSelected.add('welsh');
        ethsSelected.add('cornish');
        ethsSelected.add('english');
        ethsSelected.add('medieval');
        ethsSelected.add('gaelic');
    }
    if (mediterranean.checked) {
        ethsSelected.add('greek');
        ethsSelected.add('ancientGreek');
        ethsSelected.add('arabic');
        ethsSelected.add('italian');
    }
    if (eastEuropean.checked) {
        ethsSelected.add('russian');
        ethsSelected.add('polish');
        ethsSelected.add('hungarian');
        ethsSelected.add('finnish');
        ethsSelected.add('armenian');
    }
    if (european.checked) {
        ethsSelected.add('spanish');
        ethsSelected.add('dutch');
        ethsSelected.add('french');
        ethsSelected.add('gaulic');
        ethsSelected.add('german');
        ethsSelected.add('norse');
    }
    if (asian.checked) {
        ethsSelected.add('chinese');
        ethsSelected.add('japanese');
        ethsSelected.add('mongolian');
        ethsSelected.add('korean');
        ethsSelected.add('indian');
    }
    if (other.checked) {
        ethsSelected.add('african');
        ethsSelected.add('amerindian');
        ethsSelected.add('aboriginal');
        ethsSelected.add('hebrew');
        ethsSelected.add('romani');
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
