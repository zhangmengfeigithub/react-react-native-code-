const createStore=(reducer)=> {
    var state;
    var listeners = [];
    var getState = () => state;
    var dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(l=>l());
    }
    var subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l != listener)
        }
    }
    dispatch();
    return {
        getState, dispatch, subscribe
    }
}
export {createStore}