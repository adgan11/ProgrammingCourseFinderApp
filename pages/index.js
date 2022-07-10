import * as React from 'react';

//Component that renders the course card
import CourseCard from './coursecard';
//Component that renders the navbar
import NavBar from './navbar';

export default function Home() {
  return (
    <>
      <div className="card-container">
        <font color="white">
          <NavBar />
          <CourseCard />
        </font>
      </div>
    </>
  )
}
