import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import propTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Layout from '../../components/UI-Layout'
import Sheet from '../../components/UI-Sheet'
import SheetContent from '../../components/UI-SheetContent'
import styleSheet from './index.style'

@withStyles(styleSheet)
@inject('reports')
@observer
export default class Report extends Component {
  render () {
    const {classes} = this.props
    return (
      <Layout>
        <Sheet hover>
          <SheetContent>
            <Typography className={classes.number} type='display1'>
              {this.props.reports.index.total.users}
            </Typography>
          </SheetContent>
          <SheetContent>
            <Typography>ユーザ数</Typography>
          </SheetContent>
        </Sheet>
        <Sheet hover>
          <SheetContent>
            <Typography className={classes.number} type='display1'>
              {this.props.reports.index.total.posts}
            </Typography>
          </SheetContent>
          <SheetContent>
            <Typography>書き込み</Typography>
          </SheetContent>
        </Sheet>
        <Sheet hover>
          <SheetContent>
            <Typography className={classes.number} type='display1'>
              {this.props.reports.index.total.artworks}
            </Typography>
          </SheetContent>
          <SheetContent>
            <Typography>アートワーク</Typography>
          </SheetContent>
        </Sheet>
        {this.props.reports.index.user &&
        <Sheet hover>
          <SheetContent>
            <Typography className={classes.number} type='display1'>
              {this.props.reports.index.user.posts}
            </Typography>
          </SheetContent>
          <SheetContent>
            <Typography>あなたの書き込み</Typography>
          </SheetContent>
        </Sheet>}
        {this.props.reports.index.user &&
        <Sheet hover>
          <SheetContent>
            <Typography className={classes.number} type='display1'>
              {this.props.reports.index.user.artworks}
            </Typography>
          </SheetContent>
          <SheetContent>
            <Typography>あなたのアートワーク</Typography>
          </SheetContent>
        </Sheet>}
      </Layout>
    )
  }

  static get contextTypes () {
    return {onScrollTop: propTypes.any}
  }

  componentDidMount () {
    this.context.onScrollTop()
  }
}
