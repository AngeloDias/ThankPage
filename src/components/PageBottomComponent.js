import React from 'react';

export default function PageBottomComponent() {
    return (
        <footer className="page-footer bottom-section">
            <div className="container">
                <div className="row">
                    <p className="grey-text"><a className="grey-text" href="#">Unsubscribe</a> • <a className="grey-text" href="#">Contact me</a></p>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container grey-text">
                    Made by <a className="grey-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </footer>
    )
}