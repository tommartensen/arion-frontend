import React from "react";
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import { css }from 'aphrodite';
import {Col, Row} from "react-grid-system";
import AppStyles from "../AppStyles";
import {Card, CardText, CardTitle, IconButton, List, ListItem} from "material-ui";
import IconSearch from 'material-ui/svg-icons/action/search';
import Utils from "../Utils/Utils";

class EventTypeView extends ConnectionComponent {
    static renderEventQueryDetailButton(eventQueryId) {
        return (
            <IconButton
                tooltip={config.descriptions.tooltipToEventQueryInEQMN}
                href={"/query/" + eventQueryId}>
                <IconSearch/>
            </IconButton>
        );
    }

    static renderEventQueryList(eventQueries) {
        return (
            <List>
                {
                    eventQueries.map((eventQuery, key) => {
                        return (
                            <ListItem
                                key={key}
                                primaryText={eventQuery.query}
                                disabled={true}
                                rightIconButton={EventTypeView.renderEventQueryDetailButton(eventQuery.id)}
                            />
                        );
                    })
                }
            </List>
        );
    }

    static generateEventTypeModel(eventQueries) {
        const eqmnRepresentation = [];
        eventQueries.forEach(eventQuery => {
            eqmnRepresentation.push(
                Utils.prettyPrintJSON(
                    {
                        query: eventQuery.eqmnRepresentation["input"],
                        condition: eventQuery.eqmnRepresentation["condition"]
                    },
                )
            );
        });
        return (
            <div>
                {
                    eqmnRepresentation.map(representation => {
                        return representation;
                    })
                }
            </div>
        );
    }

    render() {
        const connectionIncomplete = super.render(PromiseState.all([this.props.eventType, this.props.eventQueries]));
        if (connectionIncomplete) {
            return connectionIncomplete;
        }
        const eventType = this.props.eventType.value;
        const eventQueries = this.props.eventQueries.value;
        return (
            <div>
                <h1>{eventType.name}</h1>
                <Row className={css(AppStyles.marginTop30)}>
                    <Col md={12}>
                        <Card>
                            <CardTitle title={"Feeding Queries"}/>
                            <CardText>
                                {EventTypeView.renderEventQueryList(eventQueries)}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)}>
                    <Col md={12}>
                        <Card>
                            <CardTitle title={"EQMN Representation"}/>
                            <CardText>
                                {EventTypeView.generateEventTypeModel(eventQueries)}
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
    eventType: config.backendRESTRoute + `/api/event_type/esper/${props.match.params.eventTypeId}`,
    eventQueries: config.backendRESTRoute + `/api/query/esper/event_type/${props.match.params.eventTypeId}`
}))(EventTypeView);