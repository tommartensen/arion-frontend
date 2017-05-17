import React from "react";

class Utils {
    static parseTimestamp(timestamp) {
        const date = timestamp.split("T")[0];
        const time = timestamp.split("T")[1];
        return date + " at " + time.split(".")[0]
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