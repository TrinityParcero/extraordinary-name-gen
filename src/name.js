let genButton;
let genBox;
let generatedText;

let origin = {
    british: [],
    mediterranean: [],
    eastEuropean: [],
    european: [],
    asian: [],
    misc: []
};

let britishAllButton;
let mediterraneanAllButton;
let eastEuropeanAllButton;
let europeanAllButton;
let asianAllButton;
let miscAllButton;

let selectedOrigins = [];

const gender = {};
let selectedGender;

let lastNameEnabled;

let numNamesButtons;
let selectedNumNames;

let firstNames = [];
let lastNames = [];

/**
 * SET UP REFERENCES
 * gets references to html, adds onclicks
 */
const setUpReferences = () => {
    //generator
    genButton = document.querySelector('#genButton');
    genBox = document.getElementById('generator');
    generatedText = document.querySelector('#generated');
    genButton.onclick = () => {
        //clear old values
        console.log('you clicked the generator button');
        generatedText.innerHTML = '';
        firstNames = [];
        lastNames = [];
        selectedOrigins = [];
        selectedNumNames = 0;

        setUpSearch();
        showNames();
    };

    //ethnicity selection
    const allOrigins = document.querySelectorAll('input[name=eth]');
    for (let i = 0; i < allOrigins.length; i++) {
        if (i < 5) {
            origin.british.push(allOrigins[i]);
        } else if (i < 9) {
            origin.mediterranean.push(allOrigins[i]);
        } else if (i < 14) {
            origin.eastEuropean.push(allOrigins[i]);
        } else if (i < 20) {
            origin.european.push(allOrigins[i]);
        } else if (i < 25) {
            origin.asian.push(allOrigins[i]);
        } else {
            origin.misc.push(allOrigins[i]);
        }
    }

    //select category buttons
    britishAllButton = document.querySelector('#britishAll');
    britishAllButton.onclick = () => {
        console.log('you clicked the british button');
        for (const button of origin.british) {
            button.checked = !button.checked;
        }
    };
    mediterraneanAllButton = document.querySelector('#mediterraneanAll');
    mediterraneanAllButton.onclick = () => {
        console.log('you clicked the mediterrean button');
        for (const button of origin.mediterranean) {
            button.checked = !button.checked;
        }
    };
    eastEuropeanAllButton = document.querySelector('#eastEuropeanAll');
    eastEuropeanAllButton.onclick = () => {
        console.log('you clicked the east european button');
        for (const button of origin.eastEuropean) {
            button.checked = !button.checked;
        }
    };
    europeanAllButton = document.querySelector('#europeanAll');
    europeanAllButton.onclick = () => {
        console.log('you clicked the european button');
        for (const button of origin.european) {
            button.checked = !button.checked;
        }
    };
    asianAllButton = document.querySelector('#asianAll');
    asianAllButton.onclick = () => {
        console.log('you clicked the asian button');
        for (const button of origin.asian) {
            button.checked = !button.checked;
        }
    };
    miscAllButton = document.querySelector('#otherAll');
    miscAllButton.onclick = () => {
        console.log('you clicked the miscellaneous button');
        for (const button of origin.misc) {
            button.checked = !button.checked;
        }
    };

    //gender selection
    gender.female = document.getElementById('gender1');
    gender.male = document.getElementById('gender2');
    gender.both = document.getElementById('gender3');

    lastNameEnabled = document.getElementById('last1');
    numNamesButtons = document.querySelectorAll('input[name=num]');

    console.log('finished setup!');
};

window.onload = setUpReferences();

// SET UP SEARCH. takes input and figures out what the user actually wants
const setUpSearch = () => {
    // check for selected origins
    for (let category of Object.values(origin)) {
        for (let option of Object.values(category)) {
            if (option.checked) {
                selectedOrigins.push(option.value);
            }
        }
    }

    // check for selected gender
    for (let option of Object.values(gender)) {
        if (option.checked) {
            selectedGender = option.value;
        }
    }

    // check for selected numNames
    for (let option of numNamesButtons) {
        if (option.checked) {
            selectedNumNames = option.value;
        }
    }

    console.log(`origins: ${selectedOrigins}`);
    console.log(`gender: ${selectedGender}`);
    console.log(`number: ${selectedNumNames}`);

    // futz with size of genBox
    if (selectedNumNames == 1) {
        genBox.style.height = '100px';
    } else if (selectedNumNames == 5) {
        genBox.style.height = '200px';
    } else if (selectedNumNames == 10) {
        genBox.style.height = '350px';
    }

    // for each ethselected
    for (let i = 0; i < selectedOrigins.length; i++) {
        // string property name to search names for
        let propName;

        // check the gender buttons
        if (selectedGender === 'female') {
            //return eth + Female to firstNames
            if (selectedOrigins[i] != undefined) {
                //welsh is a special case
                //names are unisex
                if (selectedOrigins[i] == 'welsh') {
                    firstNames.push(...names['welsh']);
                } else {
                    propName = `${selectedOrigins[i]}Female`;
                    firstNames.push(...names[propName]);
                }
            }
        } else if (selectedGender === 'male') {
            // return eth + Male to firstNames
            if (selectedOrigins[i] != undefined) {
                // welsh is a special case
                // names are unisex
                if (selectedOrigins[i] == 'welsh') {
                    firstNames.push(names['welsh']);
                } else {
                    propName = `${selectedOrigins[i]}Male`;
                    firstNames.push(...names[propName]);
                }
            }
        } else {
            //return eth + Female and eth + Male to firstNames
            if (selectedOrigins[i] != undefined && selectedOrigins != 'welsh') {
                propName = `${selectedOrigins[i]}Female`;
                firstNames.push(...names[propName]);
            }
            if (selectedOrigins[i] != undefined && selectedOrigins != 'welsh') {
                propName = `${selectedOrigins[i]}Male`;
                firstNames.push(...names[propName]);
            } else {
                //welsh is a special case
                //names are unisex
                if (selectedOrigins[i] == 'welsh') {
                    firstNames.push(...names['welsh']);
                }
            }
        }

        //check the last name button
        if (lastNameEnabled.checked) {
            //return eth + Family to lastNames
            if (selectedOrigins[i] != undefined) {
                propName = `${selectedOrigins[i]}Family`;
                //not all eths have a family category
                if (names[propName] != undefined) {
                    lastNames.push(...names[propName]);
                }
            }
        }
    }
};

const showNames = () => {
    //for numNames, generate names
    for (let i = 0; i < selectedNumNames; i++) {
        let firstName;
        let lastName;
        //generate first name
        let rando = Math.floor(Math.random() * Math.floor(firstNames.length));
        firstName = firstNames[rando];

        //if last is true, generate last name
        if (lastNameEnabled) {
            rando = Math.floor(Math.random() * Math.floor(lastNames.length));
            lastName = lastNames[rando];
        }

        //put generated names in generated
        if (lastName != undefined) {
            generatedText.innerHTML += firstName + ' ' + lastName + '<br>';
        } else {
            generatedText.innerHTML += firstName + '<br>';
        }
    }
};
