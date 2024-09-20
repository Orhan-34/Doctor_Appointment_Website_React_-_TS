import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
	const { doctorId } = useParams();
	const { doctors } = useContext(AppContext);
	const [doctorInform, setDoctorInform] = useState<{
		_id: string;
		name: string;
		image: string;
		speciality: string;
		degree: string;
		experience: string;
		about: string;
		fees: number;
		address: { line1: string; line2: string };
	} | null>(null);

	const fetchDoctor = async () => {
		const docInfo = doctors.find((doctor) => doctor._id === doctorId) || null;
		setDoctorInform(docInfo);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchDoctor();
	}, [doctorId, doctors]);

	return (
		doctorInform && (
			<div className="mb-40 ">
				{/* DOCTOR DETAILS */}
				<div className="flex flex-col sm:flex-row gap-4">
					<div>
						<img src={doctorInform.image} alt="" className="bg-primary w-full sm:max-w-72 rounded-lg "/>
					</div>

					{/* DOCTOR NAME & EXPERINCE & YEAR & PRICE */}

					<div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
						<p>
							{doctorInform.name} <img src={assets.verified_icon} alt="" />
						</p>
						<div>
							<p>
								{doctorInform.degree} - {doctorInform.speciality}
							</p>
						</div>
						<button>{doctorInform.experience}</button>
						{/* DOCTOR ABOUTS */}
						<div>
							<p>
								About <img src={assets.info_icon} alt="" />
							</p>
							<p>{doctorInform.about}</p>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default Appointment;
