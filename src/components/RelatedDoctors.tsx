import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

interface RelatedDoctorsProps {
	speciality: string;
	docId: string;
}

const RelatedDoctors = ({ speciality, docId }: RelatedDoctorsProps) => {
	const navigate = useNavigate();
	const { doctors } = useContext(AppContext);
	const [relatedDoctors, setRelatedDoctors] = useState<Array<{
		_id: string;
		name: string;
		image: string;
		speciality: string;
		degree: string;
		experience: string;
		about: string;
		fees: number;
		address: { line1: string; line2: string };
	}>>([]);

	useEffect(() => {
		if (doctors.length > 0 && speciality) {
			const relatedDr = doctors.filter(
				(dr) => dr.speciality === speciality && dr._id !== docId,
			);
			setRelatedDoctors(relatedDr);
		}
	}, [speciality, docId, doctors]);

	return (
		<div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
			{relatedDoctors?.map((doctor, index: number) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					onClick={() => {navigate(`/appointment/${doctor._id}`); scrollTo(0, 0)}}
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
	);
};

export default RelatedDoctors;
