<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

#  study planner 🎯

## Basic Details

### Team Name: jesiss

### Team Members
- Member 1: Jessy PC - College of Engineering Munnar
- Member 2: Issa Suresh - College of Engineering Munnar

### Hosted Project Link
https://jessypc.github.io/ai-based-study-planner/

### Project Description
Our study planning project is designed to help students organize their academic goals, manage their time effectively, and stay consistent with their learning schedule. It provides structured plans, priority setting, and progress tracking to improve productivity and reduce last-minute stress. The project encourages smart goal setting, balanced study sessions, and regular revision strategies. Overall, it aims to build better study habits and support long-term academic success.

### The Problem statement
Poor time management – Many students struggle to plan their study hours effectively and often waste time or cram at the last minute.

Lack of organization – Assignments, exams, and deadlines can feel overwhelming without a clear structure in one place.

Procrastination – Students delay tasks because they don’t have a clear, manageable study plan.

Difficulty tracking progress – Without visible progress tracking, it’s hard to stay motivated and measure improvement.

Unbalanced study schedules – Students may focus too much on one subject while neglecting others

### The Solution
Time management → Smart scheduling system
Let users enter subjects, deadlines, and available hours. The app automatically creates a balanced daily/weekly timetable.

Lack of organization → All-in-one dashboard
Provide one central place for assignments, exams, notes, and reminders so students don’t have to use multiple apps.

Procrastination → Task breakdown & reminders
Break big tasks into smaller steps with deadlines and send motivational reminders or streak rewards to keep students consistent.

Difficulty tracking progress → Progress tracker & analytics
Show visual progress bars, completed tasks, study hours, and performance trends to keep students motivated.

Unbalanced schedules → Subject balance alerts
Track study time per subject and notify users if one subject is being ignored.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: HTML — structure and markup (index.html, public.html)
CSS — styling and animations (style.css)
JavaScript — both frontend logic (script.js) and backend server (server.js)
- Frameworks used: Frontend

Plain HTML5
Vanilla JavaScript (no framework)
Pure CSS3 with custom properties (CSS variables)

Backend

Node.js with Express.js
- Libraries used: CSS Library

Google Fonts — imports Inter and Outfit font families via @import url('https://fonts.googleapis.com...')

Backend Library

Express.js — used in server.js for creating the server, handling routes, and serving static files (require("express"))
Path — Node.js built-in module used for file path handling (require("path"))
- Tools used:  localStorage — saves and loads the generated study plan between sessions
Fetch API — used in public.html version to make POST requests to /plan endpoint
DOM API — for manipulating HTML elements dynamically

**For Hardware:**
- Main components: 1. Input Component

Takes user inputs — subjects, days, hours, and learning profile
Validates that all fields are filled before generating

2. Weight Calculation Engine

Core logic of the entire program
getModeWeights() classifies every subject as Math-based or Theory-based
Assigns a numerical weight to each subject based on difficulty and selected mode
Higher weight = more study hours allocated

3. Hour Distribution Algorithm

Calculates total available hours (days × hours per day)
Divides hours proportionally based on subject weights
Formula: unitHour = totalHours / totalWeight then hoursToStudy = unitHour × subjectWeight

4. Intensity Classifier

Labels each subject as Focused, High, or Moderate based on its weight value
weight ≥ 2.0 → Focused
weight ≥ 1.4 → High
below 1.4 → Moderate

5. Plan Renderer

renderPlan() dynamically builds and displays study cards
Applies staggered animations for smooth card appearance

6. Persistence Layer

Saves generated plan to localStorage
Auto-loads last plan on page refresh

7. Express API Server

POST /plan endpoint replicates the same logic on the backend side
Serves static files to the browser

The Weight Calculation Engine + Hour Distribution Algorithm together form the true core of the program — everything else supports or displays their output. Sonnet 4.6
- Specifications: 1. Input Component

Takes user inputs — subjects, days, hours, and learning profile
Validates that all fields are filled before generating

2. Weight Calculation Engine

Core logic of the entire program
getModeWeights() classifies every subject as Math-based or Theory-based
Assigns a numerical weight to each subject based on difficulty and selected mode
Higher weight = more study hours allocated

3. Hour Distribution Algorithm

Calculates total available hours (days × hours per day)
Divides hours proportionally based on subject weights
Formula: unitHour = totalHours / totalWeight then hoursToStudy = unitHour × subjectWeight

4. Intensity Classifier

Labels each subject as Focused, High, or Moderate based on its weight value
weight ≥ 2.0 → Focused
weight ≥ 1.4 → High
below 1.4 → Moderate

5. Plan Renderer

renderPlan() dynamically builds and displays study cards
Applies staggered animations for smooth card appearance

6. Persistence Layer

Saves generated plan to localStorage
Auto-loads last plan on page refresh

7. Express API Server

POST /plan endpoint replicates the same logic on the backend side
Serves static files to the browser

The Weight Calculation Engine + Hour Distribution Algorithm together form the true core of the program — everything else supports or displays their output.technical specification of the program10:39 AMBased on your project files, here are the complete technical specifications:

1. Project Overview

Name: AI Study Planner
Type: Full Stack Web Application
Architecture: Client-Server (Frontend + Backend)
Execution Mode: Primarily Client-Side (localStorage based, no server call needed)


2. Technology Stack
LayerTechnologyFrontend MarkupHTML5Frontend StylingCSS3Frontend LogicVanilla JavaScript (ES6+)Backend RuntimeNode.jsBackend FrameworkExpress.jsFont LibraryGoogle FontsStorageBrowser localStorage

3. Frontend Specifications

Layout: CSS Grid (2-column dashboard, responsive)
Design Style: Glassmorphism
Responsive Breakpoint: 968px (switches to single column)
Fonts: Inter (body), Outfit (headings)
Color Scheme: Dark theme using CSS custom properties
Animations: fadeInUp, spin, slideUp (pure CSS keyframes)
Input Fields: subjects (text), days (number), hours (number), studyMode (select)


4. Algorithm Specifications
Subject Classification
CategorySubjectsMath-basedMath, Physics, Calculus, Programming, Algorithms, Engineering, Statistics, Economics, Geometry, Trigonometry, AlgebraTheory-basedChemistry, Biology, History, English, Geography, Literature, Sociology, Psychology, Civics, Philosophy, Arts
Learning Profile Weights
ModeMath SubjectTheory SubjectOtherBalanced1.61.11.0Theory Expert2.20.71.2Math Expert0.72.21.2Steady1.01.01.0
Intensity Classification
Weight ValueIntensity Label≥ 2.0Focused≥ 1.4High< 1.4Moderate
Hour Distribution Formula
totalHours = days × hoursPerDay
unitHour = totalHours / totalWeight
subjectHours = unitHour × subjectWeight

5. Backend Specifications

Runtime: Node.js
Framework: Express.js
Port: 3000
Endpoint: POST /plan
Request Body: { subjects[], days, hoursPerDay }
Response: { totalDays, totalHours, plan[] }
Error Handling: 400 (bad request), 500 (server error)
Static File Serving: Express static middleware


6. Data Flow
User Input
    ↓
Validation Check
    ↓
Subject Classification (Math / Theory / Other)
    ↓
Weight Assignment (based on Learning Profile)
    ↓
Hour Distribution Algorithm
    ↓
Intensity Classification
    ↓
Plan Rendered to UI
    ↓
Saved to localStorage

7. Storage Specification

Type: Browser localStorage
Key: studyPlan
Value: JSON stringified plan array
Behavior: Auto-loads on page refresh


8. Performance Characteristics

No external API calls (fully offline capable)
1000ms artificial delay for UX loading state
Staggered card render (100ms per card)
Lightweight — no framework overhead


9. File Structure
project/
├── index.html      → Main UI
├── public.html     → Alternate simple UI
├── style.css       → All styling
├── script.js       → Frontend logic & algorithm
└── server.js       → Express backend server

10. Browser Compatibility

Supports all modern browsers (Chrome, Firefox, Edge, Safari)
Uses standard ES6+ features (async/await, arrow functions, template literals)
CSS backdrop-filter (glassmorphism) requires modern browser support
 Sonnet 4.6
- Tools required: #ToolPurpose1Node.jsRun the backend server2NPMInstall packages3Express.jsBackend framework4Web BrowserRun and view the app5Code EditorWrite and edit code

---

## Features

List the key features of your project:
- Feature 1: Smart Hour Distribution

Automatically divides total study hours across all subjects
Based on formula: totalHours = days × hoursPerDay
Each subject gets hours proportional to its difficulty weight
Ensures no subject is over or under allocated
- Feature 2:  Learning Profile Selection

4 personalized study modes to choose from
Balanced — smart distribution for all subjects
Theory Expert — allocates more hours to Math based subjects
Math Expert — allocates more hours to Theory based subjects
Steady — equal hours for every subject
- Feature 3:  Subject Intensity Classification

Automatically labels each subject based on difficulty weight
Focused — weight ≥ 2.0 (needs maximum attention)
High — weight ≥ 1.4 (needs extra effort)
Moderate — weight < 1.4 (normal pace)
Helps student prioritize which subject needs more focus
- Feature 4:  Auto Save and Reload

Generated plan is automatically saved to browser localStorage
Plan is restored automatically when page is refreshed
No data is lost between sessions
Works completely offline without any internet connection

---

## Implementation

### For Software:

#### Installation
```bash
[Installation commands - e.g., npm install, pip install -r requirements.txt]
```

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
