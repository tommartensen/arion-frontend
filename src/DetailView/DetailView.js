import React from "react";
import {Col, Row} from "react-grid-system";
import {Card, CardText, CardTitle} from "material-ui";
import { css } from 'aphrodite';
import {connect, PromiseState} from "react-refetch";
import ConnectionComponent from "../Utils/ConnectionComponent";
import config from "../config/config";
import Utils from "../Utils/Utils";
import HierarchyAttributeList from "./HierarchyAttributeList";
import AppStyles from "../AppStyles";
import HierarchyView from "./HierarchyView";

class DetailView extends ConnectionComponent {
    render() {
        const connectionIncomplete = super.render(PromiseState.all(this.props.hierarchy));
        if (connectionIncomplete) {
            return connectionIncomplete;
        }
        const hierarchy = this.props.hierarchy.value;
        return (
            <div>
                <h1>{hierarchy.name}</h1>
                <Row>
                    <Col md={6}>
                        <HierarchyAttributeList hierarchy={hierarchy} />
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardTitle className={css(AppStyles.fontWeightBold)} >
                                JSON Representation
                            </CardTitle>
                            <CardText>
                                {Utils.prettyPrintJSON(hierarchy.hierarchy)}
                            </CardText>
                        </Card>
                    </Col>
                </Row>
                <Row className={css(AppStyles.marginTop30)} >
                    <HierarchyView hierarchy={hierarchy.hierarchy} />
                </Row>
            </div>);
    }
}

export default connect.defaults({fetch: ConnectionComponent.switchFetch})(props => ({
    hierarchy: config.backendRESTRoute + `/api/hierarchy/esper/${props.match.params.hierarchyId}`
}))(DetailView);