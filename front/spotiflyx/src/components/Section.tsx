import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return (
        <section className={cn("px-4", props.className)}>
            {props.children}
        </section>
    )
};
