'use client'
import { User } from "@/app/lib/definitions"
import UserTable from "./table"
import UserToolbar from "./toolbar"
import { useActionState } from "react";
import { mutateUsers } from "@/app/lib/actions";

const AdminForm = ({ users }: { users: User[] }) => {
    // eslint-disable-next-line
    const [errorMessage, formAction, isPending] = useActionState(
        (state: void, formData: FormData) => mutateUsers(state, formData),
        undefined,  
    );
    console.log(isPending)
    const statuses = users.map(user => user.is_blocked)
    return (
        <form action={formAction} className="container-fluid container-lg d-flex flex-column  mt-1">
            
            <div className="">
                <UserToolbar statuses={statuses} isPending={isPending}  />
            </div>
            <div className="table-responsive ">
                <UserTable users={users} />
            </div>

        </form>
    )
}

export default AdminForm