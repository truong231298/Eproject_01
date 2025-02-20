let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}
/*login form change */
let loginForm = document.querySelector('#login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.add('active');
}
document.querySelector('#close-login').onclick = () => {
    loginForm.classList.remove('active');
}

/*sigup change*/
let signupForm = document.querySelector('#signup-form');

document.querySelector('#linksignup').onclick = () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
}
document.querySelector('#close-signup').onclick = () => {
    signupForm.classList.remove('active');
}

/*return login*/
document.querySelector('#linksignin').onclick = () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
}
/*sign up data post*/
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);

    fetch('https://658e79a92871a9866e793ab1.mockapi.io/access', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: data
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something with the new task
        console.log(data)
    }).catch(error => {
        // handle error
        console.log(error)
    })
});



window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 3,

        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 3,

        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 4,

        },
    },
});