'use strict';

const e = React.createElement;

class FormComponent extends React.Component {
  render() {
    return (
      <form target="_self" method="Get">
        <StarRating name="rating" caption="Rate Your Pro!" size={30} totalStars={5} onRatingClick={handleRatingClick} />
        <button type="submit" className="btn btn-primary">Submit Rating</button>
      </form>
    );
  }

  // handler in react class

  handleRatingClick = () => {
    const newRating = this.state.currentRating + 1;
    this.setState({
      currentRating: newRating
    });

    alert('You left a ' + data.rating + ' star rating for ' + data.caption);
  };
}

  React.render(<FormComponent />, document.getElementById('star-rating'));

const domContainer = document.querySelector('#reactStarRating');
ReactDOM.render(e(LikeButton), domContainer);