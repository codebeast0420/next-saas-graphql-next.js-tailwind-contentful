import CommonBtn from "./commonBtn";

const SupportBar = () => {
	return (
		<div className="bg-[#142630] text-white pb-[30px] flex justify-center">
			<p className="text-2xl mt-[30px] text-white">Support us and make the new generation better</p>
			<div className={"ml-[10%]"}>
				<CommonBtn text={"Support Us Now"} />
			</div>
		</div>
	)
}

export default SupportBar;