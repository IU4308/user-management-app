import Header from "../ui/header"

const Layout = async ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="container-fluid p-0 d-flex flex-column ">
        <div className="container-fluid shadow-sm">
            <Header />
        </div>
        <div className="">
            {children}
        </div>
    </div>
  )
}

export default Layout
