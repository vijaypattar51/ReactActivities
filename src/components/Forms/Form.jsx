import { useState } from "react";
import Button from "../Button/Button";

export default function RegistrationFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (event) => {

    // const [name, value]=event.target;

    const name = event.target.name; // which field
    const value = event.target.value; // new value

    setFormData({
      ...formData,
      [name]: value, //computed property
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted:", formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Your Name: </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Your Email: </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Your Password: </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   // If user types in email input:
//   // name = "email"
//   // value = "john@example.com"

//   setFormData({
//     ...formData,     // { name: "", email: "", age: "" }
//     [name]: value    // email: "john@example.com"
//   });
//   // Result: { name: "", email: "john@example.com", age: "" }
// };