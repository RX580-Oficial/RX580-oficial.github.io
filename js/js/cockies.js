document.addEventListener('DOMContentLoaded', function() {
    const acceptButton = document.getElementById('acceptCookies');
    const cookieBanner = document.getElementById('cookieBanner');
    
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            document.cookie = "accepted=true; path=/; max-age=" + (60 * 60 * 24 * 30);
            if (cookieBanner) {
                cookieBanner.style.display = 'none';
            }

            // Guardar en Local Storage
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }

    if (!document.cookie.includes('accepted=true')) {
        if (cookieBanner) {
            cookieBanner.style.display = 'block';
        }
    } else {
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
    }
});
