import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FaqOne from "../components/faq/FaqOne";
import FooterThree from "../common/footer/FooterThree";

export default function FaqPage() {
	return (
		<>
			<SEO pageTitle={"Faq"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Faq"
                currentPage="Faq" 
            />
			<FaqOne />
			<FooterThree />
		</>
	);
}