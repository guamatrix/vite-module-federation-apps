import React from 'react'
import styles from '../../App.module.css'

const RemoteWrapper = ({ path, name }) => {
  const [fetching, setFetchiing] = React.useState(true)
  const containerRef = React.useRef(null)
  React.useEffect(() => {
    import('remote_svelte/utils')
      .then((module) => {
        module.default.appWrapper(containerRef.current)
        setFetchiing(false)
      })
  }, [])

  return (
    <div className={styles.app} ref={containerRef}>
      {fetching && <h1>Loading {name} ...</h1>}
    </div>
  )
}

export default RemoteWrapper
  