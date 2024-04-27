/* eslint-disable react/prop-types */
const Filter = (props) => {
    // const onSearch = (e) => {
    //     props.setSearchFilter(e.target.value)
    //     const search = e.target.value
    //     const result = props.persons.filter((person) => person.name.includes(search))
    //     // console.log('result', result)
    //     props.setFileterResult(result)
    //     // console.log('filterResult',filterResult) 
    //    }

    return (
        <div>               
        <div>filter shown with <input onChange={props.onSearch} /></div>
        </div>
       
       )
}

export default Filter
