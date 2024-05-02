import { ComponentPropsWithoutRef } from "react";

export const FavorieLogo = (
    props: ComponentPropsWithoutRef<"svg"> & {size?: number}
) => {
    return (
        <svg 
            version="1.0" 
            width={props.size}
            height={props.size}
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
        
            <g 
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#c6ccd7" 
                stroke="none"
            >
                <path 
                    d="M1340 4378 c-26 -14 -57 -41 -75 -66 l-30 -44 0 -1708 0 -1708 30
                    -44 c54 -77 164 -110 248 -74 18 7 284 223 591 479 554 462 560 467 580 448
                    104 -93 1108 -919 1129 -929 15 -6 50 -12 78 -12 95 0 178 67 198 160 8 36 11
                    536 11 1689 0 1832 5 1707 -71 1775 -22 20 -51 41 -65 46 -16 6 -515 10 -1303
                    10 l-1277 0 -44 -22z m2350 -1705 c0 -1252 -1 -1315 -17 -1301 -10 8 -219 182
                    -465 385 -285 237 -460 375 -483 383 -46 15 -128 7 -163 -16 -15 -10 -228
                    -185 -474 -391 l-448 -373 0 1315 0 1315 1025 0 1025 0 0 -1317z"
                />
            </g>
        </svg>

    );
};
