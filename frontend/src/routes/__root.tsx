import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { LayoutDashboardIcon, LogOutIcon, ServerIcon } from 'lucide-react'
import React from 'react';

export const Route = createRootRoute({
  component: () => <div className='flex flex-row'>
    <div className='w-64 h-screen bg-sidebar'>
      <div className='flex flex-col gap-2 p-4 h-full'>
        <h1 className='text-2xl font-bold'>Shulker Dock</h1>

        <Separator />

        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col gap-2'>
            <MenuLink to='/'><LayoutDashboardIcon /> Dashboard</MenuLink>
            <MenuLink to='/servers'><ServerIcon /> Servers</MenuLink>
          </div>
          <div className='flex flex-col gap-2'>
            <MenuLink to='/'><LogOutIcon /> Sign out</MenuLink>
          </div>
        </div>
      </div>
    </div>

    <div className='flex-1 bg-card'>
      <div className='p-4'>
        <Outlet />
      </div>
    </div>
  </div>,
})

function MenuLink({ to, onClick, children }: { to: string; onClick?: () => void; children: React.ReactNode; }) {
  return <Link to={to}>
    <Button variant='secondary'
      className='w-full justify-start'
      onClick={onClick}>
      {children}
    </Button>
  </Link>
}