import React from 'react';

export default function OrderConfirmationComponent() {
    return(
        <div>
            <div className="order-message">
                <h1>Your dog is safe.</h1>
                <p className="flow-text">Hi, Fulano. We're glad to tell you that your dog has arrived safe and sound to its new place.
                We'll let you know about the informations update.</p>
                <button class="btn waves-effect waves-light">
                    View the dog's health details
                </button>
            </div>
            <div className="order-items">
                <h1>Items ordered</h1>
            </div>
        </div>
    )
}