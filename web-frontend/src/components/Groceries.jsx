import React from "react";

function GROCERIES(){
    return(
        <div className="page-background">
            <div className="contain1">
                <h6>Groceries</h6>
            </div>

            <div className="buttonGro">
                <button className="online-button">Shop Online</button>
                <button className="list-button">Send List</button>
            </div>

            <br/>
            <div class="section-all">
                <div class="section">All</div>
                <div class="section">By Date</div>
                <div class="section">By Recipe</div>
            </div>

            <table className="grotable1">
                <tbody>
                    <tr>
                        <td className="tablehead">Fruits</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Strawberry</td>
                        <td> 250g</td>
                    </tr>
                    <tr>
                        <td className="gro" ><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Apple</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Banana</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
            <table className="grotable2">
                <tbody>
                    <tr>
                        <td className="tablehead">Dairy</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Milk</td>
                        <td> 250ml</td>
                    </tr>
                    <tr>
                        <td className="gro" ><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Eggs</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Cheese</td>
                        <td>150g</td>
                    </tr>
                </tbody>
            </table>
            
            <table className="grotable3">
                <tbody>
                    <tr>
                        <td className="tablehead">Vegetables</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Carrot</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td className="gro" ><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Pumpkin</td>
                        <td>850g</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Sweet Potato</td>
                        <td>650g</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Cucumber</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Celery</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Mushrooms</td>
                        <td>250g</td>
                    </tr>
                    <tr>
                        <td className="gro"><img src="images/circle.png" alt="bckimg" className="imgcircle"></img> Asparagus</td>
                        <td>190g</td>
                    </tr>
                </tbody>
            </table>
            <br /><br /><br /><br /><br /><br /><br />
            <div class="lastnav">
                <figure>
                    <img src="images/calendar.png" alt="Calendar" class="imgcalen"/>
                    <figcaption>Plan</figcaption>
                </figure>
                <figure>
                    <img src="images/trolley.png" alt="Trolley" class="imgtro"/>
                    <figcaption>Groceries</figcaption>
                </figure>
                <figure>
                    <img src="images/meal.png" alt="Meal" class="imgmeal"/>
                    <figcaption>Meals</figcaption>
                </figure>
                <figure>
                    <img src="images/scan.png" alt="Scanner" class="imgscan"/>
                    <figcaption>Scanner</figcaption>
                </figure>
            </div>
        </div>
        
    )
}
export default GROCERIES