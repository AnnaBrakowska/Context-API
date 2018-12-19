import React, { Component } from "react";
import "./App.css";
const FirstContext = React.createContext();

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ["bananas", "oranges", "apples"],
      vegetables: ["tomato", "cucumber", "lettuce"]
    };
  }

  render() {
    return (
      <FirstContext.Provider
        value={{
          state: this.state,
          addFruits: () => {
            let newFruits = [...this.state.fruits];
            newFruits.push("kiwi");
            this.setState({ fruits: newFruits });
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
      <MyProvider>
        <div>
          <FruitBox />
          <VeggieBox />
        </div>
      </MyProvider>
    );
  }
}

const FruitBox = props => {
  return (
    <div>
      <h1>I am a fruit box</h1>
      <ul>
        <FirstContext.Consumer>
          {context =>
            context.state.fruits.map((fruit, index) => (
              <li key={`fruit-${index}`}>
                {fruit}
                <button onClick={context.addFruits}>Add Kiwi</button>
              </li>
            ))
          }
        </FirstContext.Consumer>
      </ul>
    </div>
  );
};

const VeggieBox = props => {
  return (
    <div>
      <h1>I am a veggie Box</h1>
      <ul>
        <FirstContext.Consumer>
          {context =>
            context.state.vegetables.map((veggie, index) => (
              <li key={`veggie-${index}`}>{veggie}</li>
            ))
          }
        </FirstContext.Consumer>
      </ul>
    </div>
  );
};

export default App;
