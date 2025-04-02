import Navbar from './NavLogin.js';

export default function GoalCreate() {
    return(
        <div className="h-screen bg-[#FBFCF7]">
            <Navbar />
            <div>
                <div className="flex justify-start items-baseline w-full mt-10">
                    <div className="ml-12 mr-8 text-3xl">Goal Name: </div>
                    <input type="text" className="border border-gray-300 rounded-md p-2" />
                    <div className="float-right">
                        <h3>Priority: </h3>
                        <button>!</button>
                        <button>!!</button>
                        <button>!!!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}