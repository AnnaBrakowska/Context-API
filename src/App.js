import React, { Component } from "react";
import "./App.css";
const FirstContext = React.createContext();

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "banana",
      amount: 0
    };
  }

  render() {
    return (
      <FirstContext.Provider
        value={{
          fruit: this.state.fruit,
          amount: this.state.amount,
          addBananas: () => {
            let amount = this.state.amount;
            amount += 1;
            this.setState({ amount: amount });
          }
        }}
      >
        {this.props.children}
      </FirstContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <FruitComponent />
        </div>
      </Provider>
    );
  }
}

const FruitComponent = props => {
  return (
    <div>
      <h1>I am a fruit box</h1>
      <ul>
        <FirstContext.Consumer>
          {context => (
            <>
              <div>My favorite fruit is {context.fruit}</div>
              <div>I ate: {context.amount} of them</div>
              <button onClick={context.addBananas}>I ate more</button>
            </>
          )}
        </FirstContext.Consumer>
      </ul>
    </div>
  );
};

export default App;
