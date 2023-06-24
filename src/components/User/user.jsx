import { Link } from 'react-router-dom';
import { React, useEffect, useRef } from 'react';
import { gsap, TimelineLite, Power2 } from "gsap";
import "./User.scss"
export default function User({ data, darkmode }) {
    useEffect(() => {
      gsap.to(".image-overlay", {
        width: "0%",
        duration: 1.5, 
        ease: Power2.easeInOut
      })

      gsap.to([".user-name", ".stats"],{
        y: 10,
        opacity: 1,
        dalay: .5,
        duration: .8
      })
    }, [])
    return (
        <>
            <div className="user-container">
                <div className="back-icon">
                    <Link to="/">
                        <svg fill={darkmode ? "white" : "black"} width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" /> </g> </svg>
                    </Link>
                </div>
               
                <div className="user-wrapper">
                    <div className="user-body">
                        <div className="user-image" >
                            <div className="image-overlay"style={darkmode ? {backgroundColor: "black"} : {backgroundColor: "white"}}></div>
                            <img src={data.avatar_url} alt=""  className='image' />
                        </div>
                        <div className="user-info"style={darkmode ? {color: "white"} : {color: "black"}}>
                            <p className="user-name"><span>UserName: </span>{data.name}</p>
                            <p className="stats"><span>Bio: </span>{data.bio} lorem40</p>
                            <p className="stats"><span>company: </span>{data.company}</p>
                            <p className="stats"><span>email: </span>{data.email}</p>
                            <p className="stats"><span>Twitter username: </span>{data.twitter_username}</p>
                            <p className="stats"><span>Repository: </span>{data.public_repos}</p>
                            <p className="stats"><span>blog: </span><a href={`https://${data.blog}`}>{data.blog}</a></p>
                            <p className="stats"><span>Follower: </span>{data.followers}</p>
                            <p className="stats"><span>Following: </span>{data.following}</p>
                            <p className="stats"><span>created on: </span>{data.created_at}</p>
                            <p className="stats"><span>last update at: </span>{data.updated_at}</p>
                            <p className="stats"><span>location: </span>{data.location}</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}