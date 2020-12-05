import React from 'react';

export default function OrderShippingInfoComponent() {
    return(
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
    )
}