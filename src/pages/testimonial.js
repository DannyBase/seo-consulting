import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TestimonialFive from "@/components/testimonial/TestimonialFive";
import TestimonialThree from "@/components/testimonial/TestimonialThree";
import FooterThree from "../common/footer/FooterThree";

export default function TestimonialPage() {
	return (
		<>
			<SEO pageTitle={"Testimonial"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Testimonial"
                currentPage="Testimonial" 
            />
			<TestimonialFive />
			<TestimonialThree />
			<FooterThree />
		</>
	);
}