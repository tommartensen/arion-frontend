import React, { Component } from "react";
import {List, ListItem} from "material-ui";
import Utils from "../Utils/Utils";

class HierarchyAttributeList extends Component {
    render() {
        return (
            <List>
                <ListItem
                    primaryText={"Created on: "}
                    secondaryText={
                        Utils.parseDateFromTimestamp(this.props.hierarchy.timestamp)
                        + ", "
                        + Utils.parseTimeFromTimestamp(this.props.hierarchy.timestamp)}
                />
            </List>
        );
    }
}
export default HierarchyAttributeList;