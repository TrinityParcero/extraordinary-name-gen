const CharPage = () => {
    return(
        <html>

        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <link rel="stylesheet" type="text/css" href="./styles/char.css" />
            <link href="https://fonts.googleapis.com/css?family=Catamaran:300,500,900" rel="stylesheet" />
            <title>Random Characters</title>
            <link rel="icon" type="image/png" href="./resources/images/class.jpg" />
        </head>

        <body>
            <header>
                <h1>The Extraordinary</h1>
                <h1>Generator of Characters</h1>
                <p id="name">For the indecisive adventurer!</p>
                <a href="./index.html"><img src="./resources/images/home.png" alt="home icon" height="50px" width="50px"
                        id="homeIcon" /></a>
            </header>
            <main>
                <p>Very in-progress, pardon the mess!</p>
                <div class="column">
                    <div class="block" id="sources">
                        <fieldset>
                            <legend>Include material from</legend>
                            <button class="allButton" id="sourceAll">select all</button>
                            <div class="option">
                                <input type="checkbox" id="source1" name="source" value="phb" />
                                <label for="source1">Player's Handbook</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source2" name="source" value="eberron" />
                                <label for="source2">Eberron</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source3" name="source" value="volos" />
                                <label for="source3">Volo's Guide</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source4" name="source" value="ravnica" />
                                <label for="source4">Guide to Ravnica</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source8" name="source" value="mordekainens" />
                                <label for="source8">Mordekainen's Tome</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source7" name="source" value="scag" />
                                <label for="source7">Sword Coast</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source5" name="source" value="ua" />
                                <label for="source5">Unearthed Arcana</label>
                            </div>
                            <div class="option">
                                <input type="checkbox" id="source6" name="source" value="misc" />
                                <label for="source6">Miscellaneous</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="row">
                        <div class="block" id="alignment">
                            <fieldset id="alignmentFieldset">
                                <legend>Alignment</legend>
                                <button class="allButton" id="alignmentAll">
                                    select all
                                </button>
                                <fieldset>
                                    <button class="allButton" id="goodAll">Good</button>
                                    <div class="option">
                                        <input type="checkbox" id="good1" name="align" />
                                        <label for="good1">Lawful Good</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="good2" name="align" />
                                        <label for="good2">Neutral Good</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="good3" name="align" />
                                        <label for="good3">Chaotic Good</label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <button class="allButton" id="neutralAll">Neutral</button>
                                    <div class="option">
                                        <input type="checkbox" id="neutral1" name="align" />
                                        <label for="good4">Lawful Neutral</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="neutral2" name="align" />
                                        <label for="neutral2">True Neutral</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="neutral3" name="align" />
                                        <label for="neutral3">Chaotic Neutral</label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <button class="allButton" id="allEvil">Evil</button>
                                    <div class="option">
                                        <input type="checkbox" id="evil1" name="align" />
                                        <label for="evil1">Lawful Evil</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="evil2" name="align" />
                                        <label for="evil2">Neutral Evil</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="evil3" name="align" />
                                        <label for="evil3">Chaotic Evil</label>
                                    </div>
                                </fieldset>
                            </fieldset>
                        </div>

                        <div class="block" id="name">
                            <fieldset id="nameFieldset">
                                <button class="allButton" id="nameAll">
                                    do whatever
                                </button>
                                <legend>Name</legend>
                                <fieldset>
                                    <legend>Origin</legend>
                                    <div class="option">
                                        <input type="checkbox" id="english" name="eth" value="english" />
                                        <label for="english">English</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="mediterranean" name="eth" value="mediterranean" />
                                        <label for="mediterranean">Mediterranean</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="eastEuropean" name="eth" value="eastEuropean" />
                                        <label for="eastEuropean">East European</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="european" name="eth" value="european" />
                                        <label for="european">European</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="asian" name="eth" value="asian" />
                                        <label for="asian">Asian</label>
                                    </div>

                                    <div class="option">
                                        <input type="checkbox" id="other" name="eth" value="other" />
                                        <label for="other">Other</label>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Gender</legend>
                                    <div class="option">
                                        <input type="radio" id="gender1" name="gender" value="female" />
                                        <label for="gender1">Female</label>
                                    </div>

                                    <div class="option">
                                        <input type="radio" id="gender2" name="gender" value="male" />
                                        <label for="gender2">Male</label>
                                    </div>

                                    <div class="option">
                                        <input type="radio" id="gender3" name="gender" value="both" />
                                        <label for="gender3">Whatever</label>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Last Name?</legend>
                                    <div class="option">
                                        <input type="radio" id="last1" name="last" value="true" />
                                        <label for="last1">Yes</label>
                                    </div>
                                    <div class="option">
                                        <input type="radio" id="last2" name="last" value="false" />
                                        <label for="last2">No</label>
                                    </div>
                                </fieldset>
                            </fieldset>
                        </div>
                    </div>

                    <div class="block" id="race">
                        <fieldset>
                            <button class="allButton" id="raceAll">
                                select all
                            </button>
                            <legend>Race</legend>
                            <fieldset>
                                <button class="allButton" id="racePhbAll">
                                    Player's Handbook
                                </button>
                                <div class="option">
                                    <input type="checkbox" id="racePhb1" name="race" value="dragonborn" />
                                    <label for="racePhb1">Dragonborn</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb2" name="race" value="dwarf" />
                                    <label for="racePhb2">Dwarf</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb3" name="race" value="elf" />
                                    <label for="racePhb3">Elf</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb4" name="race" value="gnome" />
                                    <label for="racePhb4">Gnome</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb5" name="race" value="halfling" />
                                    <label for="racePhb5">Halfling</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb6" name="race" value="half-orc" />
                                    <label for="racePhb6">Half-Orc</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb7" name="race" value="tiefling" />
                                    <label for="racePhb7">Tiefling</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb8" name="race" value="human" />
                                    <label for="racePhb8">Human</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="racePhb9" name="race" value="half-elf" />
                                    <label for="racePhb9">Half-Elf</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="raceEberronAll">
                                    Eberron
                                </button>
                                <div class="option">
                                    <input type="checkbox" id="raceEberron1" name="race" value="changeling" />
                                    <label for="raceEberron1">Changeling</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceEberron2" name="race" value="shifter" />
                                    <label for="raceEberron2">Shifter</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceEberron3" name="race" value="warforged" />
                                    <label for="raceEberron3">Warforged</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceEberron4" name="race" value="kalashtar" />
                                    <label for="raceEberron4">Kalashtar</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="raceVolosAll">
                                    Volo's Guide
                                </button>
                                <div class="option">
                                    <input type="checkbox" id="raceVolos1" name="race" value="aasimar" />
                                    <label for="raceVolos1">Aasimar</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos2" name="race" value="firbolg" />
                                    <label for="raceVolos2">Firbolg</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos3" name="race" value="hobgoblin" />
                                    <label for="raceVolos3">Hobgoblin</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos4" name="race" value="kobold" />
                                    <label for="raceVolos4">Kobold</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos5" name="race" value="orc" />
                                    <label for="raceVolos5">Orc</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos6" name="race" value="triton" />
                                    <label for="raceVolos6">Triton</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos7" name="race" value="bugbear" />
                                    <label for="raceVolos7">Bugbear</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos8" name="race" value="goblin" />
                                    <label for="raceVolos8">Goblin</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos9" name="race" value="kenku" />
                                    <label for="raceVolos9">Kenku</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos10" name="race" value="lizardfolk" />
                                    <label for="raceVolos10">Lizardfolk</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos11" name="race" value="tabaxi" />
                                    <label for="raceVolos11">Tabaxi</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceVolos12" name="race" value="yuan-ti" />
                                    <label for="raceVolos12">Yuan-ti Pureblood</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="raceRavnicaAll">
                                    Ravnica
                                </button>
                                <div class="option">
                                    <input type="checkbox" id="raceRavnica1" name="race" value="centaur" />
                                    <label for="raceRavnica1">Centaur</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceRavnica2" name="race" value="minotaur" />
                                    <label for="raceRavnica2">Minotaur</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceRavnica3" name="race" value="vedalken" />
                                    <label for="raceRavnica3">Vedalken</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceRavnica4" name="race" value="loxodon" />
                                    <label for="raceRavnica4">Loxodon</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceRavnica5" name="race" value="simic" />
                                    <label for="raceRavnica5">Simic Hybrid</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="raceUaAll">
                                    Unearthed Arcana
                                </button>

                                <div class="option">
                                    <input type="checkbox" id="raceUa1" name="race" value="merfolk" />
                                    <label for="raceUa1">Merfolk</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="raceMordekainensAll">Mordekainen's</button>
                                <div class="option">
                                    <input type="checkbox" id="raceMordekainens1" name="race" value="gith" />
                                    <label for="raceMordekainens1">Gith</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="raceMordekainens2" name="race" value="eladrin" />
                                    <label for="raceMordekainens2">Eladrin</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="raceOtherAll">
                                    Other
                                </button>
                                <div class="option">
                                    <input type="checkbox" id="raceOther1" name="race" value="tortle" />
                                    <label for="raceOther1">Tortle</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceOther2" name="race" value="verdan" />
                                    <label for="raceOther2">Verdan</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceOther3" name="race" value="aarakocra" />
                                    <label for="raceOther3">Aarakocra</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceOther4" name="race" value="genasi" />
                                    <label for="raceOther4">Genasi</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="raceOther5" name="race" value="goliath" />
                                    <label for="raceOther5">Goliath</label>
                                </div>
                            </fieldset>
                        </fieldset>
                    </div>

                    <div class="block" id="class">
                        <fieldset>
                            <button class="allButton" id="classAll">
                                select all
                            </button>
                            <legend>Class</legend>
                            <fieldset>
                                <button class="allButton" id="classPhbAll">Player's Handbook</button>
                                <div class="option">
                                    <input type="checkbox" id="classPhb1" name="class" value="barbarian" />
                                    <label for="classPhb1">Barbarian</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb2" name="class" value="bard" />
                                    <label for="classPhb2">Bard</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb3" name="class" value="cleric" />
                                    <label for="classPhb3">Cleric</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb4" name="class" value="druid" />
                                    <label for="classPhb4">Druid</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb5" name="class" value="fighter" />
                                    <label for="classPhb5">Fighter</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb6" name="class" value="monk" />
                                    <label for="classPhb6">Monk</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb7" name="class" value="paladin" />
                                    <label for="classPhb7">Paladin</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb8" name="class" value="ranger" />
                                    <label for="classPhb8">Ranger</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb9" name="class" value="rogue" />
                                    <label for="classPhb9">Rogue</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb10" name="class" value="sorcerer" />
                                    <label for="classPhb10">Sorcerer</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb11" name="class" value="warlock" />
                                    <label for="classPhb11">Warlock</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="classPhb12" name="class" value="wizard" />
                                    <label for="classPhb12">Wizard</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <button class="allButton" id="classEberronAll">Eberron</button>
                                <div class="option">
                                    <input type="checkbox" id="classEberron1" name="class" value="artificer" />
                                    <label for="classEberron1">Artificer</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <button class="allButton" id="classUaAll">Unearthed Arcana</button>
                                <div class="option">
                                    <input type="checkbox" id="classUa1" name="class" value="mystic" />
                                    <label for="classUa1">Mystic</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <button class="allButton" id="classOtherAll">Other</button>
                                <div class="option">
                                    <input type="checkbox" id="classOther1" name="class" value="bloodHunter" />
                                    <label for="classOther1">Blood Hunter</label>
                                </div>
                            </fieldset>
                        </fieldset>
                    </div>

                    <div class="block" id="background">
                        <fieldset>
                            <button class="allButton" id="backgroundAll">
                                select all
                            </button>
                            <legend>Background</legend>
                            <fieldset>
                                <button class="allButton" id="backgroundPhbAll">Player's Handbook</button>
                                <div class="option">
                                    <input type="checkbox" id="bgPhb1" name="bg" value="acolyte" />
                                    <label for="bgPhb1">Acolyte</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb2" name="bg" value="charlatan" />
                                    <label for="bgPhb2">Charlatan</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb5" name="bg" value="criminal" />
                                    <label for="bgPhb5">Criminal</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb6" name="bg" value="entertainer" />
                                    <label for="bgPhb6">Entertainer</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb7" name="bg" value="gladiator" />
                                    <label for="bgPhb7">Gladiator</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb8" name="bg" value="folkHero" />
                                    <label for="bgPhb8">Folk Hero</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb9" name="bg" value="guildArtisan" />
                                    <label for="bgPhb9">Guild Artisan</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb10" name="bg" value="hermit" />
                                    <label for="bgPhb10">Hermit</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb11" name="bg" value="noble" />
                                    <label for="bgPhb11">Noble</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb12" name="bg" value="knight" />
                                    <label for="bgPhb12">Knight</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb13" name="bg" value="outlander" />
                                    <label for="bgPhb13">Outlander</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb14" name="bg" value="sage" />
                                    <label for="bgPhb14">Sage</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb15" name="bg" value="sailor" />
                                    <label for="bgPhb15">Sailor</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb16" name="bg" value="pirate" />
                                    <label for="bgPhb16">Pirate</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb17" name="bg" value="soldier" />
                                    <label for="bgPhb17">Soldier</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgPhb18" name="bg" value="urchin" />
                                    <label for="bgPhb18">Urchin</label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <button class="allButton" id="backgroundScagAll">Sword Coast</button>
                                <div class="option">
                                    <input type="checkbox" id="bgScag1" name="bg" value="cityWatch" />
                                    <label for="bgScag1">City Watch</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag2" name="bg" value="courtier" />
                                    <label for="bgScag2">Courtier</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag3" name="bg" value="factionAgent" />
                                    <label for="bgScag3">Faction Agent</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag4" name="bg" value="farTraveler" />
                                    <label for="bgScag4">Far Traveler</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag5" name="bg" value="inheritor" />
                                    <label for="bgScag5">Inheritor</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag6" name="bg" value="cloisteredScholar" />
                                    <label for="bgScag6">Cloistered Scholar</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag7" name="bg" value="mercenaryVeteran" />
                                    <label for="bgScag7">Mercenary Veteran</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag8" name="bg" value="uthgardtTribeMember" />
                                    <label for="bgScag8">Uthgardt Tribe Member</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag9" name="bg" value="clanCrafter" />
                                    <label for="bgScag9">Clan Crafter</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag10" name="bg" value="knightOfTheOrder" />
                                    <label for="bgScag10">Knight of the Order</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag11" name="bg" value="urbanBountyHunter" />
                                    <label for="bgScag11">Urban Bounty Hunter</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="bgScag12" name="bg" value="waterdhavianNoble" />
                                    <label for="bgScag12">Waterdhavian Noble</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="backgroundRavnicaAll">Ravnica</button>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica1" name="bg" value="azoriusFunctionary" />
                                    <label for="bgRavnica1">Azorius Functionary</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica2" name="bg" value="dimirOperative" />
                                    <label for="bgRavnica2">Dimir Operative</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica3" name="bg" value="gruulAnarch" />
                                    <label for="bgRavnica3">Gruul Anarch</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica4" name="bg" value="orzhovRepresentative" />
                                    <label for="bgRavnica4">Orzhov Representative</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica5" name="bg" value="selesnyaInitiate" />
                                    <label for="bgRavnica5">Selesnya Initiate</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica6" name="bg" value="borosLegionnaire" />
                                    <label for="bgRavnica6">Boros Legionnaire</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica7" name="bg" value="golgariAgent" />
                                    <label for="bgRavnica7">Golgari Agent</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica8" name="bg" value="izzetEngineer" />
                                    <label for="bgRavnica8">Izzet Engineer</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica9" name="bg" value="rakdosCultist" />
                                    <label for="bgRavnica9">Rakdos Cultist</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgRavnica10" name="bg" value="simicScientist" />
                                    <label for="bgRavnica10">Simic Scientist</label>
                                </div>
                            </fieldset>

                            <fieldset>
                                <button class="allButton" id="backgroundOtherAll">Other</button>
                                <div class="option">
                                    <input type="checkbox" id="bgOther1" name="bg" value="celebrityAdventurersScion" />
                                    <label for="bgOther1">Celebrity Adventurer's Scion</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther2" name="bg" value="gambler" />
                                    <label for="bgOther2">Gambler</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther3" name="bg" value="rivalIntern" />
                                    <label for="bgOther3">Rival Intern</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther4" name="bg" value="failedMerchant" />
                                    <label for="bgOther4">Failed Merchant</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther5" name="bg" value="plaintiff" />
                                    <label for="bgOther5">Plaintiff</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther6" name="bg" value="faceless" />
                                    <label for="bgOther6">Faceless</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther7" name="bg" value="fisher" />
                                    <label for="bgOther7">Fisher</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther8" name="bg" value="marine" />
                                    <label for="bgOther8">Marine</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther9" name="bg" value="smuggler" />
                                    <label for="bgOther9">Smuggler</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther10" name="bg" value="shipwright" />
                                    <label for="bgOther10">Shipwright</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther11" name="bg" value="anthropologist" />
                                    <label for="bgOther11">Anthropologist</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther12" name="bg" value="archaeologist" />
                                    <label for="bgOther12">Archaeologist</label>
                                </div>
                                <div class="option">
                                    <input type="checkbox" id="bgOther13" name="bg" value="hauntedOne" />
                                    <label for="bgOther13">Haunted One</label>
                                </div>
                            </fieldset>
                        </fieldset>
                    </div>
                </div>

                <div id="generator">
                    <p id="generated"></p>
                    <button id="genButton">generate</button>
                </div>
            </main>

            <footer>
                <p>Trin Parcero 2020</p>
            </footer>
            <script type="text/javascript" src="resources/json/name.js"></script>
            <script type="text/javascript" src="resources/json/classes.js"></script>
            <script type="text/javascript" src="resources/json/races.js"></script>
            <script type="text/javascript" src="./src/name.js"></script>
            <script type="text/javascript" src="./src/char.js"></script>
        </body>

        </html>
    );
}

export default CharPage;