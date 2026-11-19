
const bookingForm = document.getElementById("bookingForm");

const dateInput = document.getElementById("date");

// Keçmiş tarixlərin seçilməsinin qarşısını alırıq
const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;


// Form göndərildikdə
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;
    const note = document.getElementById("note").value.trim();

    const message = `
📸 ALORYA STUDIO - YENİ SİFARİŞ

👤 Ad və soyad: ${fullName}
📞 Əlaqə nömrəsi: ${phone}
📅 Çəkiliş günü: ${date}
🕒 Çəkiliş saatı: ${time}
📷 Çəkiliş növü: ${service}

📝 Əlavə qeyd: ${note || "Yoxdur"}
    `;

    const whatsappNumber = "994998310813";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});
