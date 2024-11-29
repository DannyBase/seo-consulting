import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import BreadcrumbTwo from "../common/breadcrumb/BreadcrumbTwo";
import BlogGrid from "../components/blog/BlogGrid";
import FooterThree from "../common/footer/FooterThree";

export default function BlogPage() {
	return (
		<>
			<SEO pageTitle={"Blog"} />
			<HeaderOne />
			<BreadcrumbTwo 
                heading="The SEO Ranking Blog"
                currentPage="Stay Updated with the Latest News and Best Strategies" 
            />
			<BlogGrid />
			<FooterThree />
		</>
	);
}