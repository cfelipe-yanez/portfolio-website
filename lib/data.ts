export const profile = {
  name: 'Felipe Yánez',
  roles: [
    'Data Scientist',
    'Biomedical Engineer',
    'Machine Learning Engineer',
  ],
  description:
    'Data Scientist with a degree in Biomedical Engineering, building machine learning solutions that turn complex data into meaningful insights.',
  bio: 'I am a Data Scientist with a degree in Biomedical Engineering and experience developing machine learning, computer vision, and data analytics solutions for research and healthcare. My background combines biomedical engineering with statistical analysis, predictive modeling, and artificial intelligence, allowing me to work across the full data science lifecycle—from data acquisition and preprocessing to model development, validation, visualization, and deployment. I enjoy collaborating with multidisciplinary teams to transform complex data into reliable, data-driven solutions with real-world impact.',
  email: 'felipe.yanezl@outlook.com',
  github: 'https://github.com/cfelipe-yanez',
  linkedin: 'https://www.linkedin.com/in/yanezf/',
  resume: '/resume.pdf',
}

export const journey = [
  {
    label: 'Biomedical Engineering',
    detail:
      'Built a strong foundation in physiology, biomedical instrumentation, electronics, and healthcare technologies through my Biomedical Engineering degree.',
  },
  {
    label: 'Biomedical Research',
    detail:
      'Applied engineering and data analysis to clinical research, developing analytical workflows for physiological signals, medical data, and healthcare innovation.',
  },
  {
    label: 'Artificial Intelligence for Healthcare',
    detail:
      'Led research projects applying machine learning, computer vision, and biomedical signal processing to solve real-world healthcare challenges, including physiological monitoring and clinical decision support.',
  },
  {
    label: 'Data Science & Machine Learning',
    detail:
      'Expanded into end-to-end data science, designing analytical pipelines, predictive models, statistical analyses, and data visualizations to transform complex data into actionable insights.',
  },
]

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  metrics: { label: string; value: string }[]
  image: string
  links: { case?: string; github?: string; demo?: string; paper?: string }
  overview: string
  problem: string
  objectives: string[]
  methodology: string
  dataset: string
  architecture: string
  training: string
  evaluation: { label: string; value: string }[]
  results: string
  visualizations: string
  lessons: string
  future: string
}

export const projects: Project[] = [
  {
    slug: 'ai-hand-hygiene-monitoring',
    title: 'AI Hand Hygiene Monitoring',
    category: 'Computer Vision & Healthcare AI',
    description:
       'An intelligent computer vision system that monitors hand hygiene in real time, evaluates adherence to the WHO protocol, and provides interactive feedback to improve technique.',
    longDescription:
      'A research project that combines computer vision, machine learning, temporal analysis, and real-time feedback to automatically evaluate hand hygiene performance according to the WHO guidelines.',
    technologies: [ 'Python','Computer Vision', 'MediaPipe', 'Machine Learning','Random Forest','OpenCV','Scikit-learn',],
    metrics: [
    { label: 'Operating Mode', value: 'Real-time' },
    { label: 'Hand Landmarks', value: '42 (126 coordinates)' },
    { label: 'WHO Protocol', value: '6 Steps' },
  ],
    image: '/projects/hand-hygiene.png',
    links: { case: '#', github: 'https://github.com', demo: '#' },
    overview:
    'This project presents an intelligent hand hygiene monitoring system capable of recognizing WHO hand hygiene steps, analyzing execution time and sequence, and providing immediate visual feedback to improve adherence. The system was developed as part of biomedical research focused on reducing healthcare-associated infections.',

  problem:
    'Traditional hand hygiene audits rely on direct observation or indirect indicators, making them subjective, resource-intensive, and unable to assess the quality, sequence, or duration of each hand hygiene step.',

  objectives: [
    'Automatically recognize WHO hand hygiene steps.',
    'Evaluate execution time and sequence adherence.',
    'Provide real-time visual feedback to improve user performance.',
    'Generate structured data for behavioral and statistical analysis.',
  ],

  methodology:
    'Hand landmarks are extracted using MediaPipe Hands from RGB video. Spatial features are normalized and enriched with palm orientation information before being classified using a Random Forest model. Predictions are stabilized through temporal smoothing and integrated into a real-time application with two operating modes: Free Mode and Guided Mode with traffic-light feedback.',

  dataset:
    'Custom dataset of annotated hand hygiene procedures acquired using RGB video. Each sample contains 42 hand landmarks (126 spatial coordinates) together with orientation features, representing the six WHO hand hygiene steps.',

  architecture:
    'RGB camera → MediaPipe Hands → Feature Engineering → Random Forest Classifier → Temporal Smoothing → Real-Time Feedback Interface → Automatic CSV Logging.',

  training:
    'Multiple supervised learning models, including Random Forest and XGBoost, were evaluated under different hyperparameter configurations. The final Random Forest model was selected for its balance between classification accuracy, robustness, computational efficiency, and real-time performance.',

  evaluation: [
    { label: 'Validation', value: 'Experimental within-subject study' },
    { label: 'Comparison', value: 'Free vs Guided Mode' },
    { label: 'Output', value: 'WHO adherence metrics' },
  ],

  results:
    'The system enables automatic recognition of WHO hand hygiene steps while simultaneously evaluating execution time, sequence compliance, omitted steps, and overall adherence. An experimental study is being conducted to assess the effectiveness of real-time feedback in improving hand hygiene performance.',

  visualizations:
    'Real-time hand landmark visualization, traffic-light feedback interface, execution timelines, adherence metrics, and statistical comparisons between operating modes.',

  lessons:
    'Reliable real-time hand hygiene monitoring depends not only on accurate gesture recognition but also on robust temporal processing, sequence validation, and intuitive feedback capable of influencing user behavior.',

  future:
    'Future work includes clinical validation in hospital environments, deployment on embedded edge devices, expansion to the complete WHO "Five Moments for Hand Hygiene" framework, and integration with hospital quality improvement systems.',
},
  {
  slug: 'sleep-apnea-monitoring',

  title: 'Sleep Apnea Monitoring and Analysis',

  category: 'Healthcare AI',

  description:
    'An intelligent system for monitoring obstructive sleep apnea using physiological signals, biomedical data analysis, and machine learning.',

  longDescription:
    'A biomedical research project focused on developing data-driven methods for sleep apnea monitoring, combining physiological signal processing, machine learning, and clinical data analysis to support the assessment of obstructive sleep apnea.',

  technologies: [
    'Python',
    'Machine Learning',
    'Biomedical Signal Processing',
    'Time-Series Analysis',
    'Scikit-learn',
    'NumPy',
    'SciPy',
  ],

  metrics: [
    { label: 'Domain', value: 'Sleep Medicine' },
    { label: 'Data Type', value: 'Physiological Signals' },
    { label: 'Application', value: 'Clinical Decision Support' },
  ],

  image: '/projects/sleep-apnea.png',

  links: {
    case: '#',
    github: '#',
    paper: '#',
  },

  overview:
    'This project explores the use of biomedical signal processing and machine learning techniques to improve the monitoring and assessment of obstructive sleep apnea. The objective is to support clinicians with objective measurements extracted from physiological signals while facilitating future home-based monitoring solutions.',

  problem:
    'Obstructive sleep apnea remains significantly underdiagnosed due to the high cost and limited accessibility of overnight polysomnography. Existing diagnostic procedures are resource-intensive and often unavailable for large portions of the population.',

  objectives: [
    'Analyze physiological signals related to sleep-disordered breathing.',
    'Develop machine learning models to support sleep apnea assessment.',
    'Extract clinically relevant features from biomedical signals.',
    'Provide objective metrics to assist clinical decision-making.',
  ],

  methodology:
    'Physiological signals are preprocessed to remove noise before feature extraction in both the time and frequency domains. Machine learning models are trained and evaluated to identify relevant respiratory patterns associated with obstructive sleep apnea while statistical analyses are performed to assess model performance.',

  dataset:
    'Physiological recordings obtained from sleep studies, including respiratory and oxygen saturation signals used for biomedical signal analysis and machine learning model development.',

  architecture:
    'Physiological Signal Acquisition → Signal Preprocessing → Feature Extraction → Machine Learning Model → Statistical Analysis → Clinical Interpretation.',

  training:
    'Different machine learning approaches were evaluated through systematic experimentation, comparing feature extraction strategies, model configurations, and validation techniques to identify robust solutions for sleep apnea monitoring.',

  evaluation: [
    { label: 'Validation', value: 'Clinical datasets' },
    { label: 'Input', value: 'Physiological signals' },
    { label: 'Approach', value: 'Machine Learning' },
  ],

  results:
    'The project demonstrates the feasibility of combining biomedical signal processing and machine learning to extract meaningful information from sleep studies, supporting the development of intelligent tools for obstructive sleep apnea monitoring.',

  visualizations:
    'Physiological signal plots, feature distributions, respiratory event timelines, statistical analyses, and machine learning performance comparisons.',

  lessons:
    'Developing reliable healthcare AI systems requires careful signal preprocessing, feature engineering, and close collaboration between engineering and clinical experts to ensure meaningful interpretation of physiological data.',

  future:
    'Future work includes improving model generalization, incorporating additional physiological signals, validating the approach with larger clinical datasets, and exploring real-time and home-based sleep monitoring applications.',
},
  {
  slug: 'film-junky-imdb-review-classification',
  title: 'Film Junky IMDB Review Classification',
  category: 'Natural Language Processing',

  description:
    'Machine learning pipeline for automatic sentiment analysis of IMDB movie reviews using multiple NLP classification models.',

  longDescription:
    'Built and compared several natural language processing models capable of classifying movie reviews as positive or negative. The project includes text preprocessing, feature extraction, model benchmarking, and performance evaluation using F1-score.',

  technologies: [
    'Python',
    'Scikit-learn',
    'NLP',
    'TF-IDF',
    'Logistic Regression',
    'Machine Learning',
    'Pandas',
    'NumPy'
  ],

  metrics: [
    { label: 'Task', value: 'Binary Classification' },
    { label: 'Metric', value: 'F1 Score' },
    { label: 'Dataset', value: 'IMDB Reviews' }
  ],

  image: '/projects/imdb-review-classification.png',

  links: {
    github: 'https://github.com/cfelipe-yanez/film_junky_imdb_review_classification'
  },

  overview:
    'Developed an NLP pipeline capable of automatically detecting negative movie reviews using supervised machine learning techniques.',

  problem:
    'Manually moderating thousands of user reviews is expensive and slow. Automated sentiment classification enables faster content analysis and moderation.',

  objectives: [
    'Explore the review dataset.',
    'Preprocess text.',
    'Generate text features.',
    'Compare multiple ML classifiers.',
    'Reach an F1 score above 0.85.'
  ],

  methodology:
    'Performed text cleaning, tokenization, TF-IDF vectorization, model training, hyperparameter tuning, and comparative evaluation across several machine learning algorithms.',

  dataset:
    'IMDB movie reviews labeled as positive or negative.',

  architecture:
    'Text preprocessing pipeline followed by TF-IDF feature extraction and supervised classification models including Logistic Regression and tree-based methods.',

  training:
    'Models were trained on the training split and evaluated on the test set using F1-score as the primary metric.',

  evaluation: [
    { label: 'Task', value: 'Sentiment Analysis' },
    { label: 'Metric', value: 'F1 Score' },
    { label: 'Models', value: 'Multiple' }
  ],

  results:
    'Achieved robust sentiment classification performance while comparing different NLP approaches for automated review analysis.',

  visualizations:
    'Class distribution, confusion matrices, ROC curves, and model performance comparison.',

  lessons:
    'Feature engineering through TF-IDF proved more influential than model complexity for this binary text classification task.',

  future:
    'Incorporate transformer-based architectures such as BERT to improve contextual understanding and classification accuracy.'
  },
  // Acá deje!
  {
    slug: 'good-seed-alcohol-age-verification',
    title: 'Good Seed Alcohol Age Verification',
    category: 'Computer Vision',
    description:
      'Deep learning computer vision system that estimates customer age from facial images to support automated age verification at retail checkout.',
    longDescription:
      'Developed and evaluated a convolutional neural network capable of estimating a customer’s age from facial images. The project explores image preprocessing, transfer learning, and regression-based deep learning to help retailers comply with alcohol sales regulations while minimizing manual verification.',

    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Computer Vision',
      'Deep Learning',
      'Transfer Learning',
      'Pandas',
      'NumPy'
    ],

    metrics: [
      { label: 'Task', value: 'Age Estimation' },
      { label: 'Model', value: 'CNN' },
      { label: 'Domain', value: 'Retail AI' }
    ],

    image: '/projects/good-seed.png',

    links: {
      github: 'https://github.com/cfelipe-yanez/good_seed_alcohol_age_verification'
    },

    overview:
      'Designed an end-to-end deep learning pipeline capable of estimating a person’s age from facial images, providing an automated decision-support tool for age-restricted product sales.',

    problem:
      'Retail employees must verify customer age before selling alcohol. Manual verification is inconsistent and time-consuming, creating an opportunity for computer vision to provide automated assistance.',

    objectives: [
      'Analyze the image dataset.',
      'Preprocess facial images for deep learning.',
      'Train a convolutional neural network for age estimation.',
      'Evaluate prediction performance.',
      'Assess the feasibility of AI-assisted age verification.'
    ],

    methodology:
      'Performed exploratory analysis, image preprocessing, data loading, and deep learning model training using TensorFlow/Keras. Transfer learning techniques were applied to improve performance while reducing training time.',

    dataset:
      'Facial image dataset containing photographs labeled with the corresponding age of each individual.',

    architecture:
      'Transfer learning CNN implemented in TensorFlow/Keras with image preprocessing, batch generation, regression output, and model evaluation.',

    training:
      'Images were resized and normalized before training. The network was fine-tuned using supervised learning to minimize age prediction error.',

    evaluation: [
      { label: 'Prediction', value: 'Age Regression' },
      { label: 'Framework', value: 'TensorFlow' },
      { label: 'Learning', value: 'Transfer Learning' }
    ],

    results:
      'Successfully demonstrated that deep learning can estimate customer age from facial images, showing the potential of computer vision to support regulatory compliance in retail environments.',

    visualizations:
      'Age distribution, prediction error analysis, training curves, and sample age predictions.',

    lessons:
      'Image quality, balanced age distribution, and transfer learning significantly influence model performance in facial age estimation.',

    future:
      'Integrate face detection, uncertainty estimation, and real-time inference for deployment in retail checkout systems.'
  },
  {
    slug: 'sure-tomorrow-insurance-machine-learning',
    title: 'Sure Tomorrow Insurance Analytics',
    category: 'Machine Learning',

    description:
      'Machine learning pipeline for insurance analytics, including customer similarity search, benefit prediction, regression modeling, and privacy-preserving data transformations.',

    longDescription:
      'Developed an end-to-end machine learning solution for an insurance company, addressing customer similarity search, benefit prediction, regression analysis, and privacy-preserving data transformation. The project demonstrates how multiple machine learning techniques can be integrated to support business decision-making while protecting sensitive customer information.',

    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'K-Nearest Neighbors',
      'Linear Regression',
      'Classification',
      'Data Privacy'
    ],

    metrics: [
      { label: 'ML Tasks', value: '4' },
      { label: 'Algorithms', value: 'KNN & Linear Regression' },
      { label: 'Domain', value: 'Insurance Analytics' },
    ],

    image: '/projects/sure-tomorrow-insurance.png',

    links: {
      github: 'https://github.com/cfelipe-yanez/sure_tomorrow_insurance_ml',
    },

    overview:
      'Designed a multi-task machine learning pipeline that combines customer similarity search, predictive modeling, and privacy-preserving transformations for insurance analytics.',

    problem:
      'Insurance companies need reliable methods to identify similar customers, predict insurance benefits, estimate future claims, and protect sensitive personal information without degrading model performance.',

    objectives: [
      'Identify similar customers using K-Nearest Neighbors.',
      'Predict insurance benefit eligibility using classification.',
      'Estimate the number of insurance benefits through regression.',
      'Develop a privacy-preserving data transformation that maintains predictive performance.',
    ],

    methodology:
      'Performed data exploration and preprocessing before implementing KNN-based similarity search, classification, and regression models. A feature transformation technique was applied to anonymize sensitive information while preserving the effectiveness of machine learning models.',

    dataset:
      'Customer insurance dataset containing demographic information, annual salary, family size, and historical insurance benefits.',

    architecture:
      'Data preprocessing pipeline followed by independent machine learning workflows for similarity search, classification, regression, and privacy-preserving feature transformation.',

    training:
      'Models were trained using supervised learning techniques and evaluated against baseline approaches to verify predictive performance after data transformation.',

    evaluation: [
      { label: 'Similarity Search', value: 'KNN' },
      { label: 'Classification', value: 'Insurance Benefits' },
      { label: 'Regression', value: 'Benefit Count' },
    ],

    results:
      'Successfully demonstrated that customer analytics and predictive modeling can be performed while preserving data privacy, with anonymized features maintaining comparable machine learning performance.',

    visualizations:
      'Customer similarity analysis, prediction performance comparisons, regression evaluation, and privacy transformation validation.',

    lessons:
      'Effective data anonymization techniques can preserve model utility while significantly improving the protection of sensitive customer information.',

    future:
      'Extend the project with advanced privacy-preserving techniques such as differential privacy, federated learning, and secure multi-party computation.'
  },
  {
  slug: 'ride-sharing-demand-prediction',
  title: 'Ride-Sharing Demand Prediction',
  category: 'Time Series Forecasting',

  description:
    'Machine learning time series forecasting pipeline that predicts hourly taxi demand to optimize driver allocation during peak periods.',

  longDescription:
    'Developed a forecasting model to predict hourly taxi demand using historical ride request data. The project includes time series preprocessing, feature engineering, model comparison, and hyperparameter optimization to improve operational planning and fleet allocation.',

  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Scikit-learn',
    'LightGBM',
    'XGBoost',
    'Time Series Analysis',
    'Feature Engineering'
  ],

  metrics: [
    { label: 'Prediction', value: 'Hourly Demand' },
    { label: 'Metric', value: 'RMSE' },
    { label: 'Domain', value: 'Mobility Analytics' },
  ],

  image: '/projects/ride-sharing-demand.png',

  links: {
    github: 'https://github.com/cfelipe-yanez/sweet_lift_taxi_demand_prediction',
  },

  overview:
    'Built a machine learning pipeline to forecast hourly taxi demand from historical ride requests, helping optimize fleet allocation and operational efficiency.',

  problem:
    'Taxi companies must anticipate fluctuations in customer demand to efficiently assign drivers and reduce passenger wait times. Accurate demand forecasting enables better operational planning during peak hours.',

  objectives: [
    'Analyze historical taxi demand patterns.',
    'Resample ride requests into hourly intervals.',
    'Engineer time-based features.',
    'Train and compare multiple forecasting models.',
    'Evaluate performance using RMSE.'
  ],

  methodology:
    'Historical ride requests were aggregated into hourly intervals before exploratory analysis and feature engineering. Multiple regression models were trained and tuned to capture temporal demand patterns, with performance evaluated on a held-out test set.',

  dataset:
    'Historical taxi request data containing timestamped ride orders aggregated into hourly demand observations.',

  architecture:
    'Time series preprocessing pipeline followed by feature engineering, supervised regression models, hyperparameter tuning, and model evaluation using RMSE.',

  training:
    'Generated temporal features such as hour of day and calendar information, then trained multiple regression algorithms to predict future hourly demand.',

  evaluation: [
    { label: 'Task', value: 'Time Series Forecasting' },
    { label: 'Target', value: 'Hourly Taxi Demand' },
    { label: 'Metric', value: 'RMSE ≤ 48' },
  ],

  results:
    'Developed a forecasting model capable of accurately predicting hourly taxi demand, providing actionable insights for improving fleet management and resource allocation.',

  visualizations:
    'Demand trends over time, seasonal patterns, feature importance, prediction vs. actual demand, and model performance comparisons.',

  lessons:
    'Feature engineering based on temporal patterns was essential for improving forecasting accuracy, often contributing more than increasing model complexity.',

  future:
    'Incorporate weather conditions, holidays, traffic data, and deep learning approaches such as LSTM or Temporal Fusion Transformers to further improve demand forecasting.'
},
]
export const skillCategories = [
  {
    category: 'Programming',
    skills: [
      'Python',
      'SQL',
      'MATLAB',
    ],
  },
  {
    category: 'Data Science',
    skills: [
      'Data Analysis',
      'Exploratory Data Analysis (EDA)',
      'Statistical Analysis',
      'Predictive Modeling',
      'Feature Engineering',
      'Data Visualization',
    ],
  },
  {
    category: 'Machine Learning & AI',
    skills: [
      'Machine Learning',
      'Computer Vision',
      'Deep Learning',
      'Model Evaluation',
      'Scikit-learn',
    ],
  },
  {
    category: 'Biomedical Engineering',
    skills: [
      'Biomedical Signal Processing',
      'Clinical Data Analysis',
      'Biomedical Instrumentation',
      'Research',
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      'Git',
      'Linux',
      'Docker',
      'Power BI',
      'Arduino',
    ],
  },
]

export const publications = [
  {
    title:
      'Development and Evaluation of an Intelligent Real-Time Hand Hygiene Monitoring System with Interactive Feedback to Enhance Hand Hygiene Adherence',
    venue: 'Q2 Journal (Under Review)',
    type: 'Journal Article',
    year: '2026',
    doi: '',
    pdf: '#',
  },
  {
    title:
      'Exceptional In Situ Preservation of Chondrocranial Elements in a Coniacian Mosasaurid from Colombia',
    venue: 'Diversity',
    type: 'Journal Article',
    year: '2024',
    doi: '10.3390/d16050285',
    pdf: 'https://doi.org/10.3390/d16050285',
  },
  {
    title:
      'Evaluation of a Markerless Deep Learning-Based Motion Capture System for the Biomechanical Analysis of the Olive Ridley Sea Turtle (Lepidochelys olivacea)',
    venue: 'Revista Internacional de Pedagogía e Innovación Educativa',
    type: 'Journal Article',
    year: '2022',
    doi: '10.51660/ripie.v2i2.75',
    pdf: 'https://doi.org/10.51660/ripie.v2i2.75',
  },
  {
    title:
      'Monitoring the Cardiovascular Electrical System Using Bicycle Ergometer Electrocardiography',
    venue: 'Revista Internacional de Pedagogía e Innovación Educativa',
    type: 'Journal Article',
    year: '2022',
    doi: '10.51660/ripie.v2i1.76',
    pdf: 'https://doi.org/10.51660/ripie.v2i1.76',
  },
]

export const teaching = [
  {
  course: 'Bioinstrumentation',
  institution: 'Pontificia Universidad Javeriana',
  role: 'Adjunct Lecturer',
  description:
    'Teach Bioinstrumentation to undergraduate Bioengineering and Electronic Engineering students, delivering theoretical and laboratory sessions on biomedical instrumentation, physiological signal acquisition, sensors, measurement systems, and data analysis while mentoring engineering projects and hands-on laboratory activities.',
},
  {
  course: 'Bioinstrumentation',
  institution: 'Escuela Colombiana de Ingeniería Julio Garavito',
  role: 'Adjunct Lecturer',
  description:
    'Delivered theoretical and laboratory courses in Bioinstrumentation, designed and supervised hands-on laboratory sessions, and mentored undergraduate students in biomedical measurement techniques and engineering problem-solving.',
},
]

export const experience = [
  {
    period: 'Aug 2021 — Present',
    role: 'Biomedical Research Engineer – Data Analysis & Machine Learning',
    org: 'Fundación Clínica Shaio – Research Group EXPLORATORIUM',
    type: 'Research',
    description:
      'Develop Python-based analytical pipelines for biomedical signal processing, clinical data analysis, and computer vision applications. Lead AI and machine learning projects involving physiological monitoring, hand hygiene detection, remote heart-rate estimation, and biomedical sensing technologies while collaborating with multidisciplinary healthcare research teams.',
  },
  {
    period: 'Jan 2026 — Present',
    role: 'Adjunct Lecturer in Bioinstrumentation',
    org: 'Pontificia Universidad Javeriana',
    type: 'Teaching',
    description:
      'Teach Bioinstrumentation to Bioengineering and Electronic Engineering students, covering biomedical instrumentation, physiological signal acquisition, sensors, measurement systems, and data analysis. Mentor undergraduate students through laboratory activities and engineering projects.',
  },
  {
    period: 'Aug 2021 — Jul 2022',
    role: 'Adjunct Lecturer in Bioinstrumentation',
    org: 'Escuela Colombiana de Ingeniería Julio Garavito',
    type: 'Teaching',
    description:
      'Delivered theoretical and laboratory courses in bioinstrumentation, supervised practical sessions, and mentored undergraduate students in biomedical measurement systems and engineering methodologies.',
  },
  {
    period: 'Jan 2020 — Aug 2021',
    role: 'Biomedical Research Engineer',
    org: 'Research Assistant for Dr. Jorge Reynolds Pombo',
    type: 'Research',
    description:
      'Developed analytical workflows for cardiovascular and neurological signal processing using Python. Applied statistical analysis, data modeling, and biomedical signal processing to support clinical research, healthcare innovation, and scientific dissemination.',
  },
]

export const certifications = [
  {
    title: 'Data Scientist',
    issuer: 'TripleTen',
    year: '2024',
    status: 'Completed',
  },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
