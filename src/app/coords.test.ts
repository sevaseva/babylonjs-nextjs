import { Vector3 } from "@babylonjs/core"
//import { v3 } from "./coords"
import { v3 } from "app/coords"
//import expect from "expect.js"
import { expect } from "chai"

var assert = require("assert")


describe(`${v3.name}` as string, () => {
  it(`returns correct Vector3 for left handed system with y axis up`, () => {
    assert.deepEqual(v3([0, 0, 1]), new Vector3(0, 1, 0))
    //expect(v3([0, 0, 1])).toEqual(new Vector3(0, 1, 0))
    expect(v3([0, 0, 1])).to.deep.equal(new Vector3(0, 1, 0))
  })
})
