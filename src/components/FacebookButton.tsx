import { ReactNode } from "react";
import SocialButton from "./SocialButton";


function FacebookButton({ icon }: { icon: ReactNode }) {
    return (
        <SocialButton
            text="Facebook"
            url="https://facebook..."
            icon={icon}
        />
    );
}

export default FacebookButton;