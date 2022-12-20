const CommonBtn = ({text, onClick, bgColor, pdSmall, className}) => {
	return (
		<div>
			<button className={`${className ? className : ""} pt-[8px] pb-[8px] ${pdSmall ? "pl-[15px] pr-[15px]" : "pl-[35px] pr-[35px]"} rounded-sm ${bgColor ? `${bgColor} text-black` : "bg-sky-400 text-white"} mt-[30px]`} onClick={onClick}>
				{text}
			</button>
		</div>
	)
}

export default CommonBtn;