import React, { useState } from 'react'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    const activeStyle = {
        color: '#4E4FEB'
    }

    const navList = (
        <ul onClick={() => {
            setToggleMenu(false)
            setToggleDropDown(false)
        }}>
            <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to={'/gym-album'}>場館環境</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to={'/about'}>關於我們</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to={'/coaches'}>教練團隊</NavLink></li>
            <li className='dropDown' onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setToggleDropDown(prev => !prev)
                }}><NavLink>
                課程介紹
                    <FontAwesomeIcon id='sortDown' icon={faSortDown} />
                    <div className={`itemList ${toggleDropDown ? '' : 'hide'}`}>
                        <ul onClick={() => { setToggleMenu(false) }}>
                            <NavLink to={'/boxing'}><li>拳擊</li></NavLink>
                            <NavLink to={'/muay-thai'}><li>泰拳</li></NavLink>
                            <NavLink to={'/kickboxing'}><li>踢拳</li></NavLink>
                            <NavLink to={'/sanda'}><li>散打</li></NavLink>
                            <NavLink to={'/kid-sanda'}><li>兒童班</li></NavLink>
                            <NavLink to={'/one-on-one'}><li>私人專業教練</li></NavLink>
                            <NavLink to={'/advance'}><li>進階班</li></NavLink>
                        </ul>
                    </div>
                
            </NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to={'/price'}>收費方式</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to={'/album'}>活動相簿</NavLink></li>
            <li><NavLink to={'/'}>首頁</NavLink></li>
        </ul>
    )

    return (
        <>
            {/* create a dummyNavbar to offset the fixed position of navbar container */}
            <div className="dummyNavbar"></div>
            <div className="navbar--container">
                <div onClick={() => navigate("/")} className="logo">
                    <LazyLoadImage id='mainLogo' src="./images/logo-main.jpg" alt="logo" />
                </div>
                <div className="navList">
                    {navList}
                </div>
                <div className="toggle">
                    <FontAwesomeIcon id='bar' onClick={() => { setToggleMenu(prev => !prev) }} style={{ color: 'white' }} icon={faBarsStaggered} />
                </div>
            </div>
            <div className={`menu--container ${toggleMenu ? '' : 'hide'}`}>
                {navList}
            </div>
        </>
    )
}

export default Navbar