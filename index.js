const axios = require("axios");
const player = require("play-sound")(opts = {});
const config = require("./config.json");

let alerted = false;

async function playAlert() {
	player.play("alert.mp3", (err) => {
		if (err) {
			throw err;
		}
	});
}

async function checkAppointments() {
	for (const appointment of config.appointments) {
		try {
			const { data } = await axios.get(appointment.URL);

			if (data.toLowerCase().includes(appointment.bookedPhrase.toLowerCase())) {
				console.log(`${appointment.name} (URL: ${appointment.URL}) is fully booked`);
			} else {
				console.log(`${appointment.name} (URL: ${appointment.URL}) has at least one available appointment`);

				if (!alerted) {
					playAlert();
				}
				
				alerted = true;
			}
		} catch (error) {
			console.error(error);
		}
	}

	alerted = false;
}

console.log(`Beginning to check ${config.appointments.length} appointments...`);
setInterval(checkAppointments, 5 * 1000);
