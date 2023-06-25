import { useState, useRef, useEffect } from "react"
import { Link } from 'react-router-dom';
import Nav from "../Nav/Nav";
import "./home.scss"
import { gsap, Power2 } from "gsap";
import Marquee from 'react-fast-marquee'
export default function Home({ data, handleChange, getUser, darkmode, handleDarkMode, failed }) {

    useEffect(() => {
        gsap.to(".pre-image-overlay", {
            height: "0%",
            duration: 1.5,
            ease: Power2.easeInOut
        })
    }, [data])


    if (darkmode) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'initial';
    }


    return (
        <>
            <div className="home-container" >
                <Nav darkmode={darkmode} handleDarkMode={handleDarkMode} />
                <div className="home-wrapper">
                    <div className="marquees">
                        <Marquee direction="right" speed={200}>
                            <h1 style={darkmode ? { color: "white" } : { color: "black" }} className="main-header">GITPURSUIT GITPURSUIT GITPURSUIT GITPURSUIT </h1>
                        </Marquee>
                        <Marquee behavior="" direction="left" speed={220} autoFill={true}>
                            <h1 className={darkmode ? "main-header darkmode-Banner" : "main-header Banner"}>search info on github accounts with ease. </h1>
                        </Marquee>
                    </div>
                    <div className="main">
                        <div className={darkmode ? "dark-input-container" : "input-container"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.4 488.4" width="25px">
                                <path fill={darkmode ? "#ffffff" : ""} d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />
                            </svg>

                            <input className={darkmode ? "dark-input" : ""} type="text" name="" id="" onChange={handleChange} required placeholder="Enter UserName" />
                        </div>
                        <div className="main-button">
                            <button onClick={getUser}>search</button>
                        </div>
                    </div>

                    {failed ? <h1 className="error-message" style={darkmode ? {color: "white"} : {color: ""}}>username not found</h1>:
                    <div className="user" style={data === "" ? { display: "none" } : { display: "flex" }}>
                        <div className="pre-user-image" >
                            <div className="pre-image-overlay" style={darkmode ? { backgroundColor: "black" } : { backgroundColor: "" }}></div>
                            <img src={data.avatar_url} alt="" />
                        </div>
                        <div className="home-info" style={darkmode ? { color: "white" } : { color: "black" }}>
                            <p>User Name:{data.name}</p>
                            <p> {data.location}</p>
                            <Link to="/User">see more..</Link>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}