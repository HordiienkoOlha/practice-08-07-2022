import { useState } from "react";
import { nanoid } from "nanoid";
import { getStatus } from '../../service/statusApi'
import { addContact } from "redux/contacts/contactsSlice";
import { useDispatch } from "react-redux";
    

export default function AddContacts() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();

    const onChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value.toLowerCase());
                break;
            case 'age':
                setAge(value.toLowerCase());
                break;
            default:
                return;
            
        }
    }
    const onHandle = async (event) => {
        event.preventDefault()
        const status = await getStatus()
        const newContact = {
            id: nanoid(),
            avatar: name,
            name,
            age,
            status,
        }
        dispatch(addContact(newContact))
        handleReset();
    }

    const handleReset = () => {
        setName('');
        setAge('');
}

    return (
        <form onSubmit={onHandle}>
            <input type='text' value={name}  name='name'onChange={onChange}/>
            <input type='number' value={age} name='age' min='1' step='1' onChange={onChange}/>
            <button type='submit'>ADD CONTACT</button>
        </form>
    )
} 