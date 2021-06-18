const refObject = {};

/**
 * SET UP GEN REFERENCES
 * gets references to html generator elements, adds onclicks
 */
const setUpGenReferences = () => {
    refObject.genButton = document.querySelector('#genButton');
    refObject.genBox = document.querySelector('#generator');
    refObject.genText = document.querySelector('#generated');
};

/**
 * SET UP NAME REFERENCES DEEP
 * sets up references to name generation controls
 * DEEP VERSION - used when there are buttons for each origin, number option
 */
const setUpNameReferencesDeep = () => {
    refObject.origin = {
        british: [],
        mediterranean: [],
        eastEuropean: [],
        european: [],
        asian: [],
        misc: [],
    };
    // origin selection
    const allOrigins = document.querySelectorAll('input[name=eth]');
    for (let i = 0; i < allOrigins.length; i++) {
        if (i < 5) {
            refObject.origin.british.push(allOrigins[i]);
        } else if (i < 9) {
            refObject.origin.mediterranean.push(allOrigins[i]);
        } else if (i < 14) {
            refObject.origin.eastEuropean.push(allOrigins[i]);
        } else if (i < 20) {
            refObject.origin.european.push(allOrigins[i]);
        } else if (i < 25) {
            refObject.origin.asian.push(allOrigins[i]);
        } else {
            refObject.origin.misc.push(allOrigins[i]);
        }
    }

    //select category buttons
    refObject.britishAllButton = document.querySelector('#britishAll');
    refObject.britishAllButton.onclick = () => {
        console.log('you clicked the british button');
        for (const button of refObject.origin.british) {
            if (!button.checked) {
                button.checked = true;
            }
        }
    };
    refObject.mediterraneanAllButton = document.querySelector(
        '#mediterraneanAll'
    );
    refObject.mediterraneanAllButton.onclick = () => {
        console.log('you clicked the mediterrean button');
        for (const button of refObject.origin.mediterranean) {
            if (!button.checked) {
                button.checked = true;
            }
        }
    };
    refObject.eastEuropeanAllButton = document.querySelector(
        '#eastEuropeanAll'
    );
    refObject.eastEuropeanAllButton.onclick = () => {
        console.log('you clicked the east european button');
        for (const button of refObject.origin.eastEuropean) {
            if (!button.checked) {
                button.checked = true;
            }
        }
    };
    refObject.europeanAllButton = document.querySelector('#europeanAll');
    refObject.europeanAllButton.onclick = () => {
        console.log('you clicked the european button');
        for (const button of refObject.origin.european) {
            if (!button.checked) {
                button.checked = true;
            }
        }
    };
    refObject.asianAllButton = document.querySelector('#asianAll');
    refObject.asianAllButton.onclick = () => {
        console.log('you clicked the asian button');
        for (const button of refObject.origin.asian) {
            if (!button.checked) {
                button.checked = true;
            }
        }
    };
    refObject.miscAllButton = document.querySelector('#otherAll');
    refObject.miscAllButton.onclick = () => {
        console.log('you clicked the miscellaneous button');
        for (const button of refObject.origin.misc) {
            if (!button.checked) {
                button.checked = true;
            }
        }
    };

    //gender selection
    refObject.gender = {};
    refObject.gender.female = document.getElementById('gender1');
    refObject.gender.male = document.getElementById('gender2');
    refObject.gender.both = document.getElementById('gender3');

    refObject.lastNameEnabled = document.getElementById('last1');
    refObject.num = document.querySelectorAll('input[name=num]');
};

/**
 * SET UP NAME REFERENCES SHALLOW
 * sets up references to name generation controls
 * SHALLOW VERSION - used when only categories are options for origin and no number option
 *
 */
const setUpNameReferencesShallow = () => {
    //select category buttons
    refObject.britishAllButton = document.querySelector('#britishAll');
    refObject.mediterraneanAllButton = document.querySelector(
        '#mediterraneanAll'
    );
    refObject.eastEuropeanAllButton = document.querySelector(
        '#eastEuropeanAll'
    );
    refObject.europeanAllButton = document.querySelector('#europeanAll');
    refObject.asianAllButton = document.querySelector('#asianAll');
    refObject.miscAllButton = document.querySelector('#otherAll');

    //gender selection
    refObject.gender.female = document.getElementById('gender1');
    refObject.gender.male = document.getElementById('gender2');
    refObject.gender.both = document.getElementById('gender3');

    refObject.lastNameEnabled = document.getElementById('last1');
};

/**
 * PREPARE NAME SET
 * takes input and gets an appropriate list of possible names
 * @param {object} names full set of names
 * @returns {object} set of names to use in generation
 */
const prepareNameSet = (names) => {
    const validNames = {
        firstNames: [],
        lastNames: [],
    };
    const selectedOrigins = [];
    let selectedGender;
    let selectedNum;

    const origin = refObject.origin;
    const gender = refObject.gender;
    const num = refObject.num;
    const lastNameEnabled = refObject.lastNameEnabled;

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
    for (let option of num) {
        if (option.checked) {
            selectedNum = option.value;
        }
    }
    // default num to 1
    if (!selectedNum) {
        selectedNum = 1;
    }

    console.log(`origins: ${selectedOrigins}`);
    console.log(`gender: ${selectedGender}`);
    console.log(`number: ${selectedNum}`);

    // futz with size of genBox
    if (selectedNum === '1') {
        refObject.genBox.style.height = '100px';
    } else if (selectedNum === '5') {
        refObject.genBox.style.height = '200px';
    } else if (selectedNum === '10') {
        refObject.genBox.style.height = '350px';
    }

    // for each ethselected
    for (let i = 0; i < selectedOrigins.length; i++) {
        // string property name to search names for
        let propName;

        // check the gender buttons
        if (selectedGender === 'female') {
            //return eth + Female to firstNames
            if (selectedOrigins[i] !== undefined) {
                //welsh is a special case
                //names are unisex
                if (selectedOrigins[i] === 'welsh') {
                    validNames.firstNames.push(...names['welsh']);
                } else {
                    propName = `${selectedOrigins[i]}Female`;
                    validNames.firstNames.push(...names[propName]);
                }
            }
        } else if (selectedGender === 'male') {
            // return eth + Male to firstNames
            if (selectedOrigins[i] !== undefined) {
                // welsh is a special case
                // names are unisex
                if (selectedOrigins[i] === 'welsh') {
                    validNames.firstNames.push(names['welsh']);
                } else {
                    propName = `${selectedOrigins[i]}Male`;
                    validNames.firstNames.push(...names[propName]);
                }
            }
        } else {
            //return eth + Female and eth + Male to firstNames
            if (selectedOrigins[i] !== undefined && selectedOrigins[i] !== 'welsh') {
                propName = `${selectedOrigins[i]}Female`;
                validNames.firstNames.push(...names[propName]);
            }
            if (selectedOrigins[i] !== undefined && selectedOrigins[i] !== 'welsh') {
                propName = `${selectedOrigins[i]}Male`;
                validNames.firstNames.push(...names[propName]);
            } else {
                //welsh is a special case
                //names are unisex
                if (selectedOrigins[i] === 'welsh') {
                    validNames.firstNames.push(...names['welsh']);
                }
            }
        }

        //check the last name button
        if (lastNameEnabled.checked) {
            //return eth + Family to lastNames
            if (selectedOrigins[i] !== undefined) {
                propName = `${selectedOrigins[i]}Family`;
                //not all eths have a family category
                if (names[propName] !== undefined) {
                    validNames.lastNames.push(...names[propName]);
                }
            }
        }
    }
    return validNames;
};

/**
 *
 * @param {array} firstNames possible first names
 * @param {array} lastNames possible last names
 * @returns {array} generated names
 */
const generateNames = (firstNames, lastNames) => {
    const generatedNames = [];

    const num = refObject.num;
    // check for selected numNames
    for (let option of num) {
        if (option.checked) {
            selectedNum = option.value;
        }
    }
    // default num to 1
    if (!selectedNum) {
        selectedNum = 1;
    }

    const lastNameEnabled = refObject.lastNameEnabled;

    //for numNames, generate names
    for (let i = 0; i < selectedNum; i++) {
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

        if (lastName) {
            const name = `${firstName} ${lastName}`;
            generatedNames.push(name);
        } else {
            generatedNames.push(firstName);
        }
    }
    return generatedNames;
};

/**
 * DISPLAY NAMES
 * adds generated names to the html display
 * @param {array} names names to display
 */
const displayNames = (names) => {
    //put generated names in generated
    for (const name of names) {
        refObject.genText.innerHTML += `${name}<br>`;
    }
};
