import React from 'react';

export default function PageBottomComponent() {
    return (
        <footer className="page-footer bottom-section">
            <div className="container">
                <div className="row">
                    <p className="grey-text"><a className="grey-text" href="#1">Unsubscribe</a> • <a className="grey-text" href="#2">Contact me</a></p>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="container grey-text">
                        Made by <a target="_blank" href="https://www.instagram.com/angelo.d.san/">@angelo.d.san</a> using <a className="grey-text text-lighten-3" target="_blank" href="http://materializecss.com">Materialize CSS</a>
                    </div>

                    <div>
                        <p className="grey-text">Page used as reference: <a target="_blank" href="https://viewstripo.email/template/d34a7d1c-6362-4200-b484-4f0cb2b8b1c6">Order confirmation template</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}