import React from 'react'
import mobile from "../images/image-hero-mobile.png"
import desktop from "../images/image-hero-desktop.png"
import client_1 from "../images/client-databiz.svg"
import client_2 from "../images/client-audiophile.svg"
import client_3 from "../images/client-maker.svg"
import client_4 from "../images/client-meet.svg"

export const Hero = () => {
  return (
    <section className="container mx-auto">
        <div className='flex flex-col-reverse md:grid gap-10 md:grid-cols-2 md:items-end'>
            <div className="text-center md:text-left px-5 xl:px-0 md:space-y-12">
                <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
                    Make remote work
                </h1>
                <p className="mb-5">
                    Get your team in sync, no matter your location. Streamline
                    processes, create team rituals, and watch productivity soar.
                </p>
                <button className="outlined-btn bg-black text-almost-white bg-almost-black hover:bg-white hover:text-almost-black border-2 border-almost-black">
                    Learn more
                </button>

                <div className='grid grid-cols-4 gap-1 mt-16 items-center'>
                    <img src={client_1} alt="databiz logo" />
                    <img src={client_2} alt="audiophile logo" />
                    <img src={client_3} alt="maker logo" />
                    <img src={client_4} alt="meet logo"/>
                    </div>
                </div>

            <div>
                <img src={desktop} alt="hero" className="md:flex hidden" />
                <img src={mobile} alt="hero" className="md:hidden" />
            </div>
        </div>
    </section>
  )
}

export default Hero;
