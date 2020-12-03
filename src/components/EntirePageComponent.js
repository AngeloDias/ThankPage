import React, { Component } from 'react';
import PageTopComponent from './PageTopComponent';
import OrderConfirmationComponent from './OrderConfirmationComponent';
import PageBottomComponent from './PageBottomComponent';

export default class EntirePage extends Component {
    render() {
        return(
            <div>
                <PageTopComponent />
                <OrderConfirmationComponent />
                <PageBottomComponent />
            </div>
        )
    }
}