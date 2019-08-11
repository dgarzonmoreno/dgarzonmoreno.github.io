import React from 'react';
import { HOME, ABOUT_ME, PROJECTS, CONTACT_ME, RESUME} from '../constants/index.js';

class VerticalNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHomeToggled: true, 
            isAboutMeToggled: false, 
            isProjectsToggled: false,
            isContactMeToggled: false,
            isResumeToggled: false
        };
    }

    activateNavButton(entityName) {
        if ( entityName === `${ HOME }` ) {
            this.setState( { isHomeToggled: true } );
            this.setState({
                isAboutMeToggled: false,
                isProjectsToggled: false,
                isContactMeToggled: false,
                isResumeToggled: false
            });
        } else if ( entityName === `${ ABOUT_ME }` ) {
            this.setState( { isAboutMeToggled: true } );
            this.setState({
                isHomeToggled: false,
                isProjectsToggled: false,
                isContactMeToggled: false,
                isResumeToggled: false
            });
        } else if ( entityName === `${ PROJECTS }` ) {
            this.setState( { isProjectsToggled: true } );
            this.setState({
                isHomeToggled: false,
                isAboutMeToggled: false,
                isContactMeToggled: false,
                isResumeToggled: false
            });
        } else if ( entityName === `${ CONTACT_ME }` ) {
            this.setState( { isContactMeToggled: true } );
            this.setState({
                isHomeToggled: false,
                isAboutMeToggled: false,
                isProjectsToggled: false,
                isResumeToggled: false
            });
        } else {
            this.setState( { isResumeToggled: true } )
            this.setState({
                isAboutMeToggled: false,
                isProjectsToggled: false,
                isContactMeToggled: false,
                isHomeToggled: false
            });
        }
    }
    
    render() {
        return (
            <div className="ui vertical menu verticalNav three wide column">
                <a
                className={'item ' + (this.state.isHomeToggled ? 'active' : null) }
                onClick={() => this.activateNavButton(`${ HOME }`)}>
                    <i class="home icon"></i>
                    { HOME }
                </a>
                <a className= {'item ' + (this.state.isAboutMeToggled ? 'active' : null) }
                onClick={() => this.activateNavButton(`${ ABOUT_ME }`)}>
                    <i class="address card icon"></i>
                    { ABOUT_ME }
                </a>
                <a className={'item ' + (this.state.isProjectsToggled ? 'active' : null) }
                onClick={() => this.activateNavButton(`${ PROJECTS }`)}>
                    <i class="briefcase icon"></i>                    
                    { PROJECTS }
                </a>
                <a className={'item ' + (this.state.isContactMeToggled ? 'active' : null) } 
                onClick={() => this.activateNavButton(`${ CONTACT_ME }`) }>
                    <i class="phone square icon"></i>
                    { CONTACT_ME }
                </a>
                <a className={'item ' + (this.state.isResumeToggled ? 'active' : null) }
                onClick={() => this.activateNavButton(`${RESUME }`) }>
                    <i class="paperclip icon"></i>
                    { RESUME }
                </a>
            </div>
        );
    }
}

export default VerticalNav;