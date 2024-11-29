import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ServiceDetails from "../components/service/ServiceDetails";
import FooterThree from "../common/footer/FooterThree";

export default function TeamDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Service Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Service Details"
                currentPage="Service Details" 
            />
			<ServiceDetails />
			<FooterThree />
		</>
	);
}