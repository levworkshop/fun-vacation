import { ReactNode } from "react";

interface Props {
    text: string;
    url: string;
    icon: ReactNode; // JSX.Element | HTML | string...
}

function SocialButton({ text, url, icon }: Props) {

    function handleClick() {
        window.location.href = url;
    }

    return (
        <button
            className="btn btn-outline-primary rounded-pill mx-2"
            onClick={handleClick}
        >
            {icon}
            {text}
        </button>
    );
}

export default SocialButton;