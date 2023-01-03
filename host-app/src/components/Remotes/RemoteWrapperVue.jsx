import React from 'react'
import styles from '../../App.module.css'

const RemoteWrapperVue = ({ path, name }) => {
  const [fetching, setFetchiing] = React.useState(true)
  const containerRef = React.useRef(null)
  React.useEffect(() => {
    import('remote_vue/utils')
      .then((module) => {
        module.default.appWrapper(containerRef.current)
        setFetchiing(false)
      })
  }, [])

  return (<>
    <div className={styles.app} ref={containerRef}>
    </div>
    {fetching && <h1>Loading {name} ...</h1>}
    </>
  )
}

export default RemoteWrapperVue
  