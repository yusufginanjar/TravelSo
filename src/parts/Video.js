import React from 'react'


export default function Video(props) {
    return (
      <section class="video mt-4 py-4">
        <div class="container pb-4">
          <div class="title text-center mb-4 pb-4">
            <h1>Watch Our Video Tour</h1>
          </div>
          <div class="content-video">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe src={props.data.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    )
}
