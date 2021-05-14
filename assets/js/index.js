import resume from "assets/Resume-PayongayongJerald.pdf";

function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

addResume(resume);
