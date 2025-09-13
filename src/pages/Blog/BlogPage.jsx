import AllBlogSection from "../../components/blogs/BlogSection";
import Breadcrumb from "../../components/breadcrumb/BreadCrumb";

function BlogPage() {
  return (
    <>
      <Breadcrumb
        title="Our Blogs"
        path={[{ label: "Blogs" }]}
      />
      <AllBlogSection />;
    </>
  );
}

export default BlogPage;
