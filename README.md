# trader-desktop-angular2
Trader desktop app written in angular2 and typescript.

Important notes: 
* Angular 2 is still in alpha and subject to change. This is a demo app only. 
* I intend to keep it up to date as soon as a new version of angular is released. 
* This app is derived from https://github.com/archfirst/trader-desktop.git. Please refer 
  to the given link for details on domain model and the server.
* The idea is use as many angular modules as possible. So far the following modules/features have been use
  - Router
  - Change detection using observables
  - Http (Including custom backend)
  - Pipes
  - Annotations (Component, View)
  - Shadow Dom
  - Data Binding
* This is still a work in progress. Styles and some of the functionality is still pending.

Instructions:

Install these globally. "use 'sudo' if you don't have admin rights on your machine"
```
sudo npm install -g jspm
sudo npm install -g gulp
sudo npm install -g bower
git config --global url."https://".insteadOf git://
```

Run the following commands to install these locally. 
```
git clone https://github.com/vikasgoyalgzs/trader-desktop-angular2.git
cd trader-desktop-angular2
npm install && jspm install && gulp install && bower install
```

After the install, you can start the watchers by running only the command given below.
You may see some semantic errors. Please ignore them for now.

```
gulp
```

In a new terminal window, run the following command to start the server
```
npm start
```

In a browser window, go to 
```
http://localhost:8080
```
