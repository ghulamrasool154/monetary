import React from 'react'
import logo from '../../assets/images/bitcoin-logo-resized.png'
import '../Header/header.css'
import { Link } from 'react-scroll/modules'
const Header = () => {
    return (
        <>
            <header id='header'>
                <div className="container m-auto" >
                    <div className="row align-items-center justify-content-around">
                        <div className="col-lg-10">
                            <div className="row justify-content-around">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-3">
                                    <div className='logo'>
                                        <img src={logo} alt="logo" className='img-fluid' />
                                    </div>
                                </div>
                                <div className="col-lg-6  col-md-6 col-sm-9 col-9 text-end">
                                    <Link to='sign'>
                                        <button className='btn-custom'>Sign the Declaration </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header