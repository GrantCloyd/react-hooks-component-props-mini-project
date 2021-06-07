import Article from "./Article"

function ArticleList({ posts }) {
   const allPost = posts.map(post => (
      <Article key={post.title} title={post.title} date={post.date} preview={post.preview} />
   ))

   return <main>{allPost}</main>
}

export default ArticleList
