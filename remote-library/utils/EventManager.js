// TODO: how to have private methods without static
export default class {
    static _events =  new Map()
    static subscribe(name, fn) {
      if (!name || typeof fn !== 'function') {
        throw 'name and a function is required'
      }
      const currentEventsByName = this._events.get(name) ?? new Set()
      currentEventsByName.add(fn)
      this._events.set(name,currentEventsByName)
      return this._unsubscribe(name, fn)
    }
  
    static _unsubscribe (name, fn) {
      return () => {
        const newEventsByName = this._events.get(name)
        if (newEventsByName) {
          const reference = newEventsByName.has(fn)
          if (reference) {
            newEventsByName.delete(fn)
          }
        }
      }
    }
  
    static emit (name, payload) {
      const currentEventsByName = this._events.get(name)
      if (currentEventsByName) {
        currentEventsByName.forEach(event => {
          event(payload)
        })
      }
    }
  }