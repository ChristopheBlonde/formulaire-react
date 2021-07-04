import "./App.scss";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Results from "./components/Results";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faEyeDropper,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash, faEyeDropper);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [closeEye, setCloseEye] = useState(false);

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
          passwordIsValid={passwordIsValid}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordCheck={setPasswordCheck}
          setFormIsValid={setFormIsValid}
          setPasswordIsValid={setPasswordIsValid}
          closeEye={closeEye}
          setCloseEye={setCloseEye}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
