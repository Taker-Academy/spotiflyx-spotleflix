import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { UploadMusicVideo } from "../upload/UploadMusicVideo"
import { Footer } from "@/components/footer"


export const MainUpload = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <UploadMusicVideo/>

            <Footer/>

        </main>
    )
}
