# The Cindle Portal
>*Cindle Portal is currently in development*

The Cindle portal is a place where freelancers can easily collaborate, make tasks, maintain hours and share inspiration.

## Cindle Pages
Currently the Cindle portal is build from the following pages:

### Home
>*route: /home*

The homepage is an overview of things happening on the Cindle portal. It includes things like:
- new inspiration
- upcoming & new available tasks
- network updates
- etc

### Network
>*route: /network*

The network page is an overview of all the friends and colleagues in your Cindle network. It is the place to find:
- real time location of your team
- global activity of others
- profiles of others
- etc

### Tasks
>*route: /tasks*
>*mongo collections: Tasks, Activity*

This may be changed to 'projects' in the future, since that is a more encapsulating term. It now shows all currently available tasks on a timeline (D3 visualization). It allows you to create tasks and to update your activity (hours worked) on tasks. In the future adding deliverables should be added (upload with collectionFS or links to github?).

### Inspiration
>*route: /inspiration*
>*mongo collections: Inspiration, Posts*

This page is a place to share and review any inspiration uploaded by your network. Can be filtered on projects, persons, teams etc.


##  Account System
>*routes: /logout*

We are using useraccounts:materialize, useraccounts:iron-router in the Cindle portal. Every page is login protected (since it is not very likely to be using the Cindle portal without one.). 

## Dependencies
Cindle portal relies on the following dependencies (meteor packages).

- iron:router
- useraccounts:iron-router
- useraccounts:materialize
- materialize:materialize
- fourseven:scss
- accounts-password
- ejson