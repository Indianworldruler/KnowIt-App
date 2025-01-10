document.getElementById('recommendations-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission to allow processing

  // Fetch user input
  const name = document.getElementById('name').value;
  const interests = document.getElementById('interests').value.split(',').map(item => item.trim());
  const learningGoals = document.getElementById('learning-goals').value.split(',').map(item => item.trim());
  const difficultyLevel = document.getElementById('difficulty-level').value;

  // Process and generate recommendations
  const recommendations = generateRecommendations(interests, learningGoals, difficultyLevel);

  // Process and generate personalized roadmap
  const roadmap = generateRoadmap(learningGoals, difficultyLevel);

  // Display the results
  displayResults(recommendations, roadmap);
});

function generateRecommendations(interests, learningGoals, difficultyLevel) {
  const recommendations = [];

  // Based on difficulty level, add specific recommendations
  if (difficultyLevel === 'Beginner') {
    recommendations.push('Start with basic tutorials in each area of interest.');
  } else if (difficultyLevel === 'Intermediate') {
    recommendations.push('Consider taking online courses or certifications.');
  } else if (difficultyLevel === 'Advanced') {
    recommendations.push('Work on real-world projects or contribute to open-source.');

  }

  // Tailor recommendations based on interests and learning goals
  if (interests.includes('Python')) {
    recommendations.push('Learn Python libraries like Pandas, NumPy, and TensorFlow.');
  }
  if (interests.includes('JavaScript')) {
    recommendations.push('Practice building web applications with JavaScript and frameworks like React or Node.js.');
  }
  if (learningGoals.includes('Data Scientist')) {
    recommendations.push('Focus on data analysis, machine learning, and data visualization.');
  }
  if (learningGoals.includes('Full Stack Developer')) {
    recommendations.push('Work on both frontend and backend technologies like HTML, CSS, JavaScript, Node.js, and databases.');
  }

  // Return the list of recommendations
  return recommendations;
}

function generateRoadmap(learningGoals, difficultyLevel) {
  const roadmap = [];

  // Generate a personalized roadmap based on learning goals and difficulty level
  if (learningGoals.includes('Data Scientist')) {
    roadmap.push('1. Learn Python basics and data structures.');
    roadmap.push('2. Master data analysis with Pandas and NumPy.');
    roadmap.push('3. Dive into machine learning algorithms and their applications.');
    roadmap.push('4. Work on real-world datasets and Kaggle challenges.');
  }
  if (learningGoals.includes('Full Stack Developer')) {
    roadmap.push('1. Start with HTML, CSS, and basic JavaScript.');
    roadmap.push('2. Learn backend development with Node.js or Python Flask.');
    roadmap.push('3. Build and deploy full-stack applications.');
    roadmap.push('4. Learn about databases and server management.');
  }

  // Add additional roadmap steps based on difficulty level
  if (difficultyLevel === 'Beginner') {
    roadmap.push('Start with introductory resources and gradually build knowledge.');
  } else if (difficultyLevel === 'Intermediate') {
    roadmap.push('Take intermediate-level courses and focus on projects.');
  } else if (difficultyLevel === 'Advanced') {
    roadmap.push('Participate in advanced projects, contribute to open-source, and network with professionals.');
  }

  // Return the roadmap
  return roadmap;
}

function displayResults(recommendations, roadmap) {
  // Clear previous results
  document.getElementById('recommendations-list').innerHTML = '';
  document.getElementById('roadmap-list').innerHTML = '';

  // Display recommendations
  recommendations.forEach(function(rec) {
    const li = document.createElement('li');
    li.textContent = rec;
    document.getElementById('recommendations-list').appendChild(li);
  });

  // Display roadmap
  roadmap.forEach(function(step) {
    const li = document.createElement('li');
    li.textContent = step;
    document.getElementById('roadmap-list').appendChild(li);
  });

  // Show the results section
  document.getElementById('results').style.display = 'block';
}
