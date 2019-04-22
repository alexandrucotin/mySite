import React from "react";
import BottomAppBar from "./AppBar";
import Grid from "@material-ui/core/Grid";
import GridPort from "./Grid";
import SearchBar from "./SearchBar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };

    this.closeComponent = ev => {
      ev.preventDefault();

      this.setState({
        isVisible: false
      });

      setTimeout(() => {
        this.props.history.push("/");
      }, 600);
    };
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={
          this.props.match.params === "/login"
            ? "loadComponent"
            : "leaveComponent"
        }
      >
        {this.state.isVisible ? (
          <div className="portfolio">
            <Grid container>
              <Grid item xs={12} sm={12} lg={12} xl={12}>
                <BottomAppBar />
              </Grid>
              <Grid item xs={12} sm={12} lg={12} xl={12}>
                <h1 style={{ color: "white", align: "right" }}>
                  This my Portfolio!
                </h1>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} xl={12}>
                <SearchBar />
              </Grid>
              <Grid item xs={12} sm={12} lg={12} xl={12}>
                <GridPort />
              </Grid>
            </Grid>
          </div>
        ) : null}
      </ReactCSSTransitionGroup>
    );
  }
}

export default Portfolio;
