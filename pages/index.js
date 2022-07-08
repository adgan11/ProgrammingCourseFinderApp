import * as React from 'react';

//Component that renders the course card
import CourseCard from './coursecard';

export default function Home() {
  return (
    <>
      <div className="card-container">
        <font color="white">
          <CourseCard />
        </font>
      </div>
    </>
  )
}
