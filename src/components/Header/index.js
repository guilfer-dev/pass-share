import './style.css'
import logoImg from '../../assets/logo.gif'
import { useHistory, useLocation, Link } from 'react-router-dom';

export default function Header() {

    let history = useHistory();
    let location = useLocation();

    return (

        <header className="global-header" >
            <Link to="/"><img src={logoImg} alt="Logo" /></Link>
            <div className="head-btns">
                {
                    location.pathname !== '/' &&
                    <button onClick={() => history.push('/')}>MY POOLS</button>
                }
                {
                    location.pathname !== '/new-pool' &&
                    <button onClick={() => history.push('/new-pool')}>NEW POOL</button>
                }
                {
                    location.pathname !== '/pool-list' &&
                    <button onClick={() => history.push('/pool-list')}>POOLS AVAILABLE</button>
                }
            </div>
            <span >Wellcome, Guilherme!</span>
            <Link to="/login" className="logout"><i class="material-icons logout">logout</i>
            </Link>

        </header >

    )

}