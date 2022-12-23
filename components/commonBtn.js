const CommonBtn = ({ text, onClick, bgColor, pdSmall, className }) => {
	return (
		<div>
			<button style={{boxShadow: "0px 10px 25px rgba(28, 202, 223, 0.3)"}} className={`${className ? className : ""} pt-[8px] pb-[8px] ${pdSmall ? "pl-[15px] pr-[15px]" : "pl-[35px] pr-[35px]"} rounded-sm ${bgColor ? `${bgColor} text-black` : "bg-[#1CCADF] text-white"} mt-[30px]`} onClick={onClick}>
				{text}
			</button>
		</div>
	)
}

export default CommonBtn;