const disp = document.getElementById('clockDisplay');
const setAlarmButton = document.getElementById('setAlarmButton');
const alarmSettings = document.getElementById

let alarm = undefined;

const pad = (n) => {
	return ('00' + n).slice(-2)
}

const tick = () => {
	const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  disp.innerHTML = pad(h) + ':' + pad(m)
}

setInterval(tick, 1000);
