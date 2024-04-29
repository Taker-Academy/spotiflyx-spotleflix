import { Link } from 'react-router-dom';
import { Section } from "../components/Section";
import LogoSpotiflyx from "../components/logo/logo_spotiflyx-removebg-preview.png";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="w-full">
            <Section className="flex items-baseline pb-6 items-center gap-4 justify-start">
                <Link to="/register">
                    <Image
                        src={LogoSpotiflyx}
                        alt="logo spotiflyx"
                        width={100}
                        height={100}
                    />
                </Link>
                <h1 className="text-lg font-bold text-primary">
                    Spotiflyx
                </h1>
            </Section>
        </header>
    )
}
