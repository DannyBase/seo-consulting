import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import QuoteFormOne from "../components/quote-form/QuoteFormOne";
import ContactMap from "../components/contact/ContactMap";
import FooterThree from "../common/footer/FooterThree";

export default function ContactPage() {
	return (
		<>
			<SEO pageTitle={"Contact Us"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Contact Us"
                currentPage="Contact Us" 
            />
			<QuoteFormOne />
			<ContactMap />
			<FooterThree />
		</>
	);
}