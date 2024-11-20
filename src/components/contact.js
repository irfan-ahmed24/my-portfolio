import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import React, { Component } from 'react'
export default class contact extends Component {
      render() {
    return (
       <div id="Contact">
        <h3>Contact me</h3>
         <ul>
            <li><a href="https://www.facebook.com/irfan.ahmed.620272/"><FaFacebook className="face"/></a></li>
            <li><a href="https://www.youtube.com/channel/UCyso_xT-9WmvHESJzRqkirw"><IoLogoYoutube className="phone"/></a></li>
            <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><MdOutlineMarkEmailUnread className="email"/></a></li>
            <li><a href="https://github.com/irfan-ahmed24"><FaGithub className="github"/></a></li>
         </ul>
       </div>
    )
  }
}
