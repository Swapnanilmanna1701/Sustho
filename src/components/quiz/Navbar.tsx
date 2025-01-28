
const Navbar = () => {
    return (
        
        <div className="navbar bg-slate-900 p-2 mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-52 p-2 shadow">
                        <li><a className="btn" href="/ai-tutor">AI Coding Tutor</a></li>
                        <li><a className="btn" href="/project-roadmap">Project Roadmap</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-robotoslab text-slate-100" href="/">Samarthan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary" href="/UserLogin">Login/Signup
                </a>
            </div>
        </div>
    )
}

export default Navbar;