window.onload = function() {
    var dateTimeInput = document.getElementById('localRetirada');
    var dateTimeInput = document.getElementById('dataRetirada');
    var dateTimeInput = document.getElementById('HoraRetirada');
    var dateTimeInput = document.getElementById('localDevolucao');
    var dateTimeInput = document.getElementById('dataDevolucao');
    var dateTimeInput = document.getElementById('HoraDevolucao');

    function roundToNextHour(date) {
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        date.setHours(date.getHours() + 1);
        return date;
    }

    var roundedDate = roundToNextHour(new Date());

    function updateMinHour() {
        roundedDate = roundToNextHour(new Date());
        dateTimeInput.min = roundedDate.toISOString().slice(0, -8);
    }

    setInterval(updateMinHour, 3600000);
};
