// Cache DOM elements
const elements = {
  form: document.getElementById('learning-plan-form'),
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  interests: document.getElementById('interests'),
  learningGoals: document.getElementById('learning-goals'),
  difficultyLevel: document.getElementById('difficulty-level'),
  recommendationsList: document.getElementById('recommendations-list'),
  roadmapList: document.getElementById('roadmap-list'),
};

// Initialize state
let state = {
  interests: [],
  learningGoals: [],
  recommendations: [],
  roadmap: []
};

// Initialize application
function initializeApp() {
  elements.form.addEventListener('submit', handleFormSubmit);
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Extract and process data from form
  const formData = {
    name: elements.name.value,
    email: elements.email.value,
    interests: elements.interests.value.split(',').map(item => item.trim()),
    learningGoals: elements.learningGoals.value.split(',').map(item => item.trim()),
    difficultyLevel: elements.difficultyLevel.value,
  };

  // Update state
  state.interests = formData.interests;
  state.learningGoals = formData.learningGoals;

  // Generate recommendations and roadmap
  state.recommendations = generateRecommendations(formData);
  state.roadmap = generateRoadmap(formData);

  // Display results
  displayRecommendations(state.recommendations);
  displayRoadmap(state.roadmap);
}

// Generate recommendations based on user input
function generateRecommendations({ interests, learningGoals, difficultyLevel }) {
  const recommendations = [];

  // Difficulty level based recommendations
  if (difficultyLevel === 'Beginner') {
    recommendations.push('Start with basic tutorials in each area of interest.');
  } else if (difficultyLevel === 'Intermediate') {
    recommendations.push('Consider taking online courses or certifications.');
  } else if (difficultyLevel === 'Advanced') {
    recommendations.push('Work on real-world projects or contribute to open-source.');
  }

  // Tailor recommendations based on interests
  interests.forEach(interest => {
    if (interest.toLowerCase() === 'python') {
      recommendations.push('Learn Python libraries like Pandas, NumPy, and TensorFlow.');
    } else if (interest.toLowerCase() === 'javascript') {
      recommendations.push('Practice building web applications with JavaScript and frameworks like React or Node.js.');
    } else {
      recommendations.push(`Explore courses and resources in ${interest}.`);
    }
  });

  // Tailor recommendations based on learning goals
  learningGoals.forEach(goal => {
    if (goal.toLowerCase() === 'data scientist') {
      recommendations.push('Focus on data analysis, machine learning, and data visualization.');
    } else if (goal.toLowerCase() === 'full stack developer') {
      recommendations.push('Work on both frontend and backend technologies like HTML, CSS, JavaScript, Node.js, and databases.');
    } else {
      recommendations.push(`Pursue specific skills required for becoming a ${goal}.`);
    }
  });

  return recommendations;
}

// Generate a roadmap based on user input
function generateRoadmap({ learningGoals, difficultyLevel }) {
  const roadmap = [];

  learningGoals.forEach(goal => {
  if (goal.toLowerCase() === 'data scientist') {
    roadmap.push('1. Learn Python basics and data structures.');
    roadmap.push('2. Master data analysis with Pandas and NumPy.');
    roadmap.push('3. Dive into machine learning algorithms and their applications.');
    roadmap.push('4. Work on real-world datasets and Kaggle challenges.');
  } else if (goal.toLowerCase() === 'full stack developer') {
    roadmap.push('1. Start with HTML, CSS, and basic JavaScript.');
    roadmap.push('2. Learn backend development with Node.js or Python Flask.');
    roadmap.push('3. Build and deploy full-stack applications.');
    roadmap.push('4. Learn about databases and server management.');
  } else if (goal.toLowerCase() === 'data engineer') {
    roadmap.push('1. Learn SQL and database management.');
    roadmap.push('2. Master data pipelines and ETL processes.');
    roadmap.push('3. Get familiar with big data tools like Hadoop and Spark.');
    roadmap.push('4. Learn about cloud platforms for data engineering (AWS, GCP, Azure).');
  } else if (goal.toLowerCase() === 'ui/ux') {
    roadmap.push('1. Learn the basics of design principles and user-centered design.');
    roadmap.push('2. Master design tools like Figma, Sketch, or Adobe XD.');
    roadmap.push('3. Understand wireframing, prototyping, and user testing.');
    roadmap.push('4. Focus on front-end development basics like HTML, CSS, and JavaScript.');
  } else {
    roadmap.push(`Develop skills to achieve your goal as a ${goal}.`);
  }
});

  // Additional roadmap steps based on difficulty level
  if (difficultyLevel === 'Beginner') {
    roadmap.push('Start with introductory resources and gradually build knowledge.');
  } else if (difficultyLevel === 'Intermediate') {
    roadmap.push('Take intermediate-level courses and focus on projects.');
  } else if (difficultyLevel === 'Advanced') {
    roadmap.push('Participate in advanced projects, contribute to open-source, and network with professionals.');
  }

  return roadmap;
}

// Display recommendations in the DOM
function displayRecommendations(recommendations) {
  elements.recommendationsList.innerHTML = '';
  recommendations.forEach(recommendation => {
    const listItem = document.createElement('li');
    listItem.textContent = recommendation;
    elements.recommendationsList.appendChild(listItem);
  });
}

// Display roadmap in the DOM
function displayRoadmap(roadmap) {
  elements.roadmapList.innerHTML = '';
  roadmap.forEach(step => {
    const listItem = document.createElement('li');
    listItem.textContent = step;
    elements.roadmapList.appendChild(listItem);
  });
}

// Run the app
initializeApp();
