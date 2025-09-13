import AllBlogSection from "../../components/blogs/AllBlogSection";
import Breadcrumb from "../../components/breadcrumb/BreadCrumb";

function BlogPage() {
  return (
    <>
      <Breadcrumb
        title="Our Latest Blogs"
        path={[{ label: "Blogs" }]}
      />
      <AllBlogSection />;
    </>
  );
}

export default BlogPage;
