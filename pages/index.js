import * as React from 'react';

//import prisma client

//Component that renders the course card
import CourseCard from './coursecard';
//Component that renders the navbar
import NavBar from './navbar';

import prisma from '../lib/prisma.js';


// index.tsx
export async function getStaticProps() {
    const feed = await prisma.course.findMany();
    return {
      props: { feed },
    };
};

export default function Home({ feed }) {

  return (
    <>
      <div className="card-container">
        <font color="white">
          <NavBar />
          {
            feed.map((feeds, index) => (
              <CourseCard
              name={feed[index].data.name}
              description={feed[index].data.description}
              instructor={feed[index].data.instructor}
              tags={feed[index].data.tags}
            />
          ))}
        </font>
      </div>
    </>
  )
}
