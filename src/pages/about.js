import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import AboutThree from "../components/about/AboutThree";
import SkillsOne from "../components/skills/SkillsOne";
import TestimonialSix from "../components/testimonial/TestimonialSix";
import IntegrationsOne from "../components/integrations/IntegrationsOne";
import FooterThree from "../common/footer/FooterThree";

export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About Us"} />
			<HeaderOne />
			<AboutThree />
			<SkillsOne />
			<TestimonialSix />
			<IntegrationsOne />
			<FooterThree />
		</>
	);
}