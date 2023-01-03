import React from 'react'
import styles from '../../App.module.css'

// TODO add one RemoteWrapper app and support dynamic impor using a path
const RemoteWrapperSolid = ({ path, name }) => {
  const [fetching, setFetchiing] = React.useState(true)
  const containerRef = React.useRef(null)
  React.useEffect(() => {
    import('remote_solid/utils')
      .then((module) => {
        module.default.appWrapper(containerRef.current)
        setFetchiing(false)
      })
  }, [])

  return (<>
    <div className={styles.app} ref={containerRef}>
      {fetching && <h1>Loading {name} ...</h1>}
    </div>
    </>
  )
}

export default RemoteWrapperSolid
  