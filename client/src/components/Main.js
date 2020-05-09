import React from "react";
import "../styles/Main.scss";

class Main extends React.Component {
  state = {
    edit_mode: false,
    activeTab: 0,
    desc: this.props.tabs[0],
  };

  handleClick = (e) => {
    const tab = e.target;
    this.setState({
      activeTab: parseInt(tab.dataset.key),
    });
  };

  editClick = () => {
    let { edit_mode, desc } = this.state;

    if (edit_mode === false && process.env.NODE_ENV === "development") {
      desc = "let's edit!";
    } else {
      desc = "You are not authorized -_-+";
    }

    this.setState({
      edit_mode: edit_mode ? false : true,
      desc: desc,
    });
  };

  render() {
    const { tabs } = this.props;
    const { edit_mode, activeTab } = this.state;

    const mappedTabs = tabs.map((tab, index) => {
      return (
        <button
          className={activeTab === index ? "active" : ""}
          onClick={this.handleClick}
          key={index} // 안티패턴이라고 한다 shortId 라는 패키지를 사용하여 uniqueId를 만들으라고..
          data-key={index}
          disabled={edit_mode ? true : false}
        >
          {tab.name}
        </button>
      );
    });

    const desc = tabs[activeTab].desc;

    return (
      <div className="Main">
        <h2 className="title">저스틴 블로그</h2>

        <div className="content">
          <div className="img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
              alt=""
            />
          </div>
          <div className="tab" id="tabs">
            {mappedTabs}
            <button id="editBtn" onClick={this.editClick}>
              {edit_mode !== true ? "edit" : "done"}
            </button>
          </div>

          <div className="desc">{edit_mode ? this.state.desc : desc}</div>
        </div>
      </div>
    );
  }
}

export default Main;
