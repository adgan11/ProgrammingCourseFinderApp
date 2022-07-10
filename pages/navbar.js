import * as React from 'react';

export default function NavBar() {
    return (
        <>
            <div className="navbar">
                <h1>CourseFinder</h1>
                <input id="search" type="text" placeholder="Search course..." />
            </div>
            <hr />
        </>
    )
}