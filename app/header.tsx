import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-stone-100">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">TravelBuddy</a>
      </div>

        <nav className="center">
            <ul className="flex justify-center gap-8">
                {/* <li><Link className="text-sm font-medium uppercase" href="/">Home</Link></li>
                <li><Link className="text-sm font-medium uppercase" href="/">Users</Link></li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Header;