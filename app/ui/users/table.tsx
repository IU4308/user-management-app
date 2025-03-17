'use client'
import { Attribute, User } from '@/app/lib/definitions'
import UserRow from './row'
import ColumnHead from './column-head'
import { sortUsers } from '@/app/lib/utils'
import { useEffect, useState } from 'react'

const columnTitles = ['Name', 'Email', 'Status', 'Registered at', 'Last Login']
const attributes: Attribute[] = ['name', 'email', 'is_blocked', 'created_at', 'last_login']

const UserTable = ({
    users,
} : {
    users: User[],
}) => {
    const [sorterId, setSorterId] = useState(3);
    const [isDescending, setIsDescending] = useState(true);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSort = (id: number) => {
        setSorterId(id);
        setIsDescending(!isDescending)
    }

    const handleSelect = (index: number) => {
      setSelectedRows(
          selectedRows.includes(index) 
          ? selectedRows.filter(rowIndex => rowIndex !== index) 
          : [...selectedRows, index]
      )
    }

    useEffect(() => {
        setSelectedRows([]);
    }, [users])

    const sortedUsers = sortUsers(users, attributes[sorterId], isDescending);
  
    return (
      <table className="table  border shadow table-striped ">
          <thead>
              <tr className='text-nowrap'>
                  <th scope="col">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={selectedRows.length === users.length}
                        onChange={() => {
                            setSelectedRows(selectedRows.length === users.length ? [] : users.map((_,index) => index))
                        }}
                      />
                  </th>
                  {columnTitles.map((title, index) => (
                      <ColumnHead 
                        key={title} 
                        title={title} 
                        index={index} 
                        sorterId={sorterId} 
                        isDescending={isDescending} 
                        handleSort={handleSort} 
                      />
                    ))}
              </tr>
          </thead>
          <tbody>
              {sortedUsers.map((user, index) => (
                  <UserRow 
                    key={user.id} 
                    user={user} 
                    index={index}
                    selectedRows={selectedRows}
                    handleSelect={handleSelect}
                  />
              ))}
          </tbody>
      </table>
  )
}

export default UserTable
