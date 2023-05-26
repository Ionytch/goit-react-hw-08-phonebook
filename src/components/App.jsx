import {Phonebook} from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";
import { Filter } from "./filter/Filter";
// import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
// import { useEffect } from "react";


 
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






// export default function App() {
//   const dispatch = useDispatch();
 
//   const contacts = useSelector(state => state.contacts.items);
//   const filtered=useSelector(state => state.filter);
//   const isLoading = useSelector(state => state.contacts.isLoading);
//   const error = useSelector(state => state.contacts.error);
  
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
        
//    const filteredContacts = () => {
    
//      return contacts.filter(contact => 
//          contact.name.toLowerCase().includes(filtered.toLowerCase())
         
//     );
//   };


//     return (
//       <div
//         style={{
//           // height: '100vh',
//           display: 'flex',
//           flexDirection:'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101'
//         }}
//       >
//         <Phonebook  />
//         <Filter  />
//         {contacts.length > 0 ? (
//           <Contacts
//             names={filteredContacts()}
//                       />
//         ) : (
//           <span text="Contact list is empty."> "Contact list is empty."</span>
//         )}
//                 </div>
//     );
//   }



  import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
import { Layout } from "./Layout/Layout";
// import { PrivateRoute } from './PrivateRoute';
import { PrivateRoute } from "./routes/PrivatRoute";
// import { RestrictedRoute } from './RestrictedRoute';
import { RestrictedRoute } from "./routes/RestrictedRoute";
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Homepage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contactpage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        /> */}
      </Route>
    </Routes>
  );
};
