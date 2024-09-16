import { createBrowserRouter } from "react-router-dom";
import LayoutFive from "../components/layout/LayoutFive.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import HomeFive from "../page/home/HomeFive.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
import Service from "../page/service";
import SingleService from "../page/service/SingleService.jsx";
import Faq from "../page/utility/Faq.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <LayoutFive />,
				children: [
					{
						path: "/",
						element: <HomeFive />,
					},
					{
						path: "/about-us",
						element: <AboutUs />,
					},
					{
						path: "/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/faq",
						element: <Faq />,
					},

					// {
					// 	path: "/testimonial",
					// 	element: <TestimonialPage />,
					// },

					// {
					// 	path: "/pricing",
					// 	element: <Pricing />,
					// },
					// {
					// 	path: "/blog",
					// 	element: <BlogPage />,
					// },
					// {
					// 	path: "/single-blog",
					// 	element: <SingleBlogPage />,
					// },
					// {
					// 	path: "/blog-grid",
					// 	element: <BlogGridPage />,
					// },
					{
						path: "/service",
						element: <Service />,
					},
					{
						path: "/single-service",
						element: <SingleService />,
					},
					// {
					// 	path: "/team",
					// 	element: <Team />,
					// },
					// {
					// 	path: "/single-team",
					// 	element: <SingleTeam />,
					// },
					{
						path: "/portfolio-one",
						element: <PortfolioOneColumn />,
					},
					{
						path: "/portfolio-two",
						element: <PortfolioTwoColumn />,
					},
					{
						path: "/single-portfolio",
						element: <SinglePortfolio />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
			// {
			// 	path: "/",
			// 	element: <LayoutTwo />,
			// 	children: [
			// 		{
			// 			path: "/home-two",
			// 			element: <HomeTwo />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutThree />,
			// 	children: [
			// 		{
			// 			path: "/home-three",
			// 			element: <HomeThree />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutFour />,
			// 	children: [
			// 		{
			// 			path: "/home-four",
			// 			element: <HomeFour />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutFive />,
			// 	children: [
			// 		{
			// 			path: "/home-five",
			// 			element: <HomeFive />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutSix />,
			// 	children: [
			// 		{
			// 			path: "/home-six",
			// 			element: <HomeSix />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutSeven />,
			// 	children: [
			// 		{
			// 			path: "/home-seven",
			// 			element: <HomeSeven />,
			// 		},
			// 	],
			// },
			// {
			// 	path: "/",
			// 	element: <LayoutEight />,
			// 	children: [
			// 		{
			// 			path: "/coming-soon",
			// 			element: <CommingSoon />,
			// 		},
			// 		{
			// 			path: "/reset-password",
			// 			element: <Reset />,
			// 		},
			// 		{
			// 			path: "/sign-up",
			// 			element: <SignUp />,
			// 		},
			// 		{
			// 			path: "/sign-in",
			// 			element: <SignIn />,
			// 		},
			// 	],
			// },
		],
	},
]);
