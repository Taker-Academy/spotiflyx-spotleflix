import { ComponentPropsWithoutRef } from "react";

export const ParameterLogo = (
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
                fill="#c6ccd7" stroke="none"
            >
                <path d="M2425 5115 c-11 -2 -74 -9 -140 -15 -167 -17 -234 -48 -274 -130 -10
                -19 -49 -123 -87 -231 l-68 -197 -101 -40 -100 -41 -200 95 c-289 138 -316
                138 -488 1 -185 -146 -452 -434 -492 -530 -8 -20 -15 -60 -15 -89 0 -46 13
                -80 99 -264 l100 -211 -41 -99 -40 -100 -197 -69 c-276 -96 -290 -105 -330
                -195 -60 -140 -60 -740 0 -880 40 -90 55 -99 330 -196 l197 -69 41 -100 40
                -100 -96 -200 c-138 -287 -138 -315 0 -488 103 -130 274 -301 404 -404 173
                -138 201 -138 488 0 l200 96 100 -40 100 -41 69 -197 c97 -275 106 -290 196
                -330 141 -61 739 -61 880 0 90 40 99 55 196 330 l68 197 100 40 101 41 200
                -96 c287 -138 315 -138 488 0 130 103 301 274 404 404 138 173 138 201 0 488
                l-96 200 40 100 41 100 197 69 c275 97 290 106 330 196 60 140 60 740 0 880
                -40 90 -54 99 -330 195 l-197 69 -40 100 -41 99 100 211 c135 288 135 307 -8
                485 -153 191 -450 462 -539 491 -75 25 -133 9 -349 -94 l-200 -95 -100 41
                -101 40 -68 197 c-38 108 -77 212 -87 231 -37 76 -98 108 -234 127 -97 13
                -409 26 -450 18z m280 -441 l50 -6 64 -182 c73 -207 83 -230 120 -269 33 -36
                60 -50 167 -88 47 -17 135 -53 196 -81 156 -72 173 -70 422 50 l190 90 72 -64
                c40 -36 102 -98 138 -138 l65 -73 -91 -189 c-120 -249 -122 -265 -48 -426 29
                -62 65 -149 80 -193 34 -102 51 -133 87 -166 39 -37 62 -47 269 -120 l182 -64
                6 -44 c8 -57 8 -245 0 -302 l-6 -44 -182 -64 c-207 -73 -230 -83 -269 -120
                -36 -33 -53 -64 -87 -166 -15 -44 -51 -131 -80 -193 -74 -161 -72 -176 48
                -426 l90 -190 -64 -72 c-36 -40 -98 -102 -138 -137 l-72 -65 -200 94 c-249
                117 -255 118 -418 43 -61 -28 -147 -64 -191 -79 -102 -34 -133 -51 -166 -87
                -37 -39 -47 -62 -120 -269 l-64 -182 -44 -6 c-57 -8 -245 -8 -302 0 l-44 6
                -64 182 c-73 207 -83 230 -120 269 -33 36 -64 53 -166 87 -44 15 -130 51 -191
                79 -163 75 -169 74 -418 -43 l-200 -94 -72 65 c-40 35 -102 97 -138 137 l-64
                72 90 190 c120 250 122 265 48 426 -29 62 -65 149 -80 193 -34 102 -51 133
                -87 166 -39 37 -62 47 -269 120 l-182 64 -6 44 c-8 57 -8 245 0 302 l6 44 127
                44 c344 120 349 123 411 306 15 44 51 131 80 193 74 161 72 177 -48 426 l-91
                189 65 73 c36 40 98 102 138 138 l72 64 190 -90 c249 -120 266 -122 422 -50
                61 28 149 64 196 81 107 38 134 52 167 88 37 39 47 62 120 270 l64 182 35 4
                c61 6 253 7 305 1z"/>
                <path d="M2447 3619 c-473 -50 -852 -436 -895 -912 -41 -442 209 -860 615
                -1031 143 -60 204 -71 393 -71 189 0 250 11 393 71 540 227 775 872 511 1397
                -153 302 -459 511 -804 547 -105 11 -103 11 -213 -1z m228 -444 c208 -44 381
                -204 441 -410 39 -135 16 -312 -57 -442 -132 -231 -423 -342 -675 -258 -245
                82 -398 292 -398 545 1 164 52 287 169 406 139 141 329 199 520 159z"/>
            </g>
        </svg>
    );
};
