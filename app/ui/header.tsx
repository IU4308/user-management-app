import { FireIcon } from "@heroicons/react/16/solid"


const Header = () => {
  return (
    <nav className="container-lg p-3 d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <div className="d-flex align-items-center gap-2">
            {/* <GlobeAmericasIcon className="logo" />  */}
            <FireIcon className="logo text-danger" />
            <span>FakeLogo</span>
        </div>
      <div className="d-flex gap-2 align-items-center">
        <span>User88</span>
        <button className="btn btn-light border border-secondary">Logout</button>
      </div>
    </nav>
  )
}

export default Header
