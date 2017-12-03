class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            N: 0
        };
    }

    onClick() {
        this.setState({
            N: this.state.N + 1
        });
    }

    render() {
        return (
            <button onClick={this.onClick.bind(this)}>{this.state.N}</button>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
