import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerNames: [],
      nameError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //Creates a new array and adds players. The result is added to playerNames
  handleInputChange = (e, index) => {
    const updatedArray = [...this.state.playerNames];
    updatedArray[index] = e.target.value;
    this.setState({
      playerNames: updatedArray,
    });
  };
  //Validates playerNames and passes to the setNames reducer
  handleClick = (e) => {
    e.preventDefault();
    const { playerNames } = this.state;
    if (
      playerNames.length !== this.props.noPlayers ||
      playerNames.includes(undefined)
    ) {
      return this.setState({ nameError: true });
    } else {
      this.setState([...playerNames, { name: "" }]);
      this.props.handlePlayers({ ...this.state });
    }
  };

  render() {
    const { noPlayers } = this.props;
    //Uses noPlayers to push x number of divs to multiples array
    let multiples = [];
    for (var i = 0; i < noPlayers; i++) {
      multiples.push(<div></div>);
    }

    return (
      <>
        <div className="block">
          <div className="mt-12 flex justify-center align-center bg-red-400 pb-10 mb-10">
            <h1 className="text-2xl font-mono text-white w-100">
              Add player names
            </h1>
          </div>
        </div>
        <div className="mt-20 mb-20">
          <form className="p-2 inline-block flex flex-col justify-center m-5">
            <label className="block">
              <>
                {/* Map over the multiples array and return the correct number of form inputs */}
                {multiples.map((input, index) => (
                  <input
                    key={index}
                    name="playerName"
                    className="form-input mt-1 block w-full p-3 w-4 mt-2 mb-2"
                    type="text"
                    data-idx={index}
                    placeholder={"Player " + (index + 1)}
                    value={index.playerName}
                    // Passes data to playerNames array
                    onChange={(e) => this.handleInputChange(e, index)}
                  />
                ))}
                <div className="text-red-500 text-xs">
                  {this.state.nameError
                    ? "Please enter names for all players"
                    : null}
                </div>
              </>
            </label>
            <div className="flex justify-center mt-20">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-block w-55 "
                onClick={this.handleClick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
