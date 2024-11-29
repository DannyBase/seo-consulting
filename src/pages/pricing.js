import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import PricingOne from "../components/pricing/PricingOne";
import FooterThree from "../common/footer/FooterThree";
import TestimonialFour from "@/components/testimonial/TestimonialFour";

export default function PricingPage() {
	return (
		<>
			<SEO pageTitle={"Pricing Page"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Pricing Page"
                currentPage="Pricing" 
            />
			<PricingOne />
			<TestimonialFour />
			<FooterThree />
		</>
	);
}