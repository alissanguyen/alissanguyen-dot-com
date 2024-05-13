/* eslint-disable react/no-unescaped-entities */
'use client'
import * as React from 'react';
import "../styles/notfound.css"

interface Props {

}

const NotFoundPage: React.FC<Props> = ({ }) => {
    return (
        <div className='NotFound__Page'>
            <h1>404</h1>
            <div className="cloak__wrapper">
                <div className="cloak__container">
                    <div className="cloak"></div>
                </div>
            </div>
            <div className="info">
                <h2 className='mb-2 text-lg text-cyan-400'>We can't find that page :(</h2>
                <p className='text-base'>
                    We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.
                </p>
                <a href="/" className='ease-in-out duration-300'>Home</a>
            </div>
        </div>
    )
}

export default NotFoundPage