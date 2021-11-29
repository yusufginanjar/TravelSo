import React from 'react'
import background from '../assets/images/background1.png'

// background: url(../img/background1.png) 

// no-repeat;


export default function Hero(props) {
    return (
        <section className="main-menu" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }}>
            <div className="container">
                <div className="jumbotron bg-transparent">
                    <div className="mx-auto">
                        <div className="row pt-4">
                        <div className="col-lg-5 offset-lg-1 py-4">
                            <div className="place ml-2">
                            <h6>Hot Places</h6>
                            <h1>{props.data.name}</h1>
                            <div className="row price">
                                <div className="col">
                                    <h6>Price</h6>
                                    <h2>{props.data.price1} <span>{props.data.currency}</span></h2>
                                    <h6>{props.data.unit1}</h6>
                                </div>
                                <div className="col">
                                    <h6>Price</h6>
                                    <h2>{props.data.price2} <span>{props.data.currency}</span></h2>
                                    <h6>{props.data.unit2}</h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div
                            className="col-lg-5 py-4 play d-flex justify-content-center align-items-center"
                        >
                            <div className="play"><a href=""><i className="far fa-play-circle"></i><span></span></a></div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
