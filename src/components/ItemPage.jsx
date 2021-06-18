const ItemPage = () => {
    return(
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="stylesheet" type="text/css" href="./styles/home.css" />
                <link href="https://fonts.googleapis.com/css?family=Catamaran:300,500,900" rel="stylesheet" />
                <title>Random Magic Items</title>
                <link rel="icon" type="image/png" href="./resources/images/magicItems.jpg" />
            </head>

            <body>
                <header>
                    <h1>The Extraordinary</h1>
                    <h1>Generator of Magic Items</h1>
                    <p id="name">Give your players cool stuff!</p>
                    <a href="./index.html"><img src="./resources/images/home.png" alt="home icon" height="50px" width="50px" id="homeIcon"/></a>
                </header>

                <h2>Nothing here yet! Stay tuned!</h2>

                <main></main>

                <footer>
                    <p>Illustrations by Larry Elmore</p>
                    <p>Trin Parcero 2020</p>
                </footer>
                <script type="text/javascript" src="src/item.js"></script>
            </body>
        </html>
    );
}

export default ItemPage;