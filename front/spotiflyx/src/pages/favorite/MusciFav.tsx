import { Section } from "@/components/Section"


export const MusicFav = () => {
    return (
        <Section className="w-50 h-auto border-r-4 h-svh">
            <h3 className="text-center">Musics</h3>
            <div className="flex-grow flex flex-col items-center justify-center h-svh">
                <p className="text-center text-gray-600">You haven't added any musics to your fav yet</p>
            </div>
        </Section>
    )
}
