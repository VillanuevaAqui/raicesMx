import "./Button.css";

const Button = ({text = "Default"}) => {

  return (
    <button className="GreenButton">
      {text}
    </button>
  )
}

export default Button;