import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const {
    name,
    email,
    password,
    passwordCheck,
    setName,
    setEmail,
    setPassword,
    setPasswordCheck,
    setFormIsValid,
    passwordIsValid,
    setPasswordIsValid,
    closeEye,
    setCloseEye,
  } = props;

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handlePasswordCheck = (event) => {
    const value = event.target.value;
    setPasswordCheck(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password && passwordCheck) {
      if (password === passwordCheck) {
        setFormIsValid(true);
      }
    } else {
      alert("All fields must be completed");
    }
  };
  const handlePasswordIsValid = () => {
    if (!password || !passwordCheck || password !== passwordCheck) {
      setPasswordIsValid("redBorder");
    } else {
      setPasswordIsValid(null);
    }
  };
  let hidePassword = "";
  closeEye ? (hidePassword = "text") : (hidePassword = "password");
  const handleCloseEye = () => {
    if (closeEye) {
      setCloseEye(false);
    } else {
      setCloseEye(true);
    }
    return hidePassword;
  };
  return (
    <div className="formulaire">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input type="text" value={name} onChange={handleName} />
        <h2>Email</h2>
        <input type="email" value={email} onChange={handleEmail} />
        <h2>Password</h2>
        <div className="contentIcon">
          <input
            className={passwordIsValid}
            type={hidePassword}
            value={password}
            onChange={handlePassword}
          />
          {closeEye ? (
            <FontAwesomeIcon
              onClick={handleCloseEye}
              className="icon"
              icon={faEyeSlash}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleCloseEye}
              className="icon"
              icon="eye"
            />
          )}
        </div>
        <h2>Comfirm your password</h2>
        <div className="contentIcon">
          <input
            className={passwordIsValid}
            type={hidePassword}
            value={passwordCheck}
            onChange={handlePasswordCheck}
          />
          {closeEye ? (
            <FontAwesomeIcon
              onClick={handleCloseEye}
              className="icon"
              icon={faEyeSlash}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleCloseEye}
              className="icon"
              icon="eye"
            />
          )}
        </div>
        {passwordIsValid ? (
          <p className="alert">Your both passwords are different.</p>
        ) : null}
        <button onClick={handlePasswordIsValid} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
