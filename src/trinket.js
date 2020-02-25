//generator button
let genButton = document.getElementById("genButton");
//generator box
let genBox = document.getElementById("generator");

//p tag where generated trinkets go
let p = document.querySelector("#generated");

//possible trinkets
let posTrinkets = [];

//selected sources
let sourceSelected = [];


//num radios
let nums = document.querySelectorAll("input[name=num]")
let numSelected;

//get all checkboxes
let phb = document.querySelector("#phb");
let ee = document.querySelector("#ee");
let cos = document.querySelector("#cos");
let llok = document.querySelector("#llok");

//get all source button
let sourceAll = document.querySelector("#sourceAll");

//sourceall button function
sourceAll.addEventListener("click", function () {
    phb.checked = !phb.checked;
    ee.checked = !ee.checked;
    cos.checked = !cos.checked;
    llok.checked = !llok.checked;
});

let setUpSearch = function () {

    //put checked sources in selected
    if (phb.checked) {
        sourceSelected[sourceSelected.length] = (phb.value);
    }
    if (ee.checked) {
        sourceSelected[sourceSelected.length] = (ee.value);
    }
    if (cos.checked) {
        sourceSelected[sourceSelected.length] = (cos.value);
    }
    if (llok.checked) {
        sourceSelected[sourceSelected.length] = (llok.value);
    }

    for (let i = 0; i < sourceSelected.length; i++) {
        let propName;
        if (sourceSelected[i] != undefined) {
            propName = sourceSelected[i];
            if (trinkets[propName] != undefined) {
                posTrinkets += (trinkets[propName]);
            }

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
                genBox.style.height = "400px";
            }
            if (numSelected == 10) {
                genBox.style.minHeight = "600px";
            }
        }
    }
}

//show the random trinket(s)
let showTrinkets = function () {
    let genTrinkets = [];
    //for numselected, generate trinkets
    for (let i = 0; i < numSelected; i++) {
        let rando = Math.floor(Math.random() * Math.floor(posTrinkets.length));
        while (rando == 0) {
            rando = Math.floor(Math.random() * Math.floor(posTrinkets.length));
        }
        if (posTrinkets[rando] != undefined) {
            console.log(rando);
            console.log(posTrinkets[rando]);
            genTrinkets[i] = posTrinkets[rando];
            p.innerHTML += (genTrinkets[i] + "<br>" + "<br>");
        }

    }
}

//onclick of generator button
genButton.addEventListener('click', function () {

    //clear old values
    p.innerHTML = "";
    sourceSelected = [];
    numSelected = 0;

    setUpSearch();
    loadTrinkets();
    showTrinkets();
});