import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
	const navigate = useNavigate();
	const [filterDr, setFilterDr] = useState<typeof doctors>([]);
	const { speciality } = useParams();
	const { doctors } = useContext(AppContext);

	const applyFilter = useCallback(() => {
		if (speciality) {
			setFilterDr(doctors.filter((item) => item.speciality === speciality));
		} else {
			setFilterDr(doctors);
		}
	}, [doctors, speciality]);

	useEffect(() => {
		applyFilter();
	}, [applyFilter]);

	return (
		<div className="mb-20">
			<p className="text-gray-600 font-medium mb-5">
				Browse through the doctors specialist.
			</p>
			<div className="flex flex-row gap-5">
				<div className="flex-col gap-4 text-sm text-gray-600 hidden sm:flex mt-4">
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={() =>
							speciality === "General physician"
								? navigate("/doctors")
								: navigate("/doctors/General physician")
						}
						className="border pl-4 py-3 rounded-xl w-[200px] cursor-pointer
					hover:bg-blue-100 hover:translate-x-[-30px] duration-500"
					>
						General physician
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={() =>
							speciality === "Gynecologist"
								? navigate("/doctors")
								: navigate("/doctors/Gynecologist")
						}
						className="border pl-4 py-3 rounded-xl w-[200px] cursor-pointer
					hover:bg-blue-100 hover:translate-x-[-30px] duration-500"
					>
						Gynecologist
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={() =>
							speciality === "Neurologist"
								? navigate("/doctors")
								: navigate("/doctors/Neurologist")
						}
						className="border pl-4 py-3 rounded-xl w-[200px] cursor-pointer
					hover:bg-blue-100 hover:translate-x-[-30px] duration-500"
					>
						Neurologist
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={() =>
							speciality === "Pediatricians"
								? navigate("/doctors")
								: navigate("/doctors/Pediatricians")
						}
						className="border pl-4 py-3 rounded-xl w-[200px] cursor-pointer
					hover:bg-blue-100 hover:translate-x-[-30px] duration-500"
					>
						Pediatricians
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={() =>
							speciality === "Dermatologist"
								? navigate("/doctors")
								: navigate("/doctors/Dermatologist")
						}
						className="border pl-4 py-3 rounded-xl w-[200px] cursor-pointer
					hover:bg-blue-100 hover:translate-x-[-30px] duration-500"
					>
						Dermatologist
					</p>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<p
						onClick={() =>
							speciality === "Gastroenterologist"
								? navigate("/doctors")
								: navigate("/doctors/Gastroenterologist")
						}
						className="border pl-4 py-3 rounded-xl w-[200px] cursor-pointer
					hover:bg-blue-100 hover:translate-x-[-30px] duration-500"
					>
						Gastroenterologist
					</p>
				</div>
				<div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
					{filterDr.map((item, index) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							onClick={() => navigate(`/appointment/${item._id}`)}
							className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
						>
							<img className="bg-blue-50" src={item.image} alt="" />
							<div className="p-4">
								<div className="flex items-center gap-2 text-sm text-center text-green-500 ">
									<p className="w-2 h-2 rounded-full bg-green-500" />
									<p>Avaliable</p>
								</div>
								<p className="text-lg font-medium text-gray-900">{item.name}</p>
								<p className="ttext-sm text-gray-600">{item.speciality}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Doctors;
