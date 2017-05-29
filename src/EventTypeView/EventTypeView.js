import React from "react";
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";

class EventTypeView extends ConnectionComponent {
    render() {
        const connectionIncomplete = super.render(PromiseState.all([this.props.eventType]));
        if (connectionIncomplete) {
            return connectionIncomplete;
        }
        const eventType = this.props.eventType.value;
        return (
            <div>
                <h1>{eventType.name}</h1>
            </div>
        );
    }
}

export default connect.defaults({fetch: ConnectionComponent.switchFetch})(props => ({
    eventType: config.backendRESTRoute + `/api/event_type/esper/${props.match.params.eventTypeId}`
}))(EventTypeView);