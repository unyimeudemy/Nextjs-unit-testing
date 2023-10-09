import { useState, useEffect } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => <div key={user.id}>{user.name}</div>)
      ) : (
        <span>There is no user</span>
      )}
    </div>
  );
};
