import React from 'react'
import "./Plan.css"
import { plansData} from "../../data/PlansData"
import whitTick from "../../assets/whiteTick.png"
import rightArrow from "../../assets/rightArrow.png"

function Plan() {
  return (
    <div className='plan-container' id='plan'>
      <div className='blur plan-blur-1'></div> 
      <div className='blur plan-blur-2'></div> 

            <div className="plan-heading">
      <span className='stroke-text'>Ready to Start
      </span>
      <span>Your Journey</span>
      <span className='stroke-text'>now withus
      </span>
      </div>

      {/* plan section */}
      <div className='plan-section'>
        {plansData.map((plan, index) => (
            <div className='plan' key={index}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>

                <div className='plan-features'>
                    {plan.features.map((feature, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className='feature'>
                            <img src={whitTick} alt='' />
                           <span key={index}>{feature}</span>

                            </div>
                    ))}
                </div>

                <div>
                    <span className='join-now'>see more benifit
                    <img src={rightArrow} alt='' /></span>
                    </div>

                    <button className='btn'>join now</button>

                </div>
        ))}
      </div>

    </div>
  )
}

export default Plan
