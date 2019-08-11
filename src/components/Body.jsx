import React from 'react';
import '../stylesheets/style.scss';

class Body extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className = "Body thirteen wide column">
                <div className = "ui circular segment" onClick={this.props.onMenuClick}>
                    <i className="align justify icon menuIcon"></i>
                </div>
            </div>
        );
    }
}

export default Body;