import React from 'react'
import {BiCloudDownload} from 'react-icons/bi'
import brandlogo from '../Images/logo.png'

const Heros = () => {


  return (
    <div>
      <div class="hero min-h-screen">
                    <div class="hero-content flex flex-col lg:flex-row-reverse">
                        <img src={brandlogo} class="max-w-sm rounded-lg shadow-2xl z-50  App-logo-spin" />
                        <div className=''>
                            <h1 class="text-5xl font-bold"> Hydra flash </h1>
                            <p class="py-6 text-white font-[300] ">Provident cupiditate voluptatem et in. <br />
                            Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary"> DOwnload your Tools  <BiCloudDownload className='text-' ></BiCloudDownload> </button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Heros