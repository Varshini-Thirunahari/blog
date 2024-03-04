function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    var section = document.getElementById(sectionId);          
    section.style.display = 'block';
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
