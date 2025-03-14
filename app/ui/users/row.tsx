
const UserRow = () => {
  return (
    <>
      <tr className="text-nowrap">
          <th scope="row">
            <input type="checkbox" />
          </th>
          <td>John Doe</td>
          <td>john@email.com</td>
          <td>Active</td>
          <td className="">03-14-2025</td>
        </tr>
    </>
  )
}

export default UserRow
