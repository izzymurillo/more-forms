import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstNameError = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameError = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmailError = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordError = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordError = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value != password) {
      setConfirmPasswordError("Passwords must match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={handleFirstNameError} />
          {firstNameError ? (
            <p style={{ color: "red" }}>{firstNameError}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" onChange={handleLastNameError} />
          {lastNameError ? <p style={{ color: "red" }}>{lastNameError}</p> : ""}
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={handleEmailError} />
          {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
        </div>
        <div>
          <label>Password: </label>
          <input type="text" onChange={handlePasswordError} />
          {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text" onChange={handleConfirmPasswordError} />
          {confirmPasswordError ? (
            <p style={{ color: "red" }}>{confirmPasswordError}</p>
          ) : (
            ""
          )}
        </div>
      </form>
      <div>
        <h4>Your Form Data</h4>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default UserForm;
