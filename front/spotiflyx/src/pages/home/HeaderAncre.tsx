import { UserLogo } from '@/components/images/UserLogo';
import { FavorieLogo } from '@/components/images/FavorieLogo';
import { ParameterLogo } from '@/components/images/ParameterLogo';
import { Link } from 'react-router-dom';

export const HeaderAncre = () => {
    return (
        <div className="flex f-row w-40 justify-around ml-30 pl-10">
            <Link to='/profile'>
                <UserLogo size={38}/>
            </Link>
            <FavorieLogo size={38} />
            <ParameterLogo size={36} />
        </div>
    )
};
