import React from 'react';

export default function OrderConfirmationComponent() {
    return(
        <div className="container order-items">
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
    )
}