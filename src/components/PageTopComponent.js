import React from 'react';
import blackDog from '../images/black-dog.jpg';

export default function PageTopComponent() {
    return (
        <div className="center-image image-to-parent">
            <img src={blackDog} width="300" className="materialboxed center-align responsive-img" alt="top" />
        </div>
    )
}