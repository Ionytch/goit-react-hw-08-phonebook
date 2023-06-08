import {Phonebook} from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";
import { Filter } from "./filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";


 
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTasks } from "redux/operations";
// import { getTasks } from "redux/selectors";

// export const App = () => {
//   const dispatch = useDispatch();
//   // Отримуємо частини стану
//   const { items, isLoading, error } = useSelector(getTasks);

//   // Викликаємо операцію
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   // Рендерим розмітку в залежності від значень у стані
//   return (
//     <div>
//       {isLoading && <p>Loading tasks...</p>}
//       {error && <p>{error}</p>}
//       <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
//     </div>
//   );
// };





export default function App() {
  const dispatch = useDispatch();
 
  const contacts = useSelector(state => state.contacts.items);
  const filtered=useSelector(state => state.filter);
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // const error = useSelector(state => state.contacts.error);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
        
   const filteredContacts = () => {
    
     return contacts.filter(contact => 
         contact.name.toLowerCase().includes(filtered.toLowerCase())
         
    );
  };


    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook  />
        <Filter  />
        {contacts.length > 0 ? (
          <Contacts
            names={filteredContacts()}
                      />
        ) : (
          <span text="Contact list is empty."> "Contact list is empty."</span>
        )}
        
        </div>
    );
  }

