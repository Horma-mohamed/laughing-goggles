export default function(){
    return(
        <div className="lg:full    pt-10 bg-gray-00">
          <div className="w-full flex justify-between">
            <div className="w-20 h-10 bg-gray-00 text-2xl font-bold text-blue-600 "> Video </div>
            <input type="search" style={{borderWidth:'1px'}} className="w-2/3 h-10 rounded-full  bg-slate-00 px-2 border-blue-900 outline-none " placeholder="Search about any thing " />
              <div className="flex space-x-3 text-gray-100">
                <button className="p-2 bg-blue-500 rounded-md">Sign up</button>
                <button className="p-2 bg-gray-400 rounded-md">log in</button>
              </div>
          </div>

        </div>
    )
}