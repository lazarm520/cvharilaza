const ItemProgressComponent = ({
	title,
	rate,
}: {
	title: string;
	rate: number; // 1 to 10
}) => {
	return (
		<div className="w-full my-1 flex flex-row items-center justify-between">
			<div className="w-1/2 text-white text-xs">{title}</div>
			<div className="w-1/2 relative flex flex-row items-center">
				<div className="absolute z-20 h-3 w-full bg-stone-400 "></div>
				<div
					className={`absolute z-30 h-3 ${
						rate ? "w-" + rate + "/12" : ""
					} bg-white transition duration-1000 ease-in-out transition-property-width`}
				></div>
			</div>
		</div>
	);
};

export default ItemProgressComponent;
