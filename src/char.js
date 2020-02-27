//make accordions work
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }
    });
}
//generator button
let genButton = document.getElementById("genButton");
//generator box
let genBox = document.getElementById("generator");

//get selected things and make some vars
let race = document.querySelectorAll("input[name=race]");
let racesSelected = [];

let backgrounds = document.querySelectorAll("input[name=bg]");
let backgroundsSelected = [];

let classes = document.querySelectorAll("input[name=class]")
let classesSelected = [];

let alignments = document.querySelectorAll("input[name=align]")
let alignmentsSelected = [];

//p tag where generated names go
let p = document.querySelector("#generated");

//RACEGEN

//BACKGROUNDGEN

//CLASSGEN

//ALIGMENTGEN

//NAMEGEN
//name strings
let firstNames = []; //possible first names
let lastNames = []; //possible last names

//ethnicity and gender values
let ethsSelected = [];
let female = document.getElementById("gender1");
let male = document.getElementById("gender2");
let both = document.getElementById("gender3");

//last names and number of names
let last = document.getElementById("last1");

//select category buttons
let english = document.querySelector("#english");
let mediterranean = document.querySelector("#mediterranean");
let eastEuropean = document.querySelector("#eastEuropean");
let european = document.querySelector("#european");
let asian = document.querySelector("#asian");
let other = document.querySelector("#other");

//SET UP SEARCH. takes input and figures out what the user actually wants
let setUpSearch = function () {

    //go thru checkboxes, add relevant eths to ethsselected
    if (english.checked) {
        ethsSelected.add("welsh");
        ethsSelected.add("cornish");
        ethsSelected.add("english");
        ethsSelected.add("medieval");
        ethsSelected.add("gaelic");
    }
    if (mediterranean.checked) {
        ethsSelected.add("greek");
        ethsSelected.add("ancientGreek");
        ethsSelected.add("arabic");
        ethsSelected.add("italian");
    }
    if (eastEuropean.checked) {
        ethsSelected.add("russian");
        ethsSelected.add("polish");
        ethsSelected.add("hungarian");
        ethsSelected.add("finnish");
        ethsSelected.add("armenian");
    }
    if (european.checked) {
        ethsSelected.add("spanish");
        ethsSelected.add("dutch");
        ethsSelected.add("french");
        ethsSelected.add("gaulic");
        ethsSelected.add("german");
        ethsSelected.add("norse");
    }
    if (asian.checked) {
        ethsSelected.add("chinese");
        ethsSelected.add("japanese");
        ethsSelected.add("mongolian");
        ethsSelected.add("korean");
        ethsSelected.add("indian");
    }
    if (other.checked) {
        ethsSelected.add("african");
        ethsSelected.add("amerindian");
        ethsSelected.add("aboriginal");
        ethsSelected.add("hebrew");
        ethsSelected.add("romani");
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

//loads the names in the sections selected
let loadNames = function () {
    //split firstNames by commas, trim off spaces
    if (firstNames.length != 0) {
        firstNames = firstNames.trim();
        firstNames = firstNames.split(",");
    }
    //if last.checked, split by commas, trim off spaces
    if (last.checked && lastNames.length != 0) {
        console.log(lastNames);
        lastNames = lastNames.trim();
        lastNames = lastNames.split(",");
    }
}

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
        p.innerHTML += (firstName + " " + lastName + "<br>");
    }
    else {
        p.innerHTML += (firstName + "<br>");
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

    setUpSearch();
    loadNames();
    showNames();
});
