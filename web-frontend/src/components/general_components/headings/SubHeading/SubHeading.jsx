import React from "react"
import './SubHeading.css'

const SubHeading = (props) => {
    return (
        <h2 href={props.linkToSomething}>
            {props.text}
        </h2>
    )
}

export default SubHeading