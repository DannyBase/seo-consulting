import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ServiceOne from "../components/service/ServiceOne";
import FooterThree from "../common/footer/FooterThree";
import PortfolioOne from "@/components/portfolio/PortfolioOne";
import FaqTwo from "@/components/faq/FaqTwo";
import QuoteFormOne from "@/components/quote-form/QuoteFormOne";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Our Services"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Our Services"
                currentPage="Our Services" 
            />
			<ServiceOne />
			<PortfolioOne />
			<FaqTwo />
			<QuoteFormOne />
			<FooterThree />
		</>
	);
}