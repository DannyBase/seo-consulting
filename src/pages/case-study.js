import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CaseStudyTwo from "../components/case-study/CaseStudyTwo";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import CaseStudyOne from "../components/case-study/CaseStudyOne";
import ServiceFour from "../components/service/ServiceFour";
import FooterThree from "../common/footer/FooterThree";

export default function PricingPage() {
	return (
		<>
			<SEO pageTitle={"Case Study"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Case Study"
                currentPage="Case Study" 
            />
			<CaseStudyTwo />
			<PortfolioOne />
			<CaseStudyOne />
			<ServiceFour />
			<FooterThree />
		</>
	);
}