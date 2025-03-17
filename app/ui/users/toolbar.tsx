import { ClipLoader } from "react-spinners"
import Flash from "../flash"
import Button from "./button"
import { LockClosedIcon, LockOpenIcon, TrashIcon } from "@heroicons/react/16/solid"

const UserToolbar = ({ statuses, isPending }: { statuses: boolean[], isPending: boolean}) => {

    return (
        <div className=' d-flex flex-wrap align-items-center gap-3 py-2'>
            <div className="d-flex gap-2 ">
                <Button 
                    name="Block"
                    value="toBlocked"
                    statuses={statuses}
                    icon={<LockClosedIcon className="icon-1" />}
                />
                <Button 
                    name=""
                    value="toActive"
                    statuses={statuses}
                    icon={<LockOpenIcon className="icon-1" />}
                />
                <Button 
                    name=""
                    value="toDeleted"
                    statuses={statuses}
                    icon={<TrashIcon className="icon-1" />}
                />

            </div>
            {isPending && <ClipLoader color={'black'}/>}
            <Flash />
        </div>
    )
}

export default UserToolbar
