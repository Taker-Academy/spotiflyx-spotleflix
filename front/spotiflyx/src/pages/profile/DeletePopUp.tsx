import { CloseLogo } from '@/components/images/CloseLogo';
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import SendDeleteAccount from "./SendDeleteAccount";

interface ModalProps {
    onClose: () => void;
}

var email = '';

const SuccessDeleteAccount: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-zinc-800 p-6 rounded-lg">
            <button onClick={onClose}><CloseLogo size={32}/></button>
            <div className="mt-4">
                <p>You account has been deleted successfully</p>
            </div>
        </div>
    </div>
    )
}

export const DeletePopUp: React.FC<ModalProps> = ({ onClose }) => {

    const navigate = useNavigate();

    const [IsSuccesChangeOpen, setIsSuccesChangeOpen] = useState(false);

    const openSuccess = () => {
        setIsSuccesChangeOpen(true);
    };

    const closeSuccess = () => {
        setIsSuccesChangeOpen(false);
    };

    const handleClick = async (
        email: string,
    ) => {
        if (!email) {
            alert('Please enter a value');
            return 1;
        }
        try {
            const response = await SendDeleteAccount();
            if (response.status === 200) {
                navigate('/register');
                openSuccess();
                return (
                    <div>
                        {IsSuccesChangeOpen && <SuccessDeleteAccount onClose={closeSuccess}/>}
                    </div>
                )
            }
            if (response.status === 401) {
                navigate('/profile');
                alert("Error during the process of deleting the account");
                return 1;
            }
        } catch (error) {
            console.error(error);
            navigate('/profile');
            return 1;
        }
    }

    const [value, setValue] = useState('');

    const handleEmailDelete = (event: any) => {
        const newValue = event.target.value;
        setValue(newValue);
        email = newValue;
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-zinc-800 p-6 rounded-lg">
                <button onClick={onClose}><CloseLogo size={32}/></button>
                <div className="mt-4">
                    <div className="w-full pb-4">
                        <form>
                            <label className="flex flex-col">
                                Email
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="jean.dupont@gmail.com"
                                    className="hover:border-white bg-transparent border border-gray-500 rounded p-1"
                                    style={{ backdropFilter: 'blur(10px)' }}
                                    onChange={(event) => handleEmailDelete(event)}
                                />
                                <style> 
                                    {` 
                                        input::placeholder { 
                                            color: #646a75; 
                                        }` 
                                    } 
                                </style> 
                            </label>
                        </form>
                    </div>
                    <p>Are your sure you want to delele your account ?</p>
                    <p 
                        onClick={() => handleClick(email)}
                        className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-5")}
                    >
                        Delete !
                    </p>
                </div>
            </div>
        </div>
    );
};
