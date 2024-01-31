import { Component } from 'react';
import './App.css';
import FoodData from './resources/FoodData';
import FoodBox from './Component/component/FoodBox';

class App extends Component {
  constructor() {
    super();
    this.state = { foodArray: FoodData };
  }
  render() {
    let FoodDataArray = this.state.foodArray;

    const handleInputRecord = (e) => {
      if (e.target.value == '') {
        return this.setState({ foodArray: FoodData });
      }
      let inputValue = e.target.value.toLowerCase();

      let modifiedArray = FoodDataArray.filter((element, index) => {
        let name = element.name;
        return name.includes(inputValue);
      });
      this.setState({ foodArray: modifiedArray });
    };
    return (
      <>
        <div>
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search here"
            onChange={handleInputRecord}
          />
        </div>
        {FoodDataArray.map((element, index) => {
          let name = element.name;
          let calorie = element.calorie;
          let image = element.img;

          return (
            <div key={index}>
              <FoodBox
                Name={name}
                Calorie={calorie}
                Image={image}
                Index={index}
              />
            </div>
          );
        })}
      </>
    );
  }
}
export default App;
