# trader-desktop-angular2
Trader desktop app written in angular2 and typescript.

Important notes: 
* Angular 2 is still in alpha and subject to change. This is a demo app only. 
* I intend to keep it up to date as soon as a new version of angular is released. 
* This app is derived from https://github.com/archfirst/trader-desktop.git. Please refer 
  to the given link for details on domain model and the server.
* This is still a work in progress. Styles and some of the functionality is still pending.

Instructions:

Install these globally. "use 'sudo' if you don't have admin rights on your machine"
```
sudo npm install -g jspm
sudo npm install -g gulp
```

Install these locally. The last command 'gulp' compiles typescript files into 
javascript files and starts the watcher for typescript and compass.
You may see some semantic errors. Please ignore them for now.
```
git clone https://github.com/vikasgoyalgzs/trader-desktop-angular2.git
cd trader-desktop-angular2
npm install && jspm install && gulp install && gulp
```
In a new terminal window, run the following command to start the server
```
npm start
```

After the install, you can start the watchers by running only the command given below.
```
gulp
```

In a browser window, go to 
```
http://localhost:8080
```
