import ArticleHeader from "./ArticleHeader";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Design conferences in 2021",
      image: "/assets/images/blog-1.jpg",
      date: "2021-06-14",
    },
    {
      id: 2,
      title: "Best fonts every designer should know",
      image: "/assets/images/blog-2.jpg",
      date: "2021-06-14",
    },
    {
      id: 3,
      title: "UI interactions of the week",
      image: "/assets/images/blog-3.jpg",
      date: "2021-06-14",
    },
    {
      id: 4,
      title: "The forgotten art of spacing",
      image: "/assets/images/blog-4.jpg",
      date: "2021-06-14",
    },
    {
      id: 5,
      title: "Design digest #80",
      image: "/assets/images/blog-5.jpg",
      date: "2021-06-14",
    },
    {
      id: 6,
      title: "New trend in web design",
      image: "/assets/images/blog-6.jpg",
      date: "2021-06-14",
    },
  ];

  return (
    <article className="blog active" data-page="blog">
      <ArticleHeader title="Blog" />

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post) => (
            <li className="blog-post-item" key={post.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="blog-meta">
                    <p className="blog-meta-text">
                      <time dateTime={post.date}>14 June, 2021</time>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Blog;
