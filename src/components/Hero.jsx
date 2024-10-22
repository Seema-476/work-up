import React from 'react'
import { EXPLORE_OUR_FEATURES } from '../utils/Helper';

const Hero = () => {
    return (
        <div className='container mx-auto py-11'>
            <div className='flex flex-wrap flex-row -mx-3 justify-center'>
                {EXPLORE_OUR_FEATURES.map((obj, index) => (
                    <div key={index} className='lg:w-[25%] md:w-[33.33%] sm:w-[50%] w-full px-3 lg:mt-0 mt-4 flex justify-center'>
                        <div className='max-w-[267px] h-[249px] hover:shadow-xl duration-700 hover:border-transparent bg-red w-full border border-light-gray rounded-[10px] flex items-center justify-center flex-col p-5 w-full'>
                            <img src={obj.icon} alt="svg" />
                            <h2>{obj.heading}</h2>
                            <p className='text-center mx-auto'>{obj.paragraph}</p>
                        </div>
                    </div>

                ))}
            </div> 
        </div>
    )
}
export default Hero