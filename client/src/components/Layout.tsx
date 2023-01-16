interface LayoutProps {
    children: JSX.Element;
}
const Layout = ({children}: LayoutProps) => {
    return(
        <div className="max-w-5xl p-5 mx-auto">
            {children}
        </div>
    )
}

export default Layout;