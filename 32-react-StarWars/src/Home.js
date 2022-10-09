import React from 'react'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
import Hero from './Hero'

const Home = ({hero,changeHero}) => {
    return (
        <main className="clearfix">
            <Hero hero={hero} />
            <DreamTeam />
            <FarGalaxy />
        </main>
    )
}

export default Home