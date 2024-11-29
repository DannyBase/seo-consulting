import SEO from "../common/seo/Seo";
import HeaderTwo from "../common/header/HeaderTwo";
import HeroThree from "../components/hero/HeroThree";
import ServiceOne from "../components/service/ServiceOne";
import AboutTwo from "../components/about/AboutTwo";
import CtaTwo from "../components/cta/CtaTwo";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import QuoteFormOne from "../components/quote-form/QuoteFormOne";
import BlogFour from "../components/blog/BlogFour";
import FooterThree from "../common/footer/FooterThree";

export default function HomeThree() {
	return (
		<>
			<SEO pageTitle={"Welcome to SEOQ"} />
			<HeaderTwo />
			<HeroThree />
			<ServiceOne />
			<AboutTwo />
			<CtaTwo />
			<PortfolioOne />
			<TestimonialOne />
			<QuoteFormOne />
			<BlogFour />
			<FooterThree />
		</>
	);
}