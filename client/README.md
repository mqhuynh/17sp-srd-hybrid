# 17-sp-srd-hybrid
Client side.

## Installation Guide
* Download and install Node.js.
* Open a command prompt and `cd` into this directory.
* Then type `npm install -g cordova gulp ionic` to install Ionic and Cordova. This will take some time.
* Type `npm install`
* To setup for android, follow [these](https://codebabes.com/newb/setup-android-studio-windows) extra steps to download and install Android Studio and add. 
* Make sure that everything works fine, type `ionic serve`. After about a minute, a browser tab will pop up.
* To run on phone, type `ionic run ios` or `ionic run android` depending on your platform.
* To emulate, type `ionic emulate ios` or `ionic emulate android`.


## Running later
* `cd` into the directory
* To start the ionic on browser, type `ionic serve`. This will take some time.
* Open `client/src/config.ts` in any text editor and modify it however you like. You'll see those changes reload automatically in the browser.
* To deploy on the server, type `gulp build` (TO DO).

## Deployment
You should have run the project on your local machine at least once. After that, follow these instructions on your local machine:

* `cd client`
* First thing first. What you need to do is to copy your local `www` directory to the server.
* You can use `scp` like this: `scp -r www root@srdapp.com:/var/www/html/student-services/ionic-app`
* Or if you're on windows, use PuTTY: `pscp -r www root@srdapp.com:/var/www/html/student-services/ionic-app`
