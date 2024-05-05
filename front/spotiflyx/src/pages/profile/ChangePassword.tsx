import { CloseLogo } from '@/components/images/CloseLogo';
import React from 'react';
import { FORMS, Form } from './Form';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { CurrentPassword, NewPassword } from './Form';
import { useState } from 'react';
import SendChangePassword from "./SendChangePassword";

interface ModalProps {
    onClose: () => void;
}

const SuccessChangePassword: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-zinc-800 p-6 rounded-lg">
            <button onClick={onClose}><CloseLogo size={32}/></button>
            <div className="mt-4">
                <p>Your password has been successfully changed</p>
            </div>
        </div>
    </div>
    )
}

export const ChangePassword: React.FC<ModalProps> = ({ onClose }) => {

    const navigate = useNavigate();
    const [IsSuccesChangeOpen, setIsSuccesChangeOpen] = useState(false);

    const openSuccess = () => {
        setIsSuccesChangeOpen(true);
    };

    const closeSuccess = () => {
        setIsSuccesChangeOpen(false);
    };

    const handleClick = async (
        password: string,
        new_password: string,
    ) => {
        if (!password || !new_password) {
            alert("please enter a value");
            return 1;
        }
        try {
            const response = await SendChangePassword(password, new_password);
            if (response.status === 200) {
                navigate('/home');
                openSuccess();
                return (
                    <div>
                        {IsSuccesChangeOpen && <SuccessChangePassword onClose={closeSuccess} />}
                    </div>
                )
            }
            if (response.status === 402) {
                navigate('/profile');
                alert("You enter the wrong password");
                return 1;
            }
            if (response.status === 403) {
                navigate('/profile');
                alert("Your new password cannot be your old one");
                return 1;
            }
        } catch (error) {
            console.error(error);
            navigate('/profile');
            return 1;
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 p-6 rounded-lg">
                <button onClick={onClose}><CloseLogo size={32}/></button>
                <div className="mt-4">
                    {FORMS.map((project, index) => (
                    <Form
                        key={index}
                        old_password={project.old_password}
                        value={project.value}
                    />
                    ))}

                    <p 
                        onClick={() => handleClick(
                            CurrentPassword,
                            NewPassword
                        )}
                        className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-20")}
                    >
                        Change Password !
                    </p>
                </div>
            </div>
        </div>
    );
};
