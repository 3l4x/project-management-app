import { PropsWithChildren } from 'react'
import GlassPane from '@/components/GlassPane'
import '@/styles/global.css'
import Sidebar from '@/components/Sidebar'
const DashboardRootLayout = ({ children }: PropsWithChildren) => {
    return (
        <html>
            <head />
            <body className="h-screen w-screen candy-mesh p-6">
                <GlassPane className="w-full h-full flex items-center justify-center">
                    <Sidebar/>
                    {children}
                </GlassPane>
                <div id="modal">
                </div>
            </body>
        </html>
    )
}

export default DashboardRootLayout