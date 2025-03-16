import { auth, signOut } from "@/auth";
import { FireIcon } from "@heroicons/react/16/solid"


const Header = async () => {
  const session = await auth();
  const name = session?.user?.name ?? "";
  return (
    <nav className="container-lg p-3 d-flex flex-wrap justify-content-between gap-2 align-items-center">
        <div className="d-flex align-items-center gap-2">
            <FireIcon className="icon-3 text-danger" />
            <span className="text-danger">FakeLogo</span>
        </div>
      <div className="d-flex gap-2 align-items-center">
        <span>{name}</span>
        <form action={async () => {
          'use server';
          await signOut({ redirectTo: '/login' });
        }}>
          <button type="submit" name="redirectTo" className="btn btn-light border border-secondary">Logout</button>

        </form>
      </div>
    </nav>
  )
}

export default Header
