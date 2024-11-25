import Link from "next/link";
import {
	FaPhone,
	FaHouse,
	FaEnvelope,
	FaLinkedin,
	FaFacebook,
	FaXTwitter,
} from "react-icons/fa6";

const IconItemComponent = ({
	title,
	link,
	icon,
}: {
	title: string;
	link?: string;
	icon: string;
}) => {
	const renderSwitch = () => {
		switch (icon) {
			case "FaPhone":
				return (
					<div className="w-full my-1 flex flex-row ">
						<div className="m-1">
							<FaPhone color="white" />
						</div>
						<a href={`tel:${title}`} className="m-1 text-white text-xs">
							{title}
						</a>
					</div>
				);
			case "FaHouse":
				return (
					<div className="w-full my-1 flex flex-row ">
						<div className="m-1">
							<FaHouse color="white" />
						</div>
						<div className="m-1 text-white text-xs">{title}</div>
					</div>
				);

			case "FaEnvelope":
				return (
					<div className="w-full my-1 flex flex-row ">
						<div className="m-1">
							<FaEnvelope color="white" />
						</div>
						<Link
							href={`mailto:${title}` || ""}
							className="m-1 text-white text-xs"
							title={title}
							target="_blank"
							passHref
						>
							{title}
						</Link>
					</div>
				);
			case "FaLinkedin":
				return (
					<div className="w-full my-1 flex flex-row ">
						<div className="m-1">
							<FaLinkedin color="white" />
						</div>
						<Link
							href={link || ""}
							className="m-1 text-white text-xs"
							title={title}
							target="_blank"
							passHref
						>
							{title}
						</Link>
					</div>
				);
			case "FaFacebook":
				return (
					<div className="w-full my-1 flex flex-row ">
						<div className="m-1">
							<FaFacebook color="white" />
						</div>
						<Link
							href={link || ""}
							className="m-1 text-white text-xs"
							title={title}
							target="_blank"
							passHref
						>
							{title}
						</Link>
					</div>
				);
			case "FaXTwitter":
				return (
					<div className="w-full my-1 flex flex-row ">
						<div className="m-1">
							<FaXTwitter color="white" />
						</div>
						<Link
							href={link || ""}
							className="m-1 text-white text-xs"
							title={title}
							target="_blank"
							passHref
						>
							{title}
						</Link>
					</div>
				);

			default:
				return <></>;
		}
	};

	return <>{renderSwitch()}</>;
};

export default IconItemComponent;
