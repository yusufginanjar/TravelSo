import React from 'react'
import mostPicked1 from '../assets/images/bali.png'
import mostPicked2 from '../assets/images/jogja.png'
import mostPicked3 from '../assets/images/komodo.png'
import mostPicked4 from '../assets/images/malang.png'
import mostPicked5 from '../assets/images/jogja.png'
import mostPicked6 from '../assets/images/komodo.png'


export default function MostPicked(props) {
    const mostPicked = [`${mostPicked1}`,`${mostPicked2}`,`${mostPicked3}`,`${mostPicked4}`,`${mostPicked5}`,`${mostPicked6}`];
    return (
        <section className="recommended pt-4 pb-4">
            <div className="container pt-4">
            <div className="section-title mb-4">
                <h1 className="text-center" >Select Your Tour</h1>
            </div>
            <div className="row mt-4 pt-4">
                {
                    props.data.map((item, index) => {
                        return(
                            <div className="col-lg-4 mt-3" key={`most-${index}`}>
                                <div className="card border-0 mr-2">
                                    <div className="row">
                                    <div className="col-5 image-card" style={{backgroundImage: `url('${mostPicked[index]}')` }}>
                                        
                                        {(item.isSale) && <button type="button" className="btn btn-secondary btn-sm" disabled>Sale</button>}
                                        <h5>{item.name}</h5>
                                        <div className="overlay d-flex justify-content-center ">
                                        <a href="#" className="btn btn-sm btn-secondary">Details</a>
                                        </div>
                                    </div>

                                    <div className="col-7 pl-0">
                                        <div className="card-body">
                                        <div className="d-flex">
                                            <h4 className="card-title"> <span>{item.currency} </span>{item.price}</h4>
                                            <p className="ml-2">for person <br/>/{item.unit}</p>
                                        </div>
                                        
                                        <p className="card-text">{item.description}</p>
                                        <a href="#" className="btn btn-primary btn-sm mt-2 text-white">Book Now</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                
            </div>
            <div className="text-center my-4">
                <a href="" className="py-4"><button type="button" className="btn btn-secondary border py-2 px-4">MORE TOURS</button></a>
            </div>   
            </div>
        </section>
    )
}
