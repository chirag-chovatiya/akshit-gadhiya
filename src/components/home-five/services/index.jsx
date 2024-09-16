import Icon1 from "../../../assets/images/v5/t_icon1.svg";
import Icon2 from "../../../assets/images/v5/t_icon2.svg";
import Icon3 from "../../../assets/images/v5/t_icon3.svg";
import Icon4 from "../../../assets/images/v5/t_icon4.svg";
import Icon5 from "../../../assets/images/v5/t_icon5.svg";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Compliance Management",
		description: " We ensure your business adheres to everyapplicable compliance requirement, providing end-to-end support throughout the process",
		img: Icon1,
	},
	{
		id: crypto.randomUUID(),
		title: "Financial Solutions",
		description: "Providing expert advice on accounting, tax planning, and financial management.",
		img: Icon2,
	},
	{
		id: crypto.randomUUID(),
		title: "CSR Advisory and Implementation",
		description: "Leveraging our trusted database of Trusts and NGOs, we guide you through seamless CSR implementation and reporting.",
		img: Icon3,
	},
	{
		id: crypto.randomUUID(),
		title: "Legal Support",
		description: "Offring robust legal services to navigate corporate laws and other regulations",
		img: Icon4,
	},
];
function Services() {
	return (
		<div className="aximo-marketing-services-section extra-side-margin green-bg aximo-section-padding2">
			<div className="container">
				<div className="aximo-section-title center light libre-font">
					<h2>Exceptional Services We Offer</h2>
				</div>

				{servicesData.map((service) => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
		</div>
	);
}

export default Services;
