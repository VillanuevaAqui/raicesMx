import "./TitleBanner.css";

const TitleBanner = ({ title = "Título" }) => {

    return (
        <div className="title-banner">
            <h2 className="h2TitleBanner">{title}</h2>
        </div>
    )
}

export default TitleBanner;
