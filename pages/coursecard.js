import { Prisma } from '.prisma/client';
import * as React from 'react';

import data from '../public/data.json';


export default function courseCard(props) {

    const handleClick = (dataUrl) => {
        window.open(dataUrl, "_blank");
    }

    return (
        <>
                <div onClick={() => handleClick(props.url)} className="card">
                    <h1>
                        {props.name}
                    </h1>
                    <p>
                        {props.description}
                    </p>
                    <h3>
                        Instructor: {props.instructor}
                    </h3>
                    <div className="tag-container">
                        {props.tags.map(tag => (
                            <div className="tag">
                                {tag}
                            </div>
                        ))}
                        </div>
                </div>
        </>
    )
}