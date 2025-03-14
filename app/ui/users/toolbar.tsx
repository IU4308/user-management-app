import { LockClosedIcon } from "@heroicons/react/16/solid"
import BlockButton from "./buttons/block"
import UnblockButton from "./buttons/unblock"
import DeleteButton from "./buttons/delete"

const UserToolbar = () => {
    return (
        <div className='py-3 d-flex flex-wrap gap-1'>
            <BlockButton />
            <UnblockButton />
            <DeleteButton />
        </div>
    )
}

export default UserToolbar
