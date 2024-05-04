// CourseDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { online } from "../../dummydata";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = online.find((course) => course.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.courseName}</h1>
      <p>Description: {course.description}</p>
      {/* Render other course details */}
    </div>
  );
};

export default CourseDetails;
