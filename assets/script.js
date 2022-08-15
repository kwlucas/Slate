var themes = ['light', 'dark', 'night']

function changeTheme(theme) {
    document.body.classList.add(`theme-${theme}`);
    themes.forEach(remove => {
        if (remove !== theme) {
            document.body.classList.remove(`theme-${remove}`);
        }
    });

}

function toggleList(event){
    let togBtn = event.target;
    togBtn.classList.toggle('selected');
    let sibling = togBtn.nextSibling;
    while(sibling && sibling.nodeType != 1) {
        sibling = sibling.nextSibling;
    }
    sibling.classList.toggle('hidden');
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
    document.querySelectorAll('.toggle-list').forEach(element => {
        element.addEventListener('click', toggleList);
    });
    
});
