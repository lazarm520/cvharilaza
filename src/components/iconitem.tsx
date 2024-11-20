import {
	FaPhone,
	FaHouse,
	FaEnvelope,
	FaLinkedin,
	FaFacebook,
	FaGithub,
	FaXTwitter,
} from "react-icons/fa6";

const IconItemComponent = ({
	title,
	icon,
}: {
	title: string;
	icon: string;
}) => {
	return (
		<div className="w-full my-1 flex flex-row items-center justify-between">
			<div className="w-1/2 "></div>
			<div className="w-1/2 text-white text-xs">{title}</div>
		</div>
	);
};

export default IconItemComponent;
