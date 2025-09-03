import { NavLink } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className='layout-container'>
            <h1 className='main-title'>Welcome to Video Game Finder</h1>
            <NavLink to='/home'>
                Start your search
            </NavLink>
        </div>
    )
    
}