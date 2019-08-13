import React from 'react';
import Typist from 'react-typist';
import '../stylesheets/style.scss';


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shouldBodyAdjustWidth: false }
    }

    onClickActions = () => {
        this.props.onMenuClick();
        this.setState({ shouldBodyAdjustWidth: !this.state.shouldBodyAdjustWidth });
    }

    render() {
        return (
            <div className={"Body " + (this.state.shouldBodyAdjustWidth ? 'expandedBody' : 'collapsedBody')}>
                {/* Burger Menu */}
                <div className="ui circular segment" onClick={this.onClickActions}>
                    <i className="align justify icon menuIcon"></i>
                </div>
                {/* Header & Image */}
                <img className="ui centered small circular image" src="/images/Dan.jpeg"></img>
                <div className="ui huge header center aligned homeTitle">
                    Daniel Garzon Moreno
                </div>
                <br />
                {/* ICON GRID */}
                <div className="ui one column centered grid">
                    <i className="big github icon"></i>
                    <i className="big linkedin icon linkedInIcon"></i>
                    <i className="big envelope outline icon emailIcon"></i>
                </div>
                <br />
                {/* CARDS */}
                <div className="ui segment homeSegment">
                    <div className="ui grid">
                        <div className="eight wide column">
                            <img className="ui large rounded image" src="images/century-tower.jpg"></img>
                        </div>
                        <div className="eight wide column">
                            <Typist className="ui huge header quote middle aligned centered">
                            "You Miss 100% of the shots you don't take"
                            <br />
                            <br />
                            - Wayne Gretski
                            <Typist.Backspace count={13} delay={200} />
                            Michael Scott
                            <Typist.Backspace count={13} delay={200} />
                            Daniel Garzon Moreno
                            </Typist>
                        </div>
                    </div>
                </div>
                <div className="ui segment aboutMeSegment"></div>
            </div>
        );
    }
}

export default Body;