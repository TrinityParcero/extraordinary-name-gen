const NamePage = () => {
    return(
        <div>
            <header>
                <h1>
                    The Extraordinary <br />
                    Generator of Names
                </h1>
                <p id="name">Based on Gary Gygax's Extraordinary Book of Names!</p>
                <a href="./index.html">
                    <img src="./resources/images/home.png" alt="home icon" height="50px" width="50px" id="homeIcon" />
                </a>
            </header>

            <main>
                <div id="eth">
                    <p>names from where?</p>

                    <div class="twoGroup">
                        <fieldset id="british">
                            <legend>British</legend>
                            <button id="britishAll" class="allButton">
                                select all
                            </button>
                            <button id="britishNone" class="noneButton">
                                deselect all
                            </button>
                            <div class="option">
                                <input type="checkbox" id="british1" name="eth" value="welsh" />
                                <label for="british1">Welsh</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="british2" name="eth" value="cornish" />
                                <label for="british2">Cornish</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="british3" name="eth" value="english" />
                                <label for="british3">English</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="british4" name="eth" value="medieval" />
                                <label for="british4">Medieval</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="british5" name="eth" value="gaelic" />
                                <label for="british5">Gaelic</label>
                            </div>
                        </fieldset>

                        <fieldset id="mediterranean">
                            <legend>Mediterranean</legend>
                            <button id="mediterraneanAll" class="allButton">
                                select all
                            </button>
                            <button id="mediterraneanNone" class="noneButton">
                                deselect all
                            </button>

                            <div class="option">
                                <input type="checkbox" id="mediterranean1" name="eth" value="greek" />
                                <label for="mediterranean1">Greek</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="mediterranean2" name="eth" value="ancientGreek" />
                                <label for="mediterranean2">Ancient Greek</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="mediterranean3" name="eth" value="arabic" />
                                <label for="mediterranean3">Arabic</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="mediterranean4" name="eth" value="italian" />
                                <label for="mediterranean4">Italian</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="twoGroup">
                        <fieldset id="eastEuropean">
                            <legend>East European</legend>
                            <button id="eastEuropeanAll" class="allButton">
                                select all
                            </button>
                            <button id="eastEuropeanNone" class="noneButton">
                                deselect all
                            </button>

                            <div class="option">
                                <input type="checkbox" id="eastEuropean1" name="eth" value="russian" />
                                <label for="eastEuropean1">Russian</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="eastEuropean2" name="eth" value="polish" />
                                <label for="eastEuropean2">Polish</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="eastEuropean3" name="eth" value="hungarian" />
                                <label for="eastEuropean3">Hungarian</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="eastEuropean4" name="eth" value="finnish" />
                                <label for="eastEuropean4">Finnish</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="eastEuropean5" name="eth" value="armenian" />
                                <label for="eastEuropean5">Armenian</label>
                            </div>
                        </fieldset>

                        <fieldset id="european">
                            <legend>European</legend>
                            <button id="europeanAll" class="allButton">
                                select all
                            </button>
                            <button id="europeanNone" class="noneButton">
                                deselect all
                            </button>

                            <div class="option">
                                <input type="checkbox" id="european1" name="eth" value="spanish" />
                                <label for="european1">Spanish</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="european2" name="eth" value="dutch" />
                                <label for="european2">Dutch</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="european3" name="eth" value="french" />
                                <label for="european3">French</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="european4" name="eth" value="gaulic" />
                                <label for="european4">Gaulic</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="european5" name="eth" value="german" />
                                <label for="european5">German</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="european6" name="eth" value="norse" />
                                <label for="european6">Norse</label>
                            </div>
                        </fieldset>
                    </div>

                    <div class="twoGroup">
                        <fieldset id="asian">
                            <legend>Asian</legend>
                            <button id="asianAll" class="allButton">
                                select all
                            </button>
                            <button id="asianNone" class="noneButton">
                                deselect all
                            </button>

                            <div class="option">
                                <input type="checkbox" id="asian1" name="eth" value="chinese" />
                                <label for="asian1">Chinese</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="asian2" name="eth" value="japanese" />
                                <label for="asian2">Japanese</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="asian3" name="eth" value="mongolian" />
                                <label for="asian3">Mongolian</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="asian4" name="eth" value="korean" />
                                <label for="asian4">Korean</label>
                            </div>

                            <div class="option">
                                <input type="checkbox" id="asian5" name="eth" value="indian" />
                                <label for="asian5">Indian</label>
                            </div>
                        </fieldset>

                        <fieldset id="other">
                            <legend>Other</legend>
                            <div class="multiButtons">
                                <button id="otherAll" class="allButton">
                                    select all
                                </button>
                                <button id="otherNone" class="noneButton">
                                    deselect all
                                </button>
                            </div>
                            <div class="options">
                                <div class="option">
                                    <input type="checkbox" id="other1" name="eth" value="african" />
                                    <label for="other1">African</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="other2" name="eth" value="amerindian" />
                                    <label for="other2">Amerindian</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="other3" name="eth" value="aboriginal" />
                                    <label for="other3">Aboriginal</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="other5" name="eth" value="hebrew" />
                                    <label for="other5">Hebrew</label>
                                </div>

                                <div class="option">
                                    <input type="checkbox" id="other6" name="eth" value="romani" />
                                    <label for="other6">Romani</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div id="gen">
                    <p>what gender names?</p>
                    <fieldset>
                        <input type="radio" id="gender1" name="gender" value="female" />
                        <label for="gender1">Female</label>

                        <input type="radio" id="gender2" name="gender" value="male" />
                        <label for="gender2">Male</label>

                        <input type="radio" id="gender3" name="gender" value="both" />
                        <label for="gender3">Whatever</label>
                    </fieldset>

                    <p>want last names?</p>
                    <fieldset>
                        <input type="radio" id="last1" name="last" value="true" />
                        <label for="last1">Yes</label>
                        <input type="radio" id="last2" name="last" value="false" />
                        <label for="last2">No</label>
                    </fieldset>

                    <p>how many names?</p>
                    <fieldset>
                        <input type="radio" id="num1" name="num" value="1" />
                        <label for="num1">1</label>

                        <input type="radio" id="num2" name="num" value="5" />
                        <label for="num2">5</label>

                        <input type="radio" id="num3" name="num" value="10" />
                        <label for="num3">10</label>
                    </fieldset>
                </div>

                <div id="generator">
                    <p id="generated"></p>
                    <button id="genButton" onclick="genButtonClick()">generate</button>
                </div>
            </main>
            <footer>
                <p>Trin Parcero 2020</p>
            </footer>
        </div>
    );
}

export default NamePage;