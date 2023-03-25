export const tokensDark = {
    gray: {
        100: "#dee0e2",
        200: "#bdc1c5",
        300: "#9ba3a9",
        400: "#7a848c",
        500: "#59656f", // gray
        600: "#475159",
        700: "#353d43",
        800: "#24282c",
        900: "#121416"
    },

    primary: {
        100: "#dfcce5",
        200: "#bf9acc",
        300: "#a067b2",
        400: "#803599",
        500: "#60027f", // purple
        600: "#4d0266",
        700: "#3a014c",
        800: "#260133",
        900: "#130019"
    },
    secondary: {
        100: "#fff7cc",
        200: "#ffee99",
        300: "#ffe666",
        400: "#ffdd33",
        500: "#ffd500", // yellow
        600: "#ccaa00",
        700: "#998000",
        800: "#665500",
        900: "#332b00"
    },
}

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        ...tokensDark.primary,
                        main: tokensDark.primary[400],
                        light: tokensDark.primary[400],
                    },
                    secondary: {
                        ...tokensDark.secondary,
                        main: tokensDark.secondary[300],
                    },
                    neutral: {
                        ...tokensDark.gray,
                        main: tokensDark.gray[500],
                    },
                    background: {
                        default: tokensDark.primary[800],
                        alt: tokensDark.primary[900],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        ...tokensLight.primary,
                        main: tokensDark.gray[100],
                        light: tokensDark.gray[300],
                    },
                    secondary: {
                        ...tokensLight.secondary,
                        main: tokensDark.secondary[600],
                        light: tokensDark.secondary[700],
                    },
                    neutral: {
                        ...tokensLight.gray,
                        main: tokensDark.gray[500],
                    },
                    background: {
                        default: tokensDark.gray[100],
                        alt: tokensDark.gray[300],
                    },
                }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};