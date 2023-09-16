import React from "react"
import Back from "../common/back/Back"
import "./price.css"
import Faq from "./Faq"
import { useState } from "react"
import HomePage from "./Pages/Home"
import Login from "../login-signup-sgp/my-app/components-login/login/login"


const Pricing = () => {
  const [user,setLoginUser]=useState({})
  return (
    <>
      <Back title='Choose The Right Plan' />
      <Login setLoginUser={setLoginUser}></Login>
      <Faq />
    </>
  )
}

export default Pricing
