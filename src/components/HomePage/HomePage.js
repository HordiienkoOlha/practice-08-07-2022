import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { removeContact, updateStatus } from 'redux/contacts/contactsSlice';

const tableHeaders = ['N', 'avatar', 'name', 'age', 'status', 'option'];

const HomePage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, avatar, name, age, status }, index) => {
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar size={40} round={true} name={avatar} />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <span onClick={() => dispatch(updateStatus(id))}>
                    {status === 'yes' ? 'onLine' : 'ofline'}
                  </span>
                </td>
                <td>
                  <button onClick={() => dispatch(removeContact(id))}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;
