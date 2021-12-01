import React from 'react'
import Star from 'elements/Star'
import User1 from '../assets/images/user-1.png'
import User2 from '../assets/images/user-2.png'
import User3 from '../assets/images/user-3.png'

export default function Testimony(props) {
    const User = [`${User1}`,`${User2}`,`${User3}`]
    return (
        <section class="testimony pt-4 mt-4">
            <div class="container">
            <div class="title text-center mb-4 pb-4">
                <h1>More Than 101 People <br/>Are Happy With Us</h1>
            </div>
            <div class="row mt-4">
                {props.data.map((item, index) => {
                    return(
                        <div class="col-lg-4" key={`testimony-${index}`}>
                        <div class="card mb-3" style={{maxWidth: 540}}>
                            <div class="row no-gutters pl-3 pt-3">
                            <div class="col-md-4 p-2">
                                <img src={User[index]} class="card-img" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.occupancy}</p>
                                <Star value={item.rate} width={35} height={35} spacing={3}></Star>
                                </div>
                            </div>
                            </div>
                            <div class="row no-gutters pl-3">
                            <div class="col-12 pl-3 pr-3 py-4">
                                <blockquote class="blockquote">
                                <p><q>{item.content} </q></p>
                                </blockquote>
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                })}

                
            </div>
            </div>
        </section>
    )
}
