import React from 'react'
import team1 from '../assets/images/team-1.png'
import team2 from '../assets/images/team-2.png'
import team3 from '../assets/images/team-3.png'

export default function Team(props) {
    const Team = [`${team1}`,`${team2}`,`${team3}`]
    return (
        <section class="team mt-4 py-4">
            <div class="container my-2">
            <div class="title text-center mb-4 pb-4">
                <h1>Get Touch With Our Team</h1>
            </div>
           


            <div class="row mt-4">
                <div class="col-10 offset-1">
                <div class="row">
                {
                    props.data.map((item, index) => {
                            return(
                                <div class="col-lg-4" key={`team-${index}`}>
                                    <div class="card mb-3" >
                                        <img src={Team[index]} class="card-img img-fluid" alt="..."/>
                                        <div class="biodata w-100 p-3">
                                        <h4>{item.name}</h4>
                                        <h6 class="mb-4" >{item.occupation}</h6>
                                        <a href="">
                                            <p class="my-1"><i class="fas fa-envelope mr-2"></i>{item.email}</p>
                                        </a>
                                        <a href="">
                                            <p><i class="fas fa-phone mr-2"></i> {item.phone}</p>
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
                </div>
                
            </div>
            </div>
        </section>
    )
}
