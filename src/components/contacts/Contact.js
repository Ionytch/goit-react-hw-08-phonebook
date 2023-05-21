import { useDispatch } from "react-redux";
// import { deleteContact } from "redux/actions";
// import { deleteContact } from "redux/contactSlice";
import { deleteContact } from "redux/operations";


export const Contact = ({ name }) => {
     
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(name.id));

    return (<>
        <p>{name.name}:{name.phone}</p>
                               
                <button type="button" onClick={handleDelete}>DELETE</button>
    </>)
}