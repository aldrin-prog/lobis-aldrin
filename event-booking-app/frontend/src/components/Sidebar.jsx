import { Link } from "react-router-dom"

const Sidebar=()=>{
    return (
        <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-center font-bold text-lg border-b border-gray-700">
          Dashboard
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="block p-3 rounded hover:bg-gray-700">Home</Link></li>
            <li><Link to="/profile" className="block p-3 rounded hover:bg-gray-700">Profile</Link></li>
            {/* <li><a href="#" className="block p-3 rounded hover:bg-gray-700">Settings</a></li>
            <li><a href="#" className="block p-3 rounded hover:bg-gray-700">Profile</a></li> */}
          </ul>
        </nav>
      </aside>
    )
}
export default Sidebar