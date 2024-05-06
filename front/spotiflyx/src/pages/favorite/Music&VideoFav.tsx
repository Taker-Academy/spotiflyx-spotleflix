import { Section } from "@/components/Section"
import { Spacing } from "@/components/Spacing"
import { MusicFav } from "./MusciFav"
import { VideoFav } from "./VideoFav"


export const MusicVideoFav = () => {
    return (
        <Section className="w-100">
            <h2 className="text-center text-2xl">My Favorite</h2>

            <Spacing size="sm"/>

            <div className="flex flex-row justify-between">
                <MusicFav/>
                <VideoFav/>
            </div>
        </Section>

    )
}
