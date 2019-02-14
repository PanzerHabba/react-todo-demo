import { createMuiTheme } from "@material-ui/core/styles";

function getPrimaryColor(): { primary: string; secondary: string } {
    const host = process.env.REACT_APP_HOST;

    const colorMap = {
        LOCALHOST: {
            primary: "#3FB8AF",
            secondary: "#FF9E9D"
        },
        UTVIKLING: {
            primary: "#3FB8AF",
            secondary: "#FF9E9D"
        },
        QA: {
            primary: "#ed7534",
            secondary: "#3fb8af"
        },
        TEST: {
            primary: "#FAD089",
            secondary: "#F5634A"
        },
        PROD: {
            primary: "#107896",
            secondary: "#f7882f"
        },
        default: {
            primary: "#107896",
            secondary: "#f7882f"
        }
    };

    if (colorMap[host]) {
        return colorMap[host];
    }

    return colorMap.default;
}

export const colors = {
    ...getPrimaryColor()
};

export const dimensions = {
    breadcrumbsFontSize: 16,
    contentWidth: 1028,
    footerHeight: 50,
    inputBoxHeight: 61,
    toolbarHeight: 80,
    toolbarWidth: 1260,
    toolbarMenuWidth: 1028,
    toolbarMenuHeight: 40
};

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        }
    },
    typography: {
        useNextVariants: true,
        fontSize: 16,
        fontFamily: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"].join(
            ","
        )
    },
    overrides: {
        MuiFormControl: {
            root: {
                paddingTop: "1rem"
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: "inherit"
            }
        },
        MuiChip: {
            avatar: {
                fontSize: 14
            }
        }
    }
});
