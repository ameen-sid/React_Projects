const FootListSection = (props) => {
	
    const list = [
		props.one,
		props.two,
		props.three,
		props.four,
		props.five,
		props.six,
		props.seven,
		props.eight,
		props.nine,
		props.ten,
	];
	return (
		<section>
			<p className="text-[#404EED]">{props.heading}</p>
			<br />
			<ul>
				{list &&
					list.map((val) => (
						<li className="hover:underline">
							<a href="#">{val}</a>
						</li>
					))}
			</ul>
		</section>
	);
};

export default FootListSection;