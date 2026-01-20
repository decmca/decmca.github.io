const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Declan McAlinden',
  role: 'Data Scientist / Artificial Intelligence Researcher',
  picture: '',

  description:
    'Welcome to my portfolio. There are a number of projects linked below, that demonstrate my skills in coding bespoke solutions as well as implementing open-source tools and adapting these for a use-case.',
  resume: 'https://drive.google.com/file/d/1tRkovnawq9GWSSHrSGCeInfrJNwalhMN/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/dmuk/',
    github: 'https://github.com/decmca',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Flexible Amyloid-tau Coupling Improves Tau Pathology Prediction In Alzheimer’s Disease',
    description:
      'Utilised the UCL Pond Network Spreading Model and the Google Brain Connectivity toolboxes to predict the early onset of Alzheimers Disease. Key contributions include re-working the toolbox to utilise a random forest based optimisation, enabling a 25x speed up for permutation testing and the additional of a fourth model to the toolbox. An adapted version of this work, utilising individual amyloid and tau connectome strengths instead of varying the connectomes, has been submitted for publication by the Alzheimer\'s Association and is currently under review. The new model significantly reduced SSE, by between 17.46% to 24.40% for amyloid positive individuals, and therefore has implications for designing and evaluating clinical trials of Alzheimer’s disease-modifying anti-tau therapies.  ',
    stack: ['Dementia', 'Biomarkers', 'Physics-informed ML'],
    sourceCode: 'https://github.com/ucl-pond/network_spreading_models',
    livePreview: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5707002',
    image: 'Alzheimers.png',
  },
        {
    name: 'Top 5 UK Supermarket Web Scraper, Product Analysis and Price Comparison Tool',
    description:
      'Web-scraped product data from the top 5 UK supermarkets (Tesco, Sainsbury\'s, Asda, Morrisons, and Aldi) to create a product analysis / price comparison tool. This project involved handling dynamic web content, data cleaning / standardisation, data analysis and building a user-friendly interface to visualise product and compare prices across different retailers in Streamlit. This mini-application was fully automated from web-scraping to deployment.',
    stack: ['Streamlit', 'Selenium', 'Automation'],
    sourceCode: 'https://uksupermarketscraping.streamlit.app/Process_Explanation',
    livePreview: 'https://uksupermarketscraping.streamlit.app/',
    image: 'UK_Webscraper.png',
  },
  {
    name: 'Fourth Placed Kaggle Competition Solution: X-Ray Chest Disease Classification',
    description:
      'This fourth-placed Kaggle solution for chest X-ray disease classification employs a robust ensemble of Swin, ConvNeXt, and EVA-X models, trained with stratified K-fold cross-validation on diverse X-Ray datasets. The approach integrates advanced medical image augmentations, progressive regularisation, and test-time augmentation to enhance generalisation and reliability. Model configurations are optimised for large-scale medical imaging, and the pipeline automates training, validation, and inference, delivering high performance on a challenging multi-label task. The final score was less than 0.003 from first place.',
    stack: ['X-Ray', 'Medical Imaging', 'Classification'],
    sourceCode: 'https://github.com/decmca/X_Ray_Imaging_Project',
    /*
    livePreview: 'https://github.com',
    */
    image: 'x_ray.jpg',
  },
    {
    name: 'Robotic Arm Movement Detection using Computer Vision',
    description:
      'This project focuses on detecting and classifying the movements of a robotic arm using computer vision techniques. By leveraging advanced image processing and machine learning algorithms, the system can accurately identify different types of movements and estimate the next pose. This was completed as part of my UCL MSc and was graded at 89%. Note that the architecure choices were restricted, as no pre-trained models could be utilised.',
    stack: ['Python', 'Computer Vision', 'Robotics'],
    sourceCode: 'https://github.com/decmca/Robotic_Arm_Movement_Prediction',
    /*
    livePreview: 'https://github.com',
    */
    image: 'jaco_play_teaser.jpeg',
  },
    {
    name: 'Using 3LC for a train-fix-retrain object detection workflow',
    description:
      'This project showcases an iterative, data-centric approach to object detection using 3LC to fix mislabeled bounding boxes. The improved dataset increases validation MAP50 by 5%. This demonstrates an effective way to improve performance on small datasets in a semi-automated manner.',
    stack: ['Train-Fix-Retrain', '3LC', 'Object Detection'],
    sourceCode: 'https://github.com/decmca/cotton_weed/tree/main',
    livePreview: 'https://drive.google.com/drive/folders/1fn9sSSS_yAylmyG05REGJmQU2c4DHH8c?usp=sharing',
    image: '3LC_Zoomed_In_Missing_Label.png',
  },
  /* 
  {
    name: 'LLM retrieval etc style of project using open source tools',
    description:
      'Add Description',
    stack: ['Python', 'LLM', 'RAG'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: '',
  },
  */
    {
    name: 'MSc Dissertation Placeholder',
    description:
      'To be added after expiration of Non-Disclosure Agreement.',
    stack: ['', ],
    sourceCode: '',
    livePreview: '',
    image: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Machine Learning',
  'Artificial Intelligence',
  'Git',
  'CI/CD',
  '3LC',
  'Alteryx',
  'Streamlit'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: '',
}

export { header, about, projects, skills, contact }
