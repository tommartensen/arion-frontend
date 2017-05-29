import React from "react";
import {Card, CardText, CardTitle, IconButton, List, ListItem} from "material-ui";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import IconSearch from 'material-ui/svg-icons/action/search';

class EventTypeList extends ConnectionComponent {
    static renderEventTypeDetailButton(eventTypeId) {
        return (
            <IconButton
                tooltip={config.descriptions.tooltipToEventTypeInEQMN}
                href={"/event_type/" + eventTypeId}>
                <IconSearch/>
            </IconButton>
        );
    }

    renderEventTypes() {
        const eventTypes = this.props.eventTypes;
        return (
            <List>
                {
                    eventTypes.map((eventType, key) => {
                        return (
                            <ListItem
                                key={key}
                                primaryText={eventType.name}
                                disabled={true}
                                rightIconButton={EventTypeList.renderEventTypeDetailButton(eventType.id)}
                            />
                        );
                    })
                }
            </List>
        );
    }

    render() {
        return (
            <Card>
                <CardTitle title={"All Event Types in this Hierarchy"}/>
                <CardText>
                {this.renderEventTypes()}
                </CardText>
            </Card>);
    }
}

export default EventTypeList;