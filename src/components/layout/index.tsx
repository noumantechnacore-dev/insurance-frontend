import Header from "./header"

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}