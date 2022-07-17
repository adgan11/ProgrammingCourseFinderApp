import * as React from 'react';

//import data.json file
import courseData from '../public/data.json';

//Component that renders the course card
import CourseCard from './coursecard';
//Component that renders the navbar
import NavBar from './navbar';

import {Prisma, PrismaClient} from '@prisma/client';

let prisma = new PrismaClient();

// index.tsx
export async function getStaticProps() {
  const feed = await prisma.course.findMany();
  return {
    props: { feed },
  };
};

//Previous logic used to display the cards :-

//for (let i = 0; i< courseData.length; i++) {
  //let createMany = await prisma.course.create({
    //data: {
      //id: 'id' + i,
      //data: courseData[i]
    //},
  //})
//}

export default function Home({ feed }) {
  return (
    <>
      <div className="card-container">
        <font color="white">
          <NavBar />
          {console.log(feed)}
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
