import { useState, useRef } from "react";
import "./App.css";
import Input from "./Components/Forms/Input/Input";

function App() {
  //  const [name, setName] = useState('')
  // const userNameRef = useRef();
  // const lastNameRef = useRef();
  // const emailRef = useRef();
  // const dateRef = useRef();

  const [registerValues, setRegisterValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
  };

  const onChangeRegisterValues = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  console.log(registerValues)


  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <h1>
          Register
        </h1>
        <Input
          placeholder="FirstName"
          name="firstName"
          type="text"
          label="Frst Name"
          value={registerValues.firstName}
          onChange={onChangeRegisterValues}
          errorMessage = "First name should be 4-17 characters and shouldn't include any special character. "
        />
        <Input
          placeholder="LastName"
          name="lastName"
          type="text"
          label="Last Name"
          value={registerValues.lastName}
          onChange={onChangeRegisterValues}
          errorMessage = "Last name should be 4-17 characters and shouldn't include any special character. "

        />
        <Input
          placeholder="Email"
          name="email"
          type="text"
          label="Email"
          value={registerValues.email}
          onChange={onChangeRegisterValues}
          errorMessage = "It should be a valid Email address !"

        />
        <Input
          placeholder="birthday"
          name="birthday"
          type="date"
          label="Birthday"
          value={registerValues.data}
          onChange={onChangeRegisterValues}
        />
        <Input
          placeholder="password"
          name="password"
          type="password"
          label="Password"
          value={registerValues.password}
          onChange={onChangeRegisterValues}
          errorMessage = "password should be 9-22 characters and include at least 1 letter, 1 number, 1 special character."

        />
        <Input
          placeholder="confirm Password"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={registerValues.confirmPassword}
          onChange={onChangeRegisterValues}
          errorMessage = "Passwords don't match"

        />
        <button> Sumbit</button>
      </form>
    </div>
  );
}

export default App;
