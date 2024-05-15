export const LatestUploadMusic = () => {
    return (
        <div className="flex flex-col w-15 h-screen border-2 rounded-md p-4 sticky top-0">
            <h3>Three Latest Music Upload</h3>
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-center text-gray-600">You haven't uploaded any musics yet</p>
            </div>
        </div>
    );
};
