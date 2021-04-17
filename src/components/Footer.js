import React from 'react'
import Section from './Section'
import Container from '@material-ui/core/Container'
import { Link } from './../util/router.js'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import useDarkMode from 'use-dark-mode'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  sticky: {
    marginTop: 'auto'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 24,
    [theme.breakpoints.up('sm')]: {
      flex: '50%'
    }
  },
  brand: {
    display: 'block',
    height: 32
  },
  social: {
    alignItems: 'flex-end'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    lineHeight: 1,
    '&:hover': {
      opacity: 0.8
    },
    '&:not(:first-of-type)': {
      marginLeft: 20
    }
  },
  left: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start'
    }
  },
  right: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end'
    }
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up('sm')]: {
      order: 1
    }
  }
}))

function Footer(props) {
  const classes = useStyles()

  const darkMode = useDarkMode()
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            {/* <img src={logo} alt="Logo" className={classes.brand} /> */}
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            {props.copyright && (
              <div className={`${classes.item} ${classes.right}`}>
                <Typography component="p">{props.copyright}</Typography>
              </div>
            )}
          </div>
          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
            <a
              href="https://github.com/4lch4"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <GitHubIcon fontSize="small" />
            </a>
            <a
              href="https://twitter.com/4lch4"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <TwitterIcon fontSize="small" />
            </a>
            <a
              href="https://fb.me/4lch4"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <FacebookIcon fontSize="small" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Footer
