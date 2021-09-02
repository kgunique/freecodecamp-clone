import React from 'react'
import {SearchIcon} from '@heroicons/react/solid'
import './header.css'

const Header = () => {
    return (
        <header className ="header">
           {/* left part search box */}
           <div className="left_header">
               <SearchIcon className="header_search_icon"/>
               <input type="text" placeholder="Search 7,000+ tutorials" 
               className="header_input"/>
           </div>
           {/* center logo and title */}
           <div className="header_center">
               <img className="header_logo" 
               src={'./asset/fcc_primary_large.png'}
               alt="freecodecamp logo" />
           </div>
           {/* menu and avtar */}
           <div className="header_right">
               <button 
               className ="header_right_button">Menu</button>
               <img src={'./asset/default_avtaar.png'} 
               alt="default_avtaar"
               className="header_right_avtar"/>
           </div>
        </header>
    )
}

export default Header
