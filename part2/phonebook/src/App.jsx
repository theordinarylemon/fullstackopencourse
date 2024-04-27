import {  useState } from 'react'
import Filter from './Filter'
import PersonsForm from './PersonsForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPerson] = useState([
    {name: 'Arto Hellas', number: '040-123456'},
    {name: 'Ada Lovelace', number: '39-44-5323523'},
    {name: 'Dan Abramov', number: '12-43-234345'},
    {name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
const [newName, setNewName] = useState('')
const [number, setNumber] = useState('')
const [searchFilter, setSearchFilter] = useState('')
const [filterResult, setFileterResult] = useState([])

const onSearch = (e) => {
  setSearchFilter(e.target.value)
  const search = e.target.value
  const result = persons.filter((person) => person.name.includes(search))
  // console.log('result', result)
  setFileterResult(result)
  // console.log('filterResult',filterResult) 
 }

const handleName = (e) => {
  setNewName(e.target.value) 
}

const handleNumber = (e) => {
  setNumber(e.target.value)
}

const onAdd = (e) => {
  e.preventDefault()
  const personObject = {
    name: newName,
    number: number
  }
  
  const existingPerson = persons.find((persons) => persons.name === personObject.name )

  // made mistakes on if statement -> if(existingPerson.length>0)
  if (existingPerson) {
    alert(`${newName} is already added in phonebook`)
  }       
  else {
    setPerson(persons.concat(personObject))
}
  setNewName('')
  setNumber('')
}

return (
  <div>
   <h2>Phonebook</h2>  
   <Filter onSearch={onSearch}
   />
    <h3>add a new</h3>
    <PersonsForm 
    handleName={handleName}
    handleNumber={handleNumber}
    onAdd={onAdd}
    />
    <h2>Numbers</h2>
    <Persons persons={persons}
    searchFilter={searchFilter}
    filterResult={filterResult}
    />
    {/* {
      searchFilter ?
      <div>{filterResult.map((person, index) => (<li key={index}>{person.name} {person.number}</li>))}</div>
      : <div>{persons.map((person, index) => (<li key={index}>{person.name} {person.number}</li>)
        )} </div>

    } */}
  </div>
)
}

export default App

