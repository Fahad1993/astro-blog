import Layout from "@layouts/Layout.astro";

<Fragment>
  <Layout frontmatter={post.data} title={post.data.title}>
    <div class="my-4 space-x-2">
      {post.data.tags.map((tag) => (
        <Fragment>
          <a
            href={`/tag/${tag}`}
            class="border border-black py-1 px-2 rounded-lg"
          >
            {tag}
          </a>
        </Fragment>
      ))}
    </div>
    <Content />
  </Layout>
</Fragment>;
