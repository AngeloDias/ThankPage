import React from 'react';
import malinois from '../images/malinois.png';

export default function OrderConfirmationComponent() {
    return(
        <div>
            <div className="section no-pad-bot order-message">
                <div className="container">
                <br></br><br></br>

                <h1 className="header center black-text"><strong>Your dog is safe</strong></h1>
                <div className="row center">
                    <p className="header col s12 light paragraph-font">Hi, Fulano. We're glad to tell you that your dog has arrived safe and sound to its new place.
                        We'll let you know about the informations update.</p>
                </div>
                <div className="row center">
                    <a href="" className="btn-large waves-effect waves-light black round-button">View the dog's health details</a>
                </div>
                <br></br><br></br>

                </div>
            </div>

            <div className="container order-items">
                <div className="section">
                    <div className="row">
                        <h3 className="center">Dog health</h3>

                        <div className="col s12 m6 l6">
                            <div className="icon-block">
                                <img src={malinois} alt="dog" width="300" className="materialboxed" />
                            </div>
                        </div>

                        <div className="col s12 m6 l6">
                            <div className="icon-block">
                                <h5 className="center">Malinois shepherd</h5>

                                <p className="light">The Belgian Malinois (pronounced MAL-in-wah) is a medium-size Belgian shepherd dog that at first glance resembles a German Shepherd Dog. Malinois are shorthaired, fawn-colored dogs with a black mask. They are one of four types of Belgian herding dogs, and have been shown in the U.S. as a separate breed since 1959.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}