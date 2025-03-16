import Button from "./button"
import { LockClosedIcon, LockOpenIcon, TrashIcon } from "@heroicons/react/16/solid"

const UserToolbar = ({ statuses }: {statuses: boolean[]}) => {

    return (
        <div className='py-3 d-flex flex-wrap gap-1'>
            <Button 
                name="Block"
                value="toBlocked"
                // type="button"
                statuses={statuses}
                icon={<LockClosedIcon className="icon-1" />}
            />
            <Button 
                name=""
                value="toActive"
                // type="button"
                statuses={statuses}
                icon={<LockOpenIcon className="icon-1" />}
            />
            <Button 
                name=""
                value="toDelete"
                // type="button"
                statuses={statuses}
                icon={<TrashIcon className="icon-1" />}
            />
        </div>
    )
}

export default UserToolbar
