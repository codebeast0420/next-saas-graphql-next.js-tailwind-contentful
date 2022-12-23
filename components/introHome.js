import { useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "../src/utils/contentful";
import AboutUs from "./aboutUs";
import WhatWeDo from "./whatWeDo";
import Session from "./session";
import Date from "./date";
import SupportBar from "./supportbar";
import FactAndQuote from "./factAndQuote";
import Bottom from "./bottom";

const IntroHome = (props) => {

	const [sessionTitle, setSessionTitle] = useState('');
	const [sessionData, setSessionData] = useState('');
	const [days, setDays] = useState(props.days);
	const [hours, setHours] = useState(props.hours);
	const [mins, setMins] = useState(props.mins);
	const [secs, setSecs] = useState(props.seconds);


	const dateTime = () => {
		if (secs === 0) {
			setSecs(59);
		}
		else {
			setSecs(secs - 1);
		}
		if (secs === 1) {
			setMins(mins - 1);
			if (mins === 0) {
				setHours(hours - 1);
				setMins(59);

				if (hours === 0) {
					setDays(days - 1);
					setHours(23);
				}
			}
		}
	}

	useEffect(() => {
		getSession().then((res) => {
			setSessionTitle(res.items[1].title);
			setSessionData(res.items[1].description.json.content[0].content[0].value);
		});
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			dateTime();
		}, 1000);

		return () => clearInterval(interval);
	}, [secs])

	return (
		<div >
			<div className="flex flex-col items-center" style={{ background: "linear-gradient(242.14deg, #EAF8FA 0%, #EFFCF7 100%)" }}>
				<div className="flex flex-col items-center" style={{ maxWidth: "1374px" }}>
					<div className=" p-[30px] w-2/3 bg-white flex flex-col items-center z-1" >
						<p className="text-[#FF9900]" style={{ fontFamily: "Lato" }}>First Session</p>
						<div className="mt-[10px] flex flex-col items-center">
							<h1 style={{ fontFamily: 'Lato' }} className="font-bold text-3xl text-[#142630]">{sessionTitle}</h1>
							<p style={{ fontFamily: 'Lato' }} className="mt-[10px] text-center text-sm pl-[10%] pr-[10%] text-[#475060]">{sessionData}</p>
						</div>
						<div className="flex mt-[10px] flex-col w-full">
							<Date date={"January 22, 2023"} time={"03:00PM - 05:00PM ET"} className={"justify-center "} />
							<div className=" flex justify-between mt-[-30px]">
								<Image src="/src/img/megaphone1.png" width={60} height={60} alt="megaphone left" />
								<Image src="/src/img/megaphone2.png" width={60} height={60} alt="megaphone right" />
							</div>
						</div>
					</div>
					<div className="w-1/3 bg-[#142630] mt-[-35px] mb-[200px] pl-[30px] pr-[30px] pt-[10px] pb-[10px] flex items-center justify-evenly">
						<div className="flex flex-col text-white items-center">
							<p style={{ fontFamily: 'Lato' }} className='text-lg font-bold'>{days}</p>
							<p style={{ fontFamily: 'Jost' }} className='text-sm'>Days</p>
						</div>
						<svg className="ml-[10px]" width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="5" height="5" rx="2.5" fill="#F6FAFF" />
							<rect y="15" width="5" height="5" rx="2.5" fill="#F6FAFF" />
						</svg>
						<div className="flex flex-col text-white items-center">
							<p style={{ fontFamily: 'Lato' }} className='text-lg font-bold'>{hours < 10 ? `0${hours}` : hours}</p>
							<p style={{ fontFamily: 'Jost' }} className='text-sm'>Hours</p>
						</div>
						<svg className="ml-[10px]" width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="5" height="5" rx="2.5" fill="#F6FAFF" />
							<rect y="15" width="5" height="5" rx="2.5" fill="#F6FAFF" />
						</svg>
						<div className="flex flex-col text-white items-center">
							<p style={{ fontFamily: 'Lato' }} className='text-lg font-bold'>{mins < 10 ? `0${mins}` : mins}</p>
							<p style={{ fontFamily: 'Jost' }} className='text-sm'>Minutes</p>
						</div>
						<svg className="ml-[10px]" width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="5" height="5" rx="2.5" fill="#F6FAFF" />
							<rect y="15" width="5" height="5" rx="2.5" fill="#F6FAFF" />
						</svg>
						<div className="flex flex-col text-white items-center">
							<p style={{ fontFamily: 'Lato' }} className='text-lg font-bold'>{secs < 10 ? `0${secs}` : secs}</p>
							<p style={{ fontFamily: 'Jost' }} className='text-sm'>Seconds</p>
						</div>
					</div>
				</div>
			</div>
			<AboutUs />
			<div className="w-full h-[660px] absolute z-10 top-[950px]">
				<Image src="/src/img/frame.png" fill alt="frame" />
			</div>
			<WhatWeDo />
			<Session />
			<SupportBar />
			<FactAndQuote />
			<Bottom />
		</div>
	)
}

export default IntroHome;