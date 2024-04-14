/* eslint-disable react/prop-types */
const Course = ({course}) => {
    return (
      <div>
        {course.map((item) => (
        <div key={item.id}><h2>{item.name}</h2>
        {item.parts.map((part) => (
        <p key={part.id}>{part.name} {part.exercise}</p>
        ))}
        <b>{`total of 
          ${item.parts.reduce((sum, part) => 
          sum + part.exercise, 0
          )} `}
        </b>
        </div>
        ))}
      </div>
    )
  }

  export default Course