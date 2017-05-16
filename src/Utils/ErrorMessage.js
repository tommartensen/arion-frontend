import React, { Component } from 'react';
import IconWarning from 'material-ui/svg-icons/alert/warning';
import { css } from 'aphrodite';
import AppStyles from '../AppStyles';

class ErrorMessage extends Component {

    render() {
        return (
            <div className={css(AppStyles.dFlex, AppStyles.alignItemsCenter, AppStyles.flexDirectionColumn)}>
                <IconWarning className={css(AppStyles.errorColor)} />
                <p className={css(AppStyles.errorColor)}>{this.props.message.toString()}</p>
            </div>
        );
    }
}

export default ErrorMessage;