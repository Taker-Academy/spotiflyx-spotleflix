import { Section } from "@/components/Section"
import { Spacing } from "@/components/Spacing"
import { UserLogo } from "@/components/images/UserLogo"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"


export const ProfileContent = () => {
    return (
        <Section className="flex w-full flex-col items-center">
            <div className="flex rounded-full border-4 border-blue-300 w-fit h-fit p-3">
                <UserLogo size={200}/>
            </div>
            <Spacing size="sm"/>
            <div className="flex flex-col w-40 h-3/4 items-center">
                <h3>Email: jean.dupont@gmail.com</h3>
                <p 
                    className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-10")}
                    >
                    Change your password here !
                </p>
                <p 
                    className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-10 text-orange-600")}
                    >
                    Log out here !
                </p>
                <p 
                    className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-10 text-red-600")}
                    >
                    Delete your account here !
                </p>
            </div>

        </Section>
    )
}