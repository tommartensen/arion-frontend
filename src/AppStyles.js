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

    justifyContentCenter: {
        justifyContent: 'center'
    },

    errorColor: {
        color: config.colors.error
    },

    fontWeightBold: {
        fontWeight: 700
    },

    marginTop30: {
        marginTop: "30px"
    }
});

export default AppStyles;