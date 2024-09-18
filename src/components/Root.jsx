import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TabNav } from '@radix-ui/themes';

export default function Root() {
  const { pathname } = useLocation();
  return (
    <>
      <TabNav.Root color='cyan'>
        <TabNav.Link asChild active={pathname === '/workflows'}>
          <NavLink to='/workflows'>Workflows</NavLink>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/generations'}>
          <NavLink to='/generations'>Generations</NavLink>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/history'}>
          <NavLink to='/generations'>History</NavLink>
        </TabNav.Link>
      </TabNav.Root>
      <Outlet />
    </>
  );
}
