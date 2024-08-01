import React, { useState } from 'react'
import "./Testimonials.css"
import { testimonialsData } from "../../data/TestimonialsData"
// import leftArrow from  '../../assets/left-arrow.png'
// import rightArrow from "../../assets/right-arrow.png"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion';


function Testimonials() {
    const transication = { type: "spring", duration: 3 };

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className='Testimonials'>
            <div className="left-t">
                <span> Testimonials </span>
                <span className='stroke-text'> What they
                </span>
                <span> say about us
                </span>
                <motion.span
                  key={selected}
                  initial={{ opacity: 0, x:-100 }}
                  exit={{opacity :0, x: 100 }}
                  animate = {{opacity: 1,x:0}}
                  transication={transication}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span> {""}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transication={{ ...transication, duration: 2 }}>

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transication={{ ...transication, duration: 2 }}>

                </motion.div>
                <motion.img 
                key={selected}
                initial={{ opacity: 0, x: 100 }}
                exit={{opacity :0, x: -100 }}
                animate = {{opacity: 1,x:0}}
                transication={transication}
                src={testimonialsData[selected].image} alt="testimonial" />
                <div className='arrow'>
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={leftArrow}

                    />
                    <img
                        onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                        src={rightArrow} />

                </div>
            </div>

        </div>
    )
}

export default Testimonials
