import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { UploadMusicVideo } from "../upload/UploadMusicVideo"
import { Footer } from "@/components/footer"


export const MainParameter = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <div className="flex-grow flex flex-col items-center justify-center">
                <p className="text-center text-gray-600">Coming Soon...</p>
            </div>

            <Footer/>

        </main>
    )
}
