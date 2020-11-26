import React from 'react';
import blackDog from '../images/black-dog.jpg';

export default function PageTopComponent() {
    return (
        <div className="center-image">
            <img src={blackDog} width="650" className="materialboxed center-align" alt="top" />
        </div>
    )
}