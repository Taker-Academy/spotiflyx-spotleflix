import { CloseLogo } from '@/components/images/CloseLogo';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface ModalProps {
    onClose: () => void;
}

export const LogOutPopUp: React.FC<ModalProps> = ({ onClose }) => {

    const navigate = useNavigate();

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 p-6 rounded-lg">
                <button onClick={onClose}><CloseLogo size={32}/></button>
                <div className="mt-4">
                    <p>Are your sure you want to log out ?</p>
                    <p 
                        onClick={() => navigate('/login')}
                        className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-5")}
                    >
                        Log Out !
                    </p>
                </div>
            </div>
        </div>
    );
};
