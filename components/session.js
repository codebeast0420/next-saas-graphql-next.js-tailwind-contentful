import { useEffect, useRef, useState } from "react";
import { getSessionList, getSession } from "../src/utils/contentful";
import SessionCard from "./sessionCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import SwiperCore, { Navigation } from "swiper/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


SwiperCore.use([Navigation]);

const Session = () => {
	const [preHeader, setPreHeader] = useState('');
	const [header, setHeader] = useState('');
	const [sessions, setSessions] = useState([{}]);
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const convertDate = (start) => {
		const date = new Date(start);
		const dateString = `${monthNames[date.getMonth(date)]} ${date.getDate(date)}, ${date.getFullYear(date)}`
		return dateString;
	}

	const convertTime = (start, end) => {
		const start_date = new Date(start);
		const start_noon = parseInt((start_date.getHours(start_date)) / 12) > 1 ? "PM" : "AM";
		const start_time = parseInt((start_date.getHours(start_date)) % 12) > 9 ? parseInt((start_date.getHours(start_date) ) % 12) : "0" + parseInt((start_date.getHours(start_date)) % 12);
		const start_min = start_date.getUTCMinutes(start_date) > 9 ? start_date.getUTCMinutes(start_date) : "0" + start_date.getUTCMinutes(start_date);
		const end_date = new Date(end);
		const end_noon = parseInt((end_date.getHours(end_date)) / 12) > 1 ? "PM" : "AM";
		const end_time = parseInt((end_date.getHours(end_date)) % 12) > 9 ? parseInt((end_date.getHours(end_date)) % 12) : "0" + parseInt((end_date.getHours(end_date)) % 12);
		const end_min = end_date.getUTCMinutes(end_date) > 9 ? end_date.getUTCMinutes(end_date) : "0" + end_date.getUTCMinutes(end_date);
		const dateString = `${start_time}:${start_min} ${start_noon} - ${end_time}:${end_min} ${end_noon}`
		return dateString;
	}


	useEffect(() => {
		getSessionList().then((res) => {
			setPreHeader(res.preHeader);
			setHeader(res.header);
		})

		getSession().then((res) => {
			const temp = res.items.slice().sort((a, b) => {
				const d1 = new Date(a.startTime);
				const d2 = new Date(b.startTime);
				return d1.getTime() - d2.getTime();
			});
			setSessions(temp);
		})
	}, [])


	return (
		<div className="flex flex-col items-center">
			<div className="w-full" style={{ maxWidth: "1374px" }}>
				<div className="pt-[100px] pl-[10%] pr-[10%] pb-[100px] w-full">
					<div className="flex">
						<div>
							<p className="text-lg text-[#475060]" style={{ fontFamily: "Lato" }}>{preHeader}</p>
							<p className="text-3xl font-bold mt-[5px] text-[#142630] " style={{ fontFamily: "Lato" }}>{header}</p>
						</div>
					</div>
					<div className="mt-[20px] flex">
						<Swiper
							spaceBetween={5}
							slidesPerView={2.5}
							modules={[Navigation]}
							onSlideChange={(swiper) => console.log(swiper)}
							navigation={{
								nextEl: '.next-button',
								prevEl: '.prev-button',
							}}
							onSwiper={(swiper) => console.log(swiper)}
							className="w-[1300px]"
						>
							{sessions.map((session, index) => (
								<SwiperSlide key={index}>
									<SessionCard
										speakers={session.speakersCollection ? session.speakersCollection.items : [""]}
										src={session.banner ? session.banner.url : ""}
										title={session ? session.title : ""}
										text={session.description ? documentToReactComponents(session.description.json) : ""}
										date={session.startTime ? convertDate(sessions[index].startTime) : ""}
										time={session.startTime ? convertTime(sessions[index].startTime, sessions[index].endTime) : ""}
										index={index}
										length = {sessions.length}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="flex mt-[50px]" >
						<div className="flex ml-[85%] ">
							<svg width="55" height="41" viewBox="0 0 55 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="prev-button cursor-pointer">
								<rect opacity="0.1" width="55" height="41" rx="4" fill="#475060" />
								<path d="M24.383 12.6846L23.8653 12.165C23.6461 11.945 23.2916 11.945 23.0747 12.165L15.1644 20.1021C14.9452 20.3221 14.9452 20.6779 15.1644 20.8955L23.0747 28.835C23.294 29.055 23.6484 29.055 23.8653 28.835L24.383 28.3154C24.6045 28.093 24.5998 27.7303 24.3736 27.5126L18.1866 21.4362H39.4403C39.7505 21.4362 40 21.1858 40 20.8745V20.1255C40 19.8142 39.7505 19.5638 39.4403 19.5638H18.1866L24.3736 13.4874C24.6022 13.2697 24.6068 12.907 24.383 12.6846Z" fill="#475060" />
							</svg>
							<svg className="ml-[10px] next-button cursor-pointer" width="55" height="41" viewBox="0 0 55 41" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="55" height="41" rx="4" fill="#1CCADF" />
								<path d="M30.617 12.6846L31.1347 12.165C31.3539 11.945 31.7084 11.945 31.9253 12.165L39.8356 20.1021C40.0548 20.3221 40.0548 20.6779 39.8356 20.8955L31.9253 28.835C31.706 29.055 31.3516 29.055 31.1347 28.835L30.617 28.3154C30.3955 28.093 30.4002 27.7303 30.6264 27.5126L36.8134 21.4362H15.5597C15.2495 21.4362 15 21.1858 15 20.8745V20.1255C15 19.8142 15.2495 19.5638 15.5597 19.5638H36.8134L30.6264 13.4874C30.3978 13.2697 30.3932 12.907 30.617 12.6846Z" fill="white" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Session;