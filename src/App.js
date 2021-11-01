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
    password: '',
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

//  const passwordCondition = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
  const passwordCondition = `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`


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
          required ={true}
          pattern = '^[A-Za-z0-9]{3,19}$'
          errorMessage = "First name should be 3-19 characters and shouldn't include any special character. "
        />
        <Input
          placeholder="LastName"
          name="lastName"
          type="text"
          label="Last Name"
          value={registerValues.lastName}
          onChange={onChangeRegisterValues}
          required ={true}
          pattern = '^[A-Za-z0-9]{3,19}$'
          errorMessage = "Last name should be 3-19 characters and shouldn't include any special character. "

        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          label="Email"
          required ={true}
          value={registerValues.email}
          onChange={onChangeRegisterValues}
          errorMessage = "It should be a valid Email address !"

        />
        <Input
          placeholder="birthday"
          name="birthday"
          type="date"
          label="Birthday"
          required ={false}

          value={registerValues.data}
          onChange={onChangeRegisterValues}
        />
        <Input
          placeholder="password"
          name="password"
          type="password"
          label="Password"
          required ={true}
          value={registerValues.password}
          onChange={onChangeRegisterValues}
          pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
          errorMessage = "password should be 9-22 characters and include at least 1 letter, 1 number, 1 special character."

        />
        <Input
          placeholder="confirm Password"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={registerValues.confirmPassword}
          onChange={onChangeRegisterValues}
          required ={true}
          pattern={registerValues.password}
          errorMessage = "Passwords don't match"

        />
        <button> Sumbit</button>
      </form>
    </div>
  );
}

export default App;
