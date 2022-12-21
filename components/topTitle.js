import Image from "next/image";

const TopTitle = ({ title }) => {
	// const winWidth = window.innerWidth;

	return (
		<div className="w-full">
			<Image src="/src/img/frame.png" fill alt="frame" className="absolute z-10" style={{ left: "0", top: "236px !important" }} />
			<div style={{ background: "linear-gradient(245.27deg, #142630 0%, #11404A 48.44%, #122542 100%)" }} className="pt-[90px] pb-[150px]">
				<div className="flex justify-center">
					<p className="text-white text-3xl font-bold" style={{ fontFamily: "Lato" }}>{title}</p>
				</div>
				<Image src="/src/img/map1.png" width={550} height={200} alt="frame" className="absolute mt-[-120px]" />
				<Image src="/src/img/map2.png" width={550} height={200} alt="frame" className="absolute mt-[-120px]" style={{ right: "0" }} />
			</div>
		</div>
	)
}

export default TopTitle;