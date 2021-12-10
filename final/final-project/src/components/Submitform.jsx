import { useState, useEffect } from "react";

const Submitform = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="feedback-container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
        <h1 className="section-title">Your Feedback Is Valuable</h1>
      <div className="introduction">
        <p>
        Calorie Visualiser is developed by young web designers as an academic project.
        Developers at Calorie visualisers are students and very much intersted in learning things from you. 
        Your feedback will definitely help them to make this application look better and feel better.
        We highly encourage you to fill in few details asked about your experience while using this application.
        We want to give the best of user experience from the inputs we recieve from you.
      </p>
      </div>
      <h2 className="introduction-title">Please Fill In The Below Details</h2>
          <div className="faq-div">
          <label>On a scale of 1 - 5 how usefule is this application?</label>
          <div className="grouping-div">
              <input type="radio" name="grade" value="1"/>
              <label>1</label>
              <input type="radio" name="grade" value="2"/>
              <label>2</label>
              <input type="radio" name="grade" value="3"/>
              <label>3</label>
              <input type="radio" name="grade" value="4"/>
              <label>4</label>
              <input type="radio" name="grade" value="5"/>
              <label>5</label>
          </div>
          <br></br>
          <label>How do you rate the accuracy of the output?</label>
          <div className="grouping-div">
              <input type="radio" name="accuracy" value="1"/>
              <label>1</label>
              <input type="radio" name="accuracy" value="2"/>
              <label>2</label>
              <input type="radio" name="accuracy" value="3"/>
              <label>3</label>
              <input type="radio" name="accuracy" value="4"/>
              <label>4</label>
              <input type="radio" name="accuracy" value="5"/>
              <label>5</label>
          </div>
          <br></br>
          <label>How do you rate the visual effect of the application?</label>
          <div className="grouping-div">
              <input type="radio" value="1"/>
              <label>1</label>
              <input type="radio" value="2"/>
              <label>2</label>
              <input type="radio" value="3"/>
              <label>3</label>
              <input type="radio" value="4"/>
              <label>4</label>
              <input type="radio" value="5"/>
              <label>5</label>
          </div>
          <br></br>
          <label>Where do you think we should Improve?</label>
          <div className="grouping-div">
              <input type="checkbox" value="1"/>
              <label>Data Accuracy</label>
              <input type="checkbox"  value="2"/>
              <label>Look and feel of the pages</label>
              <input type="checkbox" value="3"/>
              <label>User experience</label>
              <input type="checkbox"value="4"/>
              <label >Content</label>
          </div>
        </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <h2>Register With Us!!</h2>
        <div className="ui-divider"></div>
        <div className="ui-form">
          <div className="field">
            <label className="label">Name</label>
            <input className="user-input"
              type="text"
              name="username"
              placeholder="Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label className="label">Email</label>
            <input
            className="user-input"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          {/* <div className="field">
            <label className="label">Password</label>
            <input
              className="user-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p> */}
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Submitform;