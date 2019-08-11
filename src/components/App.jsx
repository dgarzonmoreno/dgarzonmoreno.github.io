import React, {Fragment} from 'react';
import '../stylesheets/style.scss';
import VerticalNav from './VerticalNav';
import Body from './Body';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMenuToggled: true}
    }

    toggleMenu = () => {
        this.setState({isMenuToggled: !this.state.isMenuToggled})
    }

    render() {
        return(
            <Fragment>
                <div className="ui grid">
                   <VerticalNav isMenuToggled = {this.state.isMenuToggled} />
                   <Body onMenuClick={this.toggleMenu}/>
                </div>
            </Fragment>   
        );
    }
}

export default App;