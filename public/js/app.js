const logoBtn =
    document.getElementById("logoBtn");

logoBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const themeToggle =
    document.getElementById('themeToggle');

const themeIcon =
    document.getElementById('themeIcon');

function applyTheme(theme){

    if(theme === 'light'){

        document.body.classList.add(
            'light-mode'
        );

        themeIcon.textContent = '☀️';

    }else{

        document.body.classList.remove(
            'light-mode'
        );

        themeIcon.textContent = '🌙';
    }

    localStorage.setItem(
        'theme',
        theme
    );
}

applyTheme(
    localStorage.getItem('theme')
    || 'dark'
);

themeToggle.addEventListener(
    'click',
    () => {

        const nextTheme =
            document.body.classList.contains(
                'light-mode'
            )
            ? 'dark'
            : 'light';

        applyTheme(nextTheme);

    }
);

const menuBtn =
    document.getElementById('menuBtn');

const mobileMenu =
    document.getElementById('mobileMenu');

menuBtn.addEventListener(
    'click',
    () => {

        mobileMenu.classList.toggle(
            'active'
        );

        menuBtn.innerHTML =
            mobileMenu.classList.contains(
                'active'
            )
            ? '✕'
            : '☰';

    }
);
