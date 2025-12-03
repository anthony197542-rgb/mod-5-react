import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <link to="/ronaldo">Ronaldo</link>
            <link to="/user/messi">Messi</Link>
            <Link to="/user/br4gg">David Bragg</Link>
        </nav>
    )
}
export default Nav;