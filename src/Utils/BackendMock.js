import Hierarchy from "./MockData/Hierarchy";
import config from "../config/config";
class BackendMock {

    static getRouteMapper() {
        return new Map()
            .set(/^\/api\/hierarchy\/esper$/i, BackendMock.getEsperHierarchies);
    }

    static handleRequest(request) {
        const RouteMapper = BackendMock.getRouteMapper();
        const cleanedRoute = request.url.replace(config.backendRESTRoute, "");
        const targetRoute = [...RouteMapper.keys()].find((route) => {
            return route.exec(cleanedRoute);
        });
        const responseValue = RouteMapper.get(targetRoute)(targetRoute.exec(cleanedRoute));
        return BackendMock.buildResponse(responseValue);
    }

    static buildResponse(value) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return new Response(JSON.stringify(value), {status: 200, statusText: "OK", headers: headers});
    }

    static getEsperHierarchies() {
        return Hierarchy;
    }


}

export default BackendMock;