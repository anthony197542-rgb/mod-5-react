import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/ronaldo">Ronaldo</Link>
            <Link to="/user/messi">Messi</Link>
            <Link to="/user/br4gg">David Bragg</Link>
        </nav>
    )
}
export default Nav;