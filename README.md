# Installation
## Windows
### Installing the sound player
Download mplayer from https://sourceforge.net/projects/mplayerwin/ and add the directory to your system PATH
### Installing NodeJS
Download any version you want from https://nodejs.org/

# Setting up appointments to check
Rename `config.json.dist` to `config.json` and give your appointments a name, add the URL for each appointment and then specifiy a `bookedPhrase`, which is the phrase the bot should look for to determine if an appointment is fully booked. If the `bookedPhrase` does not appear on `URL` page, the bot assumes there is at least one available appointment.

# Installing dependencies
Open a command prompt and execute `npm install`

# Running the bot
Open a command prompt and execute `npm start`