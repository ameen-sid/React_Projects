const DownloadCard = (props) => {

    const pr = props.bottom == 1 ? "-bottom-[200px]" : "bottom-0";
	const style = "w-[85%] absolute " + pr;
	return (
		<section className="w-[40vw] h-[80vh] bg-[#F6F6F6] rounded-2xl flex flex-col ">
			<div className="h-[30%] flex flex-col items-center justify-evenly">
				<h3 className="font-semibold text-3xl h-[25%]">
					{props.heading}
				</h3>
				<button className="bg-[#23272A] text-white text-lg py-[14px] px-[32px] rounded-[30px]">
					Download
				</button>
			</div>
			<div className="h-[70%] flex items-center relative overflow-y-hidden justify-center">
				<img src={props.image} alt="" className={style} />
			</div>
		</section>
	);
};

export default DownloadCard;