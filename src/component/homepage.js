import { useNavigate } from "react-router-dom";
import "./homepage.css";
import blackimga from "../images/weirdimage.jpeg";

const HomePage = () =>{

    let navigate = useNavigate();
    function openShop(){
        let path = "shoppage"
        navigate(path);
    }

    return (
        <div className="homepage">
           <hero>
                <p>Embark on Literary Adventures at Novel Escapades</p>
                <button onClick={openShop} className="button-85">
                    ShopNow
                </button>
           </hero>
        </div>
    )

}

export default HomePage;