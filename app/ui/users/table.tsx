'use client'
import UserRow from './row'

const UserTable = () => {
  return (
    <table className="table  border shadow table-striped table-hover">
      <thead>
        <tr className='text-nowrap'>
          <th scope="col">
            <input type="checkbox" />
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col">Registered at</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(15)].map((_, index) => (
          <UserRow key={index}/>

        ))}
      </tbody>
    </table>
  )
}

export default UserTable
