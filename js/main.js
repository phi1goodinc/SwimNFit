//form validation

const form = document.getElementById('form');
const usernameEl = document.querySelector('#name');
const phoneEl = document.querySelector('#phone');


const isRequired = value => value === '' ? false : true;

const isPhoneValid = (phone) => {
    const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return re.test(phone)
};

const showError = (input) => {
    input.classList.add('error');
};

const showSuccess = (input) => {
    input.classList.remove('error');
};

const checkUsername = () => {

    let valid = false;
    const username = usernameEl.value.trim();
    if (!isRequired(username)) {
        showError(usernameEl);
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};

const checkPhone = () => {
    let valid = false;
    const phone = phoneEl.value.trim();
    if (!isRequired(phone)) {
        showError(phoneEl);
    } else if (!isPhoneValid(phone)) {
        showError(phoneEl)
    } else {
        showSuccess(phoneEl);
        valid = true;
    }
    return valid;
};

form.addEventListener('input', function (event) {
    switch (event.target.id) {
        case 'name':
            checkUsername();
            break;
        case 'phone':
            checkPhone();
            break;
    }
});


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isPhoneValid = checkPhone();

    if (isUsernameValid && isPhoneValid) {

        function openSubmittedFormWindow () {
            const submittedWindow = document.querySelector('.form-submitted__window');
            submittedWindow.style.display = "flex"
        }

        async function submitForm() {
            form.submit();
            closeForm();
        }

        submitForm().then(closeForm).then(openSubmittedFormWindow)
    }
});


// form handler

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById('form').reset();
    document.getElementById("myForm").style.display = "none";
    showSuccess(usernameEl);
    showSuccess(phoneEl);
}

// form submitted window handler

(function () {
    const submittedWindow = document.querySelector('.form-submitted__window');
    const windowCloseItem = document.querySelector('.form-submitted__close');
    windowCloseItem.addEventListener('click', () => {
        submittedWindow.style.display = "none"
    });
}());


//smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


// burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_items-wrapper');
    const menuCloseItem = document.querySelector('.header_close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_items-wrapper_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_items-wrapper_active')
    });
    if (window.innerWidth < 780) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_items-wrapper_active');
            });
        }
    }
}());





