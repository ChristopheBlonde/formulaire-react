import "./App.scss";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  return (
    <>
      {formIsValid ? (
        <Results
          name={name}
          email={email}
          password={password}
          setFormIsValid={setFormIsValid}
        />
      ) : (
        <Form
          name={name}
          email={email}
          password={password}
          passwordCheck={passwordCheck}
          formIsValid={formIsValid}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordCheck={setPasswordCheck}
          setFormIsValid={setFormIsValid}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
