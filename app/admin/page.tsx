import { fetchUsers } from "../lib/data"
import UserTable from "../ui/users/table"
import UserToolbar from "../ui/users/toolbar"

const Page = async () => {
    const users = await fetchUsers();

    // console.log(users);
    return (
        <div className="container-fluid container-lg d-flex flex-column  mt-1">
            <div className="">
                <UserToolbar />
            </div>
            <div className="table-responsive ">
                <UserTable users={users} />
            </div>
        </div>
    )
}

export default Page
