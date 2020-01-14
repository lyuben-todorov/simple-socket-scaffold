Read every comment. This project is a simple scaffold for a socket-based game without any external libraries other than express for the server and of course the ws implementation. It
makes a few assumptions about our architecture and these are clearly explained in the comments. Nodemon is added to the dev dependencies for ease of life but if you run into
any problems with it change `"start": "nodemon server.js"`, to `"start": "node server.js"` in the package.json.
Simply clone/download this repo, `npm install` and `npm start` to run.
