import { Section } from "../../components/Section";
import React from 'react';
import { LogoAndTitle } from "./Logo&Title";
import { SearchBar } from "./SearchBar";
import { HeaderAncre } from "./HeaderAncre";

export const HeaderHome = () => {
    return (
        <header className="w-full">
            <Section className="flex items-baseline pb-6 items-center gap-4 justify-start w-full justify-between">
                <LogoAndTitle size={300} />
                <SearchBar/>
                <HeaderAncre/>
            </Section>
        </header>
    )
}
