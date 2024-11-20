import Image from "next/image";
import TitleComponent from "./title";
import { strict } from "assert";
import ItemProgressComponent from "./itemprogress";
import NameComponent from "./name";

const itSkills = [
	{
		title: "HTML",
		rate: 7,
	},
	{
		title: "JS",
		rate: 9,
	},
	{
		title: "PHP",
		rate: 6.6,
	},
	{
		title: "C++",
		rate: 4,
	},
];

const LeftSide = () => {
	return (
		<div className="">
			<div className="profile relative">
				<div className="h-60 relative flex items-center justify-center">
					<Image
						src="/profile.jpg"
						alt="profile"
						className="rounded-full shadow-md z-50"
						width={200}
						height={200}
					/>
					<div className="absolute bg-stone-500 right-0 z-30 h-60 w-10"></div>
					<div className="absolute bg-blue-800 shadow-md z-40 top-[100px] right-0 sm:-right-5 h-10 w-full sm:w-[700px]"></div>
					<div className="absolute bg-blue-800 shadow-md z-20 top-[120px] right-0 sm:-right-[12px] h-[40px] w-[40px] rotate-45 hidden sm:block"></div>
				</div>
			</div>
			<div className="block sm:hidden mr-4">
				<NameComponent />
			</div>

			<div className="ml-4 flex flex-col">
				<TitleComponent title="Contact" side="left" />
				<TitleComponent title="Social Media" side="left" />
				<TitleComponent title="IT Skills" side="left" />
				<div className="mr-4">
					{itSkills.map((item, index) => (
						<ItemProgressComponent
							title={item.title}
							rate={Math.ceil(item.rate * 1.2)}
							key={index}
						/>
					))}
				</div>
				<TitleComponent title="Language" side="left" />
			</div>
		</div>
	);
};

export default LeftSide;
