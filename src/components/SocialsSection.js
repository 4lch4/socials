import React from 'react'
import Section from './Section'
import Container from '@material-ui/core/Container'
import SectionHeader from './SectionHeader'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { socials } from '../util/socials'
import { Button, CardActions } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  media: {
    height: 80
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: -(theme.spacing(12) / 2)
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  }
}))

function SocialsSection(props) {
  const classes = useStyles()

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Grid container={true} justify="center" spacing={2}>
          {socials.map((social, index) => (
            <Grid item={true} xs={12} md={6} lg={4} key={index}>
              <a
                href={social.href}
                style={{ 'text-decoration': 'none' }}
                target="_self"
              >
                <Card>
                  <CardMedia
                    className={classes.media}
                    // image={social.headerImage}
                    title={social.name}
                  />
                  <div className={classes.avatarWrapper}>
                    <Avatar
                      src={social.avatarImage}
                      alt={social.name}
                      className={classes.avatar}
                    />
                  </div>
                  <CardContent>
                    <Box textAlign="center">
                      <Box>
                        <Typography variant="body2" component="p">
                          {social.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          @{social.username}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default SocialsSection
