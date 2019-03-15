// Import React
import React from "react"
import ReactDOM from "react-dom"

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Notes, Quote, Slide, Text } from "spectacle"

// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
//require("normalize.css")

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE",
  },
  {
    primary: "Arial",
    secondary: "Helvetica",
  },
)
class Presentation extends React.Component {
  render() {
    //
    //paste from lyrics website into here:
    var lyrics =
      ///START
      `Lets Rejoice
      
      And Sing
      
      er and Over and Over and Over and Over and Over and Over and Over and Over and Over and Over and Over and `
    ///END

    var slideArray = lyrics
      .replace(/^[ \t]*verse *\d*/gim, "\n")
      .split(/\s*\n\s*\n\s*/g)
      .map(i => (
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary" style={{ "text-align": "left" }}>
            {i.split("\n").map(z => (
              <div>{z}</div>
            ))}
          </Heading>
        </Slide>
      ))
    return (
      <Deck theme={theme} progress="none" showFullscreenControl={false} controls={false}>
        <Slide bgColor="secondary" />
        {slideArray}
        <Slide bgColor="secondary" />
      </Deck>
    )
  }
}

ReactDOM.render(<Presentation />, document.getElementById("root"))
