export const LatestUploadVideo = () => {
    return (
        <div className="">
            <div className="flex flex-col w-15 h-screen border-2 rounded-md p-4 sticky">
                <h3>Three Latest Video Upload</h3>
                <div className="flex-grow flex flex-col justify-center">
                    <p className="text-center text-gray-600">You haven't uploaded any videos yet</p>
                </div>
            </div>
        </div>
    );
};
