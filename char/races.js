//RACES
let races = ["eladrin", "gith", "centaur", "minotaur", "dragonborn", "dwarf", "elf", "aarakocra", "genasi", "goliath", "gnome", "changeling", "shifter", "warforged", "halfling", "half-orc", "tiefling", "human", "half-elf", "merfolk"];
const races = {
    "eladrin": {
        "source": "https://media.wizards.com/2017/dnd/downloads/UA-Eladrin-Gith.pdf",
        "official": false
    },
    "gith": {
        "source": "https://media.wizards.com/2017/dnd/downloads/UA-Eladrin-Gith.pdf",
        "subraces": [
            "githyanki",
            "githzerai"
        ],
        "official": false
    },
    "centaur": {
        "source": "https://media.wizards.com/2018/dnd/downloads/UA-Centaur.pdf",
        "official": false
    },
    "minotaur": {
        "source": "https://media.wizards.com/2018/dnd/downloads/UA-Centaur.pdf",
        "official": false
    },
    "dragonborn": {
        "source": "https://www.dndbeyond.com/characters/races/dragonborn",
        "subraces": ["black", "blue", "brass", "bronze", "copper", "gold", "green", "red", "silver", "white"],
        "official": true
    },
    "dwarf": {
        "source": "https://www.dndbeyond.com/characters/races/dwarf",
        "subraces": ["hill dwarf", "mountain dwarf"],
        "official": true
    },
    "elf": {
        "source": "https://www.dndbeyond.com/characters/races/elf",
        "subraces": ["high elf", "wood elf", "drow"],
        "official": true
    }

}
    
let elf = new Race("https://www.dndbeyond.com/characters/races/elf");
elf.setSubraces("high, wood, drow");

let aarakocra = new Race("http://media.wizards.com/2015/downloads/dnd/EE_PlayersCompanion.pdf");

let genasi = new Race("http://media.wizards.com/2015/downloads/dnd/EE_PlayersCompanion.pdf");
genasi.setSubraces("earth, air, water, fire");

let goliath = new Race("http://media.wizards.com/2015/downloads/dnd/EE_PlayersCompanion.pdf");

let gnome = new Race("https://www.dndbeyond.com/characters/races/gnome");

let changeling = new Race("http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf");

let shifter = new Race("http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf");
shifter.setSubraces("razorclaw, longtooth");

let warforged = new Race("http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf");

let halfOrc = new Race("https://www.dndbeyond.com/characters/races/half-orc");

let merfolk = new Race("https://media.wizards.com/2016/downloads/magic/Plane%20Shift%20Zendikar.pdf");
