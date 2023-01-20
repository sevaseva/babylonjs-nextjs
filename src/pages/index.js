import Head from "next/head"
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Load SceneView component only on the client side.
const SceneView = dynamic(() => import(`app/SceneView`), { ssr: false })

export default function HomePage(props) {
  const [loaded, setLoaded] = useState(false)

  // Execute setLoaded(true) on the client side immediately after
  // HomePage() is rendered. This will change the state and trigger
  // re-render of HomePage().

  // We want the immediate re-rendering to happen because
  // 1) first time (back when `loaded === false` was true) when we render
  // we ddon't render SceneView component at all
  // (see `loaded && ...` line below) and so the page *renders completely*
  // (and, hopefully, on the server) except with no Babylon.js scene/stuff
  // on it (crawlers, bots, page speed analysers will love that!).
  // 2) rendering it for the second time immediately after, we will actually
  // render SceneView component, and so SceneView.render() will add the
  // canvas node to the DOM tree and SceneView.componentDidMount() will
  // execute all our Babylon {engine, scene, cameras, light, etc} setup on
  // the client side immediately after the component (canvas element)
  // is mounted to the DOM.
  useEffect(() => setLoaded(true))
  return (
    <>
      <Head>
        <title>Babylon + Next.js Setup Successful!</title>
      </Head>
      {loaded && <SceneView {...props} />}
    </>
  )
}
