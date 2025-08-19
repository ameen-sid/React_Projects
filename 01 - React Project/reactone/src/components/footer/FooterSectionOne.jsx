import "../../styles/FooterSectionOne.css";

const FooterSectionOne = () => {
	return (
		<section className="w-full h-[60vh] footer_section_one_pic" id="contact">
			<div className="w-full h-[100%] p-28 flex flex-col gap-8 footer_section_one_div">
				<div className="flex justify-around text-slate-900">
					<div className="w-[30%]">
						<h6 className="text-xl font-bold py-1">
							Mobile Friendly
						</h6>
						<p className="text-xs">
							Gaze is a simple and elegant template with tons of
							features. Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="w-[30%]">
						<h6 className="text-xl font-bold py-1">
							Unlimited Colors
						</h6>
						<p className="text-xs">
							Gaze is a simple and elegant template with tons of
							features. Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="w-[30%]">
						<h6 className="text-xl font-bold py-1">
							Many Portfolio Types
						</h6>
						<p className="text-xs">
							Gaze is a simple and elegant template with tons of
							features. Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
				</div>
				<div className="flex justify-around text-slate-900">
					<div className="w-[30%]">
						<h6 className="text-xl font-bold py-1">
							Drag & Drop Builder
						</h6>
						<p className="text-xs">
							Gaze is a simple and elegant template with tons of
							features. Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="w-[30%]">
						<h6 className="text-xl font-bold py-1">
							2 Minutes to Install
						</h6>
						<p className="text-xs">
							Gaze is a simple and elegant template with tons of
							features. Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="w-[30%]">
						<h6 className="text-xl font-bold py-1">
							Extended Documentation
						</h6>
						<p className="text-xs">
							Gaze is a simple and elegant template with tons of
							features. Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterSectionOne;