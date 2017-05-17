import React, {Component} from 'react';
import LoadingAnimation from './../Utils/LoadingAnimation';
import ErrorMessage from './../Utils/ErrorMessage';
import config from './../config/config.js';
import BackendMock from './BackendMock.js';

class ConnectionComponent extends Component {

    render(promiseState) {
        if (promiseState.pending) {
            return <LoadingAnimation/>;
        } else if (promiseState.rejected) {
            return <ErrorMessage message={promiseState.reason.message}/>;
        }
        return null;
    }

    static switchFetch(input, init) {
        if(config.useBackendMock) {
            const response = BackendMock.handleRequest(input, init);
            return new Promise(resolve => resolve(response));
        } else {
            const req = new Request(input, init);
            return fetch(req);
        }
    }
}
export default ConnectionComponent;