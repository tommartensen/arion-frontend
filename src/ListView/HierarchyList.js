import React from "react";
import {IconButton, List, ListItem} from "material-ui";
import IconSearch from 'material-ui/svg-icons/action/search';
import Utils from "../Utils/Utils";
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";

class HierarchyList extends ConnectionComponent {
    static renderDetailButton(hierarchyId) {
        return (
            <IconButton
                tooltip={config.descriptions.toolTipToDetailView}
                href={"details/" + hierarchyId}>
                <IconSearch/>
            </IconButton>
        );
    }

    render() {
       const connectionIncomplete = super.render(PromiseState.all([this.props.hierarchies]));
       if (connectionIncomplete) {
           return connectionIncomplete;
       }
       const hierarchies = this.props.hierarchies.value;
        return (
            <List>
                {hierarchies.map(
                    (hierarchy) => {
                        return <ListItem
                            key={hierarchy.id}
                            primaryText={hierarchy.name}
                            secondaryText={Utils.getDateTime(hierarchy.timestamp)}
                            rightIconButton={HierarchyList.renderDetailButton(hierarchy.id)}/>;
                    })
                }
            </List>
        );
    }
}
export default connect.defaults({fetch: ConnectionComponent.switchFetch})(() => ({
    hierarchies: config.backendRESTRoute + `/api/hierarchy/esper`
}))(HierarchyList);