import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
// import { createStore } from "redux";
// import { legacy_createStore as createStore } from 'redux';
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from './reducer';

import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    },
});

// const contacts = createReducer([], {
//   [add]:(state, action)=>[newContact, ...contacts]   [...state, action.payload]
// [add]:(state, action)=>state.push(action.payload),
// [remove]: (state, action)=>state.filter(item=>item.id!==action.payload)
// })


// const initialState= {
//   contacts: [],
//   filter: ""
// };

// const contactsInitialState=[];


// const contactsSlice = createSlice({
// name: 'contacts',
// initialState:contactsInitialState,
// reducers:{
// addContact (state, action) {state.push(action.payload)},
// removeContact (state, action) {state.filter(item=>item.id!==action.payload)},
//
// }
// });

// const { addContact, removeContact } = contactsSlice.actions;
// const contactsReducer = contactsSlice.reducer;
// 


// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);