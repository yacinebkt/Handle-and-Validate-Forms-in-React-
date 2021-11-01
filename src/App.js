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
        <Input
          placeholder="FirstName"
          name="firstName"
          type="text"
          label="Frst Name"
          value={registerValues.firstName}
          onChange={onChangeRegisterValues}
        />
        <Input
          placeholder="LastName"
          name="lastName"
          type="text"
          label="Last Name"
          value={registerValues.lastName}
          onChange={onChangeRegisterValues}
        />
        <Input
          placeholder="Email"
          name="email"
          type="text"
          label="Email"
          value={registerValues.email}
          onChange={onChangeRegisterValues}
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
        />
        <Input
          placeholder="confirm Password"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={registerValues.confirmPassword}
          onChange={onChangeRegisterValues}
        />
        <button> Sumbit</button>
      </form>
    </div>
  );
}

export default App;
