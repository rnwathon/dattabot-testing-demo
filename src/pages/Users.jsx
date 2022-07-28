import React from 'react';
import { UserList } from '../components';
import logo from '../logo.svg';

function Users() {
  const [userList, setUserList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const getUser = async () => {
      setIsLoading(true)
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await res.json()

      setUserList(users)
      setIsLoading(false)
    }

    getUser();
  }, [])

  return (
    <div className="h-screen">
      <header className="bg-slate-900 w-100 p-4">
        <img src={logo} className="h-60 mx-auto p-5" alt="logo" />
      </header>
      <main className='w-96 mx-auto py-5'>
        <UserList isLoading={isLoading}>
          {userList.map((user, index) => (
            <UserList.Item key={index} data={user} />
          ))}
        </UserList>
      </main>
    </div>
  );
}

export default Users;
