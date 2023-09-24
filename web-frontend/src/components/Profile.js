import React from 'react';
import '../styles/auth.css';
import { useNavigate } from 'react-router-dom';


function SignUpComponent() {
  const navigate = useNavigate();
    
    const handleContinue = () => {
      // Use the navigate function to navigate to a different route
      navigate('/access');
    };
    
  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Profile</h2>
              <form method="POST" className="register-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Last Name" />
                </div>
                <div className="form-group">
                  <input type="text" name="age" id="age" placeholder="Age" />
                </div>
                <div className="form-group">
                  <select name="pass" id="pass">
                    <option value="">Gender</option>
                    <option value="Input1">Male</option>
                    <option value="Input2">Female</option>
                    <option value="Input3">Transgender</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" name="height" id="height" placeholder="Height (cm)" />
                </div>
                <div className="form-group">
                  <input type="text" name="weight" id="weight" placeholder="Weight (kg)" />
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="continue" className="form-submit" value="Continue" onClick={handleContinue} />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <img src="images/1.png" alt="Profile" />
              <hr />
              <h3>Accessibility</h3>
              <p>Text Size</p>
              <button className="optbuttons">Normal</button>
              <button className="optbuttons" style={{ marginLeft: '5px' }}>Large</button>
              <div className="form-group">
                <hr />
                <p>Select all applicable</p>
                <button className="sel">Color Blind</button>
                <button className="sel">Voice Over</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default SignUpComponent;
