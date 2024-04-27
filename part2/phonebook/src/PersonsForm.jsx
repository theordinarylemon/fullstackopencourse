/* eslint-disable react/prop-types */
const PersonsForm = (props) => {
    return (
        <div>
            <form>
                <div>name: <input onChange={props.handleName} value={props.newName}/></div>
                <br />
                <div>number: <input onChange={props.handleNumber} value={props.number}></input></div>
                <div><button type='submit' onClick={props.onAdd}>add</button></div>
                </form>

        </div>
    )
}

export default PersonsForm