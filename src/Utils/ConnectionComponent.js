import React, {Component} from 'react';
import LoadingAnimation from './../Utils/LoadingAnimation';
import ErrorMessage from './../Utils/ErrorMessage';

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
        const req = new Request(input, init);
        return fetch(req);
    }
}
export default ConnectionComponent;