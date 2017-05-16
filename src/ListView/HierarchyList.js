import React, {Component} from "react";
import {IconButton, List, ListItem} from "material-ui";
import IconSearch from 'material-ui/svg-icons/action/search';

class HierarchyList extends Component {
    data = [
        {"name": "Hierarchy Name 1", "timestamp": "22.03.2017", "id": 1},
        {"name": "Hierarchy Name 2", "timestamp": "23.03.2017", "id": 2},
        {"name": "Hierarchy Name 3", "timestamp": "24.03.2017", "id": 3},
        {"name": "Hierarchy Name 4", "timestamp": "25.03.2017", "id": 4},
    ];


    render() {
        return (
            <List>
                {this.data.map(
                    (hierarchy) => {
                        return <ListItem
                            key={hierarchy.id}
                            primaryText={hierarchy.name}
                            secondaryText={hierarchy.timestamp}
                            rightIconButton={<IconButton href={"details/" + hierarchy.id}><IconSearch/></IconButton>}/>;
                    })
                }
            </List>
        );
    }
}

export default HierarchyList;