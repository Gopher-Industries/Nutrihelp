import React from "react";
function DIETPLAN(){
    return(
        <div className="page-background">

            <div className="contain">
                <h6>Daily Nutrition Plan</h6>
            </div>
            <p>This is your recommended daily intake based on your preferences and health</p>
            <table className="plan">
                <tbody>
                    <tr>
                        <td>Calories</td>
                        <td className="clr">7536 kj</td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Carbohydrates</td>
                        <td className="clr">at least 45g</td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Protein</td>
                        <td className="clr" >at least 70g</td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Fat</td>
                        <td className="clr">at least 60g</td>
                    </tr>
                    <hr />
                    <tr>
                        <td>Water</td>
                        <td className="clr">at least 3 cups</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <div>
                <h5>Health Conditions</h5>
                <p>We will select food in your meal plan that are rich in the following vitamins.</p>
                <p className="choice"><img src='images/tick.png' alt="" className="tick"/>Vitamin B6</p>
                <p className="choice"><img src='images/tick.png' alt="" className="tick"/>Vitamin D</p><br/><br/>
                <p>We will select foods in your meal plan that keep you within your set limits.</p>
                <p className="choice"><img src='images/tick.png' alt="" className="tick"/>Limit Sodium 2400mg</p>
                <p className="choice"><img src='images/tick.png' alt="" className="tick"/>Limit Cholesterol 2800mg</p>
            </div>

            <div className="buttonContinue">
                <button className="continue-button">Continue</button>
            </div>
        </div>
    )
}
export default DIETPLAN