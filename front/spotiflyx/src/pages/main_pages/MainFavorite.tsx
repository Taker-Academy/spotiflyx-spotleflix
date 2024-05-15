import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { MusicVideoFav } from "../favorite/Music&VideoFav"
import { Footer } from "@/components/footer"


export const MainFavorite = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <MusicVideoFav/>

            <Footer/>

        </main>
    )
}
