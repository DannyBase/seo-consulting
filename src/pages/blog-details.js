import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogDetails from "../components/blog/BlogDetails";
import FooterThree from "../common/footer/FooterThree";

export default function BlogDetailsPage() {
	return (
		<>
			<SEO pageTitle={"Blog Details"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Details"
                currentPage="Blog Details" 
            />
			<BlogDetails />
			<FooterThree />
		</>
	);
}