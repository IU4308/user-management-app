
import { fetchUsers } from "../lib/data"
import UserTable from "../ui/users/table"
import UserToolbar from "../ui/users/toolbar"

import AdminForm from "../ui/users/admin-form";

const Page = async () => {
    const users = await fetchUsers();
    

    return (
        <AdminForm users={users} />
        
        // <form className="container-fluid container-lg d-flex flex-column  mt-1">
        //     <div className="">
        //         <UserToolbar />
        //     </div>
        //     <div className="table-responsive ">
        //         <UserTable users={users} />
        //     </div>
        // </form>
    )
}

export default Page
