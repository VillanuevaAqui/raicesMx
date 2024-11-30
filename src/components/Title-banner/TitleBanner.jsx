import { useState } from "react";
import "./TitleBanner.css";

const TitleBanner = () => {
    const [value, setValue] = useState

    return (
<div class="nuestroCompromisoBtn">
        <h1 class="h1TitleBanner">{value}</h1>
        <h2 class="h2TitleBanner">{value}</h2>
        <p class="pTitleBanner">{value}</p>
</div>
    )
}

export default TitleBanner;
