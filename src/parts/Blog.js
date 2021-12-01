import React from 'react'
import Blog1 from '../assets/images/bali.png'
import Blog2 from '../assets/images/bali.png'
import Blog3 from '../assets/images/bali.png'



export default function Blog(props) {
    const blog = [`${Blog1}`,`${Blog2}`,`${Blog3}`]
    return (
        <section class="blog">
            <div class="container pt-4 pb-4">
            <div class="row pt-4">
                <div class="col-10 offset-1">
                <div class="title">
                    <h5>NEWS & UPDATES</h5>
                    <h2>LATEST FROM BLOG</h2>
                </div>
                {props.data.map((item, index) => {
                    return (
                        <div key={`blog-${index}`} class="card border-0 my-4">
                            <div class="row">
                            <div class="col-4 image-card">
                                <img class="img-cover" src={blog[0]} alt=""/>
                            </div>
                            <div class="col-8 pl-0">
                                <div class="card-body pt-4">
                                <h4 class="card-title mt-4">{item.name}</h4>
                                <p class="card-text">{item.content}</p>
                                
                                <a href="#"><i class="fas fa-user mr-2"></i> By {item.author}`</a>
                                <a href="#"><i class="far fa-calendar-alt ml-4 mr-2"></i>{item.date}</a>
                                <a href="#"><i class="ml-4"></i>Read More +</a>

                                <div class="number">
                                    <h2>{item.number}</h2>
                                </div>

                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}


                <div class="text-center my-4">
                    <a href="" class="py-4"><button type="button" class="btn btn-secondary py-2 px-4">More Blogs</button></a>
                </div>
                </div> 
            </div>
            </div>
        </section>
    )
}
