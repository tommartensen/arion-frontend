import React from "react";

class Utils {
    static getDateTime(timestamp) {
        return (
            "Created on "
            + Utils.parseDateFromTimestamp(timestamp)
            + " at "
            + Utils.parseTimeFromTimestamp(timestamp)
        );
    }

    static parseDateFromTimestamp(timestamp) {
        return timestamp.split("T")[0];
    }

    static parseTimeFromTimestamp(timestamp) {
        const time = timestamp.split("T")[1];
        return time.split(".")[0];
    }

    static prettyPrintJSON(object) {
        return (
            <div style={{whiteSpace: "pre"}}>
                {JSON.stringify(object, null, '\t')}
            </div>
        );
    }
}

export default Utils;