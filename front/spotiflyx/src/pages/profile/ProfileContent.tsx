import { Section } from "@/components/Section"
import { Spacing } from "@/components/Spacing"
import { UserLogo } from "@/components/images/UserLogo"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { useState } from "react";
import { ChangePassword } from "./ChangePassword";
import { useNavigate } from "react-router-dom";
import { LogOutPopUp } from "./LogOutPopUp";


export const ProfileContent = () => {
    const navigate = useNavigate();

    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [IsLogout, setIsLogout] = useState(false);

    const openLogout = () => {
        setIsLogout(true);
    };

    const closeLogout = () => {
        setIsLogout(false);
    };

    const openChangePassword = () => {
        setIsPasswordOpen(true);
    };

    const closeChangePassword = () => {
        setIsPasswordOpen(false);
    };

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
                    onClick={openChangePassword}
                    >
                    Change your password here !
                </p>
                <p 
                    className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-10 text-orange-600")}
                    onClick={openLogout}
                    >
                    Log out here !
                </p>
                <p 
                    className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-10 text-red-600")}
                    >
                    Delete your account here !
                </p>
                {isPasswordOpen && <ChangePassword onClose={closeChangePassword} />}
                {IsLogout && <LogOutPopUp onClose={closeLogout} />}
            </div>

        </Section>
    )
}