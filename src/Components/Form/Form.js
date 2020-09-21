import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNames: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange = (e, index) => {
    const updatedArray = [...this.state.playerNames];
    updatedArray[index] = e.target.value;
    this.setState({
      playerNames: updatedArray,
    });
    console.log(this.state.playerNames);
  };

  handleClick = () => {
    const { playerNames } = this.state;
    this.setState([...this.playerNames, { playerName: "" }]);
  };

  render() {
    const { playerNames } = this.state;
    const { noPlayers, handleClick } = this.props;
    let multiples = [];
    for (var i = 0; i < noPlayers; i++) {
      multiples.push(<div></div>);
    }
    return (
      <div>
        <form>
          <label className="block">
            <>
              {multiples.map((input, index) => (
                <input
                  key={index}
                  name="playerName"
                  className="form-input mt-1 block w-full"
                  type="text"
                  data-idx={index}
                  placeholder={"Player " + (index + 1)}
                  value={index.playerName}
                  onChange={(e) => this.handleInputChange(e, index)}
                />
              ))}
            </>
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
