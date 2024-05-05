import { Link } from 'react-router-dom';
import LogoSpotiflyx from "../../components/logo/logo_spotiflyx-removebg-preview.png";
import Image from "next/image";

export type SizeProps = {
    size?: 150 | 200 | 300;
};

export const LogoAndTitle = ({ size = 300 }: SizeProps) => {
    return (
        <div className="pr-40 flex f-row justify-between items-center">
            <Link to="/register">
                <Image
                    src={LogoSpotiflyx}
                    alt="logo spotiflyx"
                    width={size}
                    height={size}
                />
            </Link>
            <h1 className="text-lg font-bold text-primary">
                Spotiflyx
            </h1>
        </div>
    )
};
