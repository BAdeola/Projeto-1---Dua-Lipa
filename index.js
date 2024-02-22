document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('voltar-ao-topo-btn');

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }

    btn.addEventListener('click', function() {
        document.body.scrollTop = 0; // Para navegadores Safari
        document.documentElement.scrollTop = 0; // Para outros navegadores
    });
});