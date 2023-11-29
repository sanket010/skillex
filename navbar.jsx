import { React } from "react"
import "./navbar.css"





export default function Navbar(){
  return(
   <nav   className="navbar">
      <div className="logo">
         <a href="/" class="logo-content">
            <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55008f302348b1f7703_logo.svg" loading="lazy" alt="" />
         </a>
      </div>
      
      <div class="nav-item">
            <a href="#find-passion" class="item">Find passion</a>
            <a href="#categories" class="item">Categories</a>
            <a href="#skills" class="item">Skills</a>
            <a href="#customer" class="item">Customer</a>
         </div>

         <div class="menu-butn">
            <div className="bt">
               <a href="/" class="login ">Login</a>
               <a href="/" class="btn"><b>Free Trial</b></a>
            </div>
         </div>
         
                   
      </nav>
   
  )
}



