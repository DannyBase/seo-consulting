import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import ErrorContent from "../components/error/ErrorContent";
import FooterThree from "../common/footer/FooterThree";

export default function ErrorPage() {
	return (
		<>
			<SEO pageTitle={"Error Page"} />
			<HeaderOne />
			<ErrorContent />
			<FooterThree />
		</>
	);
}