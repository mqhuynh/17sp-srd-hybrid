# 17-sp-srd-hybrid
Client side.

Modify `src/config.ts` for custom configuration.

## For the first time
You need to get this code from GitHub to your laptop (MUST BE Mac or Linux or \*nix friendly.). Then `cd` into any directory you want into your system (preferably Desktop). Then type:

`git clone https://github.com/mqhuynh/17sp-srd-hybrid.git`

After some time, you'll see that there is a directory named `17sp-srd-hybrid` on your current directory. Now follow the Installation Guide below.

## Installation Guide
* Download and install Node.js.
* Open a command prompt and `cd` into `client`.
* Then type `npm install -g cordova gulp ionic` to install Ionic and Cordova. This will take some time.


* Type `npm install`(need to do this after each gitclone)
* To setup for android, follow [these](https://codebabes.com/newb/setup-android-studio-windows) extra steps to download and install Android Studio and add Android SDK to `$PATH`. (MH: Not need to do this)

* To make sure that everything works fine, type `ionic serve`. After about a minute, a browser tab will pop up. (This means it works fine on the browser)

* To run on phone, type `ionic run ios` or `ionic run android` depending on your platform. (Not yet complete)
* To emulate, type `ionic emulate ios` or `ionic emulate android`. (Not yet, run very slow)

## Pulling updates from GitHub (use when codes are modified and uploaded on Github)
* First of all, you need to realize that you'll lose ALL your local changes.
* Then open terminal and `cd` into project directory.
* Type `git stash` followed by `git pull origin master`.

## Running later  (Applied mainly when `config.ts` is modified or turn on the local machine)
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

(What this does is to copy the www folder from client to the server.  To make another app, create a foler and then copy wwww and then modify config.ts.  Also, need to set up the database and the tables)

## Tips:
To create another directory, 
`cp dir1 dir2 -r`
`
