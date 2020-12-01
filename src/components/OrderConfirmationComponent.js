import React from 'react';

export default function OrderConfirmationComponent() {
    return(
        <div className="container-order">
            <div className="section no-pad-bot order-message">
                <div className="container">
                    <h1>Your dog is safe.</h1>
                    <p className="flow-text">Hi, Fulano. We're glad to tell you that your dog has arrived safe and sound to its new place.
                    We'll let you know about the informations update.</p>
                    <button className="btn waves-effect waves-light">
                        View the dog's health details
                    </button>
                </div>
            </div>

            <div className="container order-items">
                <div className="section">
                    <div className="row">
                        <div className="center">
                            <h5 className="header col s12 light">Items ordered</h5>
                        </div>
                    </div>
                    
                    <hr/>

                    <div>
                        <div>
                            <h5 className="center">Subtotal: R$</h5>
                            <br></br>
                        </div>
                    </div>

                    <div className="order-shipping-info">
                        <div>
                            <h5 className="center">Order & shipping info</h5>
                        </div>

                        <div className="row">
                            <div className="col s2 m6">
                                <h4>Order details</h4>
                            </div>
                            <div className="col s2 m6">
                                <h4>Shipping address</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}