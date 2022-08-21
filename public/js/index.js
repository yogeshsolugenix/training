
function travel(where) {
    
    let btnId = ("btn"+where).trim();

    document.getElementById(btnId).classList.add("active");

    switch(where)
        {

            case 0:
            window.location.assign('/about.html');
            break;
            case 1:
            window.location.assign('/services.html');
            break;
            case 2:
            window.location.assign('/products.html');
            break;
            case 3:
            window.location.assign('/team.html');
            break;
            case 4:
            window.location.assign('/careers.html');
            break;
            case 5:
            window.location.assign('/contact.html');
            break;
            default:
            window.location.assign('/index.html');
        }
}
