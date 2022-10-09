import React from 'react'
import { friends } from '../utils/constants';

const DreamTeam = () => {
    return (
        <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            <img className="col-4 p-1" src={friends[0]} alt="friend" />
            <img className="col-4 p-1" src={friends[1]} alt="friend" />
            <img className="col-4 p-1" src={friends[2]} alt="friend" />
            <img className="col-4 p-1" src={friends[3]} alt="friend" />
            <img className="col-4 p-1" src={friends[4]} alt="friend" />
            <img className="col-4 p-1" src={friends[5]} alt="friend" />
            <img className="col-4 p-1 bottomLeft" src={friends[6]} alt="friend" />
            <img className="col-4 p-1" src={friends[7]} alt="friend" />
            <img className="col-4 p-1 bottomRight" src={friends[8]} alt="friend" />
        </section>
    )
}

export default DreamTeam