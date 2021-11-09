const one = "#8c8c8c"
const two = "#a6a6a6"
const three = "#bfbfbf"
const four = "#e6e6e6"
const five = "#f2f2f2"
const grey = "#a7a9b5"
const mainBlue = "#006e99"
const secondBlue = "#005b80"


const theme = {
    id: "light",
    text: "black",
    background: "linear-gradient(to right top, #9d9d9d, #aaaaaa, #b8b6b7, #c6c3c4, #d4d0d0);",
    header: {
        headerBackground: two,
        headerText: "black",
        headerText2: "#262626",
        selectedHeader: mainBlue,
        headerHover: "#00a4e6",
    },
    search: {
        searchBackground: two,
        buttonColor: secondBlue
    },
    mainCard: {
        background1: three,
        background2: two,
        headerBackground: two,
        headerBackground2: one,
        textOne: "#1a1a1a",
        degreeColor: "#1a1a1a"
    },
    toggler: {
        text: four,
        background: one,
        hover: "black"
    },
    shadow: "black",
    scrollerBackground: "rgb(39, 39, 39)",
    scrollerHover: "rgb(68, 68, 68)",
    spinnerColor: "black",
    xColor: "black",
    xBackground: one
}

export default theme;