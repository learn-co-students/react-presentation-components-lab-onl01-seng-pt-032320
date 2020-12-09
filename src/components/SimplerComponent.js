// Code SimplerComponent Here
import React from "react"

const SimplerComponent = (props) => <div onClick={printHi(props.handleClick)}>I am just happy</div>

const printHi = (props) => <div>{props}</div>
export default SimplerComponent