import styles from './Form.module.css';
import {useState} from "react";

const Form = props => {
    const {inputs, setInputs} = props;
    const [inputsErrors, setInputsErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    });
    const {firstNameError, lastNameError, emailError, passwordError, confirmPasswordError} = inputsErrors;

    const setNewValues = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "firstName") {
            if (e.target.value.length < 2) {
                setInputsErrors({
                    ...inputsErrors,
                    ["firstNameError"]: "First Name must be at least 2 characters"
                });
            } else {
                setInputsErrors({
                    ...inputsErrors,
                    ["firstNameError"]: ""
                });
            }
        };
        if (e.target.name === "lastName") {
            if (e.target.value.length < 2) {
                setInputsErrors({
                    ...inputsErrors,
                    ["lastNameError"]: "Last Name must be at least 2 characters"
                });
            } else {
                setInputsErrors({
                    ...inputsErrors,
                    ["lastNameError"]: ""
                });
            }
        };
        if (e.target.name === "email") {
            if (e.target.value.length < 2) {
                setInputsErrors({
                    ...inputsErrors,
                    ["emailError"]: "Email must be at least 2 characters"
                });
            } else {
                setInputsErrors({
                    ...inputsErrors,
                    ["emailError"]: ""
                });
            }
        };
        if (e.target.name === "password") {
            if (e.target.value.length < 8) {
                setInputsErrors({
                    ...inputsErrors,
                    ["passwordError"]: "Password must be at least 8 characters"
                });
            } else {
                setInputsErrors({
                    ...inputsErrors,
                    ["passwordError"]: ""
                });
            }
        };
        if (e.target.name === "confirmPassword") {
            if (e.target.value !== inputs["password"]) {
                setInputsErrors({
                    ...inputsErrors,
                    ["confirmPasswordError"]: "Passwords must match"
                });
            } else {
                setInputsErrors({
                    ...inputsErrors,
                    ["confirmPasswordError"]: ""
                });
            }
        };
    };

    return(
        <div className={styles.Form}>
            <table className={styles.Table_Form}>
                <tbody>
                    <tr>
                        <td><label htmlFor="firstName">First Name</label></td>
                        <td><input type="text" onChange={setNewValues} name={"firstName"} /></td>
                        {firstNameError ? <p>{firstNameError}</p> : ""}
                    </tr>
                    <tr>
                        <td><label htmlFor="lastName">Last Name</label></td>
                        <td><input type="text" onChange={setNewValues} name={"lastName"} /></td>
                        {lastNameError ? <p>{lastNameError}</p> : ""}
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email</label></td>
                        <td><input type="email" onChange={setNewValues} name={"email"} /></td>
                        {emailError ? <p>{emailError}</p> : ""}
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td><input type="password" onChange={setNewValues} name={"password"} /></td>
                        {passwordError ? <p>{passwordError}</p> : ""}
                    </tr>
                    <tr>
                        <td><label htmlFor="confirmPassword">Confirm Password</label></td>
                        <td><input type="password" onChange={setNewValues} name={"confirmPassword"} /></td>
                        {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Form;