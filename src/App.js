import {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import AddReview from "./components/add-review";
import Restaurant from "./components/restaurant";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
    const [user, setUser] = useState(null)

    // Dummy login system; no real auth
    const login = async (user = null) => {
        setUser(user)
    }

    const logout = async () => {
        setUser(null)
    }

    return (
        <div className="App">
            <nav className={'navbar navbar-expand-lg navbar-dark bg-dark px-3'}>
                <a href="/" className={'navbar-brand'}>
                    Restaurant Reviews
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/restaurants'} className={'nav-link'}>
                                Restaurants
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                user ? (
                                    <a onClick={logout} className={'nav-link'} style={{cursor: "pointer"}}>
                                        Logout {user.name}
                                    </a>
                                ) : (
                                    <Link to={'/login'} className={'nav-link'}>
                                        Login
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-3">
                <Routes>
                    {["/", "/restaurants"].map((path, index) => {
                        return (
                            <Route
                                path={path}
                                element={<RestaurantsList/>}
                                key={index}
                            />
                        );
                    })}
                    <Route
                        path={'/restaurants/:id/review'}
                        element={<AddReview user={user}/>}
                    />
                    <Route
                        path={'/restaurants/:id'}
                        element={<Restaurant user={user}/>}
                    />
                    <Route
                        path={'/login'}
                        element={<Login login={login}/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
