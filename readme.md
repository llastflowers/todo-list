1) Fix the get route
    a) Spin up a Postgres
    b) Point .env to it (don't forget PGSSLMOSE=require)
    c) Run our db scripts (npm run steup-db)
    d) Add SQL query to client.query call (SELECT * FROM todos)

2) Add a fetch() call to our get route from the front end
    a) Add call to onRender of TodoApp
    b) Data is now on the front end. Put todos data in TodoList as props (update)

3) Data is not on the front end; render these To-Dos in a list
    a) In TodoList, we forEach this.props.todos, and make/append a new ListItem for each todo

4) Add to-dos
    a) Fix the post route (add some SQL query, `INSERT INTO todos (stuff, stuff) VALUES ($1, $2)`)
    b) Add fetch call to post route on submit. Send along the todo to the post route
    c) Render the new todo by passing new props to TodoList.update({ todos: allOfTheTodos }) --inside a callback (onAdd)
    d) How do we hold onto global state?

5) Remove ToDo -- add event listener to TodoItem on click, which calls this.props.onRemove.

-----------

_SERVER_

1) Add user table

2) Add user routes

_CLIENT_

1) Make login screen in homepage

2) Add form for log in and sign up

3) Add logic to redirect user if they have no token