//generator button
let genButton = document.getElementById("genButton");

//generator box
let genBox = document.getElementById("generator");

const ethBritish = [
    "Welsh",
    "Cornish",
    "English",
    "Medieval",
    "Gaelic"
];

const ethMediterranean = [
    "Italian",
    "Greek",
    "Ancient Greek",
    "Arabic"
];

const ethEastEuropean = [
    "Russian",
    "Polish",
    "Hungarian",
    "Finnish",
    "Armenian"
];

const ethEuropean = [
    "Spanish",
    "Dutch",
    "French",
    "Gaullic",
    "German",
    "Norse"
];

const ethAsian = [
    "Chinese",
    "Japanese",
    "Indian",
    "Mongolian",
    "Korean"
];

const ethMisc = [
    "African",
    "Amerindian",
    "Aboriginal",
    "Hebrew",
    "Romani"
];

//ethnicity and gender values
let eths = document.querySelectorAll("input[name=eth]");
let ethsSelected = [];
let female = document.getElementById("gender1");
let male = document.getElementById("gender2");
let both = document.getElementById("gender3");

//last names and number of names
let last = document.getElementById("last1");
let nums = document.querySelectorAll("input[name=num]")
let numSelected;

//p tag where generated names go
let p = document.querySelector("#generated");

//select category buttons
let british = document.querySelector("#britishAll");
let mediterranean = document.querySelector("#mediterraneanAll");
let eastEuropean = document.querySelector("#eastEuropeanAll");
let european = document.querySelector("#europeanAll");
let asian = document.querySelector("#asianAll");
let other = document.querySelector("#otherAll");


british.addEventListener('click', function () {
    for (let i = 0; i < 5; i++) {
        //0-4
        eths[i].checked = !eths[i].checked;
    }
    console.log('you clicked a thing');
});

mediterranean.addEventListener('click', function () {
    for (let i = 5; i < 9; i++) {
        //5-9
        eths[i].checked = !eths[i].checked;
    }
});

eastEuropean.addEventListener('click', function () {
    for (let i = 9; i < 14; i++) {
        //10-13
        eths[i].checked = !eths[i].checked;
    }
});

european.addEventListener('click', function () {
    for (let i = 14; i < 20; i++) {
        //14-19
        eths[i].checked = !eths[i].checked;
    }
});

asian.addEventListener('click', function () {
    for (let i = 20; i < 25; i++) {
        //21-24
        eths[i].checked = !eths[i].checked;
    }
});

other.addEventListener('click', function () {
    for (let i = 25; i < 31; i++) {
        //25-30
        eths[i].checked = !eths[i].checked;
    }
});

//SET UP SEARCH. takes input and figures out what the user actually wants
let setUpSearch = function () {

    //go thru all checkboxes, add checked ones to array
    for (let i = 0; i < eths.length; i++) {
        if (eths[i].checked) {
            ethsSelected[i] = eths[i].value;
        }
    }

    //go thru nums radio, set checked one as numSelected
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].checked) {
            numSelected = nums[i].value;
            //futz with size of genBox
            if (numSelected == 1) {
                genBox.style.height = "100px";
            }
            if (numSelected == 5) {
                genBox.style.height = "200px";
            }
            if (numSelected == 10) {
                genBox.style.height = "350px";
            }
        }
    }
    //for each ethselected
    for (let i = 0; i < ethsSelected.length; i++) {

        //string property name to search names for
        let propName;

        //check the gender buttons
        if (female.checked) {
            //return eth + Female to firstNames
            if (ethsSelected[i] != undefined) {
                //welsh is a special case
                //names are unisex
                if (ethsSelected[i] == "welsh") {
                    firstNames += names["welsh"];
                }
                else {
                    propName = ethsSelected[i] + "Female";
                    firstNames += names[propName];
                }

            }
        }
        if (male.checked) {
            //return eth + Male to firstNames
            if (ethsSelected[i] != undefined) {
                //welsh is a special case
                //names are unisex
                if (ethsSelected[i] == "welsh") {
                    firstNames += names["welsh"];
                }
                else {
                    propName = ethsSelected[i] + "Male";
                    firstNames += names[propName];
                }
            }
        }
        if (both.checked) {
            //return eth + Female and eth + Male to firstNames
            if (ethsSelected[i] != undefined && ethsSelected != "welsh") {
                propName = ethsSelected[i] + "Female";
                firstNames += names[propName];
            }
            if (ethsSelected[i] != undefined && ethsSelected != "welsh") {
                propName = ethsSelected[i] + "Male";
                firstNames += names[propName];
            }
            else {
                //welsh is a special case
                //names are unisex
                if (ethsSelected[i] == "welsh") {
                    firstNames += names["welsh"];
                }
            }
        }

        //check the last name button
        if (last.checked) {
            //return eth + Family to lastNames 
            if (ethsSelected[i] != undefined) {
                propName = ethsSelected[i] + "Family";
                //not all eths have a family category
                if (names[propName] != undefined) {
                    lastNames += names[propName];
                }

            }
        }

    }

}

let showNames = function () {

    //for numselected, generate names
    for (let i = 0; i < numSelected; i++) {
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
            p.innerHTML += (firstName + " " + lastName + "<br>");
        }
        else {
            p.innerHTML += (firstName + "<br>");
        }
    }

}

//onclick of generator button
//call name functions
genButton.addEventListener('click', function () {

    //clear old values
    p.innerHTML = "";
    firstNames = [];
    lastNames = [];
    ethsSelected = [];
    numSelected = 0;

    setUpSearch();
    showNames();
});