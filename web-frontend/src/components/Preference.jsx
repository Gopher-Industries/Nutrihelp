import react from "react";

function PREFERENCE()
{
    return(
        <div className="page-background">
            <div className="contain">
                <h6>Your Preferences</h6>
                <input type="radio" />
            </div>
            <p>Please confirm your selection</p><br/>
            <div className="backImage">
                <img src="images/deit.jpg" alt="bckimg" className="imgB"/>
            </div>
            <div className="ditryCont">
            <div className="special">
                <h7>Special Dietary Requirements<br/>
                <p className="backwork">None<img src='images/close.png' alt="" className="close"/></p>
                </h7>
            </div>

            <div className="allg">
                <h7>Allergies<br/>
                    <p className="backwork">Dairy<img src='images/close.png' alt="" className="close"/></p>
                </h7>
                
            </div>

            <div className="dislike">
                <h7>Dislikes <br/>
                    <p className="backwork">Ginger<img src='images/close.png' alt="" className="close"/></p><br/><br/>
                    <p className="backwork">Mushrooms<img src='images/close.png' alt="" className="close"/></p> 
                </h7><br/><br/>
            </div>

            </div>
            <br /><br/>

            <div className="secCont">
                <div className="health">
                <br /><br />
                <h7>Health Conditions<br/>
                    <p className="backwork">Vitamin B6 deficiency<img src='images/close.png' alt="" className="close"/></p>
                    <p className="backwork">Vitamin D deficiency<img src='images/close.png' alt="" className="close"/></p><br /><br/>
                    <p className="backwork">Limit Sodium 2400mg<img src='images/close.png' alt="" className="close"/></p>
                    <p className="backwork">Limit Cholesterol 2800mg<img src='images/close.png' alt="" className="close"/></p>
                </h7><br/>
                </div>
            </div>

            <div className="buttonCont">
                <button className="confirm-button">Confirm Choices</button>
                <button className="redo-button">Redo</button>
            </div>
            
            
        </div>
    )
}

export default PREFERENCE