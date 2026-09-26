import React from 'react';

function Stats() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>that's why 1.3cr+ customer trust Zerodha with $3.5+ lakh cr worth of equity investments.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, soam, "gamification", or annoying push notifications. High quality qpps that you use at your pace, the way you like.</p>
                    <h3 className='fs-4'>The Zerodha universw</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investment in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>with initiative like Nudge Kill Switch, we don't just facilitate tracsactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{width:"90%"}}></img>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try kite</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;