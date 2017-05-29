import React from "react";
import {Card, CardText, CardTitle, IconButton, List, ListItem} from "material-ui";
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import IconSearch from 'material-ui/svg-icons/action/search';

class EventTypeList extends ConnectionComponent {
    static renderEventQueryDetailButton(queryId) {
        return (
            <IconButton
                tooltip={config.descriptions.tooltipToEventQueryInEQMN}
                href={"/query/" + queryId}>
                <IconSearch/>
            </IconButton>
        );
    }

    renderEventQueries() {
        const eventQueries = this.props.eventQueries.value;
        return (
            <List>
                {
                    eventQueries.map((eventQuery, key) => {
                        return (
                            <ListItem
                                key={key}
                                primaryText={eventQuery.query}
                                disabled={true}
                                rightIconButton={EventTypeList.renderEventQueryDetailButton(eventQuery.id)}
                            />
                        );
                    })
                }
            </List>
        );
    }

    render() {
        const connectionIncomplete = super.render(PromiseState.all([this.props.eventQueries]));
        if (connectionIncomplete) {
            return connectionIncomplete;
        }
        return (
            <Card>
                <CardTitle title={"All Event Queries in this Hierarchy"}/>
                <CardText>
                    {this.renderEventQueries()}
                </CardText>
            </Card>);
    }
}

export default connect.defaults({fetch: ConnectionComponent.switchFetch})((props) => ({
        eventQueries: {
            url: config.backendRESTRoute + `/api/query/esper/hierarchy/${props.hierarchyId}`
        },
    })
)(EventTypeList);