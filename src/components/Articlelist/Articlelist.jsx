import Article from "../Article/Article";

function Articlelist({ articles }) {
    return (
        <main>
            {articles.map((article) => (
                <Article
                    key={article.id}
                    article={article}
                />
            ))}
        </main>
    );
}

export default Articlelist;
