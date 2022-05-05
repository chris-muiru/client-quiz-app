const NavBar = () => {
	return (
		<div className="">
			{/* Mobile first navicon */}
			<div className="sm:hidden w-10 h-9 ml-3 border-2 rounded-md box-border hover:opacity-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
					className="w-full text-slate-400"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
					/>
				</svg>
			</div>
			<nav className="hidden p-4 rounded-md sm:flex">
				<div className="absolute right-5">
					<button className="text-white m-7 hover:border hover:rounded-md p-1">
						Main
					</button>
					<button className="text-white hover:border hover:rounded-md p-1">logout</button>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
