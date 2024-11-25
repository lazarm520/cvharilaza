import Image from "next/image";
import NameComponent from "./NameComponent";
import TitleComponent from "./TitleComponent";
import ItemProgressComponent from "./ItemProgress";
import IconItemComponent from "./IconItem";

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

const languageSkills = [
	{
		title: "Malagasy",
		rate: 9,
	},
	{
		title: "French",
		rate: 7,
	},
	{
		title: "English",
		rate: 6,
	},
];

const details = {
	phone: "+261340449252",
	address:
		"alskglajlakwj gal asdlkjhfalskdjfh a;slkgja; lsdkgja;sldkgjalsdgj alkgjla skdjgwkg jawlgj alw",
	mail: "alskdjfal@skghw.com",
	social: {
		facebook: {
			title: "sdjfh awj ",
			link: "https://ldfkjglakga.wrgl/",
			icon: "FaFacebook",
		},
		linkedin: {
			title: "oirogl kjqrogj q",
			link: "https://dlkrjhlkwtehw.werger/",
			icon: "FaLinkedin",
		},
		x: {
			title: "oljirglekjrg lkrj lqjrgq",
			link: "https://loihwjerlkgj.dohger/agrqer/qwergqaergq",
			icon: "FaXTwitter",
		},
	},
};

const mainSkills = [
	"laskjals",
	"dtykedtyke yy",
	"laskryjdfjet57i ejks6ijals",
	"laskgfkr67kfguklfyuk drut ejals",
	"78orhjk dgyhk dtgyhjkd tyjhs y",
	"cghj dtyj dtyj dtyj sy kwajs ryket  dfgj d",
	"askdjghakwhg",
	"vbnmk fukdtkdtu kdtkdyk dgyk s",
	"sdfjghloaerjh",
	"gilrfyulstyk styks ryk srtyk s",
	"aerhglaerhglakjer",
	"4ujsrfj sfjsfgjd sjs jsrtj srtj srtj srtjsryj srtj srj",
];

const LeftSide = () => {
	return (
		<div className="py-4">
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
				<div>
					{details.phone && (
						<IconItemComponent title={details.phone} icon="FaPhone" />
					)}

					{details.mail && (
						<IconItemComponent title={details.mail} icon="FaEnvelope" />
					)}
					{details.address && (
						<IconItemComponent title={details.address} icon="FaHouse" />
					)}
				</div>

				<TitleComponent title="Social Media" side="left" />
				<div>
					{details.social.facebook && (
						<IconItemComponent
							title={details.social.facebook.title}
							link={details.social.facebook.link}
							icon="FaFacebook"
						/>
					)}
					{details.social.linkedin && (
						<IconItemComponent
							title={details.social.linkedin.title}
							link={details.social.linkedin.link}
							icon="FaLinkedin"
						/>
					)}
					{details.social.x && (
						<IconItemComponent
							title={details.social.x.title}
							link={details.social.x.link}
							icon="FaXTwitter"
						/>
					)}
				</div>
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
				<div className="mr-4">
					{languageSkills.map((item, index) => (
						<ItemProgressComponent
							title={item.title}
							rate={Math.ceil(item.rate * 1.2)}
							key={index}
						/>
					))}
				</div>
				<TitleComponent title="Main Skills" side="left" />
				<div className="mx-4">
					<ul className="list-disc">
						{mainSkills.map((item, index) => (
							<li className="text-white text-xs text-justify" key={index}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
