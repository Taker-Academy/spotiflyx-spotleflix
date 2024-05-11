import { Section } from "@/components/Section"
import { Spacing } from "@/components/Spacing"
import { UserLogo } from "@/components/images/UserLogo"
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";
import { ChangePassword } from "./ChangePassword";
import { LogOutPopUp } from "./LogOutPopUp";
import { DeletePopUp } from "./DeletePopUp";
import GetEmail from "./GetEmail";
import { useNavigate } from "react-router-dom";

export var email = '';

export const ProfileContent = () => {

    const navigate = useNavigate();

    const [isPasswordOpen, setIsPasswordOpen] = useState(false);
    const [IsLogout, setIsLogout] = useState(false);
    const [IsDelete, setIsDelete] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchHomeVideo = async () => {
            try {
                const response = await GetEmail();
                if (!ignore) {
                    if (!response || !response.data) {
                        setError(true);
                    } else {
                        email = response.data.email;
                    }
                }
            } catch (error) {
                console.error("An error occurred during the call of SearchButton function", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchHomeVideo();

        return () => {
            ignore = false;
        };
    }, []);

    const openDelete = () => {
        setIsDelete(true);
    };

    const closeDelete = () => {
        setIsDelete(false);
    };

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

    if (error) {
        // Display error message
        navigate("/login");
        return (
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-center text-gray-600">An error occurred. Please try again later.</p>
            </div>
        );
    }

    return (
        <Section className="flex w-full flex-col items-center">
            <div className="flex rounded-full border-4 border-blue-300 w-fit h-fit p-3">
                <UserLogo size={200}/>
            </div>
            <Spacing size="sm"/>
            <div className="flex flex-col w-40 h-3/4 items-center">
                <h3>Email: {email}</h3>
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
                    onClick={openDelete}
                    >
                    Delete your account here !
                </p>
                {isPasswordOpen && <ChangePassword onClose={closeChangePassword} />}
                {IsLogout && <LogOutPopUp onClose={closeLogout} />}
                {IsDelete && <DeletePopUp onClose={closeDelete} />}
            </div>

        </Section>
    )
}