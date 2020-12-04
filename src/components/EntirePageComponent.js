import React, { Component } from 'react';
import PageTopComponent from './PageTopComponent';
import OrderGeneralInfoConfirmationComponent from './OrderGeneralInfoConfirmationComponent';
import OrderDogInfosComponent from './OrderDogInfosComponent';
import OrderConfirmationComponent from './OrderConfirmationComponent';
import PageBottomComponent from './PageBottomComponent';

export default class EntirePage extends Component {
    render() {
        return(
            <div>
                <PageTopComponent />
                <OrderGeneralInfoConfirmationComponent />
                <OrderDogInfosComponent />
                {/* <OrderConfirmationComponent /> */}
                <PageBottomComponent />
            </div>
        )
    }
}