import react from "react";
import '../styles/auth.css';


function Home(){
    return(
        <><><div className="navBar">
            <nav id="navbar" className="navbar">
                <ul>
                    <li>
                        <a className="nav-link scrollto active" href="index.html">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link scrollto" href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link scrollto" href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="nav-link scrollto" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <img src={require('../Images/41330_user_purple_icon.png')} alt="pro" className="pro" />
            </nav>
        </div></>
        <div className="main">

            <br /><br />

            <input type="search" name="searchcard" id="sc" className="searchcard" placeholder="Search" />
            
            <section className="NutriCard-section">
            
            <div className="card" id="card1" >
            <img src={require('../Images/21227.jpg')} alt="Nutrihelp 1" className="Nutrihelp 1" />
                <h3>Balanced Essentials</h3>
                <p>A well-rounded meal plan featuring nutrient-rich options like <br /> oatmeal, grilled chicken, and wholesome grains for a balanced and satisfying diet.</p>
                <a href="" onClick={() => showDetail('card1')}>View</a>
            </div>

            <div className="card" id="card2">
            <img src={require('../Images/80866.jpg')} alt="Nutrihelp 2" className="Nutrihelp 2" />
                <h3>Energize & Revitalize</h3>
                <p>Revitalize your energy with this plan that includes whole foods such as <br /> avocado toast, lean proteins, and energizing snacks like nuts and fruit.</p>
                <a href=""  onClick={() => showDetail('card2')}>View</a>
            </div>

            <div className="card" id="card3">
            <img src={require('../Images/2150777679.jpg')} alt="Nutrihelp 3" className="Nutrihelp 3" />
                <h3>Plant-Powered Delight</h3>
                <p>Embrace a plant-based delight with this vegan-friendly plan, featuring nutrient-packed meals like chickpea curry, quinoa-stuffed peppers, and vibrant, plant-powered options.</p>
                <a href="" onClick={() => showDetail('card3')}>View</a>
            </div>
            </section>
            <br /><br />
            <button>Add More</button> <hr />
        </div></>

    )
}

export default Home;