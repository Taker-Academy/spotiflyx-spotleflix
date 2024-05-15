import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { ProfileContent } from "../profile/ProfileContent"
import { Footer } from "@/components/footer"


export const MainProfile = () => {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <ProfileContent/>

        </main>
    )
}