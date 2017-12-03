// this works too

const getSlug = () => "an-article-with-a-title";
const getTitle = () => "An Article With a Title";
const getContent = () => (
    <React.Fragment>
        <p>This is some content</p>
        <p>It has multiple paragraphs</p>
        <p>Check the source</p>
    </React.Fragment>
);

const chunk = (
    <div>
        <h1 id={getSlug()}>{getTitle()}</h1>
        {getContent()}
    </div>
);

ReactDOM.render(chunk, document.getElementById("root"));
