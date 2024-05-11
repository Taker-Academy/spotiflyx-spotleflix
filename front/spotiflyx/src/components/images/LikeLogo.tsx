import { ComponentPropsWithoutRef } from "react";

export const LikeLogo = (
    props: ComponentPropsWithoutRef<"svg"> & {size?: number}, filled: ComponentPropsWithoutRef<"svg"> & {fill?: string}
) => {
    return (
        <svg
            width={props.size}
            height={props.size} 
            viewBox="0 0 24 24"
            fill={filled.fill}
            {...props}    
        >
            <g clip-path="url(#clip0_15_121)">
                <path d="M3 12.5C3 11.3954 3.89543 10.5 5 10.5H6C7.10457 10.5 8 11.3954 8 12.5V18.5C8 19.6046 7.10457 20.5 6 20.5H5C3.89543 20.5 3 19.6046 3 18.5V12.5Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 12.5C9 12.5 13 10 13 5C13 3 16 3 16 5C16 7 16 8 15 10.5H21C21.5523 10.5 22 10.9477 22 11.5V14.7396C22 15.2294 21.8202 15.7022 21.4948 16.0683L18.5967 19.3287C18.2172 19.7557 17.6731 20 17.1019 20H10.3333C10.117 20 9.90643 19.9298 9.73333 19.8L8 18.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_15_121">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};
