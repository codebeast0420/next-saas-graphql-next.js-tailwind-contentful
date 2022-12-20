import Image from "next/image";
import CommonBtn from "./commonBtn";
import Date from "./date";

const AvailableCard = ({ children, img, title, description, subtitles, indexPart }) => {
	return (
		<div className="pb-[70px] mt-[70px]" style={{ borderBottom: "1px solid #475060" }}>
			<div>
				<Image src={img} width={1200} height={500} alt="image" />
			</div>
			<div className="flex">
				<div className="mt-[20px] w-[55%]">
					<div>
						<div className="" style={{ borderBottom: "1px solid rgba(71, 80, 96, .2)", borderTop: "1px solid rgba(71, 80, 96, .2)" }}>
							<Date date={"January 22, 2023"} time={"03:00PM - 05:00PM ET"} className={"justify-start"} />
						</div>
						<div>
							<div className="mt-[10px]">
								<p className="text-4xl font-bold text-black capitalize">{title}</p>
								<p className="mt-[20px] text-[#475060]" style={{ fontFamily: "Jost" }}>{description}</p>
							</div>
							{subtitles && subtitles.map((subtitle, index) => (
								<div key={index} className="mt-[20px] pl-[10px]" style={{ borderLeft: "1px solid #3185FC" }}>
									<p className="font-bold text-lg text-black">{subtitle.header}</p>
									<p className="text-[#475060]" style={{ fontFamily: "Jost" }}>{subtitle.body.json.content[0].content[0].value}</p>
								</div>
							))}
							{indexPart && indexPart.map((sentence, index) => (
								<div key={index} className="mt-[20px] pl-[10px] flex">
									<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[5px]">
										<path d="M20 5.29891C20 6.22176 19.1934 7.01086 18.25 7.01086H14.3496C14.9879 7.6768 15.0662 8.95484 14.1035 9.78211C14.6616 10.6739 14.1874 11.8531 13.4609 12.2163C13.8115 14.1359 12.6037 15 10.625 15C10.5177 15 10.1064 14.9921 10 14.9924C7.57926 14.9989 6.99633 13.7789 5.16676 13.4957C4.71078 13.4251 4.375 13.0312 4.375 12.5698V5.86957L4.37508 5.86953C4.37551 5.15211 4.78941 4.46762 5.48695 4.15684C6.61531 3.64926 9.21402 2.24129 9.6875 1.13641C9.99207 0.425703 10.5228 0.000312663 11.25 1.63486e-07C12.5868 -0.000546712 13.5059 1.37102 12.9734 2.61359C12.8334 2.94012 12.6487 3.26477 12.4205 3.58695H18.25C19.166 3.58695 20 4.38941 20 5.29891ZM3.75 5.3125V12.8125C3.75 13.3303 3.33027 13.75 2.8125 13.75H0.9375C0.419727 13.75 0 13.3303 0 12.8125V5.3125C0 4.79473 0.419727 4.375 0.9375 4.375H2.8125C3.33027 4.375 3.75 4.79473 3.75 5.3125ZM2.65625 11.875C2.65625 11.4435 2.30648 11.0938 1.875 11.0938C1.44352 11.0938 1.09375 11.4435 1.09375 11.875C1.09375 12.3065 1.44352 12.6562 1.875 12.6562C2.30648 12.6562 2.65625 12.3065 2.65625 11.875Z" fill="#3185FC" />
									</svg>
									<p className="text-[#475060] ml-[10px] w-[80%]" style={{ fontFamily: "Jost" }}>{sentence}</p>
								</div>
							))}
							<CommonBtn text={"Register Now"} />
						</div>
					</div>
				</div>
				<div className="w-[45%]">
					{children}
				</div>
			</div>
		</div>
	)
}

export default AvailableCard;