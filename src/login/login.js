import React, { useReducer } from 'react';
import './login.css';

const initialState = {
  email: '',
  password: '',
  validEmail: false,
  validPassword: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload, validEmail: action.payload.includes('@') };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload, validPassword: action.payload.length >= 6 };
    default:
      return state;
  }
};

const LoginForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.validEmail && state.validPassword) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={state.email}
            onChange={(e) => dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value })}
          />
          {!state.validEmail && <span className="error">Invalid email address</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'UPDATE_PASSWORD', payload: e.target.value })}
          />
          {!state.validPassword && (
            <span className="error">Password must be at least 6 characters</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
