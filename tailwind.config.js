/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primaryRHA: "#183A37",
            secondaryRHA: "#C44900",
            tertiaryRHA: "#E86417",
            backgroundRHA: "#DEE0E0",
            whiteRHA: "#F0F2F2",
            blackRHA: "#04151F",
            grayRHA: "#BBBAB9",
            alert: "#C40000",
        },
        fontFamily: {
            principal: ["Roboto", ...defaultTheme.fontFamily.sans],
            secondary: ["Titillium Web"],
        },
        extend: {},
    },
    plugins: [],
};
