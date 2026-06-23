/* ===========================================================
   CONTENT.JS — EDIT THIS FILE TO UPDATE YOUR SITE
   ---------------------------------------------------------
   Everything you want to change about your portfolio lives
   here: your name, tagline, bio, and the four tabs
   (Activities, Awards, Education). You generally never need
   to touch index.html, style.css, or main.js.

   After editing, save the file and refresh the page (or
   push to GitHub if deployed) to see your changes.
   =========================================================== */

window.SITE_CONTENT = {

  // ---------- IDENTITY ----------
  name: "Your Name",
  tagline: "AI & Medicine — Research Log",
  location: "Austin, TX",
  focusArea: "Diagnostic ML",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",

  // ---------- HERO ----------
  heroIntro:
    "I'm a high school researcher studying how machine learning can catch what the eye misses — earlier detection, faster triage, better outcomes. This is my lab notebook, made public.",

  // ---------- ABOUT TAB ----------
  about: {
    paragraphs: [
      "Hi — I'm <strong>Your Name</strong>, a junior at Lincoln High School. I got pulled into this field after watching a family member wait months for a diagnosis that, in hindsight, had early markers a model could have flagged in seconds. That gap between <em>data that exists</em> and <em>decisions that get made</em> is what I build toward.",
      "Right now I split my time between training small diagnostic classifiers on public medical imaging datasets, volunteering in a university bioinformatics lab, and writing about what I learn — partly to remember it, partly because I wish more of this material were written for people my age instead of around them.",
      "Outside of research: I run varsity track, I'm the type to read a paper's methods section before its abstract, and I think the best ideas usually come from the worst first drafts."
    ],
    skills: [
      "Python", "PyTorch", "scikit-learn", "R",
      "Medical imaging (DICOM)", "Public health datasets"
    ]
  },

  // ---------- ACTIVITIES TAB ----------
  // Add as many entries as you want — just copy/paste a block and edit it.
  activities: [
    {
      title: "Independent Research: Early DDH Detection",
      org: "Self-directed, mentored by Dr. Jane Lee (UT Austin)",
      period: "2025 — Present",
      description:
        "Training a CNN classifier on pediatric hip ultrasound images to flag early markers of developmental dysplasia of the hip, aiming to support earlier, lower-cost screening.",
      tags: ["PyTorch", "Medical imaging", "Pediatrics"]
    },
    {
      title: "Bioinformatics Lab Volunteer",
      org: "University of Texas at Austin",
      period: "Summer 2025",
      description:
        "Assisted with data cleaning and exploratory analysis on a genomics dataset; built internal R scripts to automate quality-control reporting.",
      tags: ["R", "Genomics", "Data cleaning"]
    },
    {
      title: "Varsity Track & Field",
      org: "Lincoln High School",
      period: "2023 — Present",
      description:
        "Distance events. Team co-captain, 2026 season.",
      tags: ["Athletics", "Leadership"]
    },
    {
      title: "Science Olympiad — Health Science Lead",
      org: "Lincoln High School",
      period: "2024 — Present",
      description:
        "Lead the Anatomy & Physiology and Disease Detectives event preparation for the team.",
      tags: ["Competition", "Biology"]
    }
  ],

  // ---------- AWARDS TAB ----------
  awards: [
    {
      title: "Regional Finalist, Regeneron Science Talent Search",
      org: "Society for Science",
      period: "2026",
      description:
        "Recognized for independent research applying convolutional neural networks to early musculoskeletal screening in infants.",
      tags: ["Research"]
    },
    {
      title: "1st Place, Health Science Division",
      org: "State Science Olympiad",
      period: "2025",
      description: "Team placed first in Disease Detectives and Anatomy & Physiology events.",
      tags: ["Competition"]
    },
    {
      title: "AP Scholar with Distinction",
      org: "College Board",
      period: "2025",
      description: "Awarded for performance across AP coursework.",
      tags: ["Academic"]
    }
  ],

  // ---------- EDUCATION TAB ----------
  education: [
    {
      period: "2023 — 2027 (Expected)",
      title: "Lincoln High School",
      org: "Austin, TX · GPA 4.0 / 4.0 (weighted)",
      description:
        "Coursework focused on the intersection of biology, statistics, and computer science.",
      courses: ["AP Biology", "AP Statistics", "AP Computer Science A", "AP Chemistry", "Anatomy & Physiology"]
    },
    {
      period: "Summer 2025",
      title: "Intro to Machine Learning for Healthcare",
      org: "Online — self-paced certificate course",
      description:
        "Completed an applied course covering classification, model evaluation, and bias in clinical ML systems.",
      courses: ["Python", "scikit-learn", "Model evaluation"]
    },
    {
      period: "Summer 2024",
      title: "Pre-College Biomedical Sciences Program",
      org: "University of Texas at Austin",
      description:
        "Two-week intensive covering human physiology, lab techniques, and an introduction to clinical research design.",
      courses: ["Physiology", "Lab techniques", "Research design"]
    }
  ]
};
