import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
	const { doctorId } = useParams();
	const navigate = useNavigate();
	const { doctors, currency } = useContext(AppContext);
	const [slotIndex, setSlotIndex] = useState<number>(0);
	const [slotTime, setSlotTime] = useState<number>(0);
	const [doctorSlote, setDoctorSlote] = useState<
		{ dateTime: Date; time: string }[][]
	>([]);
	const [filteredDoctors, setFilteredDoctors] = useState<(typeof doctors)[]>(
		[],
	);
	const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

	const getUseBookedSlot = async () => {
		setDoctorSlote([]);

		const today = new Date();

		for (let i = 0; i < 7; i++) {
			const currentDate = new Date(today);
			currentDate.setDate(today.getDate() + i);

			const endTime = new Date();
			endTime.setDate(today.getDate() + i);
			endTime.setHours(21, 0, 0, 0);

			if (today.getDate() === currentDate.getDate()) {
				currentDate.setHours(
					currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
				);
				currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
			} else {
				currentDate.setHours(10);
				currentDate.setMinutes(0);
			}

			const timeSlots: { dateTime: Date; time: string }[] = [];
			while (currentDate < endTime) {
				const formattedTime = currentDate.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				});

				timeSlots.push({
					dateTime: new Date(currentDate),
					time: formattedTime,
				});

				currentDate.setMinutes(currentDate.getMinutes() + 30);
			}
			setDoctorSlote((prev) => [...prev, timeSlots]);
		}
	};

	const fetchDoctor = async () => {
		const docInfo = doctors.find((doctor) => doctor._id === doctorId) || null;
		setDoctorInform(docInfo);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchDoctor();
	}, [doctorId, doctors]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getUseBookedSlot();
	}, [doctorInform]);

	useEffect(() => {
		console.log(doctorSlote);
	}, [doctorSlote]);

	return (
		doctorInform && (
			<div className="mb-40 ">
				{/* DOCTOR DETAILS */}
				<div className="flex flex-col sm:flex-row gap-4">
					<div>
						<img
							src={doctorInform.image}
							alt=""
							className="bg-primary w-full sm:max-w-72 rounded-lg "
						/>
					</div>

					{/* DOCTOR NAME & EXPERINCE & YEAR & PRICE */}

					<div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 space-y-3">
						<p className="flex flex-row gap-4 text-3xl font-medium text-gray-600	">
							{doctorInform.name} <img src={assets.verified_icon} alt="" />
						</p>
						<div className="flex flex-row gap-3 text-gray-600">
							<p>
								{doctorInform.degree} - {doctorInform.speciality}
							</p>
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button className="border py-1 px-3 text-sm bg-slate-50 rounded-full">
								{doctorInform.experience}
							</button>
						</div>
						{/* DOCTOR ABOUTS */}
						<div>
							<p className="flex flex-row text-sm gap-2 font-medium">
								About <img src={assets.info_icon} alt="" className="w-3" />
							</p>
							<p className="mt-4 text-sm text-gray-600 max-w-[700px]">
								{doctorInform.about}
							</p>
						</div>
						<p className="font-medium text-gray-700">
							Appointment fee:{" "}
							<span className="font-semibold text-black">
								{currency}
								{doctorInform.fees}
							</span>
						</p>
					</div>
				</div>
				{/* BOOKING SLOTS */}
				<div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
					<p>Booking Slots</p>
					<div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
						{/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
						{doctorSlote &&
							doctorSlote.map((day, index) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<div
									onClick={() => setSlotIndex(index)}
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className={`border border-gray-100 px-4 py-5 rounded-full cursor-pointer text-center min-w-16 ${slotIndex === index ? "bg-primary text-white" : "bg-white text-gray-600"}`}
								>
									<p>{day[0] && daysofWeek[day[0].dateTime.getDay()]}</p>
									{/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
									<p>{day[0] && day[0].dateTime.getDate()}</p>
								</div>
							))}
					</div>
					<div className="flex items-center w-full overflow-x-scroll gap-3 mt-4">
						{doctorSlote.length &&
							doctorSlote[slotIndex].map((item, index) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<p
									onClick={() => setSlotTime(index)}
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border border-gray-500 text-gray-400 ${slotTime === index ? "bg-primary text-white" : "bg-white text-gray-600"}`}
								>
									{item.time.toLowerCase()}
								</p>
							))}
					</div>
					<button type="button" onClick={() =>navigate('/my-appointments')} className="text-sm font-light text-white bg-primary px-12 py-4 cursor-pointer rounded-full mt-5">
						Book an appointment
					</button>
				</div>

				{/* RELATED DOCTORS */}
				<div className="mt-32">
					<div className="flex flex-col items-center justify-center gap-4">
						<p className="text-3xl font-semibold ">Related Doctors</p>
						<p className="text-sm font-normal">
							Simply browse through our extensive list of trusted doctors.
						</p>
					</div>
					<RelatedDoctors
						speciality={doctorInform.speciality || ""}
						docId={doctorId || ""}
					/>
				</div>
			</div>
		)
	);
};

export default Appointment;
