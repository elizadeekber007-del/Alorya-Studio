
// /* =========================
//    01. MOBILE MENU
// ========================= */

// const menuBtn = document.getElementById("menuBtn");
// const navbar = document.getElementById("navbar");

// menuBtn.addEventListener("click", () => {
//     navbar.classList.toggle("active");
// });

// document.querySelectorAll(".navbar a").forEach(link => {
//     link.addEventListener("click", () => {
//         navbar.classList.remove("active");
//     });
// });


// /* =========================
//    02. PORTFOLIO DATA
// ========================= */


// const portfolioData = [

//     // AD GÜNÜ — 4 ŞƏKİL
//     {
//         id: 1,
//         title: "Birthday Moments",
//         category: "birthday",
//         image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=85"
//     },
//     {
//         id: 2,
//         title: "Golden Celebration",
//         category: "birthday",
//         image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1000&q=85"
//     },
//     {
//         id: 3,
//         title: "Special Day",
//         category: "birthday",
//         image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1000&q=85"
//     },
//     {
//         id: 4,
//         title: "Birthday Party",
//         category: "birthday",
//         image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1000&q=85"
//     },

//     // NIŞAN — 4 ŞƏKİL
//     {
//         id: 5,
//         title: "Love Story",
//         category: "engagement",
//         image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85"
//     },
//     {
//         id: 6,
//         title: "Forever Together",
//         category: "engagement",
//         image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1000&q=85"
//     },
//     {
//         id: 7,
//         title: "Beautiful Moments",
//         category: "engagement",
//         image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&q=85"
//     },
//     {
//         id: 8,
//         title: "Our Story",
//         category: "engagement",
//         image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000&q=85"
//     },

//     // AİLƏ — 4 ŞƏKİL
//     {
//         id: 9,
//         title: "Family Love",
//         category: "family",
//         image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&q=85"
//     },
//     {
//         id: 10,
//         title: "Together Forever",
//         category: "family",
//         image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000&q=85"
//     },
//     {
//         id: 11,
//         title: "Happy Moments",
//         category: "family",
//         image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1000&q=85"
//     },
//     {
//         id: 12,
//         title: "Family Memories",
//         category: "family",
//         image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&q=85"
//     },

//     // VINETKA — 4 ŞƏKİL
//     // {
//     //     id: 13,
//     //     title: "New Beginnings",
//     //     category: "graduation",
//     //     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=85"
//     // },
//     {
//         id: 14,
//         title: "Graduation Day",
//         category: "graduation",
//         image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=85"
//     },
//     // {
//     //     id: 15,
//     //     title: "The Best Memories",
//     //     category: "graduation",
//     //     image: "https://images.unsplash.com/photo-1523580494863-6c6f3c6e9aab?w=1000&q=85"
//     // },
//     {
//         id: 16,
//         title: "Our Last Year",
//         category: "graduation",
//         image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000&q=85"
//     }

// ];


// /* =========================
//    03. GALLERY ELEMENTS
// ========================= */

// const gallery = document.getElementById("gallery");

// const filterButtons = document.querySelectorAll(".filter-btn");

// let currentImages = [...portfolioData];

// let currentIndex = 0;


// /* =========================
//    04. RENDER GALLERY
// ========================= */


// function renderGallery(images) {

//     const gallery = document.getElementById("gallery");

//     gallery.innerHTML = "";

//     gallery.dataset.category = images.length === portfolioData.length
//         ? "all"
//         : images[0]?.category || "all";

//     images.forEach((item, index) => {

//         const card = document.createElement("article");

//         card.className = `gallery-item ${index === 0 ? "tall" : ""}`;

//         card.dataset.id = item.id;

//         card.innerHTML = `

//             <img
//                 src="${item.image}"
//                 alt="${item.title}"
//                 loading="lazy"
//             >

//             <div class="gallery-info">

//                 <span>
//                     ${String(index + 1).padStart(2, "0")}
//                     / ${item.category.toUpperCase()}
//                 </span>

//                 <h3>${item.title}</h3>

//             </div>

//         `;

//         card.addEventListener("click", () => {
//             openLightbox(item.id);
//         });

//         gallery.appendChild(card);

//     });

// }

// renderGallery(portfolioData);


// /* =========================
//    05. FILTER SYSTEM
// ========================= */

// filterButtons.forEach(button => {

//     button.addEventListener("click", () => {

//         filterButtons.forEach(btn => {
//             btn.classList.remove("active");
//         });

//         button.classList.add("active");

//         const selectedCategory = button.dataset.filter;

//         if (selectedCategory === "all") {

//             currentImages = [...portfolioData];

//         } else {

//             currentImages = portfolioData.filter(item => {
//                 return item.category === selectedCategory;
//             });

//         }

//         renderGallery(currentImages);

//     });

// });


// /* =========================
//    06. LIGHTBOX ELEMENTS
// ========================= */

// const lightbox = document.getElementById("lightbox");

// const lightboxImage = document.getElementById("lightboxImage");

// const lightboxTitle = document.getElementById("lightboxTitle");

// const lightboxCounter = document.getElementById("lightboxCounter");

// const lightboxClose = document.getElementById("lightboxClose");

// const lightboxPrev = document.getElementById("lightboxPrev");

// const lightboxNext = document.getElementById("lightboxNext");


// /* =========================
//    07. OPEN LIGHTBOX
// ========================= */

// function openLightbox(id) {

//     currentIndex = currentImages.findIndex(item => {
//         return item.id === id;
//     });

//     if (currentIndex === -1) return;

//     showLightboxImage();

//     lightbox.classList.add("active");

//     document.body.style.overflow = "hidden";

// }


// /* =========================
//    08. SHOW IMAGE
// ========================= */

// function showLightboxImage() {

//     const item = currentImages[currentIndex];

//     lightboxImage.src = item.image;

//     lightboxImage.alt = item.title;

//     lightboxTitle.textContent = item.title;

//     lightboxCounter.textContent =
//         `${currentIndex + 1} / ${currentImages.length}`;

// }


// /* =========================
//    09. NEXT IMAGE
// ========================= */

// function nextImage() {

//     currentIndex++;

//     if (currentIndex >= currentImages.length) {
//         currentIndex = 0;
//     }

//     showLightboxImage();

// }


// /* =========================
//    10. PREVIOUS IMAGE
// ========================= */

// function previousImage() {

//     currentIndex--;

//     if (currentIndex < 0) {
//         currentIndex = currentImages.length - 1;
//     }

//     showLightboxImage();

// }


// lightboxNext.addEventListener("click", nextImage);

// lightboxPrev.addEventListener("click", previousImage);


// /* =========================
//    11. CLOSE LIGHTBOX
// ========================= */

// function closeLightbox() {

//     lightbox.classList.remove("active");

//     document.body.style.overflow = "";

// }

// lightboxClose.addEventListener("click", closeLightbox);

// lightbox.addEventListener("click", event => {

//     if (event.target === lightbox) {
//         closeLightbox();
//     }

// });


// /* =========================
//    12. KEYBOARD CONTROLS
// ========================= */

// document.addEventListener("keydown", event => {

//     if (!lightbox.classList.contains("active")) return;

//     if (event.key === "Escape") {
//         closeLightbox();
//     }

//     if (event.key === "ArrowRight") {
//         nextImage();
//     }

//     if (event.key === "ArrowLeft") {
//         previousImage();
//     }

// });


// /* =========================
//    13. FOOTER YEAR
// ========================= */

// document.getElementById("year").textContent =
//     new Date().getFullYear();


// console.log("ALORYA PORTFOLIO SYSTEM READY!");



// // CAMERA INTRO ANIMATION

// window.addEventListener("load", () => {
//     const intro = document.getElementById("introAnimation");

//     if (!intro) return;

//     setTimeout(() => {
//         intro.classList.add("hide-intro");

//         setTimeout(() => {
//             intro.remove();
//         }, 900);

//     }, 2500);
// });





/* =========================
   01. MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}


/* =========================
   02. PORTFOLIO DATA
========================= */

const portfolioData = [

    // AD GÜNÜ
    {
        id: 1,
        title: "Birthday Moments",
        category: "birthday",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=85"
    },
    {
        id: 2,
        title: "Golden Celebration",
        category: "birthday",
        image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1000&q=85"
    },
    {
        id: 3,
        title: "Special Day",
        category: "birthday",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1000&q=85"
    },
    {
        id: 4,
        title: "Birthday Party",
        category: "birthday",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1000&q=85"
    },

    // NIŞAN
    {
        id: 5,
        title: "Love Story",
        category: "engagement",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=85"
    },
    {
        id: 6,
        title: "Forever Together",
        category: "engagement",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1000&q=85"
    },
    {
        id: 7,
        title: "Beautiful Moments",
        category: "engagement",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&q=85"
    },
    {
        id: 8,
        title: "Our Story",
        category: "engagement",
        image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000&q=85"
    },

    // AİLƏ
    {
        id: 9,
        title: "Family Love",
        category: "family",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&q=85"
    },
    {
        id: 10,
        title: "Together Forever",
        category: "family",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000&q=85"
    },
    {
        id: 11,
        title: "Happy Moments",
        category: "family",
        image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1000&q=85"
    },
    {
        id: 12,
        title: "Family Memories",
        category: "family",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&q=85"
    },

    // VINETKA
    {
        id: 14,
        title: "Graduation Day",
        category: "graduation",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=85"
    },
    {
        id: 16,
        title: "Our Last Year",
        category: "graduation",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000&q=85"
    }

];


/* =========================
   03. PORTFOLIO SYSTEM
========================= */

const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentImages = [...portfolioData];
let currentIndex = 0;


/* =========================
   04. LIGHTBOX ELEMENTS
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");


/* =========================
   05. RENDER GALLERY
========================= */

function renderGallery(images) {

    if (!gallery) return;

    gallery.innerHTML = "";

    images.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "gallery-item";
        card.dataset.id = item.id;

        card.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.title}"
                loading="lazy"
            >

            <div class="gallery-info">
                <span>
                    ${String(index + 1).padStart(2, "0")}
                    / ${item.category.toUpperCase()}
                </span>

                <h3>${item.title}</h3>
            </div>
        `;

        card.addEventListener("click", () => {
            openLightbox(item.id);
        });

        gallery.appendChild(card);

    });

}


/* =========================
   06. FILTER SYSTEM
========================= */

if (gallery) {

    renderGallery(portfolioData);

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const selectedCategory = button.dataset.filter;

            currentImages = selectedCategory === "all"
                ? [...portfolioData]
                : portfolioData.filter(item =>
                    item.category === selectedCategory
                );

            renderGallery(currentImages);

        });

    });

}


/* =========================
   07. OPEN LIGHTBOX
========================= */

function openLightbox(id) {

    if (!lightbox) return;

    currentIndex = currentImages.findIndex(item =>
        item.id === id
    );

    if (currentIndex === -1) return;

    showLightboxImage();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================
   08. SHOW IMAGE
========================= */

function showLightboxImage() {

    if (!lightboxImage || !lightboxTitle || !lightboxCounter) {
        return;
    }

    const item = currentImages[currentIndex];

    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;

    lightboxTitle.textContent = item.title;

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;

}


/* =========================
   09. NEXT IMAGE
========================= */

function nextImage() {

    if (!currentImages.length) return;

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    showLightboxImage();

}


/* =========================
   10. PREVIOUS IMAGE
========================= */

function previousImage() {

    if (!currentImages.length) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    showLightboxImage();

}


/* =========================
   11. LIGHTBOX CONTROLS
========================= */

if (lightboxNext) {
    lightboxNext.addEventListener("click", nextImage);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener("click", previousImage);
}

function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");
    document.body.style.overflow = "";

}

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

}


/* =========================
   12. KEYBOARD CONTROLS
========================= */

document.addEventListener("keydown", event => {

    if (!lightbox || !lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") closeLightbox();

    if (event.key === "ArrowRight") nextImage();

    if (event.key === "ArrowLeft") previousImage();

});


/* =========================
   13. FOOTER YEAR
========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================
   14. CAMERA INTRO
========================= */

window.addEventListener("load", () => {

    const intro = document.getElementById("introAnimation");

    if (!intro) return;

    setTimeout(() => {

        intro.classList.add("hide-intro");

        setTimeout(() => {
            intro.remove();
        }, 900);

    }, 2500);

});

