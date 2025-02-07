import React, { PureComponent } from "react"
import {
  ArcRotateCamera,
  MeshBuilder,
  Scene,
  Engine,
  HemisphericLight,
  StandardMaterial,
  Texture,
  Vector3
} from "@babylonjs/core"

/**
 * Babylon 3D Scene.
 */
export default class BabylonScene extends PureComponent {
  componentDidMount() {
    this.setup(this.canvas)
  }

  setup = (canvas) => {
    const engine = this.createEngine(canvas)
    const scene = new Scene(engine)
    const camera = new ArcRotateCamera("Camera", -Math.PI / 3, Math.PI / 3, 10, Vector3.Zero(), scene)
    camera.attachControl()
    camera.radius = 3
    const light = new HemisphericLight("Light", new Vector3(0.33, 1, -0.67), scene)
    light.intensity = 0.9
    const texture = new Texture(`/images/texture.png`, scene)
    const mat = new StandardMaterial("Material", scene)
    mat.diffuseTexture = texture
    const box = new MeshBuilder.CreateBox("box", { size: 1 }, scene)
    box.material = mat
    engine.runRenderLoop(engine.renderLoop)
  }

  createEngine = (canvas) => {
    const engine = new Engine(canvas)
    engine.renderLoop = () =>
      engine.scenes.forEach((scene) => {
        if (scene.activeCamera) scene.render()
      })
    return engine
  }

  id = "Babylon"

  onMount = (canvas) => (this.canvas = canvas)

  render() {
    return (
      <>
        <canvas id={this.id} ref={this.onMount} style={style} />
      </>
    )
  }
}

const style = { width: "100%", height: "100%" }
