import { useHistory } from 'react-router';

import './style.css';
import logoImg from '../../assets/logo2.gif'


export default function Login() {

    let history = useHistory();

    function handleLogin(e) {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className="login-page">
            <div className="auth-container">
                <img src={logoImg} alt="" srcset="" />
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">USER</label>
                    <input name="email" type="email" placeholder="E-mail" />

                    <label htmlFor="password">PASSWORD</label>
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit" className="login">SIGNIN</button>
                </form>
            </div>
        </div>
    )
}
