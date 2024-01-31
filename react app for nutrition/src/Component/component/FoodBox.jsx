import { Component } from 'react';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countEach: 1,
      CalorieState: this.props.Calorie,
    };
  }

  render() {
    let Name = this.props.Name;
    let Image = this.props.Image;
    let Index = this.props.Index;
    let Calorie = this.props.Calorie;

    const handleClick = (event) => {
      let settingState = {
        countEach: this.state.countEach + 1,
        CalorieState: (this.state.countEach + 1) * this.state.CalorieState,
      };
      this.setState(settingState);
    };

    return (
      <div className="box" key={Index}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64" style={{ width: '100px' }}>
              <img src={Image} alt={Index} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{Name}</strong> <br />
                <small>{Calorie} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.countEach}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={handleClick}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <div className="calorie-count">
          <div>
            {this.state.countEach} {Name} ={' '}
          </div>
          <div> {this.state.CalorieState} Calorie</div>
        </div>
      </div>
    );
  }
}

export default FoodBox;
