import { Section } from "../../components/Section";
import LogoSpotiflyx from "../../components/logo/logo_spotiflyx-removebg-preview.png";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="w-full">
            <a href={`/register`}>
                <Section className="flex items-baseline pb-6 items-center gap-4 justify-start">
                    <Image
                        src={LogoSpotiflyx}
                        alt="logo spotiflyx"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-lg font-bold text-primary">
                        Spotiflyx
                    </h1>
                </Section>
            </a>
        </header>
    )
}
