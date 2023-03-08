const data = [{
	title: "Machine teaching",
	value: "A technique of machine learning",
	url: "",
	loop: [{
		label: "Collect the sample dataset",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Plan/update the curriculum",
		index: 1,
		radius: 1,
		actor: "human"
	}, {
		label: "Explain knowledge to learner",
		index: 2,
		radius: 1,
		actor: "human"
	}, {
		label: "Update the model",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Review model predictions and reasonings",
		index: 3,
		radius: 1,
		actor: "human"
	}]
}, {
	title: "Active learning (image classification algorithm)",
	value: "An example of active learning loop as described by ...",
	loop: [{
		label: "request classification",
		radius: 1,
		index: 0,
		actor: "human"
	}, {
		label: "segment image",
		radius: 1,
		index: 2,
		actor: "algorithm"
	}, {
		label: "annotate the image",
		radius: 1,
		index: 1,
		actor: "algorithm"
	}, {
		label: "validate the results",
		radius: 1,
		index: 1,
		actor: "human"
	}, {
		label: "annotate the image",
		radius: 1,
		index: 2,
		actor: "human"
	}, {
		label: "update the model",
		radius: 1,
		index: 0,
		actor: "algorithm"
	}]
}, {
	title: "Challenge AI Mind: A Crowd System for Proactive AI Testing",
	value: "AI Developers needing to discover unknown errors made by the AI models, and engage in the process of proactive testing use LIME, Adversarial learning for generating testing data and evaluate the performace of AI systems",
	url: "http://arxiv.org/pdf/1810.09030v1",
	loop: [{
		label: "generate data",
		radius: 1.7,
		index: 0,
		actor: "human"
	}, {
		label: "assign a score",
		radius: 1,
		index: 1,
		actor: "algorithm"
	}, {
		label: "calculate relationship between word and prediction",
		radius: 1.7,
		index: 1,
		actor: "algorithm"
	}, {
		label: "communicate the result",
		radius: 1.7,
		index: 0,
		actor: "algorithm"
	}, {
		label: "visualize the score",
		radius: 1,
		index: 0,
		actor: "algorithm"
	}, {
		label: "validate the data",
		radius: 1.7,
		index: 1,
		actor: "human"
	}, {
		label: "categorize the data",
		radius: 1.7,
		index: 2,
		actor: "human"
	}, {
		label: "analyse the data",
		radius: 1,
		index: 0,
		actor: "human"
	}]
}, {
	title: "An Interactive Explanatory AI System for Industrial Quality Control",
	value: "Domain experts needing to classify defects in an industrial quality control setting use Image classification algorithms, LIME for reducing workload for humans while both respecting their expertise and without removing their agency or accountability.",
	url: "http://arxiv.org/pdf/2203.09181v1",
	loop: [{
		label: "Request classification",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Predict defects",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Annotate the image",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Verbalise results",
		index: 1,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Communicate results",
		index: 0,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Validate the results",
		index: 1,
		radius: 1,
		actor: "human"
	}]
}, {
	title: "A tool for user friendly, cloud based, whole slide image segmentation",
	value: "Clinicians and biological researchers needing to perform human in THE LOOP segmentation analysis remotely with an easy to use graphical user interface use Convolutional Neural Networks, Image classification algorithms to facilitate widespread use by computational non-experts.",
	url: "http://arxiv.org/pdf/2101.07222v1",
	loop: [{
		label: "Request for prediction",
		index: 0,
		actor: "human",
		radius: 1
	}, {
		label: "Segment image",
		index: 2,
		actor: "algorithm",
		radius: 1
	}, {
		label: "Annotate prediction",
		index: 1,
		actor: "algorithm",
		radius: 1
	}, {
		label: "Evaluate prediction",
		index: 1,
		actor: "human",
		radius: 1
	}, {
		label: "Correct prediction",
		index: 0,
		actor: "human",
		radius: 1.7
	}, {
		label: "Annotate corrected prediction",
		index: 1,
		actor: "human",
		radius: 1.7
	}, {
		label: "Update training set",
		index: 0,
		actor: "algorithm",
		radius: 1
	}]
}, {
	title: "CAIPI in Practice: Towards Explainable Interactive Medical Image Classification",
	value: "Physicians needing to explain their decisions use Quick Shift, Random forests, Sparse-Linear Approximation for simplifying human-in-the-loop approaches for image classification",
	url: "http://arxiv.org/pdf/2204.02661v2",
	loop: [{
		label: "Request classification",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Segment image",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Annotate image",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Communicate results",
		index: 1,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Provide counterexamples",
		index: 0,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Validate results",
		index: 1,
		radius: 1,
		actor: "human"
	}, {
		label: "Annotate image",
		index: 2,
		radius: 1,
		actor: "human"
	}]
}, {
	title: "A Deep Learning and Gamification Approach to Energy Conservation at Nanyang Technological University",
	value: "Planners needing to improve the energy efficiency of a building through the utilization of cutting-edge Internet of Things (IoT) sensors and cyber-physical systems sensing/actuation platforms use Deep Bi-Directional Neural Networks for employing robust estimations for classical discrete choice models provided for the derived high dimensional imbalanced data.",
	url: "http://arxiv.org/pdf/1809.05142v2",
	loop: [{
		label: "View their energy usage",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Affect their energy score",
		index: 1,
		radius: 1,
		actor: "human"
	}, {
		label: "Receive feedback of their behavior",
		index: 2,
		radius: 1,
		actor: "human"
	}, {
		label: "Collect usage data",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Collect weather data",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Aggregate and expand data with high dimensional features",
		index: 2,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Segment data into classes of agents",
		index: 1,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Provide adjustments to smart utilities based on identified classes",
		index: 0,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Answer survey on the optimization adjustments by the algorithm",
		index: 0,
		radius: 1.7,
		actor: "human"
	}]
}, {
	title: "A Free Lunch in Generating Datasets: Building a VQG and VQA System with Attention and Humans in the Loop",
	value: "AI Researchers needing to resolve the issue of labeling massive amounts of data are costly, inconsistent, and prone to failure, being static in nature use Visual Question Answering, Visual Question Generator for focusing parsing clean answers from noisy human response",
	url: "http://arxiv.org/pdf/1912.00124v2",
	loop: [{
		label: "Extract features from an image",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Generate question from features",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Respond to visual question",
		index: 1,
		radius: 1,
		actor: "human"
	}, {
		label: "Collect answer",
		index: 1,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Clean up response",
		index: 0,
		radius: 1.7,
		actor: "algorithm"
	}]
}, {
	title: "A glass-box interactive machine learning approach for solving NP-hard problems with the human-in-the-loop",
	value: "Health informatics needing to study protein folding use Interactive Machine Learning for opening the black-box to a glass-box and thus enabling a human directly to interact with an learning algorithm",
	loop: [{
		label: "Selection of the HIF",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Start and initialization of the Ant-Algorithm",
		index: 1,
		radius: 1,
		actor: "human"
	}, {
		label: "CreateHeuristicSolution(ProblemSize)",
		index: 2,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "LocalUpdateAndDecayPheromone(Pheromone, Si, Sicost, ρ)",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Modification of the HIM",
		index: 2,
		radius: 1,
		actor: "human"
	}, {
		label: "UpdateHumanInteractionMatrix(HIM)",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}]
}, {
	title: "A Learning-Based Tune-Free Control Framework for Large Scale Autonomous Driving System Deployment",
	value: "Citizens needing to reach locations autonomously with self-driving cars use Bayesian-optimization-based feedback control auto-tuner, Learning-based dynamic model, Learning-based open-loop mapping for accelerating large scale autonomous driving system deployed on various vehicles and driving environments",
	loop: [{
		label: "Request route for location",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Bayesian-based auto-tuner",
		index: 2,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Learning-based open-loop mapping",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Learning dynamic model (vehicle)",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Bayesian-based auto-tuner",
		index: 2,
		radius: 1,
		actor: "algorithm"
	}]
}, {
	title: "A machine learning pipeline for autonomous numerical analytic continuation of Dyson-Schwinger equations",
	value: "Scholars needing to solve Dyson-Schwinger equations in quantum field theory use Computer vision, Deep learning, Machine learning for detecting poles and branch cuts in the numerical integrand after every iteration step and by suggesting suitable integration contour deformations that avoid these obstructions",
	loop: [{
		label: "Provide image of function",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Segment the image using U-Net",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Provide masked image",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Generate an agent in the environment",
		index: 1,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Analyse the mask",
		index: 0,
		radius: 1.7,
		actor: "algorithm"
	}, {
		label: "Validate results",
		index: 1,
		radius: 1,
		actor: "human"
	}]
}, {
	title: "A Novel Deep Learning Pipeline for Retinal Vessel Detection in Fluorescein Angiography",
	value: "Interventional cardiologists needing to detect retinal vessels in FA images use Deep Neural Networks that reduce the effort required for generating labeled ground truth data",
	loop: [{
		label: "Compare coloured and fluorescein angiographies",
		index: 4,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Align and transform images",
		index: 3,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Compile training dataset",
		index: 2,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Provide unlabeled image to human",
		index: 1,
		radius: 1,
		actor: "algorithm"
	}, {
		label: "Label image",
		index: 0,
		radius: 1,
		actor: "human"
	}, {
		label: "Update model",
		index: 0,
		radius: 1,
		actor: "algorithm"
	}]
}]

export default data;