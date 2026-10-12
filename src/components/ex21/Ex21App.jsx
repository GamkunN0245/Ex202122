import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const users = [
  { id: 0, firstName: "John", lastName: "Done", age: 25 },
  { id: 1, firstName: "Mary", lastName: "Thompson", age: 35 },
  { id: 2, firstName: "John", lastName: "Smith", age: 30 },
  { id: 3, firstName: "Emily", lastName: "Johnson", age: 25 },
  { id: 4, firstName: "William", lastName: "Davis", age: 34 }
];

function UsersList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ margin: '10px 0' }}>
            <Link to={`/users/${user.id}`} style={{ fontSize: '20px' }}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetail() {
  const { id } = useParams();
  const user = users[id];

  if (!user) return <div style={{ padding: '20px' }}>User not found</div>;

  return (
    <div style={{ padding: '20px', fontSize: '24px' }}>
      {user.firstName} {user.lastName} : {user.age}
    </div>
  );
}

export default function Ex21App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}