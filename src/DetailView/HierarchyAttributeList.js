import React, { Component } from "react";
import {List, ListItem} from "material-ui";
import Utils from "../Utils/Utils";

class HierarchyAttributeList extends Component {
    render() {
        return (
            <List>
                <ListItem
                    primaryText={"Created at: "}
                    secondaryText={Utils.parseTimestamp(this.props.hierarchy.timestamp)}
                />
            </List>
        );
    }
}
export default HierarchyAttributeList;