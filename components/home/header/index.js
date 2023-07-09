"use client"

import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Mobile from './Mobile';

const HeaderSection = ({ navbarOpen, setNavbarOpen }) => {
    return (
        <section className='header'>
            <Mobile navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <Header setNavbarOpen={setNavbarOpen} />
            <Banner />
        </section>
    )
}

export default HeaderSection