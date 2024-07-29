// Observer-Trigger
// Wert > 0: Observer reagiert früher
// Wert < 0: Observer reagiert später
let observer_options_offset = "0px";

// Wie viel % des Objekts mit Observer überschneiden müssen
// Default: 1.0 = 100% 
let observer_options_threshold = 0.3;
let observer_options = {
    rootMargin: `0px 0px ${observer_options_offset} 0px`, 
    threshold: observer_options_threshold
}


// INIT OBSERVER & CSS-CLASSES
const observer = new IntersectionObserver( (entries) => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('onscroll_visible')
        } else {
            entry.target.classList.remove('onscroll_visible')
        }
    })
}, observer_options)




// REGISTER HTML Elements 
const sections = document.getElementsByClassName('onscroll_hidden');
for (let i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
}