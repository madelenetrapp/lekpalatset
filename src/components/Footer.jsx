import { useNavigate } from "react-router"

function Footer({ hideAdminButton }) {
	const navigate = useNavigate()

	return (
		<footer>

			{!hideAdminButton && (
				<button onClick={() => navigate("/admin")}>
					Admin
				</button>
			)}


		</footer>
	)
}

export default Footer
