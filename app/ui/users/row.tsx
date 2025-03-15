import { User } from "@/app/lib/definitions"
import { formatDateToLocal } from "@/app/lib/utils"

const UserRow = ({ user }: { user: User }) => {
  const [ created_at, last_login ] = formatDateToLocal([user.created_at, user.last_login])
  return (
    <>
      <tr className="text-nowrap">
          <th scope="row">
            <input type="checkbox" />
          </th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.is_blocked ? "Blocked" : "Active"}</td>
          <td>{created_at}</td>
          <td>{last_login ?? 'Never'}</td>
        </tr>
    </>
  )
}

export default UserRow
