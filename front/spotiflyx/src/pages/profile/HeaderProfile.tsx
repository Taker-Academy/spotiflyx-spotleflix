import { Section } from "../../components/Section";
import React from 'react';
import { LogoAndTitle } from "../home/Logo&Title";
import { HeaderAncre } from "../home/HeaderAncre";

export const HeaderProfile = () => {
    return (
        <header className="w-full h-30">
            <Section className="flex items-center gap-4 w-full justify-between">
                <LogoAndTitle size={150}/>
                <HeaderAncre/>
            </Section>
        </header>
    )
}
