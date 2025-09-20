// src/pages/TestPage.jsx
import { useState } from "react";
import { Menu, Button } from "@mantine/core";

export default function TestPage() {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md">
        {/* Pages Menu */}
        <Menu opened={pagesOpen} onChange={setPagesOpen}>
          <Menu.Target>
            <Button
              variant="filled"
              color="orange"
              onClick={() => setPagesOpen(o => !o)}
              className='cursor-pointer'>
              Pages
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="/home-page">
              Home
            </Menu.Item>
            <Menu.Item component="a" href="/favorites-page">
              Favorites
            </Menu.Item>
            <Menu.Item component="a" href="/recommended-page">
              Recommended
            </Menu.Item>
            <Menu.Item component="a" href="/trending-page">
              Trending
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        {/* Account Menu */}
        <Menu opened={accountOpen} onChange={setAccountOpen}>
          <Menu.Target>
            <Button
              variant="light"
              color="pink"
              onClick={() => setAccountOpen(o => !o)}>
              Account
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="/login-page">
              Sign In
            </Menu.Item>
            <Menu.Item component="a" href="/sign-up-page">
              Sign Up
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </nav>

      {/* Page content */}
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Test Page
        </h1>
        <p className="text-gray-700 mb-6">
          Click the buttons in the navbar to see the dropdown menus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Home Section</h2>
            <p>Example content for the Home section.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Favorites Section</h2>
            <p>Example content for Favorites.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Recommended Section</h2>
            <p>Example content for Recommended.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Trending Section</h2>
            <p>Example content for Trending.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
