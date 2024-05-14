import { FetchUploadedVideo } from "../home/UploadedVideo";

export const LatestUploadVideo = () => {
    return (
        <div className="flex flex-col w-15 h-screen border-2 rounded-md p-4 sticky">
            <h3 className="pb-8">Three Latest Video Upload</h3>
            <FetchUploadedVideo/>
        </div>
    );
};
