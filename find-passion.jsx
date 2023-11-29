import { React } from "react"
import "./find-passion.css"




const Find=()=>{
    return(
    <body>
            <div className="main">
                <div className="text">
                    <h1 className="font">
                        Watch<span class="dot">.</span>
                        <br />
                        Learn<span class="dot">.</span>
                        <br />
                        Grow<span class="dot">.</span>
                    </h1>
                </div>
                <form id="wf-form-Find" name="wf-form-Find" data-name="Find" method="get" class="form" aria-label="Find">
                    <input type="text" class="input mod--hero w-input" maxlength="256" name="Find" data-name="Find" placeholder="Find your passion" id="Find" required="" />
                    <a href="/" class="btn-submit mod--hero stroke--btn-1 w-button">Go</a>
                </form>

            <div className="container">

                <div className="box-1">
                    <img className="box-look1" src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce7320d030e82c15028_hero_person-1-p-500.webp" alt="" />
                </div>
                <div className="box-2">
                    <img className="box-look2" src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bce3e584104be2e330e0_hero_person-2-p-500.webp" alt="" />
                </div>
                <div className="box-3">
                    <img className="box-look3" src="https://assets.website-files.com/617fa48948c7ab24b715140e/6183bb01e5841050e8e31f3b_hero_person-3-p-500.webp" alt="" />
                </div>



            </div>
      
   </div>
  </body>
   


    )

}
export default Find