// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';

import { RegForm, RegLabel } from './RegisterForm.styled';



export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

  return (
    <RegForm  autoComplete="off">
      <RegLabel >
        Username
        <input type="text" name="name" />
      </RegLabel>
      <RegLabel >
        Email
        <input type="email" name="email" />
      </RegLabel>
      <RegLabel >
        Password
        <input type="password" name="password" />
      </RegLabel>
      <button type="submit">Register</button>
    </RegForm>
  );
};


{/* <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form> */}