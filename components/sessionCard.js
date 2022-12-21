import Image from "next/image";
import Date from "./date";

const SessionCard = ({ src, title, text, date, time }) => {
	return (
		<div className="bg-[#F7F7F7] p-[10px] w-full rounded-[10px]" style={{boxShadow: "0px 10px 40px rgba(7, 24, 50, 0.07)"}}>
			<div style={{borderBottom:"1px solid rgb(71, 80, 96, 0.15)"}} className={"pb-[10px]"}>
				<Image src={src} width={350} height={193} alt="session card" />
				<Date date={date} time={time} className={"justify-center  text-[13px] mt-[10px]"} />
				<div className="mt-[10px] font-medium text-xl text-[#142630]" style={{ fontFamily: "" }}>{title}</div>
				<div className="mt-[10px] text-[#475060]" style={{ fontFamily: "Jost" }}>{text}</div>
			</div>
			<div className="mt-[10px]">
				<p className="text-[#3185FC]" style={{ fontFamily: "Lato" }}>Speakers:</p>
				<div className="flex text-[13px] justify-between text-black">
					<p style={{ fontFamily: "Lato" }}>Rewan AI Hadded</p>
					<p style={{ fontFamily: "Lato" }}>Lola Nordinger</p>
					<p style={{ fontFamily: "Lato" }}>Imran Ahmend</p>
				</div>
			</div>
		</div>
	)
}

export default SessionCard;