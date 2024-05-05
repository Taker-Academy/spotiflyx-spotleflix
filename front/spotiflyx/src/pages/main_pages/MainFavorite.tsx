import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { MusicVideoFav } from "../favorite/Music&VideoFav"


export const MainFavorite = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <MusicVideoFav/>

        </main>
    )
}
