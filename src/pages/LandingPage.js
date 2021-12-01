import React, { Component } from 'react'
import Header from "parts/Header"
import Hero from "parts/Hero"
import MostPicked from "parts/MostPicked"
import Blog from "parts/Blog"
import Testimony from 'parts/Testimony'
import Video from 'parts/Video'
import Team from 'parts/Team'
import Footer from 'parts/Footer'


import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero}></Hero>
                <MostPicked data={landingPage.mostPicked}></MostPicked>
                <Blog data={landingPage.blog}></Blog>
                <Testimony data={landingPage.testimony}></Testimony>
                <Video data={landingPage.video}></Video>
                <Team data={landingPage.team}></Team>
                <Footer data={landingPage.footer}></Footer>
            </>
        )
    }
    
}
