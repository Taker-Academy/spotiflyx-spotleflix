import { FetchUploadedVideo } from "../home/UploadedVideo";

export const LatestUploadVideo = () => {
    return (
        <div className="flex flex-col w-15 h-screen border-2 rounded-md p-4 sticky">
            <h3>Three Latest Music Upload</h3>
            <FetchUploadedVideo/>
        </div>
    );
};
