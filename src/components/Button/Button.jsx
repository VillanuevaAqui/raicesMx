import "./Button.css";
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <button class="GreenButton"><a href="#">
                            <h1 class="h1Button"></h1>
                            <h2 class="h2Button"></h2>
                            <p class="pButton"></p>
                        </a>
                    </button>
  )  
}

export default Button;