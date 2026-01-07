import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.jpeg";
import img5 from "../assets/tracks/img5.webp";
import img6 from "../assets/tracks/img6.webp"
import img7 from "../assets/tracks/img7.avif";
import img8 from "../assets/tracks/img8.jpg"
import img9 from "../assets/tracks/img9.jpg";
import img10 from "../assets/tracks/img10.webp"
import img11 from "../assets/tracks/img11.webp";
import img12 from "../assets/tracks/img12.jpg"
import img13 from "../assets/tracks/img13.jpg";
import img14 from "../assets/tracks/img14.avif"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.webp"
import img17 from "../assets/tracks/img17.jpeg"
import img18 from "../assets/tracks/img18.jpeg";
import img19 from "../assets/tracks/img19.webp"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "AI in Rare Diseases",
    description: (
      <>
 {" "}
        <Link
          to="/raredisease-event-schedule"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   AI accelerates rare disease research
        </Link> by analyzing complex patient data, predicting disease progression, and identifying novel therapeutic targets. This track explores machine learning, predictive modeling, and data-driven diagnostics to enhance early detection, precision medicine, and personalized treatment strategies, enabling faster, more effective interventions for rare disease patients worldwide.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Epidomology & Disease Control",
    description: (
      <>
This track focuses on understanding the distribution, determinants, and control of {" "}
        <Link
          to="/raredisease-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      rare diseases.
        </Link>{" "} Topics include surveillance systems, population-based studies, outbreak monitoring, and public health strategies. Participants will learn approaches to prevent disease spread, improve early diagnosis, and develop policy frameworks that enhance patient care and global health outcomes.
       
      </>
    ),
  },

  {
    image: img3,
    title: "Genetics & Genomics",
    description: (
      <>
{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Genetics and genomics
        </Link>  explore the molecular and hereditary basis of rare diseases. This track covers genome sequencing, variant analysis, functional genomics, and personalized medicine. Attendees will gain insights into identifying causative genes, understanding disease mechanisms, and applying genetic information to guide diagnostics, therapeutics, and innovative orphan drug development.
      </>
    ),
  },

  {
    image: img4,
    title: "Treatments & Therapies",
    description: (
      <>
     This track highlights therapeutic approaches for rare diseases, including  {" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
pharmacological 
        </Link>{" "} interventions, biologics, gene therapy, and innovative treatment strategies. Participants will explore clinical evidence, emerging therapies, and patient-centric care models, enabling the development and implementation of effective, safe, and personalized treatments for diverse rare disease populations.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Science & Research",
    description: (
      <>
{" "}
        <Link
          to="/raredisease-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Science and research
        </Link>{" "} form the foundation of rare disease innovation. This track covers experimental design, translational studies, biomarker discovery, and collaborative research initiatives. Participants will explore methods to accelerate understanding of rare disease biology, advance therapeutic discovery, and generate robust evidence for clinical applications and regulatory approval.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Drug Development",
    description: (
      <>

        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Drug development 
        </Link>{" "} focuses on creating safe and effective therapies for rare diseases. This track includes preclinical studies, clinical trials, regulatory pathways, and orphan drug designation. Attendees will gain insights into optimizing development pipelines, overcoming challenges, and translating innovative molecules into approved treatments that improve patient outcomes globally.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Gene & Cell Therapy",
    description: (
      <>
{" "}
        <Link
          to="/about-raredisease"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Gene and cell therapy
        </Link>{" "} provide transformative approaches for rare disease treatment. This track covers CRISPR-based editing, viral and non-viral delivery systems, stem cell therapies, and regenerative medicine. Participants will explore strategies to correct genetic defects, restore cellular function, and implement personalized therapeutic solutions in clinical practice.
      </>
    ),
  },

  {
    image:  img8,
    title: "Pediatric Diseases",
    description: (
      <>
       {" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Pediatric rare diseases
        </Link>{" "} require specialized approaches in diagnosis and therapy. This track covers genetic disorders, congenital conditions, early interventions, and pediatric clinical trial design. Attendees will explore strategies to address the unique challenges of treating rare diseases in children, improving outcomes, and advancing pediatric-focused orphan drug development.
      
      </>
    ),
  },

  {
    image: img9,
    title: " Public Health",
    description: (
      <>
{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Public health
        </Link>{" "} in rare diseases addresses awareness, policy, prevention, and healthcare access. This track covers patient registries, healthcare infrastructure, screening programs, and global health strategies. Participants will learn how to implement effective public health initiatives that support early diagnosis, equitable care, and improved quality of life for rare disease populations.

      </>
    ),
  },

  {
    image: img10,
    title: "Neurobiology",
    description: (
      <>
 {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Neurobiology
        </Link>{" "} examines rare neurological disorders, including genetic and neurodegenerative conditions. This track explores brain function, disease mechanisms, biomarkers, and therapeutic interventions. Attendees will gain insights into understanding neurological pathways, developing targeted therapies, and applying translational research to improve diagnosis, treatment, and patient outcomes in rare neurological diseases.

      </>
    ),
  },

  {
    image: img11,
    title: "Hematologic Disorders",
    description: (
      <>
     {" "}
        <Link
          to="/about-raredisease"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Hematologic disorders 
        </Link>  in rare disease contexts include blood disorders such as anemias, clotting deficiencies, and bone marrow failures. This track covers pathophysiology, diagnostics, and therapeutic approaches, including gene therapy and transfusion strategies. Participants explore cutting-edge interventions to improve patient management and outcomes in rare blood disorders.
      </>

    ),
  },

  {
    image: img12,
    title: "Pharmacology",
    description: (
      <>
 Pharmacology examines drug action, safety, and efficacy for rare disease treatments. This track covers orphan{" "}
        <Link
          to="/raredisease-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 drug pharmacokinetics,
        </Link>{" "}  pharmacodynamics, drug interactions, and precision dosing strategies. Participants will gain insights into designing effective therapies, optimizing patient outcomes, and ensuring safe, personalized medication approaches for rare and complex conditions.
      
      </>
    ),
  },

  {
    image: img13,
    title: "Nutritional & Metabolic Diseases",
    description: (
      <>
  This track addresses rare disorders of {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      metabolism and nutrition, 
        </Link>  including enzyme deficiencies, inborn errors, and metabolic syndromes. Participants explore therapeutic diets, enzyme replacement, pharmacological interventions, and personalized care plans. The track emphasizes improving patient health, managing chronic conditions, and translating research into clinical and nutritional strategies.

        
      </>
    ),
  },

  {
    image:img14,
    title: "Clinical & Patient Care",
    description: (
      <>
 {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Clinical and patient care 
        </Link> focuses on improving diagnosis, management, and quality of life for rare disease patients. This track includes multidisciplinary approaches, care pathways, patient engagement, and evidence-based practices. Attendees learn strategies to enhance clinical outcomes, support families, and implement holistic rare disease care models.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Vaccines",
    description: (
      <>
    Vaccines  {" "}
        <Link
          to="/about-raredisease"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Bio Medical Sciences 
        </Link> play a crucial role in preventing infections that may exacerbate rare disease complications. This track covers vaccine development, immunization strategies, and safety considerations. Participants explore approaches to design vaccines suitable for rare disease populations, enhancing protection, reducing morbidity, and supporting personalized preventative healthcare strategies.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Infectious Diseases",
    description: (
      <>
This track explores the interplay between infectious agents and rare diseases, including susceptibility,{" "}
        <Link
          to= "/about-raredisease"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          co-infections, and micro biome
        </Link> interactions. Topics include diagnostics, therapeutics, epidemiology, and immunological interventions. Participants gain insights into strategies to prevent, monitor, and manage infections in rare disease populations, improving patient safety and clinical outcomes.
</>
    ),
  },

  {
    image:img17,
    title: "Neurological Disorder",
    description: (
      <>
  {" "}
        <Link
          to="/raredisease-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Neurological Disorder
        </Link>   track covers rare neurodegenerative and neurodevelopmental diseases. Topics include disease mechanisms, biomarkers, imaging, and innovative therapies. Attendees explore translational research, therapeutic interventions, and patient management strategies aimed at improving outcomes and advancing understanding of rare neurological conditions.
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Stem Cells",
    description: (
      <>
  Stem cells offer regenerative potential for rare disease treatment. This track explores stem {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       cell biology,
        </Link>   therapy design, clinical applications, and ethical considerations. Participants will learn how stem cell-based interventions can restore function, repair damaged tissues, and provide innovative solutions for genetic, metabolic, and degenerative rare diseases.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Metabolic Disorders",
    description: (
      <>
  {" "}
        {/* <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Protein engineering
        </Link> */}
          Metabolic disorders involve rare genetic or acquired conditions affecting metabolism. This track includes diagnostics, treatment strategies, dietary interventions, enzyme replacement, and therapeutic development. Participants explore approaches to manage, treat, and prevent metabolic imbalances, improving patient outcomes and quality of life in rare metabolic diseases
      </>
    ),
  },
  {
    image:img20,
    title: "Immune Deficiency",
    description: (
      <>
     Immune deficiency track focuses on rare congenital and acquired  {" "}
        <Link
          to="/raredisease-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
immunodeficiencies. 
        </Link>{" "}  Topics include immune profiling, gene therapy, targeted biologics, and infection management. Participants explore strategies to restore immune function, prevent complications, and develop innovative therapies for patients with rare immune system disorders
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
