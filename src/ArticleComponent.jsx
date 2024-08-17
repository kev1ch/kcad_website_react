import './ArticleComponent.css';

function ArticleComponent(props) {

    const data = props.data;

    return (
        <div className="main_block">
            <div className="article_title">{data.title}</div>
            {data.paragraphs.map((paragraph) => (
                <>
                    <div>{paragraph.title}</div>
                    <div>{paragraph.text}</div>
                </>
            ))}
        </div>
    );
}

export default ArticleComponent;