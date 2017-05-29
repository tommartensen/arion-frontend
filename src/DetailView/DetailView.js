import React from "react";
import {Col, Row} from "react-grid-system";
import { css } from 'aphrodite';
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import HierarchyAttributeList from "./HierarchyAttributeList";
import AppStyles from "../AppStyles";
import EventTypeList from "./EventTypeList";
import EventQueryList from "./EventQueryList";
import HierarchyGraph from "./HierarchyGraph";

class DetailView extends ConnectionComponent {
    render() {
        const connectionIncomplete = super.render(PromiseState.all([this.props.hierarchy, this.props.eventTypes]));
        if (connectionIncomplete) {
            return connectionIncomplete;
        }
        const hierarchy = this.props.hierarchy.value;
        const eventTypes = this.props.eventTypes.value;
        return (
            <div>
                <h1>{hierarchy.name}</h1>
                <Row>
                    <Col md={6}>
                        <HierarchyAttributeList hierarchy={hierarchy} />
                    </Col>
                    <Col md={6}>
                        <HierarchyGraph
                            eventTypes={eventTypes}
                            hierarchy={hierarchy.hierarchy}
                        />
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)} >
                    <Col md={6}>
                        <EventTypeList eventTypes={eventTypes} />
                    </Col>
                    <Col md={6}>
                        <EventQueryList hierarchyId={hierarchy.id} />
                    </Col>
                </Row>
            </div>);
    }
}

export default connect.defaults({fetch: ConnectionComponent.switchFetch})(props => ({
    hierarchy: config.backendRESTRoute + `/api/hierarchy/esper/${props.match.params.hierarchyId}`,
    eventTypes: config.backendRESTRoute + `/api/event_type/esper/hierarchy/${props.match.params.hierarchyId}`
}))(DetailView);