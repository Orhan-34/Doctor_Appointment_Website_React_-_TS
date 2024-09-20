import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
	const navigate = useNavigate();
	const appContext = useContext(AppContext);

	if (!appContext) {
		return <div>Loading...</div>;
	}

	const { doctors } = appContext;

	return (
		<div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
			<h1 className="text-3xl font-medium">Top Doctors to Book</h1>
			<p className="text-xs text-center sm:w-1/3">
				Simply browse through our extensive list of trusted doctors.
			</p>
			<div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
				{doctors.slice(0, 10).map((doctor, index) => (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						onClick={() => navigate(`/appointment/${doctor._id}`)}
						className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
					>
						<img className="bg-blue-50" src={doctor.image} alt="" />
						<div className="p-4">
							<div className="flex items-center gap-2 text-sm text-center text-green-500 ">
								<p className="w-2 h-2 rounded-full bg-green-500" />
								<p>Avaliable</p>
							</div>
							<p className="text-lg font-medium text-gray-900">{doctor.name}</p>
							<p className="ttext-sm text-gray-600">{doctor.speciality}</p>
						</div>
					</div>
				))}
			</div>
			<button
				type="button"
				onClick={() => {navigate("/doctors"); scrollTo(0, 0)}}
				className="bg-blue-100 px-12 py-3 rounded-full text-gray-500 mt-10	"
			>
				More
			</button>
		</div>
	);
};

export default TopDoctors;
