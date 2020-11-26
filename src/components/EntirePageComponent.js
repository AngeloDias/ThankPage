import React, { Component } from 'react';
import PageTopComponent from './PageTopComponent';
import OrderConfirmationComponent from './OrderConfirmationComponent';

export default class EntirePage extends Component {
    render() {
        return(
            <div>
                <PageTopComponent />
                <OrderConfirmationComponent />
            </div>
        )
    }
}