'use client';
import { UserRowProps } from "@/app/lib/definitions"
import { formatDateToLocal } from "@/app/lib/utils"

const UserRow = ({ 
    user, 
    index,
    selectedRows,
    handleSelect,
} : UserRowProps) => {
    const [ created_at, last_login ] = formatDateToLocal([user.created_at, user.last_login])
    const isSelected = selectedRows.includes(index)
  
    return (
      <>
          <tr className="text-nowrap">
              <th scope="row">
                  <input 
                    type="checkbox" 
                    name="userId" 
                    value={user.id}
                    // defaultChecked={isSelected}
                    checked={isSelected}
                    onChange={() => {
                      handleSelect(index)
                    }}
                    className="form-check-input"
                  />
                  {/* <input type="hidden" name={isSelected ? "email" : ''} value={user.email}/> */}
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
