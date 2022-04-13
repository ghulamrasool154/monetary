import React from 'react'
import '../OriginalSigners/Originalsigners.css'
import { BsTwitter } from "react-icons/bs";
import { data } from './Data';
const Originalsigners = () => {


    return (
        <section id='OriginalSigners'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <h1 className='orginlsginer'>
                            Original Signers
                        </h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="row">
                            {
                                data.map((value, index) => {
                                    return <>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                                            <div className='d-flex flex-column py-3'>
                                                <b className='namesigner'>
                                                    {value.name}
                                                </b>

                                                <a className='twitericon' href="" target='_blank'> <span className='icon'>
                                                    <BsTwitter />
                                                </span></a>
                                            </div>
                                        </div>
                                    </>
                                })
                            }


                        </div>
                        <div className="row">
                            <div className="col-lg-10 m-auto text-center py-5">
                                <button className='btn-custom'>Sign the Declartion</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </section>
    )
}

export default Originalsigners