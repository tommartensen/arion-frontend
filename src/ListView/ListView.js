import React, {Component} from "react";
import {Card, CardText, CardTitle, FloatingActionButton} from "material-ui";
import ContentAdd from 'material-ui/svg-icons/content/add';
import { css } from 'aphrodite';
import HierarchyList from "./HierarchyList";
import ListViewStyles from "./ListViewStyles";

class ListView extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardTitle title="Hierarchies" subtitle="You can see all event query hierarchies here." />
                    <CardText>
                        <HierarchyList/>
                    </CardText>
                </Card>
                <FloatingActionButton
                    className={css(ListViewStyles.floatingActionButton)}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default ListView;