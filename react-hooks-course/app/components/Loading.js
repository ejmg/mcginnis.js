import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export default function Loading ({ text, speed }) {
  const id = React.useRef()
  const [content, setContent] = React.useState(text)

  const clear = () =>  window.clearInterval(id.current) 

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setContent((content) => content === text + "..." ? text : content + ".")
    }, speed)

    return clear
  }, [])

  return (
    <p style={styles.content}>
      {content}
    </p>
  )
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}
