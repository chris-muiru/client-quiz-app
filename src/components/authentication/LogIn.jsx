import React from "react";

const LogIn = () => {
	return (
		<div className="bg-slate-600  sm:w-1/2 h-1/2 m-auto mt-20 box-border text-center">
			<h1 className="font-semibold text-white text-lg pt-6 ">
				Sign in to your account
			</h1>
			<div className="text-center m-10 p-5 box-border">
				<form method="post">
					<input
						type="text"
						name="username"
						placeholder="username..."
						className="mb-10 rounded-md w-3/4 h-10 pl-3"
					/>
					<br />
					<input
						type="password"
						name="password"
						placeholder="password"
						className="rounded-md w-3/4 pl-3  h-10 mb-10"
					/>
					<br />
					<button
						className="bg-green-500 border-none rounded-md p-3 w-44"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default LogIn;
