
'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import ParticleBackground from '@/components/ParticleBackground'
import { Brain, MessageSquare, Activity, Mic, Flower, Pill } from 'lucide-react'

export default function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projects = [
    {
      title: "AI-Powered Diabetic Data Analysis",
      description: "Advanced predictive analytics system identifying critical patterns 6 months before manifestation with 94% F1-score using Google Cloud Platform's ML infrastructure.",
      technologies: ["Python", "XGBoost", "Random Forest", "Deep Neural Networks", "SHAP", "Google Cloud Platform"],
      features: [
        "94% F1-score prediction accuracy",
        "6-month early pattern detection",
        "Ensemble modeling with explainability",
        "98% stakeholder confidence ratings",
        "60% training efficiency optimization"
      ],
      metrics: {
        accuracy: "94%",
        earlyDetection: "6 months",
        efficiency: "60% faster"
      },
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      image: "/images/projects/diabetes-ai.jpg"
    },
    {
      title: "Mental Health Chatbot Using GenAI",
      description: "Intelligent conversational AI solution achieving 92% user satisfaction using Groq Cloud acceleration, HuggingFace transformers, and ChromaDB vector storage.",
      technologies: ["Groq Cloud", "HuggingFace", "ChromaDB", "LangChain", "Python", "NLP"],
      features: [
        "92% user satisfaction rating",
        "Privacy-first architectural design",
        "Automated alert detection algorithms",
        "Real-time escalation protocols",
        "Comprehensive data privacy compliance"
      ],
      metrics: {
        satisfaction: "92%",
        responseTime: "<2s",
        accuracy: "89%"
      },
      icon: MessageSquare,
      color: "from-green-500 to-teal-600",
      image: "/images/projects/mental-health-bot.jpg"
    },
    {
      title: "Disease Prediction & Medical Recommendation System",
      description: "Comprehensive healthcare analytics system processing 4,900+ records with 89% prediction accuracy using optimized machine learning algorithms.",
      technologies: ["Random Forest", "XGBoost", "Python", "Scikit-learn", "Knowledge Graphs", "Medical APIs"],
      features: [
        "89% prediction accuracy on 4,900+ records",
        "Evidence-based recommendation engine",
        "Confidence scoring mechanisms",
        "Validation protocols for decision support",
        "Pattern analysis and knowledge integration"
      ],
      metrics: {
        accuracy: "89%",
        records: "4,900+",
        confidence: "95%"
      },
      icon: Activity,
      color: "from-red-500 to-pink-600",
      image: "/images/projects/disease-prediction.jpg"
    },
    {
      title: "Virtual Assistant (Jarvis-like) System",
      description: "Advanced multimodal AI assistant with 95% intent recognition accuracy using TensorFlow and Keras neural architectures for voice command processing.",
      technologies: ["TensorFlow", "Keras", "Speech Recognition", "NLP", "Python", "Voice Synthesis"],
      features: [
        "95% intent recognition accuracy",
        "Multimodal interaction capabilities",
        "Application control and system monitoring",
        "Natural voice interface processing",
        "30% productivity improvement"
      ],
      metrics: {
        accuracy: "95%",
        productivity: "+30%",
        responseTime: "<1s"
      },
      icon: Mic,
      color: "from-purple-500 to-indigo-600",
      image: "/images/projects/voice-assistant.jpg"
    },
    {
      title: "Iris Flower Classification Using Machine Learning",
      description: "Benchmark machine learning project achieving 97% classification accuracy with comprehensive hyperparameter optimization and feature engineering.",
      technologies: ["Python", "Random Forest", "Scikit-learn", "RandomizedSearchCV", "Feature Engineering"],
      features: [
        "97% classification accuracy",
        "1,000+ hyperparameter combinations tested",
        "Robust feature engineering pipelines",
        "Automated validation protocols",
        "Best practices for ML deployment"
      ],
      metrics: {
        accuracy: "97%",
        parameters: "1,000+",
        validation: "Cross-validated"
      },
      icon: Flower,
      color: "from-yellow-500 to-orange-600",
      image: "/images/projects/iris-classification.jpg"
    },
    {
      title: "Transdermal Drug Delivery System",
      description: "Innovative pharmaceutical research enhancing bioavailability by 35% through novel transdermal gel formulation with FDA-compliant testing protocols.",
      technologies: ["HPLC", "Design of Experiments", "Statistical Analysis", "Pharmaceutical Chemistry", "Quality Control"],
      features: [
        "35% bioavailability enhancement",
        "FDA-compliant stability testing",
        "Design of Experiments methodology",
        "Advanced HPLC chromatography",
        "Automated data collection pipelines"
      ],
      metrics: {
        bioavailability: "+35%",
        compliance: "FDA-approved",
        stability: "Validated"
      },
      icon: Pill,
      color: "from-cyan-500 to-blue-600",
      image: "/images/projects/transdermal-gel.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              My Projects
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Breakthrough AI & Data Science innovations that transform complex challenges 
              into intelligent solutions with measurable business impact.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 mb-16"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ProjectCard
                  {...project}
                  metrics={Object.entries(project.metrics)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(' | ')
                  }
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills & Technologies */}
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Technologies & Frameworks</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Python", "TensorFlow", "PyTorch", "XGBoost", "Scikit-learn", "Hugging Face",
                  "Google Cloud", "AWS", "Docker", "Kubernetes", "Apache Spark", "Apache Airflow",
                  "LangChain", "ChromaDB", "SHAP", "MLflow", "Streamlit", "FastAPI"
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-medium text-gray-300">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Collaborate?</h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how these proven methodologies can solve your organization's 
                most complex data challenges and drive measurable business outcomes.
              </p>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:contact@venktatavivekvarma.careers'}
              >
                Start a Conversation
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}