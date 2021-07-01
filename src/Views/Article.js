import { useParams } from 'react-router-dom';

function Article() {
    const { articleId } = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col">This is article {articleId} page</div>
            </div>
        </div>
    )
}

export default Article;
