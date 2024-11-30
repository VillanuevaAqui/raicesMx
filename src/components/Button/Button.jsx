import { useState } from "react";
import "./Button.css";

const Button = () => {
    const [value, setValue] = useState
    
  return (
    <button class="GreenButton"><a href="#">
                            <h1 class="h1Button">{value}</h1>
                            <h2 class="h2Button">{value}</h2>
                            <p class="pButton">{value}</p>
                        </a>
                    </button>
  )  
}

export default Button;