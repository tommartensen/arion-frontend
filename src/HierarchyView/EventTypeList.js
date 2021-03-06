import React from "react";
import {Card, CardText, CardTitle, IconButton, List, ListItem} from "material-ui";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import IconSearch from 'material-ui/svg-icons/action/search';

class EventTypeList extends ConnectionComponent {
    static renderEventTypeDetailButton(eventType) {
        if (!eventType.isBasicEventType) {
            return (
                <IconButton
                    tooltip={config.descriptions.tooltipToEventTypeInEQMN}
                    href={"/event_type/" + eventType.id}
                >
                    <IconSearch/>
                </IconButton>

            );
        }
    }

    static renderEventTypes(eventTypes) {
        return (
            <List>
                {
                    eventTypes.map((eventType, key) => {
                        return (
                            <ListItem
                                key={key}
                                primaryText={eventType.name}
                                disabled={true}
                                rightIconButton={EventTypeList.renderEventTypeDetailButton(eventType)}
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
                {EventTypeList.renderEventTypes(this.props.eventTypes)}
                </CardText>
            </Card>);
    }
}

export default EventTypeList;