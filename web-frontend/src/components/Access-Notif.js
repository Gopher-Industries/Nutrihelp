import React from 'react';
import '../styles/auth.css';
import { useNavigate } from 'react-router-dom';

function AccessNotif() {
  const navigate = useNavigate();
    
  const handleContinue = () => {
    // Use the navigate function to navigate to a different route
    navigate('/allergy');
  };
  return (
    
    <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Access</h2>
              <form method="POST" className="register-form">
                <div className="form-group" id="sd">
                  <div className="searchable-dropdown">
                    <input type="text" id="search-input" placeholder="Search Contact" />
                    <ul id="dropdown-list">
                      <li id="option-1" data-value="1">Contact 1</li>
                      <hr />
                      <li data-value="2">Contact 2</li>
                      <hr />
                      <li data-value="3">Contact 3</li>
                      <hr />
                      <li data-value="4">Contact 4</li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <div className="toggle-container">
                    <h3>Family / Carer</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="toggle-container">
                    <h3>Weekly Reports</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="toggle-container">
                    <h3>Health Report</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="toggle-container">
                    <h3>Grocery List</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                <h2 className="form-title">Notifications</h2>
                <div className="toggle-container">
                  <h3>Notification</h3>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle-container">
                  <h3>Notification</h3>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div>
                  <div className="toggle-container">
                    <h3>Notification</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div className="toggle-container">
                    <h3>Notification</h3>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group form-button">
                  <input type="submit" name="continue" className="form-submit" value="Continue" onClick={handleContinue} />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <img src="/images/1.png" alt="Access" />
            </div>
          </div>
        </div>
      </section>
  
  );
}

export default AccessNotif;
