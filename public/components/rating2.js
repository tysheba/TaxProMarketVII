'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <Rating
        emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
        fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
      />
    );
  }
}

const domContainer = document.querySelector('#rating2')
ReactDOM.render(e(LikeButton), domContainer);