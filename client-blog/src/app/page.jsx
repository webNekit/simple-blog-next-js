import Card from "@/components/card/card";

const fetchBlogs = async(params) => {
  const reqOptions = {
      headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`
      }
  };
  const request = await fetch(`${process.env.API_URL}/api/blogs?populate=*&${params}`, reqOptions);
  const response = await request.json();

  return response;
}

const Home = async() => {
  const [featuredBlog, blogs] = await Promise.all([
    await fetchBlogs('filters[IsFeatured][$eq]=true'),
    await fetchBlogs('filters[IsFeatured][$eq]=false'),
  ]);

  return (
    <div className="container pb-80">
      {featuredBlog.data.map(featuredBlog => (
        <Card label={featuredBlog.attributes.Category} title={featuredBlog.attributes.Title} text={featuredBlog.attributes.Summary} href={`${featuredBlog.attributes.slug}`} imgSrc={`${process.env.API_URL}${featuredBlog.attributes.FeaturedImage.data.attributes.url}`} />
      ))};
      <div className="row">
        <div className="col col_4 m-mw-100">
          <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
        </div>
        <div className="col col_4 m-mw-100">
          <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
        </div>
        <div className="col col_4 m-mw-100">
          <Card label="Product Reviews" title="Заголовок для поста" text="Описание для поста" href="#" />
        </div>
      </div>
    </div>
  )
}

export default Home;
