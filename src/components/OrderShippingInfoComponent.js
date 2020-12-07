import React from 'react';

export default function OrderShippingInfoComponent() {
    return(
        <div className="section order-shipping-info">
            <div className="row center">
                <h3>Order & shipping info</h3>

                <div className="col s12 m6 l6">
                    <div>
                        <h5><strong>Dog details</strong></h5>
                        <p className="medium"><strong className="strong-medium-p">Name:</strong> Jose Sanchez del Río</p>
                        <p className="medium"><strong className="strong-medium-p">Sex:</strong> macho</p>
                        <p className="medium"><strong className="strong-medium-p">Age:</strong> 5 months</p>
                    </div>
                </div>

                <div className="col s12 m6 l6">
                    <div>
                        <h5><strong>Shipping address</strong></h5>
                        <p className="medium"><strong className="strong-medium-p">Street:</strong> Aquela ali do lado</p>
                        <p className="medium"><strong className="strong-medium-p">Neighborhood:</strong> Muritiba</p>
                        <p className="medium"><strong className="strong-medium-p">City:</strong> Atlântida</p>
                    </div>
                </div>
            </div>
        </div>
    )
}