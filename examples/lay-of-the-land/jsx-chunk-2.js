const chunk = (
    <div>
        <h1>Hello world</h1>
        <p>I'm a paragraph</p>
    </div>
);

const chunk2 = (
    <div>
        {chunk}
        <p>I am another paragraph</p>
    </div>
);

ReactDOM.render(chunk2, document.getElementById("root"));
