import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
    let allCourses = [];

    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course)
            })
        })
        return allCourses;
    }
    
  return (
    <div>
    {!courses ? (
        <div>
            <p>Not Data Found</p>
        </div>
    ) : (getCourses().map((course) => {
            return <Card key={course.id} course={course}/>
        }))}

    </div>
  )
}

export default Cards
