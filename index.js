(function () {
  //
  // DOM ELEMENTS
  //
  const ageForm = document.querySelector(".age-form");
  const resultsContainer = document.querySelector(".results-container");
  const heartIcon = document.querySelector(".heart-icon");

  //
  // EVENT LISTENERS
  //
  ageForm.addEventListener("submit", handleFormSubmit);
  setInterval(handleHeartBeat, 500);

  //
  // EVENT HANDLERS
  //
  function handleFormSubmit(e) {
    e.preventDefault();
    const { age, intensity } = e.target;
    parseInt(age.value) > 0
      ? renderHeartRates(age.value, intensity.value)
      : alert("Age cannot be below 0!");
  }

  function handleHeartBeat() {
    heartIcon.style.visibility =
      heartIcon.style.visibility === "hidden" ? "" : "hidden";
  }

  //
  // RENDER FUNCTIONS
  //
  function renderHeartRates(age, intensity) {
    age = parseInt(age);
    const maxHeartRate = 220 - age;

    const calculateHR = (percentExertion) =>
      Math.round(maxHeartRate * percentExertion);

    const intensityStart =
      intensity === "moderate" ? calculateHR(0.5) : calculateHR(0.7);
    const intensityEnd =
      intensity === "moderate" ? calculateHR(0.7) : calculateHR(0.85);

    resultsContainer.innerHTML = `
      <section>
        Your <span>maximum</span> heart rate is <span>${maxHeartRate} beats per minute </span>(bpm).
      </section>

      <section>
        Your target heart rate range during <span>${intensity}-intensity</span> activities is between <span>${intensityStart} to ${intensityEnd}</span> bpm.
      </section>

      <section>
        <a href="https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse" target="_blank">Read More</a>
      </section>
    `;
  }
})();
