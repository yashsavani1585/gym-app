import React from "react"
import Header from "../Header/Header"
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from 'framer-motion';



function Hero() {
    const transication = {type : "spring",duration :3}
    return (
        <div className='Hero'>
            <div className="blur hero-blur"></div>
            <div className="L-Hero">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                    initial={{left : '238px'}}
                    whileInView = {{left : "8px"}}
                    transication = {{...transication,type : "tween"}}>
                
                    </motion.div>
                    <span>the best fitness club in town</span>
                </div>

                {/* Hero--heading  */}
                <div className="Hero-text">
                    <div>
                        <span className="stroke-text">span </span>
                        <span>your</span>

                    </div>
                    <div>
                        <span>Ideal body</span>


                    </div>
                    <div className="span">
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>

                </div>
                {/* hero button */}
                <div className="hero-button">
                    <button className="btn">get started</button>
                    <button className="btn">learn more</button>

                </div>
            </div>
            <div className="R-Hero">
                <button className="btn">join now</button>
                < motion.div 
                    initial ={{right: "-1rem"}}
                    whileInView = {{right: "4rem"}}
                    transition={{transication}}

                className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>heart rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero img */}
                <img src={hero_image} className="hero_image" />
                <motion.img
                 initial ={{right: "11rem"}}
                 whileInView = {{right: "20rem"}}
                 transition={{transication}}
                 src={hero_image_back} className="hero_image_back" />

                {/* callerios */}
                <motion.div
                  initial ={{right: "37rem"}}
                  whileInView = {{right: "28rem"}}
                  transition={{transication}}
                  className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                    <span>calories burned</span>
                    <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero
