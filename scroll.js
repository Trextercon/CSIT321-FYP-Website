const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.15 }
);

reveals.forEach(section => observer.observe(section));

const demoVideo = document.getElementById("demoVideo");

if (demoVideo) {
    const videoObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    demoVideo.play();
                } else {
                    demoVideo.pause();
                }
            });
        },
        { threshold: 0.6 } // plays when 60% visible
    );

    videoObserver.observe(demoVideo);
}

