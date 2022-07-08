import * as React from 'react';

import data from '../public/data.json';

export default function courseCard() {

    const handleClick = (dataUrl) => {
        window.open(dataUrl, "_blank");
    }

    return (
        <>
            {data.map(dataName => (
                <div onClick={() => handleClick(dataName.url)} className="card">
                    <h1>
                        {dataName.name}
                    </h1>
                    <p>
                        {dataName.description}
                    </p>
                    <h3>
                        Instructor: {dataName.instructor}
                    </h3>
                    <div className="tag-container">
                        {dataName.tags.map(tag => (
                            <div className="tag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }

        </>
    )
}