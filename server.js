const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, ".")));

// Simulating an AI engine that assigns weights based on subject commonality/difficulty
const getSubjectWeight = (subject) => {
  const hardSubjects = ["physics", "math", "calculus", "chemistry", "biology", "programming"];
  const sub = subject.toLowerCase().trim();
  if (hardSubjects.some(h => sub.includes(h))) return 1.5;
  return 1.0;
};

// Study Plan API
app.post("/plan", (req, res) => {
  try {
    const { subjects, days, hoursPerDay } = req.body;

    if (!subjects || !Array.isArray(subjects) || subjects.length === 0) {
      return res.status(400).json({ error: "No subjects provided" });
    }

    const totalAvailableHours = days * hoursPerDay;

    // Calculate weights
    const subjectWeights = subjects.map(s => ({
      name: s,
      weight: getSubjectWeight(s)
    }));

    const totalWeight = subjectWeights.reduce((acc, curr) => acc + curr.weight, 0);
    const unitHour = totalAvailableHours / totalWeight;

    const plan = subjectWeights.map(sw => ({
      subject: sw.name,
      hoursToStudy: (unitHour * sw.weight).toFixed(1),
      intensity: sw.weight > 1.2 ? "High" : "Moderate"
    }));

    res.json({
      totalDays: days,
      totalHours: totalAvailableHours,
      plan: plan
    });
  } catch (err) {
    res.status(500).json({ error: "Generation failed" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`AI Study Planner Engine running at http://localhost:${PORT}`);
});
