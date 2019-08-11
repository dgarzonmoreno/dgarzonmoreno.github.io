import React, {Fragment} from 'react';
import '../stylesheets/style.scss';
import VerticalNav from './VerticalNav';
import Body from './Body';

const App = () => {
    return(
     <Fragment>
         <div className="ui grid">
            <VerticalNav />
            <Body />
         </div>
     </Fragment>   
   );
}

export default App;