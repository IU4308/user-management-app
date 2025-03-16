// 'use client';
import { User } from "@/app/lib/definitions"
import { formatDateToLocal } from "@/app/lib/utils"
import { useState } from "react";

const UserRow = ({ 
  user, 
  index,
  selectedRows,
  handleSelect
  // allSelected 
}: { 
  user: User;
  index: number;
  selectedRows: number[];
  handleSelect: (index: number) => void
  // allSelected: boolean;

}) => {
  const [ created_at, last_login ] = formatDateToLocal([user.created_at, user.last_login])
  const isSelected = selectedRows.includes(index)
  // const [isSelected, setIsSelected] = useState(allSelected);
  
  // console.log(isSelected)
  
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
