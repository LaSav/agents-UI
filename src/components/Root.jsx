import { NavLink, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id='nav'>
        <NavLink to='/workflows'>Workflows</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
