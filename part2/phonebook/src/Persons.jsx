/* eslint-disable react/prop-types */
const Persons = (props) => {
    return (
        <div>
 {
      props.searchFilter ?
      <div>{props.filterResult.map((person, index) => (<li key={index}>{person.name} {person.number}</li>))}</div>
      : <div>{props.persons.map((person, index) => (<li key={index}>{person.name} {person.number}</li>)
        )} </div>
    }
        </div>
    )
}

export default Persons