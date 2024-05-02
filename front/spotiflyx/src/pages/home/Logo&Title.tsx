import { Link } from 'react-router-dom';
import LogoSpotiflyx from "../../components/logo/logo_spotiflyx-removebg-preview.png";
import Image from "next/image";

export const LogoAndTitle = () => {
    return (
        <div className="pr-40 flex f-row justify-between items-center">
            <Link to="/register">
                <Image
                    src={LogoSpotiflyx}
                    alt="logo spotiflyx"
                    width={300}
                    height={300}
                />
            </Link>
            <h1 className="text-lg font-bold text-primary">
                Spotiflyx
            </h1>
        </div>
    )
};
