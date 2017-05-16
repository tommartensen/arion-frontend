import React, {Component} from "react";
import {Card, CardText, CardTitle} from "material-ui";
import HierarchyList from "./HierarchyList";

class ListView extends Component {
    render() {
        return (
            <Card>
                <CardTitle title="Hierarchies" subtitle="You can see all event query hierarchies here." />
                <CardText>
                    <HierarchyList/>
                </CardText>
            </Card>
        );
    }
}

export default ListView;