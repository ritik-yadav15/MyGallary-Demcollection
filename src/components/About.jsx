import React from 'react'
import './About.css'
import ab01 from './images/about-header-01.jpg'
import img01 from './images/img01.jpg'
import img2 from './images/img02.jpg'
import img3 from './images/img03.jpg'

export default function About() {
   return (
      <>
         <section>
            <div className='Acontainer' id='Acontainer_1'>
               <div className='content' id='content_1'>
                  <h3>Photos for everyone</h3>
                  <p>
                     Over 3 million free high-resolution images brought to you by the world,s most generous community of photographers.
                  </p>
               </div>
               <div className="content_img" id='content_1img'>
                  <img src={ab01} alt="" />
               </div>

            </div>
         </section>

         <section>
            <div className='content' id='content_2'>
               <h3>DemCollection is internet’s source of freely usable<br></br>images.</h3>
            </div>

            <div className='card_container' >

               <div className='Acard' id='Acard1'>
                  <div className='Acard_img' ><img src={img01} alt="" /></div>
                  <div className="card_content">
                     <h4>Over three million curated photos</h4>
                     <div className="p_container">
                        <p>
                           We hand-select every photo and accept only the best, so that no matter what you need—you’ll find exactly what you’re looking for on DemCollection.</p>
                     </div>
                  </div>

               </div>

               <div className='Acard' id='Acard2'>

                  <div className='Acard_img' ><img src={img2} alt="" /></div>

                  <div className="card_content">
                     <h4>A community of 293,995 photographers</h4>
                     <div className="p_container">
                        <p>DemCollection is home to a growing community of photographers—from hobbyists, professionals, emerging brands and everyone in between.</p>
                     </div>
                  </div>

               </div>

               <div className='Acard' id='Acard3'>
                  <div className='Acard_img' ><img src={img3} alt="" /></div>
                  <div className='card_content'>
                     <h4>Fuelling your favourite platforms</h4>
                     <div className="p_container">
                        <p>With partners like BuzzFeed, Squarespace and Trello being powered by our API, the DemCollection library is more widely accessible than ever.</p>
                     </div>
                  </div>

               </div>


            </div>




         </section>
      </>
   )
}
//
