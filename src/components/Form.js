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
  return (
    <div className="formulaire">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input type="text" value={name} onChange={handleName} />
        <h2>Email</h2>
        <input type="email" value={email} onChange={handleEmail} />
        <h2>Password</h2>
        <input
          className={passwordIsValid}
          type="password"
          value={password}
          onChange={handlePassword}
        />
        <h2>Comfirm your password</h2>
        <input
          className={passwordIsValid}
          type="password"
          value={passwordCheck}
          onChange={handlePasswordCheck}
        />
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
