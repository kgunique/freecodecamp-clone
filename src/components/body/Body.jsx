import React from 'react'
import './body.css'
import Mainbody from '../body/MainBody'
import Asseenin from './Asseenin'
function Body() {
    return (
        <div className="body">
           {/* main body */}
           <Mainbody />
           {/* As Seen In */}
           <Asseenin />
           {/* alumini */}
           {/* certification course */}
        </div>
    )
}

export default Body
