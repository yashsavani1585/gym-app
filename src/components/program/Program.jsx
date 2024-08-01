import React from 'react'
import "./Program.css"
import { programsData } from "../../data/ProgramsData"
import rightArrow from "../../assets/rightArrow.png"

function Program() {
    return (
        <>
            <div className='program' id='program'>
                <div className="program-heading">
                    <span className='stroke-text'>Explore our
                    </span>
                    <span>Programs</span>
                    <span className='stroke-text'>To shape you</span>

                </div>
                <div className='program-categories'>
                    {programsData.map((program) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="categroy">
                            {program.image} 
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className='join-now'><span>Join Now</span>
                            <img src={rightArrow} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Program
