import { StyleSheet } from 'aphrodite';
import config from "./config/config";

const AppStyles = StyleSheet.create({
    dFlex: {
        display: 'flex',
    },

    flexDirectionColumn: {
        flexDirection: 'column',
    },

    alignItemsCenter: {
        alignItems: 'center',
    },

    errorColor: {
        color: config.colors.error
    }
});

export default AppStyles;