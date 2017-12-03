class Title extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>;
    }
}

ReactDOM.render(<Title title="Hello world" />, document.getElementById("root"));
