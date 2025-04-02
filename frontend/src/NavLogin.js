
export default function Navbar() {
    return(
    <nav className="flex w-full items-center h-auto justify-between flex-wrap bg-[#f0f4e3] px-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <img src="components/logo_tnsprtbkg.png" alt="Gro Logo" className="h-28" />
        </div>
        <button className="bg-[#5DB151] text-white px-3 py-2 rounded-lg w-auto float-right">User Settings</button>
      </nav>
      )
}
