import { NavLink } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">Col 1</div>
                <div className="col">Col 2</div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;