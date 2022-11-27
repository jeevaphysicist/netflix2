import React, { Component } from 'react'
import '../styles/Homepage.css'
import boxtshot from '../assets/boxshot.png'
import device from '../assets/device.png'
import download from '../assets/download-icon.gif'
import kids from '../assets/kids.png'
import mobile from '../assets/mobile.jpeg'
import title from '../assets/title.png'
import video from '../assets/video-devices.mp4'
import videotv from '../assets/video-tv.mp4'
import tv from '../assets/tv.png'


export default class Netflixhomepage extends Component {
  render() {
    return (
        
      <div>
         <div className="container-fluid thick background ">
    <div className="pt-4 row ">
          <div className="  col-lg-2 col-3 col-sm-3 col-md-2 col-xl-2 text-start">
       <span className="svg-nfLogo our-story-logo nfLogo" data-uia="netflix-header-svg-logo-noclick"><svg viewBox="0 0 111 30" className="logo1" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg><span className="screen-reader-text"></span></span>
   
        </div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2 col-xl-2"></div>
          <div className=" col-lg-6 col-4 col-sm-4 col-md-5 col-xl-6  text-end">
              <div className="dropdown">
              <select>
                  <option className="drop">English</option>
                  <option className="drop">हिन्दी</option>
              </select>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="sel bi bi-globe2" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
              </div>
          </div>
          <div className=" col-lg-2 col-4 col-md-3 col-sm-4 col-xl-2  text-start">
              <button className="sign">Sign In</button>
          </div>
    </div>
    <div className="row pt-4">
 <div className="col-12"></div>
    </div>
    <div className="row pt-4">
        <div className="col-12"></div>
           </div>
           <div className="row pt-4">
            <div className="col-12"></div>
               </div>
               <div className="row pt-4">
                <div className="col-12"></div>
                   </div>
 
            
   
                    <div className="row">
                      <div className="h1 col-12 my-3 text-center">Unlimited movies, TV shows and more.</div>
                    </div>
                    <div className="row ">
                      <div className="col-12 h2 my-3 text-center">Watch anywhere. Cancel anytime.</div>
                    </div>
                    <div className="row ">
                        <div className=" col-12 my-3 ready text-center">Ready to watch? Enter your email to create or restart your membership.
                        </div>
                    </div>
                    <div className="te container  mx-auto row">
                        <div className="col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2 text-end"></div>
                       <input type="email" className="hello  col-12 col-sm-12 col-md-5 col-lg-6 col-xl-6" placeholder="Email address"/>
                         <button className="hi col-8 col-sm-8  col-md-4 col-lg-3 col-xl-3"> Get Started &nbsp; </button>
                         <div className="col-4 col-sm-4 col-md-2 cdol-lg-1 col-xl-1"></div>
                         </div>
                          </div>



                          <div className="container-fluid">
                          <div className="row pt-4 position-relative thick bg-black">
                             
                              <div className="tv-text text-white pt-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                  <h1 className="card-title my-3">Enjoy on your TV.</h1>
                                  <h2 className=" card-subtitle">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                              </div>

                              <div className="tv-image position-relative col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <video className=" card-video position-absolute" controls="true" autoplay="true" loop>
                                  <source src={videotv} />
                                </video>
                                <img src={tv} className="card-img  position-absolute" alt=""/>
                              </div>
                                                
                          </div>
                      </div>



                      <div class="row pt-4 position-relative thick bg-black">
                            <div class="tv-image position-relative col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                              <img src={mobile} class="card-img  position-absolute" alt=""/>
                              <div class=" box position-absolute">
                              
                               <img class=" box-img" src={boxtshot} alt=""/>
                                 <div class="d-inline p-3">
                                 <p class="d-inline box-text ">Stranger Things</p>
                                  <p class="d-inline-flex box-text2 ">Downloading...</p>
                               </div>
                               <img src={download} class="d-inline position-absolute box-icon" alt=""/>
                              </div>
                    </div>
                    <div class="tv-text text-white pt-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h1 class="card-title my-3 ">Download your shows to watch offline.</h1>
                               <h2 class=" card-subtitle ">Save your favourites easily and always have something to watch.</h2>
                            </div>  
                            </div>


                            <div class="row pt-4 position-relative thick bg-black">
                             
                             <div class="tv-text text-white pt-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                 <h1 class="card-title my-3">Watch everywhere.</h1>
                                 <h2 class=" card-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                             </div>

                             <div class="tv-image position-relative col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                               <video class=" card-video1 position-absolute"  controls  autoplay="true" loop>
                                 <source src={video} />
                               </video>
                               <img src={device} class="card-img  position-absolute" alt="image"/>
                             </div>
                    </div>



                    <div class="row pt-4 position-relative thick bg-black">
                            <div class="tv-image position-relative col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                              <img src={kids} class="card-img  position-absolute" alt="image"/>                             
                            </div>
                             
                            <div class="tv-text text-white pt-4 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <h1 class="card-title my-3 ">Create profiles for children.</h1>
                                <h2 class=" card-subtitle ">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                            </div>               
                          </div>
                         
     
                          
                       
                          <div class="row mx-auto pt-4 bg-black">
                          <h1 class="col-12 text-center text-white">Frequently Asked Questions</h1>
                        </div>


                        <div className='bg-black thick questions'>

                        <p>
                        <div class=" mx-auto bad position-relative" >
                           <p class="dot"> what is netflix ?</p>
                            
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bit  position-absolute bit-closed" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                        </div>
                      </p>
                      
                      <p>
                         <div class="mx-auto bad position-relative" >
                            <p class="dot"> How much does netflix cost?</p>
                             
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bit  position-absolute bit-closed" viewBox="0 0 16 16">
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                         </div>
                       </p>
                
                       <p>
                         <div class="mx-auto bad position-relative" >
                            <p class="dot"> where can I watch?</p>
                             
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bit  position-absolute bit-closed" viewBox="0 0 16 16">
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                         </div>
                       </p>
                
                       <p>
                         <div class="mx-auto bad position-relative" >
                            <p class="dot"> How do I cancel?</p>
                             
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bit  position-absolute bit-closed" viewBox="0 0 16 16">
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                         </div>
                       </p>
                
                       <p>
                         <div class="mx-auto bad position-relative" >
                            <p class="dot"> what can I watch on netflix?</p>
                             
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bit  position-absolute bit-closed" viewBox="0 0 16 16">
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                         </div>
                       </p>
                       <p>
                        
                         <div class="mx-auto bad position-relative" >
                            <p class="dot"> Is netflix good for kids?</p>
                             
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bit  position-absolute bit-closed" viewBox="0 0 16 16">
                         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                       </svg>
                         </div>
                       </p>
                    
                       <div class="row container-fluid pt-4">
                        <div  class=" col-12  ready text-center">Ready to watch? Enter your email to create or restart your membership.
                        </div>
                        <div  class="te container my-3  mx-auto row">
                        <div class="col-12 col-sm-12 col-md-1 col-lg-2 col-xl-2 text-end"></div>
                       <input type="email" class="hello  col-12 col-sm-12 col-md-5 col-lg-6 col-xl-6" placeholder="Email address"/>
                         <button class="hi col-8 col-sm-8  col-md-4 col-lg-3 col-xl-3"> Get Started &nbsp; ></button>
                         <div class="col-4 col-sm-4 col-md-2 cdol-lg-1 col-xl-1"></div>
                         </div>
                         </div>
                    </div>


                    <div class="foot   container-fluid">
                             <div class="row container">
                             <div class=" col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                             
                             <p  class="  pt-4 col-12 col-sm-12 col-md-8 col-lg-5 ques col-xl-5 text-sm-left  "> Questions? Call 000-800-040-1843</p>
                              <div class="col-12 col-sm-12 col-md-1 col-lg-4 col-xl-4"></div>
                            </div>
                           
                          <div class="row ">
                            <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 ">
                              <ul type="none">
                                <li>FAQ</li>
                                <li>Investor Relations</li>
                                <li>Privacy</li>
                                <li>Speed Test</li>
                              </ul>
                            </div>
                            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 ">
                              <ul type="none">
                                <li>Help Centre</li>
                                <li>Jobs</li>
                                <li>Cookie Preferences</li>
                                <li>Legal Notices</li>
                              </ul>
                            </div>
                            <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2 ">
                              <ul type="none">
                                <li>Account</li>
                                <li>Ways to Watch</li>
                                <li>Corporate Information</li>
                                <li>Only on Netflix</li>
                              </ul>
                            </div>
                            <div class="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 ">
                              <ul type="none">
                                <li>Media Centre</li>
                                <li>Terms of Use</li>
                                <li>Contact Us</li>
                              </ul>
                            </div>
                            <div class="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-2 "></div>
                          </div>
                          <div class="row container-fluid ">
                            <div class="col-2 col-sm-2 col-md-2 col-lg-2  col-xl-2"></div>
                            <div class="col-10 col-sm-10 col-md-9 col-lg-6 col-xl-6">
                            <div class="dropdown pt-4 ">
                              <select class="select">
                                  <option class="drop1 bg-black">English</option>
                                  <option class="drop1 bg-black">हिन्दी</option>
                              </select>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="sel1" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                              </svg>
                              </div>
                              </div>
                              <div class=" col-12 col-sm-12 col-md-1 col-lg-4 c0l-xl-4"></div>
                              </div> 
                              <div class="pt-4 pb-4 row">
                                <div class="col-2 col-sm-2 col-md-2 col-lg-2  col-xl-2"></div>
                                <div class="col-10 col-sm-10 col-md-9 col-lg-6 col-xl-6 bottom"> Netflix India</div>
                              <div class=" col-12 col-sm-12 col-md-1 col-lg-4 c0l-xl-4"></div>
                              </div>
                         </div>





 </div>                
       
                    
                    
                    
                        
                         
                    
                    




        
      
      
    
    );
  }
}
