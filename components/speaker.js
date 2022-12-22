import Image from "next/image";

const Speaker = ({ img, name, content }) => {
	return (
		<div className="mt-[10px] pb-[10px]" style={{ borderBottom: "1px solid rgba(71, 80, 96, .2)" }}>
			<div className="flex">
				<Image src={img} width={70} height={70} alt="speaker" className="rounded-[5rem]" />
				<div className="ml-[20px] w-[72%] h-[70px]">
					<p className="font-bold text-md text-[#142630]" style={{ fontFamily: "Jost" }}>{name}</p>
					<p className="text-[#475060]" style={{ fontFamily: "Jost" }}>{content}</p>
				</div>
			</div>
			<div className="flex ml-[90px] items-center cursor-pointer">
				<a className="text-[#1CCADF]" style={{ fontFamily: "Jost" }}>Links To Site</a>
				<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[10px]">
					<path d="M10.2938 11.5167L10.6639 11.8835C10.8205 12.0388 11.0739 12.0388 11.2289 11.8835L16.8825 6.28086C17.0392 6.12556 17.0392 5.87444 16.8825 5.72079L11.2289 0.116475C11.0722 -0.038826 10.8189 -0.038826 10.6639 0.116475L10.2938 0.483252C10.1355 0.640204 10.1388 0.896286 10.3005 1.04993L14.7225 5.33915L0.400004 5.33915C0.178335 5.33915 0 5.51592 0 5.73566L0 6.26434C0 6.48408 0.178335 6.66086 0.400004 6.66086L14.7225 6.66086L10.3005 10.9501C10.1372 11.1037 10.1338 11.3598 10.2938 11.5167Z" fill="#1CCADF" />
				</svg>
			</div>
		</div>
	)
}

export default Speaker;