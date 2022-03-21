import styles from './Data.module.css';

const Data = props => {
    const {firstName, lastName, email, password, confirmPassword} = props.outputs;

    return(
        <div className={styles.Data}>
            <h2>Your Form Data</h2>
            <table className={styles.Table_Data}>
                <tbody>
                <tr>
                    <td>First Name </td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name </td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email </td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password </td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password </td>
                    <td>{confirmPassword}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Data;