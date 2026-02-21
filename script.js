// Sophisticated heuristic weights for subjects
const getSubjectWeight = (subject) => {
  const hardSubjects = ["physics", "math", "calculus", "chemistry", "biology", "programming", "algorithms", "engineering"];
  const sub = subject.toLowerCase().trim();
  if (hardSubjects.some(h => sub.includes(h))) return 1.5;
  return 1.0;
};

// Initialize app: Load saved plan if exists
document.addEventListener("DOMContentLoaded", () => {
  const savedPlan = localStorage.getItem("studyPlan");
  if (savedPlan) {
    renderPlan(JSON.parse(savedPlan));
  }
});

function renderPlan(plan) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  plan.forEach((item, index) => {
    setTimeout(() => {
      const card = document.createElement("div");
      card.className = "study-item animate-in";
      card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <span class="item-subject">${item.subject}</span>
                    <span style="font-size: 0.7rem; padding: 0.25rem 0.5rem; border-radius: 1rem; background: ${item.intensity === 'High' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 211, 238, 0.2)'}; color: ${item.intensity === 'High' ? '#f87171' : '#22d3ee'}; border: 1px solid currentColor;">
                        ${item.intensity}
                    </span>
                </div>
                <span class="item-hours">Focus: <b>${item.hoursToStudy}</b> hours total</span>
            `;
      resultDiv.appendChild(card);
    }, index * 100);
  });
}

async function generatePlan() {
  const subjectsInput = document.getElementById("subjects").value;
  const days = document.getElementById("days").value;
  const hours = document.getElementById("hours").value;
  const studyMode = document.getElementById("studyMode").value;
  const resultDiv = document.getElementById("result");
  const generateBtn = document.getElementById("generateBtn");

  if (!subjectsInput || !days || !hours) {
    resultDiv.innerHTML = "<p style='color: #ef4444; grid-column: 1/-1; text-align: center; padding: 2rem;'>Please fill all fields ⚠️</p>";
    return;
  }

  // UI State: Loading
  generateBtn.disabled = true;
  generateBtn.innerText = "Generating Roadmap...";
  resultDiv.innerHTML = `
    <div class="loading" style="grid-column: 1/-1;">
        <span>Optimizing with Local Engine</span>
    </div>
  `;

  // Use a slight timeout to simulate "Processing" and ensure smooth UI transition
  setTimeout(() => {
    try {
      const subjectsArray = subjectsInput.split(",").map(s => s.trim()).filter(s => s !== "");
      const totalAvailableHours = Number(days) * Number(hours);
      let plan = [];

      // Define Algorithm Settings
      const getModeWeights = (subject, mode) => {
        const mathBased = ["physics", "math", "calculus", "programming", "algorithms", "engineering", "statistics", "economics", "geometry", "trigonometry", "algebra"];
        const theoryBased = ["chemistry", "biology", "history", "english", "geography", "literature", "sociology", "psychology", "civics", "philosophy", "arts"];

        const sub = subject.toLowerCase();
        const isMath = mathBased.some(h => sub.includes(h));
        const isTheory = theoryBased.some(h => sub.includes(h));

        switch (mode) {
          case 'theoryExpert':
            // User is fast at theory -> needs more time for Math
            if (isMath) return 2.2;
            if (isTheory) return 0.7;
            return 1.2;
          case 'mathExpert':
            // User is fast at math -> needs more time for Theory
            if (isTheory) return 2.2;
            if (isMath) return 0.7;
            return 1.2;
          case 'steady':
            return 1.0;
          case 'balanced':
          default:
            if (isMath) return 1.6;
            if (isTheory) return 1.1;
            return 1.0;
        }
      };

      // Calculate weights
      const subjectWeights = subjectsArray.map(s => ({
        name: s,
        weight: getModeWeights(s, studyMode)
      }));

      const totalWeight = subjectWeights.reduce((acc, curr) => acc + curr.weight, 0);
      const unitHour = totalAvailableHours / totalWeight;

      plan = subjectWeights.map(sw => {
        const intensity = sw.weight >= 2.0 ? "Focused" : (sw.weight >= 1.4 ? "High" : "Moderate");
        return {
          subject: sw.name,
          hoursToStudy: (unitHour * sw.weight).toFixed(1),
          intensity: intensity
        };
      });

      // Save to local storage
      localStorage.setItem("studyPlan", JSON.stringify(plan));

      // Render
      renderPlan(plan);

    } catch (error) {
      resultDiv.innerHTML = `<p style='color: #ef4444; grid-column: 1/-1; text-align: center; padding: 2rem;'>Optimization Error: ${error.message} ❌</p>`;
    } finally {
      generateBtn.disabled = false;
      generateBtn.innerText = "Generate Smart Plan";
    }
  }, 1000);
}
