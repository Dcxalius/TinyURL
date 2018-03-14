# TinyURl Generator

TinyURL Generator uses Meteorjs on the front and the back end with MongoDB.
It shortens your Url address into 6 alphanumric charecters and save then into you MongoDB collection
You can route back to the original Url by simply adding the TinyUrl to the the path name.

Notice that TinyURL Generator app also sets a user id in the local storage, so every new user will have access only to their own
records


Meteor is an ultra-simple environment for building modern web
applications.

With Meteor you write apps:

* in modern JavaScript
* that send data over the wire, rather than HTML
* using your choice of popular open-source libraries


## Getting Started
First you need to install Meteor on your machiene

On Windows, the installer can be found at https://www.meteor.com/install.

On Linux/macOS, use this line:

```bash
curl https://install.meteor.com/ | sh
```

Opening your terminal and nivigating to a chosed directory, type:

```bash
git clone https://github.com/ticooo95/TinyURL.git
```
Then

```bash
cd TinyUrl
```

run npm install, to install any missing dependencies

```bash
npm install
```

Then run

```bash
meteor
```

You will be listening to localhost:3000

## TESTS
No test are added so far


## Built With

* [blazejs](http://blazejs.org/) - The web framework used
