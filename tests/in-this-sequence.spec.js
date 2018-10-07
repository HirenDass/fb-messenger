import sinon from 'sinon'
import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Context from 'react-context-component'
import * as actions from '../src/actions/thread'
import threadReducer from '../src/reducers/thread'
import indexReducer from '../src/reducers'
import { createStore } from '../src/redux/createStore'
import reducers from '../src/reducers'

configure({ adapter: new Adapter() })

describe("The action creator called receiveThread in src/actions/thread.js", () => {
  it("should return a JSON object with a key called 'type' and value RECEIVE_THREAD", () => {
    const action = actions.receiveThread()

    expect(action.type).not.toBe(undefined)
    expect(action.type).toBe('RECEIVE_THREAD')
  })
})

describe("The thread reducer in src/reducers/thread.js", () => {
  it("should return the current state if the switch doesn't match any case", () => {
    const state = threadReducer({ id: 1 }, { type: 'test' })

    expect(state).toEqual({ id: 1 })
  })

  it("should set the default state to null", () => {
    const state = threadReducer(undefined, { type: 'test' })

    expect(state).not.toEqual(undefined)
    expect(Object.prototype.toString.call(state)).toEqual('[object Null]')
  })

  it("should handle the action type called RECEIVE_THREAD and set the state of the reducer to the action.thread", () => {
    const state = threadReducer([], { type: 'RECEIVE_THREAD', thread: [2, 3] })

    expect(state).toEqual([2, 3])
  })
})

describe("The src/reducers/index.js", () => {
  it("should combine the thread reducer AND the ui reducer", () => {
    const received = indexReducer(undefined, { type: '@@redux/INIT' })

    expect(received).toEqual({ thread: null, ui: { isMessageDetailOpen: true } })
  })
})

describe("My simplified src/redux/createStore.js", () => {
  it("should return an object (the store) with a method called getState", () => {
    const store = createStore(reducers)

    expect(typeof store.getState).toBe('function')
  })

  it("should return an object (the store) with a method called dispatch", () => {
    const store = createStore(reducers)

    expect(typeof store.dispatch).toBe('function')
  })

  it("should return an object (the store) with a method called subscribe", () => {
    const store = createStore(reducers)

    expect(typeof store.subscribe).toBe('function')
  })

  it("the getState method should return a JSON object that represents the current state of the app", () => {
    const testReducer = (state = { hello: 'redux' }, action) => state
    const store = createStore(testReducer)
    const state = store.getState()

    expect(state.hello).toBe('redux')
  })

  it("the dispatch method should receive an action as a parameter", () => {
    const store = createStore(reducers)
    const myAction = { type: 'test' }
    sinon.spy(store, 'dispatch')

    store.dispatch(myAction)

    sinon.assert.calledWith(store.dispatch, myAction)
  })
})
