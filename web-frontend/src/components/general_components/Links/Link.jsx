import React from "react"
import './Link.css'

const Link = (props) => {
    return (
        <li>
            <a className="nav-link scrollto active" href={props.href}>
                {props.text}
            </a>
        </li>
    )
}

export default Link