import React from 'react';
import malinois from '../images/malinois.png';

export default function OrderDogInfosComponent() {
    return(
        <div className="section no-pad">
            <div className="row">
                <h3 className="center">Dog health</h3>

                <div className="col s12 m6 l6">
                    <div className="icon-block">
                        <div>
                            <img src={malinois} alt="dog" width="250" className="materialboxed center responsive-img" />
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l6">
                    <div className="icon-block">
                        <h5 className="center">Malinois shepherd</h5>

                        <p className="light">The Belgian Malinois (pronounced MAL-in-wah) is a medium-size Belgian shepherd dog that at first glance resembles a German Shepherd Dog. Malinois are shorthaired, fawn-colored dogs with a black mask. They are one of four types of Belgian herding dogs, and have been shown in the U.S. as a separate breed since 1959.</p>
                    </div>
                </div>
            </div>

            <div className="line-horizontal-container">
                <div className="line-horizontal"></div>
            </div>
        </div>
    )
}