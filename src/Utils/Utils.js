class Utils {
    static parseTimestamp(timestamp) {
        const date = timestamp.split("T")[0];
        const time = timestamp.split("T")[1];
        return date + " at " + time.split(".")[0]
    }
}

export default Utils;