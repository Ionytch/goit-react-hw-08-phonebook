// import {Phonebook} from "./phonebook/Phonebook";
// import Contacts from "./contacts/Contacts";
// import { Filter } from "./filter/Filter";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchContacts } from "redux/operations";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { PageNotFound } from "pages/Notfound";

const Homepage=lazy(()=>import ('../pages/Homepage')); 
const Register=lazy(()=>import ('../pages/Register'));
const Login=lazy(()=>import ('../pages/Login'));
const PhoneContacts=lazy(()=>import ('../pages/PhoneContacts'));

export default function App() {
  // const dispatch = useDispatch();
 
  // const contacts = useSelector(state => state.contacts.items);
  // const filtered=useSelector(state => state.filter);
  
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
        
  //  const filteredContacts = () => {
    
  //    return contacts.filter(contact => 
  //        contact.name.toLowerCase().includes(filtered.toLowerCase())
         
  //   );
  // };


    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phonecontacts" element={<PhoneContacts />} />
          <Route path="*" element={<PageNotFound />} /> 
          </Route>
      </Routes>
      </>
      
      
      
      
      // <div
      //   style={{
      //     display: 'flex',
      //     flexDirection:'column',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101'
      //   }}
      // >
      //   <Phonebook  />
      //   <Filter  />
      //   {contacts.length > 0 ? (
      //     <Contacts
      //       names={filteredContacts()}
      //                 />
      //   ) : (
      //     <span text="Contact list is empty."> "Contact list is empty."</span>
      //   )}
        
      //   </div>
    );
  }

