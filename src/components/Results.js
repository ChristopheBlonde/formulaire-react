const Results = (props) => {
  const handleEdit = () => {
    props.setFormIsValid(false);
  };

  return (
    <>
      <div className="result">
        <h1>Results</h1>
        <div className="content">
          <p>Name: {props.name}</p>
          <p>Email:{props.email}</p>
          <p>Password:{props.password}</p>
        </div>
        <button onClick={handleEdit}>Edit your information</button>
      </div>
    </>
  );
};

export default Results;
