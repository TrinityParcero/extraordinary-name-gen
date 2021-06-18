const MainPage = () => {
    return (
        <div>
            <header>
                <h1>The Extraordinary</h1>
                <h1>Generator of Things</h1>
                <p id="name">A random generator tool for Dungeons &amp; Dragons</p>
            </header>
            <main>
                <a href="./name.html"><img src="./resources/images/elmore.jpg" alt="name illustration" height="130px" />Names</a>
                <a href="./char.html"><img src="./resources/images/char.jpg" height="132px" alt="character illustration" />Characters</a>
                <a href="./trinket.html"><img src="./resources/images/trinket.jpg" alt="trinkets illustration" height="130px" />Trinkets</a>
                <a href="./items.html"><img src="./resources/images/magicItems.jpg" alt="magic items illustration" height="130px" />Magic Items</a>
            </main>
            <footer>
                <p>Illustrations by Larry Elmore</p>
                <p>Trin Parcero 2021</p>
            </footer>
        </div >
    );
}

export default MainPage;