const schedule = {
    "10-A": {
        "Dushanba": [
            { subject: "Jismoniy tarbiya", time: "08:30 - 09:15" },
            { subject: "Geometriya", time: "09:20 - 10:05" },
            { subject: "Fizika", time: "10:10 - 10:55" },
            { subject: "O'zbekiston tarixi", time: "11:00 - 11:45" },
            { subject: "Algebra", time: "12:15 - 13:00" },
            { subject: "Ingliz tili", time: "13:05 - 13:50" },
            { subject: "Ona tili", time: "13:55 - 14:40" },
],
"Seshanba": [
            { subject: "Geometriya", time: "08:30 - 09:15" },
            { subject: "Algebra", time: "09:20 - 10:05" },
            { subject: "Informatika", time: "10:10 - 10:55" },
            { subject: "Ona tili", time: "11:00 - 11:45" },
            { subject: "Ingliz tili", time: "12:15 - 13:00" },
            { subject: "Fizika", time: "13:05 - 13:50" },           
],
"Chorshanba": [
            { subject: "Tarbiya", time: "08:30 - 09:15" },
            { subject: "Ingliz tili", time: "09:20 - 10:05" },
            { subject: "Algebra", time: "10:10 - 10:55" },
            { subject: "Shaxmat", time: "11:00 - 11:45" },
            { subject: "Fizika", time: "12:15 - 13:00" },
            { subject: "Rus tili", time: "13:05 - 13:50" },      
],
"Payshanba": [
            { subject: "Rus tili", time: "08:30 - 09:15" },
            { subject: "Fizika", time: "09:20 - 10:05" },
            { subject: "Adabiyot", time: "10:10 - 10:55" },
            { subject: "O'zbekiston tarixi", time: "11:00 - 11:45" },
            { subject: "CHQBT", time: "12:15 - 13:00" },
            { subject: "Ingliz tili", time: "13:05 - 13:50" },
            { subject: "Informatika", time: "13:55 - 14:40" },
],
"Juma": [
            { subject: "Ingliz tili", time: "08:30 - 09:15" },
            { subject: "Algebra", time: "09:20 - 10:05" },
            { subject: "Adabiyot", time: "10:10 - 10:55" },
            { subject: "Fizika", time: "11:00 - 11:45" },
            { subject: "Jahon tarixi", time: "12:15 - 13:00" },
            { subject: "Geometriya", time: "13:05 - 13:50" },
            { subject: "Jismoniy tarbiya", time: "13:55 - 14:40" },
],
    },
};

document.getElementById("showSchedule").addEventListener("click", function () {
    const selectedClass = document.getElementById("classSelect").value;
    const selectedDay = document.getElementById("daySelect").value;

    const resultDiv = document.getElementById("result");
    const scheduleInfo = document.getElementById("scheduleInfo");

    if (!selectedClass || !selectedDay) {
        scheduleInfo.textContent = "Iltimos, sinf va kunni tanlang!";
        resultDiv.classList.remove("hidden");
        return;
    }

    if (schedule[selectedClass] && schedule[selectedClass][selectedDay]) {
        const daySchedule = schedule[selectedClass][selectedDay];
        let scheduleContent = `<div class="schedule">`;

        daySchedule.forEach(item => {
            scheduleContent += `
                <div class="schedule-item">
                    <span>${item.subject}:</span> ${item.time}
                </div>
            `;
        });

        scheduleContent += `</div>`;
        scheduleInfo.innerHTML = scheduleContent;
    } else {
        scheduleInfo.textContent = "Xatolik yuz berdi, bu sinf mavjud emas yoki dars jadvali hali yuklanmagan!";
    }

    resultDiv.classList.remove("hidden");
});