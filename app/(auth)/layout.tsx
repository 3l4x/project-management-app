import { PropsWithChildren } from 'react'
import GlassPane from '@/components/GlassPane'

import '@/styles/global.css'
const AuthRootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html>
            <head />
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">
                    {children}
                </GlassPane>
            </body>
        </html>
    )
}

export default AuthRootLayout