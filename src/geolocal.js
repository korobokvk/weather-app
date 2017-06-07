import * as React from 'react';
import {geolocated} from 'react-geolocated';

class Demo extends Component {

        return <div>lattitude: {this.props.coords && this.props.coords.latitude}</div>;
    }
}

export default Demo;
