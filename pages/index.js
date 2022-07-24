import * as React from 'react';

import { useState } from 'react';

//import data.json file
import courseData from '../public/data.json';

//Component that renders the course card
import CourseCard from './coursecard';
import { Prisma, PrismaClient } from '@prisma/client';

import 'reactjs-popup/dist/index.css';

let prisma;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }

    prisma = global.prisma;
  }
}

export async function getStaticProps() {
  const feed = await prisma.course.findMany();
  return {
    props: { feed },
  };
}

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
          <div className="navbar">
            <h1>CourseFinder</h1>
          </div>
          <hr />
          {
            feed.map((feeds, index) => (
              <CourseCard
                name={feed[index].data.name}
                description={feed[index].data.description}
                instructor={feed[index].data.instructor}
                tags={feed[index].data.tags}
              />
            ))
          }
          < hr />
          <div className="footer">
            Made with ❤️ by <a href="https://twitter.com/ahmedgagan11">Ahmed Gagan</a> <br />
            For <a href="https://hashnode.com/">Hashnode</a> x <a href="https://planetscale.com/">Planetscale</a> Hackathon
          </div>

        </font>
      </div>

    </>
  )
}
