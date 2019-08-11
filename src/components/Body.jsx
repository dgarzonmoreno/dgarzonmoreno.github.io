import React from 'react';
import '../stylesheets/style.scss';

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {shouldBodyAdjustWidth: false}
    }

    onClickActions = () => {
        this.props.onMenuClick();
        this.setState({shouldBodyAdjustWidth: !this.state.shouldBodyAdjustWidth});
    }

    render() {
        return(
            <div className = {"Body " + (this.state.shouldBodyAdjustWidth ? 'fifteen wide column' : 'thirteen wide column')}>
                <div className = "ui circular segment" onClick={this.onClickActions}>
                    <i className="align justify icon menuIcon"></i>
                </div>
            </div>
        );
    }
}

export default Body;