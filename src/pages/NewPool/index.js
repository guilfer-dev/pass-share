
import './style.css'
import Header from '../../components/Header';
import { randomThings } from '../../.dev/helpers';

export default function NewPool() {

    return (
        <>
            <Header></Header>
            <div className="new-subscription-page">
                <div className="new-pool-form-container">
                    <form>
                        <section className="service-information">
                            <div className="input-group">
                                <label htmlFor="services">SERVICE </label>
                                <select name="services">
                                    {randomThings(6, 'services').map(e => (<option>{e}</option>))}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="plan">PLAN </label>
                                <select name="plan">
                                    {randomThings(3, 'plans').map(e => (<option>{e}</option>))}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="shares-available">SHARES AVAILABLE </label>
                                <select name="shares-available">
                                    {[1, 2, 3, 4].map(e => (<option>{e}</option>))}
                                </select><span> /4</span>
                            </div>
                        </section>


                        <section>
                            <div className="input-group">
                                <strong>PEOPLE ABLE TO PARTICIPATE ON THE POOL: </strong>
                                <div className="people-pool">
                                    {
                                        randomThings(10, 'names').map(e => (<>
                                            <label><input type="checkbox" id={e} name={e} />{e}
                                            </label>
                                        </>
                                        ))
                                    }
                                </div>
                            </div>
                        </section>

                        <section className="payment-information">
                            <strong>PEOPLE ABLE TO PARTICIPATE ON THE POOL: </strong>
                            <div className="payment-method-list">
                                {[1, 2, 3, 4].map(e => (
                                    <div className="input-group">
                                        <label><input type="checkbox" id={e} name={e} />{`METHOD ${e}`}
                                        </label>
                                        <input type="text" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <button type="submit">CREATE POOL</button>

                    </form>
                </div>
            </div >
        </>
    )
}