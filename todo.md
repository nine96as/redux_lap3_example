# Redux Todos

## Install redux dependencies

- [ x ] Install redux, react-redux & @redux-devtools/extension
- [ x ] Wrap React app in Provider

## Decide what data we will keep in our global store

- [ x ] Make an initial global state
- [ x ] Add 'loading' and 'doggos' with some fake data

## Make a reducer function

- [ x ] Just a basic one for now! Always returns the state it receives

## Create your store

- [ x ] Use `redux`'s `createStore` and pass it your reducer

## Connect a component to the store

- [ x ] Import `useSelector` from `react-redux` into App and Doggos components
- [ x ] Use it to access loading from the store
- [ x ] Use it to access dogs from the store

## Define an action

- [ ] Choose a sensible phrase describing what the action does eg. 'LOAD_DOGGOS' or 'LOADING'
- [ ] Tell the reducer what to do if it receives that action
- [ ] Have the reducer return a new state no matter what action it received

## Dispatch actions to the reducer manually

- [ ] Add redux devtools extension to your store
- [ ] Use devtools to manually dispatch actions

## Dispatch actions to the reducer from your componont

- [ ] Import `useDispatch` from `react-redux` into Doggos component
- [ ] Use it to dispatch an action to the reducer

## Extend functionality

- [ ] Add ability to dispatch actions to like a dog and delete a dog
- [ ] Make action creator functions to clean up components

## Add an API call

- [ ] Make a fetchDoggos action creator that makes a fetch request to the Dog API for 9 random images
  - [ ] `https://dog.ceo/api/breeds/image/random/9`
- The action creator should dispatch an action to the reducer with a payload of all the dogs it got from the API
- [ ] Try and hook it up, note any errors
- [ ] Install `redux-thunk` and apply as middleware
- [ ] Bask in the glory of error free redux flow!

## Add testing

- [ ] Reducer
- [ ] Action creators
- [ ] Components that access the store
