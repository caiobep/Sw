import { createStyleSheet } from 'material-ui/styles'

export default createStyleSheet('LeftMenu', theme => {
  return {
    container: {
      position: 'absolute',
      top: 0,
      right: '-5%',
      paddingTop: '20px',
      paddingLeft: '10px',
      paddingRight: 'calc(105% - 240px)',
      width: 'calc(105%)',
      height: '100%',
      transition: 'width 300ms',
      overflowY: 'scroll',
      overflowX: 'hidden',
      boxSizing: 'border-box',
      '-webkit-overflow-scrolling': 'touch'
    },
    oneColumn: {
      width: '105%',
      paddingRight: '55%',
      paddingLeft: 0
    }
  }
})
