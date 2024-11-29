import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TeamOne from "../components/team/TeamOne";
import FooterThree from "../common/footer/FooterThree";

export default function TeamPage() {
	return (
		<>
			<SEO pageTitle={"Team Member"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Team Member"
                currentPage="Team Member" 
            />
			<TeamOne />
			<FooterThree />
		</>
	);
}