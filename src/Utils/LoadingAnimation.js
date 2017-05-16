import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class LoadingAnimation extends Component {
    render() {
        return (
            <div>
                <CircularProgress size={80} thickness={5} />
            </div>
        );
    }
}

export default LoadingAnimation;