import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNames: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e, index) => {
    const { playerNames } = this.state;
    const { name, value } = e.target;
    const list = [...playerNames];
    list[index][name] = value;
    this.setState({ playerNames: list });
  };

  render() {
    const { noPlayers } = this.props;
    const { playerNames } = this.state;
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
                  placeholder={"Player " + (index + 1)}
                  value={index.playerName}
                  onChange={this.handleInputChange}
                />
              ))}
            </>
          </label>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
