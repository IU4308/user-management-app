import UserTable from "../ui/users/table"
import UserToolbar from "../ui/users/toolbar"

const Page = () => {
    return (
        <div className="container-fluid container-lg d-flex flex-column  mt-1">
            <div className="">
                <UserToolbar />
            </div>
            <div className="table-responsive ">
                <UserTable />
            </div>
        </div>
    )
}

export default Page
