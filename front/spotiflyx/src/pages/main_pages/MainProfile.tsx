import { Spacing } from "@/components/Spacing"
import { HeaderProfile } from "../profile/HeaderProfile"
import { ProfileContent } from "../profile/ProfileContent"


export const MainProfile = () => {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <HeaderProfile/>

            <Spacing size="sm"/>

            <ProfileContent/>
        </main>
    )
}