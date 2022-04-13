import React, { useState } from 'react'
import '../works/works.css'
import readit from '../../assets/images/read-2-resized.png'
import share from '../../assets/images/Share-1.png'
import Sign from '../../assets/images/Sign-3-png.png'

import { Link } from 'react-scroll/modules'
const Works = () => {


    return (
        <section id='work'>



            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <h2 className='worktitle'>How It Works  </h2>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="row pt-4">

                            <div className="col-lg-4 text-center">

                                <div className='box-content'>
                                    <div className='imgsection'>
                                        <Link to='Monetary' >
                                            <img src={readit} alt="read it" className='w-100' />
                                        </Link>
                                    </div>
                                    <div className='content'>
                                        <h3>Read it</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">

                                <div className='box-content'>
                                    <div className='imgsection'>
                                        <Link to='sign'>
                                            <img src={Sign} alt="Sign  it" className='w-100' />
                                        </Link>
                                    </div>
                                    <div className='content'>
                                        <h3>Sign it</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">

                                <div className='box-content'>
                                    <div className='imgsection'>
                                        <img src={share} alt="Share it" className='w-auto' style={{ height: '170px' }} />
                                    </div>
                                    <div className='content'>
                                        <h3>Share it</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default Works