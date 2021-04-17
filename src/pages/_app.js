import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import { ThemeProvider } from "./../util/theme.js";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar
            color="default"
          />

          <Switch>
            <Route exact path="/socials" component={IndexPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            description="I'm just some guy who likes making and fixing things that usually involve a keyboard and/or mouse."
            copyright="© 2021 4lch4 Industries"
            logo="/socials/img/4lch4.png"
            logoInverted="/socials/img/4lch4.png"
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  )
}

export default App;
