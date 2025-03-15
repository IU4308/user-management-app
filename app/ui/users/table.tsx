'use client'
import { Attribute, User } from '@/app/lib/definitions'
import UserRow from './row'
import ColumnHead from './column-head'
import { sortUsers } from '@/app/lib/utils'
import { useState } from 'react'

const columnTitles = ['Name', 'Email', 'Status', 'Registered at', 'Last Login']
const attributes: Attribute[] = ['name', 'email', 'is_blocked', 'created_at', 'last_login']

const UserTable = ({
  users
}: {
  users: User[]
}) => {
  const [sorterId, setSorterId] = useState(3);
  const [isDescending, setIsDescending] = useState(true);


  const handleSort = (id: number) => {
    setSorterId(id);
    setIsDescending(!isDescending)
  }

  const sortedUsers = sortUsers(users, attributes[sorterId], isDescending);

  return (
    <table className="table  border shadow table-striped table-hover">
      <thead>
        <tr className='text-nowrap'>
          <th scope="col">
            <input type="checkbox" />
          </th>
          {columnTitles.map((title, index) => (
            <ColumnHead key={title} title={title} index={index} sorterId={sorterId} isDescending={isDescending} handleSort={handleSort} />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
