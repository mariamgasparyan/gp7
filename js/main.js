document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = document.getElementById('submitButton');
    
    submitButton.disabled = true;
    submitButton.innerText = 'Submitting...';

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Show success message
                document.getElementById('gp7-form-message').style.display = 'block';
                
                // Temporarily hide the form
                form.style.display = 'none';

                // Reset and show the form again after 5 seconds
                setTimeout(() => {
                    form.reset();
                    form.style.display = 'flex';
                    document.getElementById('gp7-form-message').style.display = 'none';
                }, 3000);
            } else {
                alert('There was an error. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error. Please try again.');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.innerText = 'Submit';
        });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,              // Enable looping for infinite scrolling
    effect: 'coverflow',     // Set the 3D effect
    centeredSlides: true,    // Center the active slide
    slidesPerView: 'auto',   // Automatically adjust slide width
    coverflowEffect: {
        rotate: 70,          // Rotate angle for each slide
        stretch: 0,          // Space between slides along z-axis
        depth: 300,          // Depth of the slide stack effect
        modifier: 1,         // Multiplier for rotating, stretching, and depth
        slideShadows: true,  // Enable shadows for depth
    },
    autoplay: {               // Enable autoplay
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 800,               // Adjust transition speed (in ms)
});
