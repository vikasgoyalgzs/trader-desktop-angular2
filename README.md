# trader-desktop-angular2
Trader desktop app written in angular2 and typescript.

Important notes: 
* Angular 2 is still in alpha and subject to change. This is a demo app only. 
* I intend to keep it up to date as soon as a new version of angular is release. 
* This app is derived from https://github.com/archfirst/trader-desktop.git. Please refer 
  to the given link for details on domain model and the server.
* This is still work in progress. Styles and some of the functionality is still pending

Instructions:

Install these globally. "sudo only if you are on a mac/linux system"
```
sudo npm install -g jspm
sudo npm install -g gulp

Install these locally. The last command 'gulp install' compiles typescript files into 
javascript files and starts the watcher for typescript and compass.
```
git clone https://github.com/vikasgoyalgzs/trader-desktop-angular2.git
cd trader-desktop-angular2
npm install
jspm install
gulp install
```
On a new terminal window, run the following command to start the server
```
npm start
```

In a browser window, go to 
```
http://localhost:8080
```
