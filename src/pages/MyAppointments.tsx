import { doctors } from "../assets/assets_frontend/assets";

const MyAppointments = () => {
	return (
		<div>
			<p className="border-b text-zinc-500 mb-5 pb-3">My Appointments</p>
			<div>
				{doctors.slice(0, 3).map((doctor, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border-b">
						<div>
							<img
								src={doctor.image}
								alt="doctor"  
								className="w-32 bg-gray-100 "
							/>
						</div>
						<div className="flex-1 text-sm">
							<p className="font-medium text-lg">{doctor.name}</p>
							<p className="mb-2">{doctor.speciality}</p>
							<p className="font-medium">Address:</p>
							<p className="my-1">{doctor.address.line1}</p>
							<p>{doctor.address.line2}</p>
							<p className="mt-2">
								<span className="font-medium mr-2">Date & Time:  </span>25, Sept, 2024 | 13:27
							</p>
						</div>
            <div></div>
            <div className="flex flex-col gap-4 text-center justify-center">
              <buttton className="border px-5 py-2.5 bg-green-600/60 text-white rounded-xl hover:bg-green-500 cursor-pointer">Pay Online</buttton>
              <buttton className="border px-5 py-2.5 bg-red-400 text-white rounded-xl hover:bg-red-500 cursor-pointer">Cancel</buttton>
            </div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyAppointments;
