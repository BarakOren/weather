const darkOne = "#1e202c"
const darkTwo = "#2d313d"
const darkThree = "#323544"
const darkFour = "#262a36"
const darkFive = "#222431"
const grey = "#a7a9b5"
const mainBlue = "#19a4d4"
const secondBlue = "#009ad8"


const theme = {
    id: "dark",
    text: "white",
    background: "linear-gradient(to bottom, #363a51, #32364b, #2e3246, #2b2e40, #272a3b, #252838, #232635, #212432, #202330, #20222f, #1f212d, #1e202c)",
    header: {
        headerBackground: darkOne,
        headerText: "white",
        headerText2: "#262626",
        selectedHeader: mainBlue,
        headerHover: "#0ec0ff",
    },
    search: {
        searchBackground: darkOne,
        buttonColor: secondBlue
    },
    mainCard: {
        background1: darkThree,
        background2: darkFour,
        headerBackground: darkTwo,
        headerBackground2: darkFive,
        textOne: grey,
        degreeColor: "white"
    },
    toggler: {
        text: "#b3b3b3",
        background: darkTwo,
        hover: "white"
    },
    shadow: "black",
    scrollerBackground: "rgb(39, 39, 39)",
    scrollerHover: "rgb(68, 68, 68)",
    spinnerColor: "white",
    xColor: grey,
    xBackground: darkOne
}

export default theme;