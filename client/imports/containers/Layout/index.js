import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import Swipeable from 'react-swipeable'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Content from '../Content'
import InputAction from '../InputAction'
import LeftMenu from '../LeftMenu'
import utils from '/lib/utils'
import styleSheet from './index.style'

@withStyles(styleSheet)
@inject('layout')
@observer
export default class Layout extends Component {
  render () {
    const {classes, layout} = this.props
    return (
      <div
        className={classNames(classes.container, {
          [classes.oneColumn]: layout.oneColumn,
          [classes.twoColumn]: !layout.oneColumn,
          [classes.left]: layout.left,
          [classes.right]: !layout.left,
          [classes.smartphone]: utils.isSmartphone,
          [classes.smartphoneNot]: !utils.isSmartphone
        })}>
        <Swipeable
          onSwiping={this.onSwiping}
          onSwiped={this.onSwiped}>
          <LeftMenu />
          <Content />
        </Swipeable>
        <InputAction />
      </div>
    )
  }

  onSwiped (event, deltaX, deltaY) {
    event.preventDefault()
    if (deltaY < -80 || deltaY > 30) return
    if (deltaX < -20) {
      this.props.layout.setLeft()
    } else if (deltaX > 50) {
      this.props.layout.setMain()
    }
  }

  onSwiped = ::this.onSwiped
}
