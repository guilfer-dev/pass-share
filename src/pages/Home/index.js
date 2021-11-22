// import { useHistory } from 'react-router';
import { randomThings } from '../../.dev/helpers';
import './style.css'
import Header from '../../components/Header';

export default function Home() {

    // let history = useHistory();

    return (
        <>
            <Header></Header>
            <div className="home-page">

                <div className="sub-container">

                    <img src="https://blog.logomyway.com/wp-content/uploads/2020/08/netflix-logo-2-1.jpg" alt="Netflix" />

                    <button type="submit" className="mng-sub">
                        <i class="material-icons md-36">
                            settings
                        </i></button>
                    <section className="sub-body" >
                        <div className="acc-owner">
                            <strong>Account owner: </strong><p>{randomThings(1, 'names')}</p>
                        </div>
                        <div className="share-between">
                            <strong>Shares: </strong> <p>3/4</p>
                        </div>
                        <div className="payment-status">
                            <strong>Payment status: </strong><p>{randomThings(1, 'payment-status')}</p>
                        </div>
                        <div className="payment-status">
                            <strong>Next payment: </strong><p>{Intl.DateTimeFormat('pt-BR').format(Date.now())}</p>
                        </div>
                        <div className="current-value">
                            <strong>Current shared value: </strong><p>{Intl.NumberFormat('pt-BR', {
                                style: 'currency', currency: 'BRL'
                            }).format(randomThings(1, 'values'))}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}