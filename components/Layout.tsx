import Steps from "@/components/Steps"

const Layout = ({children}) => {
    return (
        <div>
            <Steps/>
            {children}            
        </div>
    )
}

export default Layout
