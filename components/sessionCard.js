import Image from "next/image";
import Date from "./date";
import { getSpeaker } from "../src/utils/contentful";
import { useEffect, useState } from "react";

const SessionCard = ({ src, title, text, date, time }) => {
	const [speakers, setSpeakers] = useState([]);

	useEffect(() => {
		getSpeaker().then((res) => {
			setSpeakers(res.items)
			console.log("speaker", res);
		})
	}, [])

	return (
		<div className="bg-[#F7F7F7] p-[10px] w-full rounded-[10px]" style={{ boxShadow: "0px 10px 40px rgba(7, 24, 50, 0.07)" }}>
			<div style={{ borderBottom: "1px solid rgb(71, 80, 96, 0.15)" }} className={"pb-[10px]"}>
				<div className="flex flex-col items-center">
					<Image src={src} width={350} height={193} alt="session card" />
				</div>
				<Date date={date} time={time} className={"justify-center  text-[13px] mt-[10px]"} />
				<div className="mt-[10px] font-medium text-xl text-[#142630]" style={{ fontFamily: "Lato" }}>{title}</div>
				<div className="mt-[10px] text-[#475060]" style={{ fontFamily: "Jost" }}>{text}</div>
			</div>
			<div className="mt-[10px]">
				<p className="text-[#3185FC]" style={{ fontFamily: "Lato" }}>Speakers:</p>
				<div className="flex text-[13px] justify-between text-black">
					{speakers.map((speaker, index) => (
						<>
							{index !== 0 && (
								<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect y="0.5" width="5" height="5" rx="2.5" fill="#475060" />
								</svg>
							)}
							<p style={{ fontFamily: "Lato" }} key={index}>{speaker.name}</p>
						</>
					))}
				</div>
			</div>
		</div>
	)
}

export default SessionCard;