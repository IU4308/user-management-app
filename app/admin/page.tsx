
import { fetchUsers } from "../lib/data"

import AdminForm from "../ui/users/admin-form";

const Page = async () => {
    const users = await fetchUsers();

    return (
        <AdminForm users={users} />
        
    )
}

export default Page
