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
import {Card, CardText, CardTitle} from "material-ui";

class HierarchyView extends ConnectionComponent {
    constructor(props) {
        super(props);
        this.hierarchySrc = "/media/Hierarchy.png";
        this.hierarchyDetailsSrc = "/media/HierarchyDetails.png";
        this.state = {
            hierarchyDetails: false
        }
    }

    getHierarchyImageSource() {
        if (this.state.hierarchyDetails) {
            return this.hierarchyDetailsSrc;
        }
        return this.hierarchySrc;
    }

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
                <Row className={css(AppStyles.marginTop30)}>
                    <Col md={6}>
                        <EventTypeList eventTypes={eventTypes} />
                    </Col>
                    <Col md={6}>
                        <EventQueryList hierarchyId={hierarchy.id} />
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)}>
                    <Col>
                        <Card>
                            <CardTitle title={"Hierarchy: " + hierarchy.name} />
                            <CardText>
                                <img
                                    src={this.getHierarchyImageSource()}
                                    width={"100%"}
                                    alt={"Hierarchy"}
                                    onDoubleClick={() => this.setState({
                                        hierarchyDetails: !this.state.hierarchyDetails
                                    })}
                                />
                            </CardText>
                        </Card>
                    </Col>
                </Row>
            </div>);
    }
}

export default connect.defaults({fetch: ConnectionComponent.switchFetch})(props => ({
    hierarchy: config.backendRESTRoute + `/api/hierarchy/esper/${props.match.params.hierarchyId}`,
    eventTypes: config.backendRESTRoute + `/api/event_type/esper/hierarchy/${props.match.params.hierarchyId}`
}))(HierarchyView);