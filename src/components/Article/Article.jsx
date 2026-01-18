function Article({ article }) {
    return (
        <article>
            <h3>{article.title}</h3>
            <small>{article.date ? article.date : "January 1, 1970"}</small>
            <p>{article.preview}</p>
        </article>
    );
}
export default Article;