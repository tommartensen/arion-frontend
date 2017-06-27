import React from "react";
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import {Card, CardText, CardTitle} from "material-ui";
import {Col, Row} from "react-grid-system";
import { css } from 'aphrodite';
import AppStyles from "../AppStyles";
import EventTypeList from "../HierarchyView/EventTypeList";
import Utils from "../Utils/Utils";

class EventQueryView extends ConnectionComponent {
    render() {
        const connectionIncomplete = super.render(PromiseState.all([this.props.eventQuery]));
        if (connectionIncomplete) {
            return connectionIncomplete;
        }
        const eventQuery = this.props.eventQuery.value;
        return (
            <div>
                <h1>{"Event Query #" + eventQuery.id}</h1>
                <Row>
                    <Col>
                        <Card>
                            <CardTitle title={"Query String"}/>
                            <CardText>
                                {eventQuery.query}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)}>
                    <Col md={6}>
                        <Card>
                            <CardTitle title={"Input Event Types"}/>
                            <CardText>
                                {EventTypeList.renderEventTypes(eventQuery.inputEventTypes)}
                            </CardText>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardTitle title={"Output Event Type"}/>
                            <CardText>
                                {EventTypeList.renderEventTypes([eventQuery.outputEventType])}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)}>
                    <Col md={12}>
                        <Card>
                            <CardTitle title={"EQMN Representation"}/>
                            <CardText>
                                {Utils.prettyPrintJSON(eventQuery.eqmnRepresentation)}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)}>
                    <Col md={12}>
                        <Card>
                            <CardTitle title={"EQMN Model"}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect.defaults({fetch: ConnectionComponent.switchFetch})(props => ({
    eventQuery: config.backendRESTRoute + `/api/query/esper/${props.match.params.queryId}`
}))(EventQueryView);