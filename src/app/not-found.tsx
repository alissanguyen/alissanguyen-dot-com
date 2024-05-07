'use client'
import * as React from 'react';

interface Props {

}

const NotFoundPage: React.FC<Props> = ({ }) => {
    return (
        <div>
            <p>The page you are trying to go to does not exist. Please try again.</p>
        </div>
    )
}

export default NotFoundPage