import "../../styles/MainSectionTwo.css";

const MainSectionTwo = () => {
	return (
		<section className="w-full h-[60vh] text-white text-center main_section_two_pic" id="services">
			<div className="w-full h-full flex flex-col justify-center items-center gap-4 p-48 main_section_two_div">
				<h4 className="text-center text-4xl font-semibold">
					HAPPY CLIENTS
				</h4>
				<hr className="greenHr" />
				<p>
					The excellent theme. It have many useful features that can
					be use for any kind of bussiness. The support is just
					amazing and design is very minimal and modern. I will rate 5
					stars.
				</p>
				<span>DONALD TRUMP/CEO OF TRUMP ORGANISATION</span>
			</div>
		</section>
	);
};

export default MainSectionTwo;