import React, {Component} from "react";
import {Card, CardText, CardTitle} from "material-ui";
import Graph from 'react-graph-vis'
import config from "../config/config";

class HierarchyView extends Component {
    static getNodes(eventTypes) {
        return eventTypes.map((eventType) => {
            return {id: eventType.id, label: eventType.name}
        });
    }

    static getEdges(hierarchy) {
        let edges = [];
        Object.keys(hierarchy).forEach(function(from) {
            const targets = hierarchy[from];
            targets.forEach(function(to) {
                edges.push({from: parseInt(from, 10), to: to});
            });
        });
        return edges
    }

    render() {
        const graph = {
            nodes: HierarchyView.getNodes(this.props.eventTypes),
            edges: HierarchyView.getEdges(this.props.hierarchy)
        };

        const options = {
            layout: {
                hierarchical: {
                    sortMethod: "directed",
                    direction: "DU"
                }
            },
            edges: {
                color: config.colors.primaryDark
            },
            nodes: {
                color: config.colors.border
            }
        };

        const events = {};
        return (
            <Card>
                <CardTitle title={"Graph Representation"} />
                <CardText>
                    <Graph
                        graph={graph}
                        options={options}
                        events={events}
                    />
                </CardText>
            </Card>
        );
    }
}

export default HierarchyView;