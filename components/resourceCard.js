import Image from "next/image";

const ResourceCard = ({ img, title, content, children }) => {
	return (
		<div className="w-[32%] rounded-[10px] p-[5px] mt-[10px] mb-[10px]" style={{ boxShadow: "0px 10px 40px rgba(7, 24, 50, 0.07)" }}>
			<Image src={img} width={370} height={265} alt={"Resource Card"} />
			<div className="mt-[10px] pl-[15px] pr-[15px] pb-[30px]">
				<div className="flex">
					{children}
				</div>
				<div className="mt-[20px]">
					<p className="text-[#142630] font-bold capitalize" style={{ fontFamily: "Lato" }}>{title}</p>
					<p className="text-[#475060] non-italic font-medium" style={{ fontFamily: "Jost" }}>{content}</p>
					<a href="#" className="mt-[40px] text-[#1CCADF] flex items-center">
						<p style={{ fontFamily: "Lato" }}>More Information</p>
						<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[20px]">
							<path d="M11.2443 0.483251L11.617 0.116476C11.7748 -0.0388253 12.03 -0.0388253 12.1862 0.116476L17.8816 5.71914C18.0395 5.87444 18.0395 6.12556 17.8816 6.27921L12.1862 11.8835C12.0284 12.0388 11.7731 12.0388 11.617 11.8835L11.2443 11.5167C11.0848 11.3598 11.0881 11.1037 11.251 10.9501L15.7056 6.66085L0.402962 6.66085C0.179654 6.66085 0 6.48408 0 6.26434L0 5.73566C0 5.51592 0.179654 5.33914 0.402962 5.33914L15.7056 5.33914L11.251 1.04993C11.0864 0.896285 11.0831 0.640204 11.2443 0.483251Z" fill="#1CCADF" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ResourceCard;