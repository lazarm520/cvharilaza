const TitleComponent = ({ title, side }: { title: string; side: string }) => {
	return (
		<div className={`w-full my-1 flex flex-row items-center justify-between `}>
			<div
				className={`w-5/6 sm:w-2/3 text-xs uppercase border-2 ${
					side === "left"
						? "border-white text-white"
						: "border-stone-500 text-stone-500 order-1 lg:w-1/3"
				} p-1 pr-3`}
			>
				{title}
			</div>
			<div
				className={`h-0.5 w-1/6 sm:w-1/3 ${
					side === "left" ? "bg-white" : "bg-stone-500 -order-1 lg:w-2/3"
				}`}
			></div>
		</div>
	);
};

export default TitleComponent;
