import React from 'react';
import malinois from '../images/malinois.png';

export default function OrderConfirmationComponent() {
    return(
        <div>
            <div className="section no-pad order-message">
                <div className="container">
                    <br></br><br></br>

                    <h1 className="header center black-text"><strong>Your dog is safe</strong></h1>
                    <div className="row center">
                        <p className="header col s12 light paragraph-font">Hi, Fulano. We're glad to tell you that your dog has arrived safe and sound to its new place.
                            We'll let you know about the informations update.</p>
                    </div>
                    <div className="row center">
                        <a href="#" className="btn-large waves-effect waves-light black round-button">View the dog's health details</a>
                    </div>
                    <br></br><br></br>

                </div>
            </div>

            <div className="container order-items">
                <div className="section no-pad">
                    <div className="row">
                        <h3 className="center">Dog health</h3>

                        <div className="col s12 m6 l6">
                            <div>
                                <img src={malinois} alt="dog" width="250" className="materialboxed center" />
                            </div>
                        </div>

                        <div className="col s12 m6 l6">
                            <div>
                                <h5 className="center">Malinois shepherd</h5>

                                <p className="light">The Belgian Malinois (pronounced MAL-in-wah) is a medium-size Belgian shepherd dog that at first glance resembles a German Shepherd Dog. Malinois are shorthaired, fawn-colored dogs with a black mask. They are one of four types of Belgian herding dogs, and have been shown in the U.S. as a separate breed since 1959.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="line-horizontal-container">
                    <div className="line-horizontal"></div>
                </div>

                <div className="section no-pad">
                    <div>
                        <table className="responsive-table center-table" border="0">
                            <tbody>
                                <tr className="no-border">
                                    <td><strong>Height:</strong></td>
                                    <td>22 to 26 inches tall at the shoulder</td>
                                </tr>
                                <tr className="no-border">
                                    <td><strong>Weight:</strong></td>
                                    <td>40 to 80 pounds</td>
                                </tr>
                                <tr className="no-border">
                                    <td><strong>Life Span:</strong></td>
                                    <td>12 to 14 years</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="section no-pad order-shipping-info">
                    <div className="row center">
                        <h3>Order & shipping info</h3>

                        <div className="col s12 m6 l6">
                            <div className="icon-block">
                                <h5><strong>Dog details</strong></h5>
                                <p className="light"><strong>Name:</strong> Jose Sanchez del Río</p>
                                <p className="light"><strong>Sex:</strong> macho</p>
                                <p className="light"><strong>Age:</strong> 5 months</p>
                            </div>
                        </div>

                        <div className="col s12 m6 l6">
                            <div className="icon-block">
                                <h5><strong>Shipping address</strong></h5>
                                <p className="light"><strong>Street:</strong> Aquela ali do lado</p>
                                <p className="light"><strong>Neighborhood:</strong> Muritiba</p>
                                <p className="light"><strong>City:</strong> Atlântida</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section no-pad">
                    <div className="row center">
                        <div className="col s12 m6 l6">
                            <div>
                                <h5><strong>We're here to help</strong></h5>

                                <p className="light">If you want to contact me, it's my <a href="#">WhatsApp number</a>.</p>
                            </div>
                        </div>

                        <div className="col s12 m6 l6">
                            <div>
                                <h5><strong>Our guarantee</strong></h5>

                                <p className="light">Your satisfaction is our greatest goal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}