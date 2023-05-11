const data = [
	{
		"title": "Design, Benchmarking and Explainability Analysis of a Game-Theoretic Framework towards Energy Efficiency in Smart Infrastructure",
		value: {
			humans: ["End-user"],
			problems: ["Inefficiencies"],
			technologies: ["Deep recurring newtorks", "Neural networks"],
			promises: ["Optimization"],
			data: ["Logs"],
		},
		"loop": [
			{
				"actor":"human",
				"type":"building manager",
				"index": 1,
				"radius": 1,
				"title":"Interface Creation",
				"label":"Building managers interact with occupants to incentivize energy-efficient behavior"
			},
			{
				"actor":"human",
				"type": null,
				"index": 2,
				"radius": 1,
				"title":"Social Game Experiment",
				"label":"Conduct a social game experiment on the Nanyang Technological University campus to study human decision-making towards energy usage in competitive settings"
			},
			{
				"actor":"human",
				"type":null,
				"index": 3,
				"radius": 1,
				"title":"Human Decision-Making Model",
				"label":"Develop a human decision-making model based on data obtained from the social game experiment"
			},
			{
				"actor":"algorithm",
				"type":"Utility Estimation",
				"index": 5,
				"radius": 1,
				"title":"Utility Estimation",
				"label":"Introduce utility estimation along with several proposed machine learning & deep learning algorithms for sequential decision games"
			},
			{
				"actor":"algorithm",
				"type":"Machine Learning Algorithms",
				"index": 4,
				"radius": 1,
				"title":"Machine Learning Algorithms",
				"label":"Propose machine learning algorithms for benchmarking occupant actions towards energy efficiency, including Random Forest, Gradient Boosting, and Support Vector Regression"
			},
			{
				"actor":"algorithm",
				"type":"Deep Learning Algorithms",
				"index": 3,
				"radius": 1,
				"title":"Deep Learning Algorithms",
				"label":"Propose deep learning algorithms for benchmarking occupant actions towards energy efficiency, including Long Short-Term Memory (LSTM) and Convolutional Neural Networks (CNN)"
			},
			{
				"actor":"algorithm",
				"type":"Graphical Lasso Algorithm",
				"index": 2,
				"radius": 1,
				"title":"Graphical Lasso Algorithm",
				"label":"Use the graphical lasso algorithm to understand latent conditional dependence between variables"
			},
			{
				"actor":"algorithm",
				"type":"Explainability Analysis Methodology",
				"index": 1,
				"radius": 1,
				"title":"Explainability Analysis Methodology",
				"label":"Describe the methodology for explainability analysis of proposed machine learning & deep learning algorithms"
			}
		]
	},{
		"title": "A Novel Deep Learning Pipeline for Retinal Vessel Detection in Fluorescein Angiography",
		value: {
			humans: ["Students"],
			problems: ["Inefficiencies"],
			technologies: ["Machine learning"],
			promises: ["Personalization"],
			data: ["Bodily traces"],
		},
		"loop": [
			{
				"actor": "human",
				"type": "Ophthalmologists",
				"index": 1,
				"radius": 1,
				"title": "CF Annotation",
				"label": "Manually annotate retinal vessels in color fundus (CF) images"
			},
			{
				"actor": "algorithm",
				"type": "Deep Neural Networks (DNNs)",
				"index": 2,
				"radius": 1,
				"title": "CF Detection",
				"label": "Detect retinal vessels in CF images using supervised learning"
			},
			{
				"actor":"human",
				"type":"Ophthalmologists",
				"index": 2,
				"radius": 1,
				"title":"FA Annotation",
				"label":"Manually annotate retinal vessels in FA images"
			},
			{
				"actor":"algorithm",
				"type":"Deep Neural Networks (DNNs)",
				"index": 1,
				"radius": 1,
				"title":"FA Detection",
				"label":"Detect retinal vessels in fluorescein angiography (FA) images using transfer learning from CF images"
			},
		]
	}, {
		"title": "CAIPI in Practice: Towards Explainable Interactive Medical Image Classification",
		value: {
			humans: ["Students"],
			problems: ["Inefficiencies"],
			technologies: ["Machine learning"],
			promises: ["Personalization"],
			data: ["Bodily traces"],
		},
		"loop": [
			{
				"actor": "human",
				"type": "clinician",
				"radius": 1,
				"index": 1,
				"title": "data preparation",
				"label": "collect and preprocess medical data"
			},
			{
				"actor": "algorithm",
				"type":"machine learning model",
				"radius": 1,
				"index": 3,
				"title":"data preprocessing algorithm",
				"label":"clean and preprocess medical data for use in machine learning model training"
			},
			{
				"actor": "algorithm",
				"type":"machine learning model",
				"radius": 1,
				"index": 2,
				"title":"train on preprocessed data",
				"label":"train a machine learning model on preprocessed medical data to make predictions about new cases"
			},
			{
				"actor": "algorithm",	
				"type": "explainable machine learning (XAI) model",
				"radius": 1,
				"index": 1,	
				"title": "explainability algorithm",	
				"label": "provide explanations for the decisions made by the machine learning model in a transparent way"
			},
			{
				"actor": "human",	
				"type":"clinician",
				"radius": 1,
				"index": 2,	
				"title":"model evaluation and correction",	
				"label":"evaluate performance of machine learning model and correct its decisions based on expert knowledge"
			},
			{
				"actor": "human",
				"type": "expert in domain knowledge",
				"radius": 1,
				"index": 3,
				"title": "model optimization",
				"label": "optimize machine learning model with input from domain experts to improve its performance"
			}
		]
	}, {
		"title": "Iterative Human and Automated Identification of Wildlife Images",
		value: {
			humans: ["Annotators"],
			problems: ["Data analysis"],
			technologies: ["Deep learning", "Machine learning"],
			promises: ["Human support"],
			data: ["Environmental data", "Annotations"],
		},
		"loop": [
			{
				"actor":"algorithm",
				"type":"deep learning model",
				"radius": 1,
				"order": 3,
				"title":"Image prediction",
				"label":"Predict categories of images using deep learning models trained from previous periods"
			},
			{
				"actor":"algorithm",
				"type":"deep learning model",
				"radius": 1,
				"index": 2,
				"title":"Confidence level calculation",
				"label":"Calculate confidence levels for predicted image categories"
			},
			{
				"actor":"human",
				"type":"annotator",
				"radius": 1,
				"index": 1,
				"title":"Verify low-confidence",
				"label":"Verify low-confidence predictions through human annotation"
			},
			{
				"actor":"human",
				"type":"annotator",
				"radius": 1,
				"index": 2,
				"title":"Provide annotations",
				"label":"Provide annotations for low-confidence predictions"
			},
			{
				"actor":"algorithm",
				"type":"deep learning model",
				"radius": 1,
				"index": 1,
				"title":"Model updates",
				"label":"Include pseudo-labels in final data set for further model updates or ecological analyses"
			}
		]
	}, {
		title: "Human and Smart Machine Co-Learning with Brain Computer Interface",
		value: {
			humans: ["Teachers", "Students", "Players"],
			problems: ["Learning"],
			technologies: ["Machine learning", "Neural network"],
			promises: ["Human support"],
			data: ["Bodily traces"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Professional Go players",
				"index": 1,
				"radius": 1,
				"title": "Playing Go games",
				"label": "Inviting professional Go players to play Go games on site with a smart machine using the Robotic DDF Go system gazing at the coded visual stimulus on the screen"
			},
			{
				"actor": "human",
				"type": "Students",
				"index": 2,
				"radius": 1,
				"title": "Playing Go games",
				"label": "Inviting students to play Go games on site with a smart machine using the Robotic DDF Go system gazing at the coded visual stimulus on the screen"
			},
			{
				"actor":"algorithm",
				"type":"Robotic DDF Go system",
				"index": 2,
				"radius": 1,
				"title":"Decode brainwaves",
				"label":"Continuously decoded the on-going EEG to send the move command to the game server."
			},
			{
				"actor": "human",
				"type": "Technician",
				"index": 3,
				"radius": 1,
				"title": "Check impedance",
				"label": "The technician must check the impedance between the scalp and the EEG electrodes first for collecting the good quality of EEG signals"
			},
			{
				"actor":"algorithm",
				"type":"Robotic DDF Go system",
				"index": 1,
				"radius": 1,
				"title":"Respond to moves",
				"label":"Respond to moves by the player."
			},
		] 
	}, {
		title: "Improving Ethical Outcomes with Machine-in-the-Loop: Broadening Human Understanding of Data Annotations",
		value: {
			humans: ["Students", "Teachers", "Administrators"],
			problems: ["Inequalities"],
			technologies: ["Machine learning"],
			promises: ["Automation"],
			data: ["Written text"],
		},
		loop: [
			{
				"actor":"human",
				"type":"student",
				"index": 1,
				"radius": 1,
				"title":"Data generation",
				"label":"Translate minoritized students' lived experiences into 21st century skills, issues micro-credentials, and creates personal skills portfolio."
			},
			{
				"actor":"human",
				"type":"annotator",
				"index": 2,
				"radius": 1,
				"title":"Data annotation",
				"label":"Annotate data with labels for supervised machine learning"
			},
			{
				"actor":"algorithm",
				"type":"model",
				"index": 2,
				"radius": 1,
				"title":"Fairness metric evaluation",
				"label":"Evaluate model performance using fairness metrics to identify and address potential biases."
			},
			{
				"actor": "algorithm",
				"type": "model",
				"index": 1,
				"radius": 1,
				"title": "Refine model",
				"label": "Refine machine learning models based on human feedback"
			},
		]
	}, {
		title: "Threat determination for radiation detection from the Remote Sensing Laboratory",
		value: {
			humans: ["Annotators"],
			problems: ["Data analysis"],
			technologies: ["Machine learning"],
			promises: ["Human support"],
			data: ["Environmental data", "Annotations"],
		},
		loop: [
			{
				"actor":"human",
				"type":"operator",
				"index": 1,
				"radius": 1,
				"title":"Radiation Detection",
				"label":"Searching for radiation sources using detection systems."
			},
			{
				"actor":"algorithm",
				"type":"detection system",
				"index": 2,
				"radius": 1,
				"title":"Soft-sensing Algorithms",
				"label":"Utilizing soft-sensing algorithms to discriminate potential threat and non-threat objects."
			},
			{
				"actor":"algorithm",
				"type":"Tensorflow",
				"index": 1,
				"radius": 1,
				"title":"Training",
				"label":"Processing data using machine learning models to identify potential threats."
			}
		]
	}, {
		title: "Accelerating COVID-19 Differential Diagnosis with Explainable Ultrasound Image Analysis",
		value: {
			humans: ["Medical experts"],
			problems: ["Disease prevention"],
			technologies: ["Deep learning", "Neural networks"],
			promises: ["Accuracy"],
			data: ["Videos"],
		},
		loop: [
			{
				"actor":"algorithm",
				"type":"ultrasound machine",
				"index": 3,
				"radius": 1,
				"title":"Ultrasound image acquisition and processing",
				"label":"Acquire lung ultrasound images using standardized protocol, process images for analysis"
			},
			{
				"actor": "algorithm",
				"type": "machine learning model",
				"index": 2,
				"radius": 1,
				"title": "CAM generation",
				"label": "Generate class activation maps (CAMs) to highlight pulmonary biomarkers"
			},
			{
				"actor":"human",
				"type":"medical expert",
				"index": 1,
				"radius": 1,
				"title":"Expert interpretation of CAMs and ultrasound images",
				"label":"Interpret CAMs and ultrasound images to identify COVID-19 biomarkers and differentiate from other lung diseases"
			},
			{
				"actor":"algorithm",
				"type":"machine learning model",
				"index": 1,
				"radius": 1,
				"title":"Model training and validation",
				"label":"Train and validate machine learning models using the dataset and CAMs to improve diagnostic accuracy"
			},
		]
	}, {
		title: "Data Augmentation with Paraphrase Generation and Entity Extraction for Multimodal Dialogue System",
		value: {
			humans: ["End-user"],
			problems: ["Impairments"],
			technologies: ["Natural language processing", "Speech recognition"],
			promises: ["Optimization"],
			data: ["Voice"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Domain experts",
				"index": 1,
				"radius": 1,
				"title": "Intent and Entity Definition",
				"label": "Defining intents and entities relevant to the task-oriented SDS pipeline."
			},
			{
				"actor": "human",
				"type": "Children",
				"index": 2,
				"radius": 1,
				"title": "Data Collection",
				"label": "Creating domain-specific and task-relevant datasets by collecting children's utterances related to basic math concepts."
			},
			{
				"actor": "human",
				"type":"Annotator", 
				"index": 3,
				"radius": 1,
				"title":"Data Annotation", 
				"label":"Annotating the data with intents and entities."
			},
			{
				"actor":"algorithm", 
				"type":"NLU Model", 
				"index": 4,
				"radius": 1,
				"title":"Model Training", 
				"label":"Training and evaluating NLU models using iterative training processes."
			},
			{
				"actor":"algorithm", 
				"type":"Data Augmentation Techniques", 
				"index": 3,
				"radius": 1,
				"title":"Paraphrase Generation and Entity Extraction", 
				"label":"Using data augmentation techniques such as paraphrase generation and entity extraction to improve NLU model performance on small-size task-specific datasets."
			},
			{
				"actor":"algorithm", 
				"type":"Contextually Aware Intelligent Agents",
				"index": 2,
				"radius": 1, 
				"title":"Intelligent Agent Development", 
				"label":"Incorporating contextually aware intelligent agents to understand users and their surroundings in real-time."
			},
			{
				"actor":"algorithm", 
				"type":"Spoken Dialogue Systems (SDS)", 
				"index": 1,
				"radius": 1,
				"title":"SDS Implementation", 
				"label":"Using Spoken Dialogue Systems (SDS) as crucial building blocks to handle efficient task-oriented communication with children in game-based learning settings."
			}
		]
	}, {
		title: "AutoMOS: Learning a non-intrusive assessor of naturalness-of-speech",
		value: {
			humans: ["Annotators"],
			problems: ["Data analysis"],
			technologies: ["Deep recurring networks"],
			promises: ["Accuracy"],
			data: ["Voice"],
		},
		loop: [
			{
				"actor": "algorithm",
				"type": "Speech synthesizer",
				"index": 2,
				"radius": 1,
				"title": "Data collection",
				"label": "All utterances from a given synthesizer and are allocated to a single training or evaluation fold, or to a single aggregate metric,"
			},
			{
				"actor": "human",
				"type": "raters",
				"index": 1,
				"radius": 1,
				"title": "Speech Quality Assessment",
				"label": "Human raters are employed to assess synthesized speech quality."
			},
			{
				"actor": "algorithm",
				"type": "Neural network",
				"index": 1,
				"radius": 1,
				"title": "AutoMOS Model Development",
				"label": "A deep recurrent neural network is developed to model human raters' mean opinion scores of synthesized speech using only a raw waveform."
			}
		]
	}, {
		title: "Deep Visual Perception for Dynamic Walking on Discrete Terrain",
		value: {
			humans: ["Not mentioned"],
			problems: ["Situating"],
			technologies: ["Neural networks"],
			promises: ["Automation"],
			data: ["Videos"],
		},
		loop: [
			{
				"actor": "human",
				"type":"researcher", 
				"index": 2,
				"radius": 1,
				"title":"Dataset Creation", 
				"label":"Creating a synthetic dataset using a systematic methodology to train the CNN-based deep perception model for accurate step length estimation."
			},
			{
				"actor": "algorithm",
				"type": "deep neural network",
				"index": 2,
				"radius": 1,
				"title": "Step Length Estimation",
				"label": "Designing and training a custom convolutional neural network architecture to predict step length to the next foothold using a sampled image preview of the upcoming terrain at foot impact."
			},
			{
				"actor": "algorithm",
				"type":"safety-critical controller",
				"index": 1,
				"radius": 1, 
				"title":"Limit Cycle Walking", 
				"label":"Incorporating an inner-loop safety-critical controller into the physics simulator that can generate stable and safe limit cycle walking of a desired step length." 
			},
			{
				"actor": "human",
				"type": "researcher",
				"index": 1,
				"radius": 1,
				"title": "Evaluate Visual Perception System",
				"label": "Building and systematically evaluating a Deep Visual Perception system to be used by a planar dynamic walking robot in order to autonomously walk on discrete terrain."
			}
		]
	}, {
		title: "From Hand-Perspective Visual Information to Grasp Type Probabilities: Deep Learning via Ranking Labels",
		value: {
			humans: ["Patients"],
			problems: ["Impairments"],
			technologies: ["Neural network"],
			promises: ["Human support"],
			data: ["Bodily traces"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Participant",
				"index": 1,
				"radius": 1,
				"title": "Data collection",
				"label": "An experimenter wore a headband which held a camera for the human eye-view, while another camera was attached on experimenter’s right hand to collect visual information from the hand aspect."
			},
			{
				"actor": "human",
				"type": "Researchers",
				"index": 2,
				"radius": 1,
				"title": "Data annotation",
				"label": "To estimate the probabilistic distribution and ranking of the gestures, each image was annotated by a ranking label – an ordered permutation of 5 grasp types rather than a single grasp type."
			},
			{
				"actor": "algorithm",
				"type": "Convolutional Neural Network",
				"index": 1,
				"radius": 1,
				"title": "Estimation for Ranking Label",
				"label":  "Extract features from images, and builds a model to solve the distribution estimation problem by exploiting the ranking label and visual information."
			},
			{
				"actor": "human",
				"type": "Patient",
				"index": 3,
				"radius": 1,
				"title": "Input",
				"label": "Providing input to the AI system through a user interface in a real-case scenario."
			}
		]
	}, {
		title: "Future of Smart Classroom in the Era of Wearable Neurotechnology",
		value: {
			humans: ["Students"],
			problems: ["Inefficiencies"],
			technologies: ["Machine learning"],
			promises: ["Human support", "Human collaboration"],
			data: ["Bodily traces"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Students",
				"index": 1,
				"radius": 1,
				"title": "Class",
				"label": "Attendance of in-person and remote classes"
			},
			{
				"actor": "algorithm",
				"type": "Wearable technology",
				"index": 3,
				"radius": 1,
				"title": "Data processing and inference",
				"label": "Infer cognitive response of students, detect stress, focus, sleep quality and assimilation."
			},
			{
				"actor": "algorithm",
				"type": "Recommendation engines and adaptation algorithms",
				"index": 1,
				"radius": 1,
				"title": "Recommendations",
				"label": "Provide adaptive materials"
			},
			{
				"actor": "human",
				"type": "Students",
				"index": 1,
				"radius": 1,
				"title": "Class",
				"label": "Attendance of in-person and remote classes"
			},
			{
				"actor": "algorithm",
				"type": "Wearable technology",
				"index": 3,
				"radius": 1,
				"title": "Data processing and inference",
				"label": "Infer cognitive response of students, detect stress, focus, sleep quality and assimilation."
			},
			{
				"actor": "algorithm",
				"type": "Recommendation engines and adaptation algorithms",
				"index": 2,
				"radius": 1,
				"title": "Recommendations",
				"label": "Recommend group members, detect group coherence, aggregate statistics for students."
			},
			
			{
				"actor": "human",
				"type": "Teacher",
				"index": 2,
				"radius": 1,
				"title": "Adjust class",
				"label": "Instructed material (quizzes, task assignments, breaks)"
			},
		]
	}, {
		title: "Interactive Segmentation and Visualization for Tiny Objects in Multi-megapixel Images",
		value: {
			humans: ["End-user", "Implicit annotators"],
			problems: ["Analysis"],
			technologies: ["Image content recognition"],
			promises: ["Ease of use"],
			data: ["Images, Annotations"],
		},
		loop: [
			{
				"actor": "algorithm",
				"type": "image processing",
				"index": 3,
				"radius": 1,
				"title": "Segmentation",
				"label": "Algorithm segments images into regions of interest"
			},
			{
				"actor": "human",
				"type": "user interface",
				"index": 1,
				"radius": 1,
				"title": "Interactive Segmentation",
				"label": "Humans interactively refine image segmentation to improve accuracy"
			},
			{
				"actor": "human",
				"type": "user interface",
				"index": 2,
				"radius": 1,
				"title": "Visualization",
				"label": "Humans visualize image segmentation results to provide feedback for model improvement"
			},
			{
				"actor": "algorithm",
				"type": "machine learning model",
				"index": 2,
				"radius": 1,
				"title": "Active Learning",
				"label": "Algorithm selects data samples for human annotation to improve model accuracy"
			},
			{
				"actor": "human",
				"type": "user interface",
				"index": 3,
				"radius": 1,
				"title": "Editing",
				"label": "Humans edit image segmentation results to improve accuracy of machine learning models"
			},
			{
				"actor": "algorithm",
				"type": "machine learning model",
				"index": 1,
				"radius": 1,
				"title": "Active Learning",
				"label": "Algorithm selects data samples for human annotation to improve model accuracy"
			},
		]
	}, {
		title: "Interpreting and improving natural-language processing (in machines) with natural language-processing (in the brain)",
		value: {
			humans: ["Annotators"],
			problems: ["Data analysis"],
			technologies: ["Deep learning", "Machine learning"],
			promises: ["Human support"],
			data: ["Environmental data", "Annotations"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Researchers",
				"index": 1,
				"radius": 1,
				"title": "Dataset construction",
				"label": "The sentences were chosen to be complex and naturalistic, in order to better capture the kinds of language processing that occur in real-world situations."
			},
			{
				"actor": "human",
				"type": "Subject",
				"index": 2,
				"radius": 1,
				"title": "Data recording",
				"label": "Reading complex natural text"
			},
			{
				"actor": "algorithm",
				"type": "NLP model",
				"index": 2,
				"radius": 1,
				"title": "Extraction",
				"label": "Extracting word and sequence embeddings from each of the four NLP models (ELMo, USE, BERT, and Transformer-XL)."
			},
			{
				"actor":"algorithm",
				"type":"Support Vector Regression (SVR)",
				"index": 1,
				"radius": 1,
				"title":"Brain activity prediction",
				"label":"Predicting brain activity patterns based on word and sequence embeddings from NLP models"
			},
			{
				"actor":"human",
				"type":"Researchers",
				"index": 3,
				"radius": 1,
				"title":"Validation",
				"label":"Comparing predicted brain activity patterns to actual brain activity patterns recorded during sentence reading"
			},
		]
	}, {
		title: "Keyword Spotter Model for Crop Pest and Disease Monitoring from Community Radio Data",
		value: {
			humans: ["Annotators"],
			problems: ["Data analysis"],
			technologies: ["Deep learning", "Machine learning"],
			promises: ["Human support"],
			data: ["Environmental data", "Annotations"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Researchers",
				"index": 1,
				"title": "Data collection",
				"label": "The researchers collected data from online radio stations and recorded 5-minute audio clips, which were stored in a shared Dropbox folder."
			},
			{
				"actor": "human",
				"type": "Researchers",
				"index": 2,
				"title": "Radio station identification",
				"label": "The researchers identified two radio stations that made their content available online as 1-hour recordings."
			},
			{
				"actor": "human",
				"type": "Researchers",
				"index": 3,
				"title": "Content sorting",
				"label": "The 1-hour recordings were sorted into talk shows and non-talk shows."
			},
			{
				"actor": "human",
				"type": "Researchers",
				"index": 4,
				"title": "Talk show trimming",
				"label": "The talk shows were trimmed into 5-minute audio clips."
			},
			{
				"actor": "human",
				"type": "Volunteers",
				"index": 5,
				"title": "Keyword identification",
				"label": "A team of three volunteers listened to the 5-minute audio clips and identified commonly used agricultural terms."
			},
			{
				"actor": "algorithm",
				"type": "CNN",
				"index":2,
				"title":"Keyword spotting model development",
				"label":"The identified terms were fed into a keyword spotting model, which was developed using machine learning-based speech keyword spotting techniques."
			},
			{
				"actor": "algorithm",
				"type": "CNN",
				"index":1,
				"title":"Audio stream analysis",
				"label":"The keyword spotting model was used to automatically identify the identified terms from audio streams."
			}
		]
	}, {
		title: "KnowledgeShovel: An AI-in-the-Loop Document Annotation System for Scientific Knowledge Base Construction",
		value: {
			humans: ["Researchers"],
			problems: ["Data generation"],
			technologies: ["Annotation system"],
			promises: ["Human support"],
			data: ["Written text", "Images", "Annotations"],
		},
		loop: [
			{
				"actor": "human",
				"type": "User",
				"index": 1,
				"title": "Preprocessing",
				"label": "The PDF document is preprocessed to extract text and images.",
			},
			{
				"title": "Table Extraction",
				"label": "Three AI modules are used for table extraction feature demonstration. These modules include a table detection module, a table structure recognition module, and a cell recognition module.",
				"actor": "algorithm",
				"type": "Table Detection, Table Structure Recognition, Cell Recognition",
				"index": 3,
			},
			{
				"title": "Entity Recognition",
				"label":"An entity recognition module is used to identify entities in the text, such as people, organizations, and locations.",
				"actor": "algorithm",
				"index": 2,
				"type":"Named Entity Recognition (NER)"
			},
			{
				"title":"Relation Extraction",
				"label":"A relation extraction module is used to identify relationships between entities in the text.",
				"actor": "algorithm",
				"index": 1,
				"type":"Open Information Extraction (OpenIE)"
			},
			{
				"title":"Human Verification and Correction",
				"label":"Humans can verify and correct the AI's intermediate output at each step of the pipeline. This helps prevent the accumulation of errors in the multi-stage multi-modality pipeline.",
				"index": 2,
				"actor": "human",
				"type": "Annotators"
			}
		]
	}, {
		title: "A Scalable Workflow to Build Machine Learning Classifiers with Clinician-in-the-Loop to Identify Patients in Specific Diseases",
		value: {
			humans: ["Medical experts"],
			problems: ["Inaccuracies"],
			technologies: ["Natural language processing"],
			promises: ["Accuracy"],
			data: ["Written text"],
		},
		loop: [
			{
				"actor": "human",
				"type": "Researcher",
				"index": 1,
				"title": "Data Preparation",
				"label": "Gather raw data from the database for each disease and prepare unstructured textual data and structured data from the raw data."
			},
			{
				"actor": "algorithm",
				"type": "machine learning",
				"index": 2,
				"title": "Phenotyping Algorithm",
				"label": "Run a pre-trained state-of-the-art phenotyping algorithm to extract phenotypic features of patients from unstructured textual data."
			},
			{
				"actor": "human",
				"type": "clinician-in-the-loop",
				"index": 2,
				"title": "Clinician Feedback",
				"label": "Leverage Clinician-in-the-Loop mechanism to iteratively work with the models and provide feedback for enhancement."
			},
			{
				"actor": "algorithm",
				"type": "machine learning",
				"index": 1,
				"title": "Disease Classifier",
				"label": "Combine phenotypic features with structured data to build a disease classifier using machine learning algorithms."
			}
		]
	}, {
		title: "Sharkzor: Interactive Deep Learning for Image Triage, Sort and Summary",
		value: {
			humans: ["End-user"],
			problems: ["Data analysis"],
			technologies: ["Deep learning"],
			promises: ["Speed"],
			data: ["Logs"],
		},
		loop: [
			{
				"actor": "human",
				"type": "End-user",
				"index": 1,
				"title": "Upload images",
				"label": "User uploads images to Sharkzor"
			},
			{
				"actor": "algorithm",
				"type": "size-agnostic classification, pre-clustering, few-shot learning",
				"index": 2,
				"title": "Extract features",
				"label": "Sharkzor extracts features from ResNet for all images using transfer learning"
			},
			{
				"actor": "human",
				"type": "End-user",
				"index": 2,
				"title": "Interact with images",
				"label": "User interacts with the images."
			},
			{
				"actor": "algorithm",
				"type": "Sharkzor",
				"index": 1,
				"title": "Impute mental model",
				"label": "Feedback helps Sharkzor to infer the user's mental model of how the images should be grouped and sorted."
			}
		]
	}, {
		title: "Slipping to the Extreme: A Mixed Method to Explain How Extreme Opinions Infiltrate Online Discussions",
		value: {
			humans: ["Researchers"],
			problems: ["Data analysis"],
			technologies: ["Machine learning"],
			promises: ["Speed"],
			data: ["Digital traces"],
		},
		loop: [{
			"actor": "human",
			"type": "Researchers",
			"index": 1,
			"title": "Construct ontology",
			"label": "Deep qualitative observation to construct an ontology of problematic speech"
		},
		{
			"actor": "algorithm",
			"type": "Multi-label opinion classifier",
			"index": 2,
			"title": "Opinion classification",
			"label": "Machine learning algorithms automatically label data based on underlying opinions"
		},
		{
			"actor": "human",
			"type": "Researchers",
			"index": 2,
			"title": "Manual inspection",
			"label": "Manually inspect labeled data to ensure accuracy and identify misclassifications"
		},
		{
			"actor": "algorithm",
			"type": "Multi-label opinion classifier",
			"index": 1,
			"title": "Retraining",
			"label": "Retrain automatic opinion classifiers based on feedback from manual inspection"
		}
	]
}, {
	title: "Self-supervised Semi-supervised Learning for Data Labeling and Quality Evaluation",
	value: {
		humans: ["Annotators"],
		problems: ["Data analysis"],
		technologies: ["Machine learning"],
		promises: ["Costs, Accuracy"],
		data: ["Images, Annotations"],
	},
	loop: [
		{
			"actor": "algorithm",
			"type": "Synthetic annotator",
			"index": 3,
			"title": "Active learning-based human-in-the-loop annotation",
			"label": "Select most informative data samples for labeling"
		},
		{
			"actor": "algorithm",
			"type": "machine learning",
			"index": 2,
			"title": "Self-supervised Semi-supervised Learning",
			"label": "Train a neural network to predict whether two augmented versions of the same image are similar or dissimilar using contrastive learning methods"
		},
		{
			"actor": "algorithm",
			"type": "machine learning",
			"index": 1,
			"title": "Nearest neighbor graph construction",
			"label": "Construct a nearest neighbor graph over data samples based on learned representations by computing pairwise distances between all samples in the dataset and connecting each sample to its k-nearest neighbors in the feature space"
		}
	]
}, {
	title: "HW-Aware Initialization of DNN Auto-Tuning to Improve Exploration Time and Robustness",
	value: {
		humans: ["Researchers"],
		problems: ["Industrial development"],
		technologies: ["Machine learning"],
		promises: ["Optimization"],
		data: ["Logs"],
	},
	loop: [
		{
			"actor": "algorithm",
			"title": "Sampling",
			"index": 3,
			"type": "HW-Aware Initialization of DNN Auto-Tuning",
			"label": "Sampling the search space for valid and invalid configurations, without considering performance."
		},
		{
			"actor": "algorithm",
			"title": "Clustering",
			"index": 2,
			"type": "HW-Aware Initialization of DNN Auto-Tuning",
			"label": "Identifying clusters of valid configurations in the search space."
		},
		{
			"actor": "human",
			"title": "Presampling",
			"index": 1,
			"type": "Researcher",
			"label": "Exploiting these local pockets of possible solutions using a presampling algorithm."
		},
		{
			"actor":"algorithm",
			"title":"Training set creation",
			"index": 1,
			"type":"HW-Aware Initialization of DNN Auto-Tuning",
			"label":"Creating a curated training set from the information of valid and invalid subsets."
		},
		{
			"actor":"human",
			"title":"Initialization",
			"index": 2,
			"type":"Researcher",
			"label":"Using this curated training set to initialize the auto-tuner."
		}
	]
}, {
	title: "BISTRO: Berkeley Integrated System for Transportation Optimization",
	value: {
		humans: ["Urban planners"],
		problems: ["Planning"],
		technologies: ["Agent simulation"],
		promises: ["Optimization"],
		data: ["Stakeholder engagement practices"],
	},
	loop: [
		{
			"actor": "human",
			"type": "Urban planner",
			"index": 1,
			"title": "Raw inputs",
			"label": "The user-defined inputs (UDIs) represent the investment, incentive, and policy levers applicable to and available for the study at hand."
		},
		{
			"actor": "algorithm",
			"type": "pre-processing",
			"index": 3,
			"title": "Encoding solutions as numeric values",
			"label": "Algorithm developers encode solutions as numeric values that represent vector-valued variables controlling aspects of the initialization and evolution of the simulation."
		},
		{
			"actor":"algorithm",
			"type":"boundary",
			"index": 2,
			"title":"Boundary separation",
			"label":"A boundary separates external, exogenously defined inputs from the BISTRO simulation optimization pipeline."
		},
		{
			"actor":"algorithm",
			"type":"simulation optimization pipeline",
			"index": 1,
			"title":"Agent-based simulation and optimization approach",
			"label":"This is where BISTRO's agent-based simulation and optimization approach comes into play to anticipate and develop adaptive plans for possible technological disruptions and growth scenarios."
		}
	]
}, {
	title: "Polish Natural Language Inference and Factivity -- an Expert-based Dataset and Benchmarks",
	value: {
		humans: ["Domain experts"],
		problems: ["Data analysis"],
		technologies: ["Natural language processing"],
		promises: ["Accuracy"],
		data: ["Voice"],
	},
	loop: [
		{
			"actor": "human",
			"type": "Researcher",
			"index": 1,
			"title": "Linguistic issue selection",
			"label": "Choosing the linguistic issue to focus on"
		},
		{
			"actor": "human",
			"type": "Researcher",
			"index": 2,
			"title": "Dataset collection",
			"label": "Collecting a dataset based on the National Corpus of Polish (NKJP)"
		},
		{
			"actor": "algorithm",
			"type": "DeepL",
			"index": 2,
			"title": "Translation",
			"label": "Translating the dataset into English using deepL translator"
		},
		{
			"actor": "human",
			"type": "Professional",
			"index": 3,
			"title": "Correction",
			"label": "(Professional) correcting the automatic translation"
		},
		{
			"actor": "algorithm",
			"type": "BERT-based model",
			"index": 1,
			"title": "(BERT-based) modeling",
			"label": "Transformer BERT-based models to perform Natural Language Inference (NLI) on the dataset collected"
		}
	]
}, {
	title: "Reframing Human-AI Collaboration for Generating Free-Text Explanations",
	value: {
		humans: ["Annotators"],
		problems: ["Data generation"],
		technologies: ["Misc"],
		promises: ["Accuracy"],
		data: ["Annotations"],
	},
	loop: [
		{
			"actor": "algorithm",
			"type": "GPT-3",
			"index": 2,
			"title": "Generate Explanations",
			"label": "Query GPT-3 to generate multiple candidate explanations for each input instance"
		},
		{
			"actor": "human",
			"type": "Crowdworker",
			"index": 1,
			"title": "Rate Acceptability",
			"label": "Ask crowdworkers to rate the acceptability of each candidate generation using a binary scale (acceptable or not acceptable)"
		},
		{
			"actor": "algorithm",
			"index": 1,
			"type": "Supervised Filter",
			"title":"Filter Explanations",
			"label":"Use these binary acceptability judgments to supervise an acceptability filtering model that selects high-quality candidates among GPT-3's outputs"
		},
		{
			"actor":"human",
			"type":"Evaluator",
			"index": 2,
			"title":"Evaluate Explanations",
			"label":"Evaluate the resulting explanations along various axes, such as factual accuracy, grammaticality, sufficiency, novelty, and support for the label"
		},
		{
			"actor":"human",
			"type":"Designer/Researcher",
			"index": 3,
			"title":"Optimize Agreement Rates",
			"label":"Iterate over versions of the questions and UI design until agreement rates are optimized as much as possible"
		},
		{
			"actor":"human",
			"type":"Evaluator/User Tester", 
			"index": 4,
			"title":"Assess Explanation Quality", 
			"label":"Assess the explanation in isolation by presenting questions to users without revealing the question/context that the explanation is attempting to address"
		},
		{
			"actor":"human", 
			"type":"Crowdworker", 
			"index": 5,
			"title":"Improve Explanations", 
			"label":"Reframe the role of crowd annotators from writing explanations to evaluating and improving upon GPT-3 generated explanations"
		}
	]
}
]

export default data;