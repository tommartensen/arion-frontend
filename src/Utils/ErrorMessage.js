import React, { Component } from 'react';
import IconWarning from 'material-ui/svg-icons/alert/warning';

class ErrorMessage extends Component {

    render() {
        return (
            <div>
                <IconWarning/>
                <p>{this.props.message.toString()}</p>
            </div>
        );
    }
}

export default ErrorMessage;