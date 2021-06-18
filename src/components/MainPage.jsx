import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import NamePage from './src/components/NamePage';
import TrinketPage from './src/components/TrinketPage';
import CharPage from './src/components/CharPage';
import ItemPage from './src/components/ItemPage';

const MainPage = () => {
    return (
        <div>
            <header>
                <h1>The Extraordinary</h1>
                <h1>Generator of Things</h1>
                <p id="name">A random generator tool for Dungeons &amp; Dragons</p>
            </header>
            <main>
                <Router>
                    <ul>
                        <li>
                            <Link to="/name"> 
                                Names <img src="./images/elmore.jpg" alt="name illustration" height="130px" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/char"> 
                                Characters <img src="./images/char.jpg" height="132px" alt="character illustration" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/trinket"> 
                                Trinkets <img src="./images/trinket.jpg" alt="trinkets illustration" height="130px" /> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/item"> 
                                Magic Items <img src="./images/magicItems.jpg" alt="magic items illustration" height="130px" /> 
                            </Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/" component={MainPage} />
                        <Route path="/name" component={NamePage} />
                        <Route path="/trinket" component={TrinketPage} />
                        <Route path="/char" component={CharPage} />
                        <Route path="/items" component={ItemPage} />
                    </Switch>

                </Router>
            </main>
            <footer>
                <p>Illustrations by Larry Elmore</p>
                <p>Trin Parcero 2021</p>
            </footer>
        </div >
    );
}

export default MainPage;