import { useAuthContext } from "../AuthProvider";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
	let { logoutUser, user } = useAuthContext();
	console.log(user);
	return (
		<div className="">
			<nav className="p-4 rounded-md">
				<div className="absolute right-5 px-10">
					<div
						className="rounded-2xl text-white border-green-700 hover:border-2 box-border"
						onClick={logoutUser}
					>
						<button className="m-3">
							<FontAwesomeIcon icon={faRightFromBracket} />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
