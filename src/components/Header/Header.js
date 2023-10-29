import logo from '../../logo.svg';
import Profile, {user} from '../Profile/Profile';
import './Header.css';

function Header() {
    return (
    <header className="App-header">
        {/* {btnText} */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Test of export: {user.name}</p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React (1)
        </a>
    </header>
    );
}

export default Header;