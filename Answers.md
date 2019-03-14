1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    - .map() .filter() .concat()
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - The store is what holds the current state and it gets changed by the reducers which are triggered by actions
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state is the store state and component state is one that is local to that component. It is good to use component state to manage text input fields 
4.  What is middleware?
    - It is what manages login and auth in applications 
5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - it allows a sync calls to allow us to display a loading state while the api call is in progress
6.  Which `react-redux` method links up our `components` with our `redux store`?
    - connect(store, {actions})(component)