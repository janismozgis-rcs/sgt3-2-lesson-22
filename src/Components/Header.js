import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [mainMenuCollapsed, setMainMenuCollapsed] = useState(true);

    const toggleMainMenu = () => {
        setMainMenuCollapsed(!mainMenuCollapsed);
    }

    let mainMenuClasses = 'collapse navbar-collapse';
    if (!mainMenuCollapsed) {
        mainMenuClasses += ' show';
    }

    let menuTogglerButtonClasses = 'navbar-toggler';
    if (mainMenuCollapsed) {
        menuTogglerButtonClasses += ' collapsed';
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button onClick={toggleMainMenu} className={menuTogglerButtonClasses} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={mainMenuClasses} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/page-1">Page 1</NavLink>
                            <NavLink className="nav-link" to="/page-2">Page 2</NavLink>
                            <NavLink className="nav-link" to="/page-3">Page 3</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;