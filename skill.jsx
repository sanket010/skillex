import { React } from "react"
import "./skill.css"



const Skill=()=>{
    return(
       <><div className="main">
            <div className="skillpara">
                <h2 className="skillcontent">
                    Get the skills you<br />

                    need for a job that<br />

                    is in demand
                    <span class="dot-green">.</span>
                </h2>
            </div>
            <div className="skillparaa">
                <h2 className="skillcontentt">
                    The modern labor market dictates its own terms.<br />
                    Today,to be a competitive specialist requires more<br />
                    than professional skills.
                </h2>
            </div>
        </div>
        <div className="all" >
                <div className="qualityoption">
                    <ul className="skilllist">
                        <li className="licontent">
                            <div className="icon"><img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa550b1eff7681300db93_ico_skills-leadership.svg" loading="lazy" alt=""/></div>
                            <div className=" title">Leadership</div>
                            <div className=" content">Fully committed to the <br/>sucess company</div>
                            <div className="list-line"></div>
                          </li>
                          <li className="licontent">
                          
                            <div className="icon"><img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5500e03d92bc1747cb2_ico_skills-responsibility.svg" loading="lazy" alt=""/></div>
                            <div className="title">Responsibility</div>
                            <div className="content">Employees will always<br/> be my top priority</div>
                            <div className="list-linet"></div>
                          </li>
                          <li className="licontent">
                          
                            <div className="icon"><img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa5506ec5691cba88bb5b_ico_skills-flexibility.svg" loading="lazy" alt=""/></div>
                            <div className="title">Flexibility</div>
                            <div className="content">The ability to switch is <br/>an important skill</div>
                          </li>
                    </ul>
                    </div>
                  <section className="experience">
                    <div className="head">
                        <div className="skillvideo">
                            <div className="skilltext">
                                <div className="skilltitle">10</div>
                                <div className="skilltitle">years<span></span> experiences
                                </div>
                            </div>
                            <div className="skilltext1">
                                <div className="skilltitle1">250</div>
                                <div></div>
                            

                            </div>
                            </div>
                        </div>
                        
                    
                    <div className="viewvideo">
                        <div className="i-frame">
                        <iframe title="skill" className="video" src="https://player.vimeo.com/video/641585003?h=a359e6a27b&amp;background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0&amp;quality=480p" />
                        </div>
                        <div className="videonav">
                        <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/61a0fdc7a0d9b80891c0b859_ico_pause.svg" loading="lazy" id="pause" alt="" class="skills__video-nav-ico active"/>
                        <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/61a0fdc7d2986a2157b32bba_ico_play.svg" loading="lazy" id="play" alt="" class="skills__video-nav-ico"></img>
                        </div>
                    </div>
                    </section>
                </div>
               
            </>
        
        

    )

}
export default Skill