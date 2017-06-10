import React, { Component } from 'react'
import classNames from 'classnames'
import { createStyleSheet, withStyles } from 'material-ui/styles'

const styleSheet = createStyleSheet('UIBlock', theme => {
  return {
    container: {
      display: 'block',
      width: '100%',
      maxWidth: '600px',
      borderBottom: 'none',
      transitionDuration: '200ms'
    },
    center: {
      margin: '0 auto'
    }
  }
})

@withStyles(styleSheet)
export default class UILayout extends Component {
  render () {
    const {
      classes,
      href,
      center,
      align = 'left',
      width,
      ...more
    } = this.props
    const Component = href ? 'a' : 'div'
    return (
      <Component
        {...more}
        className={classNames(classes.container, {
          [classes.center]: center
        })}
        href={href}>
        <div style={{
          margin: this.margin(align),
          maxWidth: width ? (width + 'px') : '600px'
        }}>
          {this.props.children}
        </div>
      </Component>
    )
  }

  margin (align) {
    switch (align) {
      case 'left':
        return '0 auto 0 0'
      case 'center':
        return '0 auto'
    }
  }
}
