import React from "react";
import { fetchUsersListAsc, fetchUsersListDesc } from "../../store/api-actions";
import { connect } from "react-redux";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.FormRef = React.createRef();
    this.InputRef = React.createRef();
    this.state = {
      isAscSort: true,
    };
  }

  loadFromTop(userName) {
    this.props.onLoadFromTop(userName);
  }

  loadFromBottom(userName) {
    this.props.onLoadFromBottom(userName);
  }

  componentDidMount() {
    console.log("render");
    this.FormRef.current.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.state.isAscSort
        ? this.loadFromBottom(this.InputRef.current.value)
        : this.loadFromTop(this.InputRef.current.value);
    });
  }

  shouldComponentUpdate(_, nextState) {
    if (this.state.isAscSort !== nextState.isAscSort) {
      return true;
    }

    return false;
  }

  render() {
    return (
      <form className="form" method="GET" action="" ref={this.FormRef}>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="введите логин пользователя"
            ref={this.InputRef}
          />
          <button type="submit" className="submit-btn">
            Поиск
          </button>
        </div>
        <div className="radio-buttons">
          <span>Сортировать по количеству публичных репозиториев:</span>
          <input
            type="radio"
            name="radio"
            id="up-radio"
            checked={this.state.isAscSort}
            onChange={() => this.setState({ isAscSort: true })}
          />
          <label htmlFor="up-radio">По возрастранию</label>
          <input
            type="radio"
            name="radio"
            id="down-radio"
            checked={!this.state.isAscSort}
            onChange={() => this.setState({ isAscSort: !this.state.isAscSort })}
          />
          <label htmlFor="down-radio">По убыванию</label>
        </div>
      </form>
    );
  }
}

export { Search };

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFromTop: (userName) => {
      dispatch(fetchUsersListDesc(userName));
    },
    onLoadFromBottom: (userName) => {
      dispatch(fetchUsersListAsc(userName));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
