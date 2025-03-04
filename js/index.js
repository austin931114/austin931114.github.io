// In index.js
const projects = {
    'project1': {
        title: 'ETL Pipeline with Azure Synapse Analytic',
        subtitle: 'Automatic pipeline in Azure to improve efficiency and accuracy.',
        organization: "Stampin' Up",
        dates: 'Jan 2023 - Aug 2023',
        summary: "At Stampin' Up, I created an ETL pipeline in an Azure Synapse Analytics serverless environment. The pipeline utilizes OAuth authorization to call the source API every two hours with schedulers, retrieving updated data and saving the results as JSON files in an Azure Data Lake. It then parses the JSON files and converts them to a tabular format for import into the on-premise SQL server for production use. This new Azure-based pipeline improves data reliability and minimizes maintenance time for developers.",
        skills: ['Microsoft Azure Synapse', 'ETL Pipeline', 'Data Lake', 'Data Model', 'API'],
        image: 'img/azure synapse.png'
    },
    'project2': {
        title: 'Medical Query Generation',
        subtitle: 'Using BERT to convert English questions to SQL queries for use by medical professionals.',
        organization: 'Geogria Tech Research Institute',
        dates: 'May 2023 - July 2023',
        summary: 'This project involved a Streamlit application which took natural language questions as input, and would translate them to SQL queries and query a medical database, then provide the user with the database entires. I Created dataset of SQL Queries and their corresponding natural language questions in a medical context. I then used this data to validate our modified BERT model for translation of natural language questions into SQL queries. I also assisted in developing the Python application.',
        skills: ['BERT Model', 'NLP', 'Model Validation Testing','Streamlit', 'Database Querying', 'SQL'],
    },
    'project3': {
        title: 'Patch Complexity Algorithm with LLM (Patent Pending)',
        subtitle: 'Developed an automatic system to retrieve and classify patch complexity information',
        organization: 'CrowdStrike',
        dates: 'Aug 2023 - May 2024',
        summary: 'With CrowdStrike, I developed an ETL pipeline to retrieve open-source software vulnerability data from public databases and APIs, storing it in a Google Cloud BigQuery database. I then designed an algorithm to automatically categorize incoming vulnerability patches based on their complexity, aiding security analysts in prioritizing their workflow. This algorithm leverages rule-based methods, statistical methods, and large language models (LLMs) to classify patches into different categories, significantly reducing the manual reading time required by analysts.',
        skills: ['LLM Prompt', 'Cybersecurity Management', 'Google Cloud Platform', 'Database Development', 'Python'],
        image: 'img/crowdstrike.png'
    },
    'project4': {
        title: 'Fake/Real News Classifier Analysis',
        subtitle: 'Assessing the performance of four classifiers in classifying news articles as fake or real news.',
        organization: 'Arizona State University',
        dates: 'Fall 2022',
        summary: 'As a graduate project for my Data Mining class at ASU, a teammate and I used the “Fake and real news dataset” by Clément Bisaillon to create a Pandas dataframe and assess four classifiers on varying ground truth percentages for performance. The classifiers we assessed were the Passive Aggressive Classifier (a linear model algorithm), Logistic Regression (a linear model algorithm), Multinomial Naive Bayes Model, and Support Vector Classifier (a support vector machine algorithm). We evaluated the models based on accuracy, recall, precision, and F1 score.',
        skills: ['Classification', 'Model Evaluation', 'Pandas', 'Scikit-learn'],
        link: 'https://docs.google.com/document/d/1Pa0RQ7jn1by1hDTqMDWJsjpLLldqhY_G/edit?usp=sharing&ouid=108524975782435284501&rtpof=true&sd=true',
        linktext: "Read Report",
        image: 'img/project4.png'
    },
    'project5': {
        title: 'Twitter COVID Vaccine Data Scraping',
        subtitle: 'Scraping tweets about the COVID Vaccine and creating a world cloud to identify sentiments.',
        organization: 'Arizona State University',
        dates: 'Fall 2022',
        summary: 'I used the snscrape Python library to scrape Twitter data with the keyword \'COVID Vaccine\' from years 2020 and 2022 to see if sentiments had changed over time. I then used the networkx, matplotlib, and numpy libraries to visualize the data in word clouds based on common words used in these tweets, ensuring to account for noise such as \'the\' or \'an\'. I also analyzed the data by closeness and degree distribution.',
        skills: ['Data Scraping', 'Data Mining', 'Data Visualizatoin'],
        image: 'img/word_cloud.png'
    },
    'project6': {
        title: 'Patent Application LLM Classification',
        subtitle: 'BERT classification model for patent application rejection.',
        organization: 'University of California - Berkeley',
        dates: 'Aug 2023 - Dec 2023',
        summary: "The objective is to classify patent applications into two categories: rejected and not rejected. Since there are no quantitative variables available, I used pure text classification to approach the problem. A major challenge I encountered was the text length of an application, 13,000 words, whereas a typical BERT classification model only accepts 512 tokens. To address this issue, I used transformer-based summarization to reduce the text length and then utilized Longformer, a more robust model that can handle up to 4,096 tokens. As a result, I improved the model's accuracy from 62% to 71%.",
        skills: ['BERT', 'Text Classification', 'Python', 'Deep Learning'],
        link: 'https://huggingface.co/eclec/patentclassfication3',
        linktext: "Huggingface Model",
        image: 'img/patent.png'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const contentItems = document.querySelectorAll('.content-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and content items
            tabs.forEach(t => t.classList.remove('active'));
            contentItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.style.top = '0';
            navbar.style.padding = '1rem';
        } else {
            navbar.style.top = '-100px';
            navbar.style.padding = '1rem';
        }
    });
    
    // Create particle background
    createParticles();
});

// Particle background effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    document.body.prepend(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particleContainer.appendChild(particle);
    }
}

// Assuming projects object is defined as in your question

document.querySelectorAll('.portfolio__item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project-id');
        const project = projects[projectId];
        
        if (project) {
            document.querySelector('.modal-title').textContent = project.title;
            document.querySelector('.modal-subtitle').textContent = project.subtitle;
            document.querySelector('.modal-org').textContent = project.organization;
            document.querySelector('.modal-dates').textContent = project.dates;
            document.querySelector('.modal-summary').textContent = project.summary;
            
            // Handling skills list
            const skillsList = document.querySelector('.modal-skills');
            skillsList.innerHTML = ''; // Clear existing skills
            project.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
            
            document.querySelector('.modal-link').href = project.link;
            document.querySelector('.modal-link').textContent = project.linktext;
            const modalImg = document.querySelector('.modal-img');
            if (project.image) {
                modalImg.src = project.image;
                modalImg.style.display = 'block'; // Show the image
            } else {
                modalImg.style.display = 'none'; // Hide the image if no source provided
                document.querySelector('.text-content').style.width = "100%";
            }

            // Show the modal
            document.getElementById('projectModal').style.display = 'block';
        }
    });
});

// Assuming you have a modal close functionality
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('projectModal').style.display = "none";
});

