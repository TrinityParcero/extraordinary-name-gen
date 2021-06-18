const TrinketPage = () => {
    return(
        <div>
            <header>
                <h1>The Extraordinary</h1>
                <h1>Generator of Trinkets</h1>
                <p id="name">For all your trinket needs!</p>
                <a href="./index.html"><img src="./resources/images/home.png" alt="home icon" height="50px" width="50px"
                        id="homeIcon" /></a>
            </header>
            <main>
                <fieldset id="sources">
                    <legend>Source Material</legend>
                    <button id="sourceAll" class="allButton">select all</button>
                    <div class="option">
                        <input type="checkbox" id="phb" name="source" value="phb" />
                        <label for="phb">Player's Handbook</label>
                    </div>

                    <div class="option">
                        <input type="checkbox" id="ee" name="source" value="ee" />
                        <label for="ee">Elemental Evil</label>
                    </div>

                    <div class="option">
                        <input type="checkbox" id="cos" name="source" value="cos" />
                        <label for="cos">Curse of Strahd</label>
                    </div>

                    <div class="option">
                        <input type="checkbox" id="llok" name="source" value="llok" />
                        <label for="llok">Lost Laboratory of Kwalish</label>
                    </div>
                </fieldset>

                <div id="gen">
                    <div id="num">
                        <p id="howMany">how many trinkets?</p>
                        <fieldset>
                            <div class="option">
                                <input type="radio" id="num1" name="num" value="1" />
                                <label for="num1">1</label>
                            </div>

                            <div class="option">
                                <input type="radio" id="num2" name="num" value="5" />
                                <label for="num2">5</label>
                            </div>

                            <div class="option">
                                <input type="radio" id="num3" name="num" value="10" />
                                <label for="num3">10</label>
                            </div>
                        </fieldset>
                    </div>

                    <div id="generator">
                        <p id="generated"></p>
                        <button id="genButton">generate</button>
                    </div>
                </div>
            </main>

            <footer>
                <p>Illustrations by Larry Elmore</p>
                <p>Trin Parcero 2020</p>
            </footer>
            <script type="text/javascript" src="./resources/json/trinket.js"></script>
            <script type="text/javascript" src="./src/trinket.js"></script>
        </div>
    );
};

export default TrinketPage;