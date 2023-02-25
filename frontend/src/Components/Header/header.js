import Search from "./images/search.png"
import Recipe from "./images/recipeimg.jpg"
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.png"
import { context } from "../Context/Context"
import { useContext } from "react";
import "./Header.css"

const Header = () => {
    const { myFunction } = useContext(context);
    return (
        <div className='main-container'>

            <div className='header-container'>
                <div className='recipe-app'><img src={Recipe} alt="" width="30px" /><b>Recipe App</b></div>
                <div className='search'>
                    <img src={Search} alt="" width="20px" />
                    <input type="search"
                        placeholder='Search by name....'
                        id='myInput'
                        onKeyUp={() => myFunction()}

                    />
                </div><br /><br />
                <div className="new">
                   
                <img src={img4} alt="" width="20px" />
                NEW
                    </div>
                <div> <h2>All Recipes</h2></div><br />
                <div className="recipes-img">
                    <img src={img1} alt="" width="400px" height="400px" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={img2} alt="" width="400px" height="400px"/>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={img3} alt="" width="400px" height="400px"/>
                </div>
            </div>

        </div>
    )
}

export default Header;