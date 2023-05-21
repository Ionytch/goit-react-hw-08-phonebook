import { nanoid } from 'nanoid'; 

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
      // number:"User number"
      // completed: false,
    },
  };
};

export  const deleteContact = contactId => {
    return {
        type: "contacts/deleteContact",
        payload: contactId,
    };
};

// const toggleCompleted = {
//   type: "tasks/toggleCompleted",
//   payload: "Task id",
// };

export const setFilter = value=>{
  return{
  type: "filters/setFilter",
  payload: value,
  }
};


// import { createAction } from "@reduxjs/toolkit";
// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// export const setFilter = createAction("filters/setFilter");