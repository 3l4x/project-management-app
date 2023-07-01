import { PropsWithChildren } from "react"
import clsx from "clsx"
import '@/styles/global.css'

type GlassPaneProps = {
    className?: string
}


const GlassPane = ({ children, className }: PropsWithChildren<GlassPaneProps>) => {
    return (
        <div
            className={
                clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)
            }
        >
            {children}
        </div>
    )
}

export default GlassPane