import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}
    let
    mapStateToProps = (state) => {
        return {
            posts: state.posts
        }
    }
    let
    mapDispatchToProps = () => {
        return {}
    }


export default compose(connect(mapStateToProps, mapDispatchToProps))(Header);

