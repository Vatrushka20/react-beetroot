import {Button} from "react-bootstrap";
import {useState} from "react";

const defaultFormValue = {
    firstName: "",
    lastName: "",
    age: "",
}
export const UserForm = () => {
    const [formValue, setFormValue] = useState(defaultFormValue);
    const inputChangeValue = ({target: {value} => console.log(value)})
    return (
        <form>
            <div className='mb-3'>
                <label>First Name
                    <input
                        onChange={(event) => inputChangeValue(event, 'firstName')}
                        value={formValue.firstName}
                        type='text'
                        placeholder="enter me"/>
                </label>
            </div>
            {/*<div className='mb-3'>*/}
            {/*    <label>Last Name*/}
            {/*        <input value={formValue.lastName} type='text' placeholder="enter me"/>*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*<div className='mb-3'>*/}
            {/*    <label>Age*/}
            {/*        <input value={formValue.age} type='number' placeholder="enter me"/>*/}
            {/*    </label>*/}
            {/*</div>*/}

            <Button>Save</Button>
        </form>
    )
}