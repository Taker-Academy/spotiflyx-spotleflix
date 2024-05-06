import { UserLogo } from '@/components/images/UserLogo';
import { FavorieLogo } from '@/components/images/FavorieLogo';
import { ParameterLogo } from '@/components/images/ParameterLogo';
import { Link } from 'react-router-dom';
import { MediaUploadLogo } from '@/components/images/MediaUploadLogo';

export const HeaderAncre = () => {
    return (
        <div className="flex f-row w-40 justify-around ml-30 pl-10">
            <Link to='/profile'>
                <UserLogo size={38}/>
            </Link>
            <Link to='/favorite'>
                <FavorieLogo size={38} />
            </Link>
            <Link to='/upload'>
                <MediaUploadLogo size={34}/>
            </Link>
            <Link to='/parameter'>
                <ParameterLogo size={34} />
            </Link>
        </div>
    )
};
