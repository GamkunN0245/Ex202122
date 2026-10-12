import React from 'react';
import { Route, useParams } from 'react-router-dom';

// Tạo một component trung gian để tự động lấy tham số từ URL bằng useParams
const UserProfileComponent = () => {
  const { userId } = useParams();
  return <h1>User Profile: {userId || 'No ID provided'}</h1>;
};

export const routes = [
  {
    path: '/',
    component: () => <h1>Home Page</h1>,
  },
  {
    path: '/products',
    component: () => <h1>Products Page</h1>,
  },
  {
    path: '/about',
    component: () => <h1>About Page</h1>,
  },
  {
    path: '/contact',
    component: () => <h1>Contact Page</h1>,
  },
  {
    path: '/users/:userId?',
    component: UserProfileComponent,
  },
];

export const renderRoutes = () => {
  return routes.map((route, index) => {
    const Component = route.component;
    return (
      <Route
        key={index}
        path={route.path}
        element={<Component />}
      />
    );
  });
};