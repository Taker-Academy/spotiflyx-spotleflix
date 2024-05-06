import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { UploadMusicVideo } from "../upload/UploadMusicVideo"


export const MainUpload = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <UploadMusicVideo/>

        </main>
    )
}
