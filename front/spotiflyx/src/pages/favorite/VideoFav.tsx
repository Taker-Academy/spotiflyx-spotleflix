import { Section } from "@/components/Section"


export const VideoFav = () => {
    return (
        <Section className="w-50">
            <h3 className="text-center">Videos</h3>
            <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-600">You haven't added any video to your fav yet</p>
            </div>
        </Section>
    )
}
