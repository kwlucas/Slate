var themes = ['light', 'dark', 'night']

function changeTheme(theme) {
    document.body.classList.add(`theme-${theme}`);
    themes.forEach(remove => {
        if (remove !== theme) {
            document.body.classList.remove(`theme-${remove}`);
        }
    });

}

window.addEventListener('load', function () {
    document.querySelector('#light-theme-btn').addEventListener('click', function () {
        changeTheme('light');
    });
    
    document.querySelector('#dark-theme-btn').addEventListener('click', function () {
        changeTheme('dark');
    });
    
    document.querySelector('#night-theme-btn').addEventListener('click', function () {
        changeTheme('night');
    });
});
