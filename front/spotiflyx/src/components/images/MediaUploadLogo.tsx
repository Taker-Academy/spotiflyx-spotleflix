import { ComponentPropsWithoutRef } from "react";

export const MediaUploadLogo = (
    props: ComponentPropsWithoutRef<"svg"> & {size?: number}
) => {
    return (
        <svg
            fill="#c6ccd7"
            width={props.size}
            height={props.size}
            viewBox="0 0 16 16"
        >
            <path
                d="M9 3.793V9H7V3.864L5.914 4.95 4.5 3.536 8.036 0l.707.707.707.707 2.121 2.122-1.414 1.414L9 3.793zM16 11v5H0v-5h2v3h12v-3h2z"
            />
        </svg>
    );
};
