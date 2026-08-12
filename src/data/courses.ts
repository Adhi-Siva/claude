export type Course = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  overview: string;
  audience: string[];
  prerequisites: string[];
  curriculum: { title: string; topics: string[] }[];
  keyConcepts: string[];
  exercises: string[];
  projects: string[];
  outcomes: string[];
  methodology: string[];
  duration: string;
  certification: string;
  tracks?: string[];
};

const commonMethodology = [
  "Live instructor-led online sessions",
  "Concept explanation followed by hands-on implementation",
  "Daily practice tasks and doubt-clearing support",
  "Project-based learning with mentor reviews",
  "Interview-oriented revision and guidance",
];

const commonCertification =
  "Course completion certificate from AUM IT Training Institute, awarded after finishing the curriculum, practical assignments and the final project.";

export const courses: Course[] = [
  {
    slug: "c-programming",
    name: "C",
    tagline: "Build a strong foundation in programming.",
    icon: "C",
    overview:
      "The C programming course builds your programming foundation from the ground up — logic building, memory handling and structured programming — so every language you learn afterwards becomes easier.",
    audience: [
      "Absolute beginners starting their programming journey",
      "Engineering and computer science students",
      "Freshers preparing for technical interviews",
    ],
    prerequisites: ["Basic computer operating knowledge", "No prior coding experience required"],
    curriculum: [
      { title: "Programming Fundamentals", topics: ["Compilation process", "Variables and data types", "Operators", "Input and output"] },
      { title: "Control Flow", topics: ["Conditional statements", "Loops", "Break and continue", "Nested logic"] },
      { title: "Functions & Arrays", topics: ["Function design", "Recursion", "1D and 2D arrays", "Strings"] },
      { title: "Pointers & Memory", topics: ["Pointer arithmetic", "Dynamic memory allocation", "Pointers with arrays and functions"] },
      { title: "Structures & Files", topics: ["Structures and unions", "File handling", "Preprocessor directives"] },
    ],
    keyConcepts: ["Logic building", "Structured programming", "Memory management", "Modular code design"],
    exercises: ["Pattern and number logic programs", "Array and string manipulation tasks", "Pointer-based memory exercises", "File read/write tasks"],
    projects: ["Student record management system", "Bank transaction console application"],
    outcomes: [
      "Write clean, logical and efficient C programs",
      "Understand how memory and pointers actually work",
      "Approach coding problems with structured thinking",
    ],
    methodology: commonMethodology,
    duration: "6 – 8 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "cpp",
    name: "C++",
    tagline: "Master object-oriented programming concepts.",
    icon: "C++",
    overview:
      "Move from procedural programming to object-oriented design with C++. You will learn classes, inheritance, polymorphism, templates and the STL through continuous hands-on practice.",
    audience: ["Students who know basic programming", "Freshers targeting product-based interviews", "Developers strengthening OOP fundamentals"],
    prerequisites: ["Basic programming logic (C recommended, not mandatory)"],
    curriculum: [
      { title: "C++ Essentials", topics: ["References", "Functions and overloading", "Namespaces", "Dynamic memory with new/delete"] },
      { title: "Object-Oriented Programming", topics: ["Classes and objects", "Constructors and destructors", "Encapsulation and abstraction", "Static members"] },
      { title: "Inheritance & Polymorphism", topics: ["Types of inheritance", "Virtual functions", "Operator overloading", "Abstract classes"] },
      { title: "Templates & STL", topics: ["Function and class templates", "Vectors, maps, sets", "Iterators and algorithms"] },
      { title: "Exception Handling & Files", topics: ["Try/catch/throw", "Custom exceptions", "File streams"] },
    ],
    keyConcepts: ["OOP design", "STL usage", "Polymorphism", "Reusable class design"],
    exercises: ["Class design tasks", "Inheritance hierarchy problems", "STL container practice sets"],
    projects: ["Library management system", "Inventory billing application"],
    outcomes: ["Design object-oriented solutions confidently", "Use the STL effectively", "Explain OOP concepts in interviews with examples"],
    methodology: commonMethodology,
    duration: "8 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "java",
    name: "Java",
    tagline: "Write Once, Run Anywhere.",
    icon: "Java",
    overview:
      "A complete Java course covering core language fundamentals, object-oriented programming, collections, exception handling, JDBC and an introduction to backend development with practical projects.",
    audience: ["Freshers aiming for Java developer roles", "Testers moving into automation with Java", "Working professionals switching to Java"],
    prerequisites: ["Basic programming awareness", "Willingness to practise daily"],
    curriculum: [
      { title: "Core Java", topics: ["JVM, JDK, JRE", "Data types and operators", "Control statements", "Arrays and strings"] },
      { title: "OOP in Java", topics: ["Classes and objects", "Inheritance", "Interfaces and abstraction", "Polymorphism"] },
      { title: "Collections & Generics", topics: ["List, Set, Map", "Comparable and Comparator", "Generics", "Streams introduction"] },
      { title: "Exceptions, Files & Threads", topics: ["Exception hierarchy", "File I/O", "Multithreading basics"] },
      { title: "Database & Beyond", topics: ["JDBC with MySQL", "CRUD operations", "Maven basics", "Introduction to Spring concepts"] },
    ],
    keyConcepts: ["OOP", "Collections framework", "Exception handling", "Database connectivity"],
    exercises: ["Daily coding assignments", "Collections-based problem sets", "JDBC CRUD tasks"],
    projects: ["Employee management application with database", "Console-based ATM simulation"],
    outcomes: ["Build Java applications independently", "Work with databases from Java", "Be interview-ready on core Java topics"],
    methodology: commonMethodology,
    duration: "10 – 12 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "python",
    name: "Python",
    tagline: "Code. Automate. Innovate.",
    icon: "Py",
    overview:
      "Learn Python from fundamentals to practical automation and data handling. This course focuses on writing clean Python, working with libraries and automating real tasks.",
    audience: ["Beginners in programming", "Professionals automating repetitive work", "Learners heading toward data or automation roles"],
    prerequisites: ["No prior programming experience required"],
    curriculum: [
      { title: "Python Basics", topics: ["Syntax and variables", "Operators", "Conditionals and loops", "Functions"] },
      { title: "Data Structures", topics: ["Lists, tuples, sets, dictionaries", "Comprehensions", "String handling"] },
      { title: "OOP & Modules", topics: ["Classes and objects", "Inheritance", "Modules and packages", "Virtual environments"] },
      { title: "Files, Errors & Libraries", topics: ["File and CSV/JSON handling", "Exception handling", "Requests, os, datetime"] },
      { title: "Applied Python", topics: ["Automation scripting", "Pandas introduction", "Working with APIs", "Database connectivity"] },
    ],
    keyConcepts: ["Pythonic coding", "Automation", "Data handling", "API integration"],
    exercises: ["Scripting challenges", "File and data-cleaning tasks", "API consumption practice"],
    projects: ["Excel/CSV report automation tool", "API-based data collection utility"],
    outcomes: ["Write production-quality Python scripts", "Automate manual daily tasks", "Move confidently into data or automation tracks"],
    methodology: commonMethodology,
    duration: "8 – 10 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Build responsive websites and web applications.",
    icon: "</>",
    overview:
      "A practical web development course covering HTML, CSS, JavaScript, responsive design and modern front-end development, along with backend and database fundamentals for full application delivery.",
    audience: ["Freshers targeting web developer roles", "Designers moving into development", "Entrepreneurs building their own products"],
    prerequisites: ["Basic computer knowledge", "Programming logic is helpful but not mandatory"],
    curriculum: [
      { title: "Front-end Foundations", topics: ["HTML5 semantics", "CSS3 layouts", "Flexbox and Grid", "Responsive design"] },
      { title: "JavaScript", topics: ["Core JavaScript", "DOM manipulation", "Events", "ES6+ features", "Fetch and async"] },
      { title: "Modern Front-end", topics: ["Component thinking", "React fundamentals", "State and props", "Routing", "Forms"] },
      { title: "Backend & Database", topics: ["REST API concepts", "Node.js basics", "CRUD APIs", "Database integration"] },
      { title: "Deployment", topics: ["Version control with Git", "Build tools", "Hosting and deployment"] },
    ],
    keyConcepts: ["Responsive UI", "Component architecture", "REST APIs", "Version control"],
    exercises: ["Layout cloning tasks", "DOM and JavaScript mini-tasks", "API integration practice"],
    projects: ["Responsive business website", "Full-stack task management application"],
    outcomes: ["Build and deploy responsive web applications", "Consume and create REST APIs", "Present a portfolio of live projects"],
    methodology: commonMethodology,
    duration: "12 – 16 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "devops",
    name: "DevOps",
    tagline: "Automate. Deploy. Achieve.",
    icon: "Ops",
    overview:
      "Understand the DevOps culture and toolchain — version control, CI/CD pipelines, containers, orchestration and infrastructure automation — with hands-on lab practice.",
    audience: ["Developers and testers moving into DevOps", "System administrators upgrading their skills", "Cloud aspirants"],
    prerequisites: ["Basic Linux commands", "Understanding of the software development lifecycle"],
    curriculum: [
      { title: "Foundations", topics: ["DevOps culture and lifecycle", "Linux essentials", "Shell scripting basics"] },
      { title: "Source Control & Build", topics: ["Git and branching strategies", "Maven/npm builds", "Artifact management"] },
      { title: "CI/CD", topics: ["Jenkins pipelines", "Automated testing in pipelines", "Deployment strategies"] },
      { title: "Containers & Orchestration", topics: ["Docker images and volumes", "Docker Compose", "Kubernetes pods, deployments, services"] },
      { title: "Infrastructure & Monitoring", topics: ["Terraform basics", "Ansible configuration management", "Monitoring and logging"] },
    ],
    keyConcepts: ["CI/CD automation", "Containerisation", "Infrastructure as code", "Monitoring"],
    exercises: ["Pipeline building labs", "Dockerfile writing tasks", "Kubernetes deployment practice"],
    projects: ["End-to-end CI/CD pipeline for a web application", "Containerised multi-service deployment"],
    outcomes: ["Design and run CI/CD pipelines", "Containerise and deploy applications", "Automate infrastructure provisioning"],
    methodology: commonMethodology,
    duration: "10 – 12 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "cloud",
    name: "Cloud",
    tagline: "Learn cloud concepts and architecture.",
    icon: "Cloud",
    overview:
      "A vendor-neutral cloud computing course covering service models, virtualisation, networking, storage, security and architecture principles that apply across all major cloud platforms.",
    audience: ["Beginners entering cloud careers", "IT support and admin professionals", "Students preparing for cloud certifications"],
    prerequisites: ["Basic computer networking awareness"],
    curriculum: [
      { title: "Cloud Fundamentals", topics: ["IaaS, PaaS, SaaS", "Deployment models", "Virtualisation", "Shared responsibility model"] },
      { title: "Compute & Storage", topics: ["Virtual machines", "Object and block storage", "Scaling and load balancing"] },
      { title: "Networking", topics: ["Virtual networks and subnets", "Security groups", "DNS and CDN basics"] },
      { title: "Security & Cost", topics: ["Identity and access management", "Encryption basics", "Cost optimisation"] },
      { title: "Architecture", topics: ["High availability", "Disaster recovery", "Well-architected principles"] },
    ],
    keyConcepts: ["Cloud service models", "Scalability", "Cloud security", "Cost management"],
    exercises: ["Console-based provisioning labs", "Network configuration tasks", "IAM policy exercises"],
    projects: ["Highly available web application architecture", "Cloud migration plan for a sample workload"],
    outcomes: ["Explain cloud architecture confidently", "Provision and secure cloud resources", "Prepare for platform certifications"],
    methodology: commonMethodology,
    duration: "6 – 8 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "aws",
    name: "AWS",
    tagline: "Build cloud skills for the future.",
    icon: "AWS",
    overview:
      "Hands-on Amazon Web Services training covering the core services used in real projects — EC2, S3, VPC, IAM, RDS, Lambda and monitoring — with architecture practice.",
    audience: ["Cloud aspirants and freshers", "DevOps learners", "Professionals preparing for AWS certification"],
    prerequisites: ["Basic cloud or IT infrastructure awareness"],
    curriculum: [
      { title: "AWS Basics", topics: ["Global infrastructure", "Regions and availability zones", "AWS console and CLI"] },
      { title: "Compute", topics: ["EC2 instances", "AMIs and key pairs", "Auto Scaling", "Elastic Load Balancing"] },
      { title: "Storage & Database", topics: ["S3 and lifecycle policies", "EBS and snapshots", "RDS", "DynamoDB overview"] },
      { title: "Networking & Security", topics: ["VPC, subnets, route tables", "Security groups and NACLs", "IAM users, roles, policies"] },
      { title: "Serverless & Monitoring", topics: ["Lambda", "API Gateway basics", "CloudWatch", "CloudTrail"] },
    ],
    keyConcepts: ["EC2 and scaling", "S3 storage", "VPC networking", "IAM security", "Serverless"],
    exercises: ["Hands-on lab per service", "VPC build-out task", "Serverless function deployment"],
    projects: ["Scalable three-tier application on AWS", "Serverless file processing workflow"],
    outcomes: ["Deploy and manage workloads on AWS", "Design secure, scalable architectures", "Be prepared for AWS associate-level certification"],
    methodology: commonMethodology,
    duration: "8 – 10 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "ui-ux",
    name: "UI/UX",
    tagline: "Design experiences users love.",
    icon: "UI",
    overview:
      "Learn the complete design process — research, information architecture, wireframing, visual design, prototyping and usability testing — using industry-standard design tools.",
    audience: ["Aspiring product and UI designers", "Developers who want stronger design skills", "Freelancers and entrepreneurs"],
    prerequisites: ["Interest in design; no coding required"],
    curriculum: [
      { title: "UX Foundations", topics: ["Design thinking", "User research", "Personas and journeys", "Information architecture"] },
      { title: "Wireframing", topics: ["Low-fidelity wireframes", "User flows", "Layout and grid systems"] },
      { title: "Visual Design", topics: ["Typography", "Colour theory", "Spacing and hierarchy", "Design systems and components"] },
      { title: "Prototyping", topics: ["Interactive prototypes", "Micro-interactions", "Responsive design for web and mobile"] },
      { title: "Testing & Handoff", topics: ["Usability testing", "Accessibility basics", "Developer handoff and documentation"] },
    ],
    keyConcepts: ["User research", "Design systems", "Prototyping", "Usability"],
    exercises: ["Weekly UI redesign challenges", "Wireframing sprints", "Usability review tasks"],
    projects: ["Mobile app design case study", "Responsive website design system"],
    outcomes: ["Design usable, attractive interfaces", "Present a portfolio with case studies", "Collaborate effectively with developers"],
    methodology: commonMethodology,
    duration: "8 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Boost brands. Drive traffic. Generate results.",
    icon: "DM",
    overview:
      "A practical digital marketing course covering SEO, social media, paid advertising, content marketing, email marketing and analytics, taught through live campaign work.",
    audience: ["Marketing freshers and graduates", "Business owners promoting their own brand", "Professionals moving into digital roles"],
    prerequisites: ["Basic internet and computer usage"],
    curriculum: [
      { title: "Marketing Foundations", topics: ["Digital marketing landscape", "Customer funnel", "Buyer personas", "Website essentials"] },
      { title: "SEO", topics: ["Keyword research", "On-page and technical SEO", "Off-page and link building", "Local SEO"] },
      { title: "Paid Advertising", topics: ["Google Ads search and display", "Meta Ads", "Campaign structure", "Budget and bidding"] },
      { title: "Social & Content", topics: ["Content strategy", "Social media planning", "Copywriting", "Email marketing automation"] },
      { title: "Analytics", topics: ["Google Analytics", "Conversion tracking", "Reporting and optimisation"] },
    ],
    keyConcepts: ["SEO", "Paid campaigns", "Content strategy", "Analytics and ROI"],
    exercises: ["Keyword research assignments", "Ad copy writing tasks", "Analytics reporting practice"],
    projects: ["End-to-end campaign plan for a real business", "SEO audit and optimisation report"],
    outcomes: ["Plan and run measurable campaigns", "Improve organic search visibility", "Report performance with data"],
    methodology: commonMethodology,
    duration: "8 – 10 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "manual-testing",
    name: "Manual Testing",
    tagline: "Learn testing concepts, test cases, defect tracking and more.",
    icon: "QA",
    overview:
      "A complete manual software testing course covering STLC, test design techniques, test case writing, defect lifecycle and tools used by real QA teams.",
    audience: ["Freshers entering QA roles", "Non-technical graduates entering IT", "Professionals switching to software testing"],
    prerequisites: ["Basic computer knowledge; no coding required"],
    curriculum: [
      { title: "Testing Fundamentals", topics: ["SDLC and STLC", "Verification vs validation", "Testing levels and types", "Agile and Scrum basics"] },
      { title: "Test Design", topics: ["Test scenarios and cases", "Equivalence partitioning", "Boundary value analysis", "Requirement traceability"] },
      { title: "Execution & Defects", topics: ["Test execution cycles", "Defect lifecycle", "Severity vs priority", "Defect reporting"] },
      { title: "Specialised Testing", topics: ["Functional and regression testing", "Smoke and sanity", "UAT", "Cross-browser and mobile testing"] },
      { title: "Tools & Reporting", topics: ["JIRA", "Test management tools", "Test metrics and reports", "Basic SQL for testers"] },
    ],
    keyConcepts: ["STLC", "Test case design", "Defect management", "Agile QA"],
    exercises: ["Test case writing drills", "Defect logging practice in JIRA", "Requirement analysis tasks"],
    projects: ["Complete test documentation set for a web application", "End-to-end testing cycle with defect reports"],
    outcomes: ["Write professional test cases and reports", "Manage defects using industry tools", "Interview confidently for QA roles"],
    methodology: commonMethodology,
    duration: "6 – 8 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "automation-testing",
    name: "Automation Testing",
    tagline: "Automate web applications and improve speed, accuracy and efficiency.",
    icon: "Se",
    tracks: ["Selenium Java", "Selenium Python"],
    overview:
      "Automation testing with Selenium, available in two technology tracks — Selenium with Java and Selenium with Python. Learn to build maintainable automation frameworks that improve speed, accuracy and efficiency.",
    audience: ["Manual testers moving into automation", "Freshers targeting automation QA roles", "Developers interested in test automation"],
    prerequisites: ["Manual testing fundamentals", "Basic Java or Python (covered in the foundation module)"],
    curriculum: [
      { title: "Programming Foundation", topics: ["Java or Python essentials", "OOP concepts for automation", "Collections/data structures"] },
      { title: "Selenium WebDriver", topics: ["Locators and XPath", "WebDriver commands", "Waits and synchronisation", "Handling alerts, frames, windows"] },
      { title: "Test Frameworks", topics: ["TestNG / PyTest", "Assertions and annotations", "Data-driven testing", "Parallel execution"] },
      { title: "Framework Design", topics: ["Page Object Model", "Utilities and config management", "Excel/CSV data handling", "Reporting"] },
      { title: "Integration", topics: ["Git", "Maven / pip project structure", "Jenkins CI execution", "Cucumber BDD introduction"] },
    ],
    keyConcepts: ["Selenium WebDriver", "Page Object Model", "Data-driven testing", "CI execution"],
    exercises: ["Locator-writing practice on live sites", "Script-building tasks per module", "Framework refactoring exercises"],
    projects: ["Hybrid automation framework with reporting", "Regression suite executed through Jenkins"],
    outcomes: ["Automate web applications end to end", "Build and maintain a reusable framework", "Integrate automation into CI pipelines"],
    methodology: commonMethodology,
    duration: "10 – 12 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    tagline: "Transform data into insights and make smarter business decisions.",
    icon: "DA",
    overview:
      "Learn the full analytics workflow — collecting, cleaning, analysing and visualising data — using Excel, SQL, Python and modern BI tools, with business case studies throughout.",
    audience: ["Freshers targeting analyst roles", "Professionals working with reports and data", "Anyone moving into a data career"],
    prerequisites: ["Basic Excel familiarity; no coding experience required"],
    curriculum: [
      { title: "Analytics Foundations", topics: ["Data types and sources", "Analytics lifecycle", "Descriptive statistics"] },
      { title: "Excel & SQL", topics: ["Advanced formulas", "Pivot tables", "SQL SELECT, joins, aggregations", "Subqueries and window functions"] },
      { title: "Python for Analytics", topics: ["Pandas and NumPy", "Data cleaning", "Exploratory data analysis", "Matplotlib basics"] },
      { title: "Visualisation & BI", topics: ["Dashboard design principles", "Power BI / Tableau essentials", "KPIs and storytelling"] },
      { title: "Business Application", topics: ["Case studies", "Insight presentation", "Reporting automation"] },
    ],
    keyConcepts: ["Data cleaning", "SQL querying", "EDA", "Dashboarding", "Data storytelling"],
    exercises: ["SQL query sets", "Data-cleaning notebooks", "Dashboard build tasks"],
    projects: ["Sales performance dashboard", "Customer behaviour analysis case study"],
    outcomes: ["Analyse real datasets end to end", "Build clear dashboards and reports", "Communicate insights to business stakeholders"],
    methodology: commonMethodology,
    duration: "10 – 12 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
  {
    slug: "advanced-excel",
    name: "Advanced Excel",
    tagline: "Master advanced formulas, dashboards, automation and data analysis with Excel.",
    icon: "AX",
    overview:
      "A comprehensive Advanced Excel course designed for professionals who need to work with large datasets, complex formulas, pivot tables, Power Query, Power Pivot and interactive dashboards. You will also learn macros, VBA basics and automation techniques to boost productivity.",
    audience: [
      "Working professionals who use Excel daily",
      "Analysts, accountants and finance professionals",
      "Students and freshers targeting data roles",
    ],
    prerequisites: ["Basic Excel knowledge", "Basic understanding of formulas and charts"],
    curriculum: [
      { title: "Advanced Formulas & Functions", topics: ["Logical functions (IF, IFS, SWITCH)", "Lookup functions (VLOOKUP, HLOOKUP, INDEX, MATCH, XLOOKUP)", "Text and date functions", "Array formulas and dynamic arrays"] },
      { title: "Data Analysis & Pivot Tables", topics: ["Pivot tables and pivot charts", "Slicers and timelines", "Grouping and calculated fields", "Power Query for data transformation"] },
      { title: "Power Pivot & Data Models", topics: ["Data modelling basics", "Relationships between tables", "DAX fundamentals", "KPIs and calculated columns"] },
      { title: "Dashboards & Visualisation", topics: ["Interactive dashboards", "Conditional formatting", "Dynamic charts", "Design best practices"] },
      { title: "Automation & Macros", topics: ["Recording and editing macros", "VBA basics", "User-defined functions", "Automating repetitive tasks"] },
    ],
    keyConcepts: ["Advanced formulas", "Pivot tables", "Power Query", "Power Pivot", "Dashboards", "VBA automation"],
    exercises: ["Formula-based data cleaning tasks", "Pivot table analysis challenges", "Power Query transformation exercises", "Dashboard build projects"],
    projects: ["Sales performance dashboard with slicers", "Automated expense tracker with macros"],
    outcomes: [
      "Build complex, error-free formulas and reports",
      "Create interactive dashboards and visualisations",
      "Automate repetitive tasks with macros and VBA",
    ],
    methodology: commonMethodology,
    duration: "6 – 8 weeks (weekday or weekend batches)",
    certification: commonCertification,
  },
];


export const professionalCourses = [
  { name: "MS Word", icon: "W", description: "Professional document creation, formatting, templates and mail merge." },
  { name: "MS Excel", icon: "X", description: "Formulas, pivot tables, charts and data analysis for the workplace." },
  { name: "MS PowerPoint", icon: "P", description: "Impactful business presentations with clean design and animation." },
  { name: "Tally", icon: "T", description: "Accounting, inventory, GST and business bookkeeping essentials." },
  { name: "AutoCAD", icon: "A", description: "2D drafting and design fundamentals for engineering drawings." },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const allCourseNames = [
  ...courses.map((c) => c.name),
  "Automation Testing – Selenium Java",
  "Automation Testing – Selenium Python",
  ...professionalCourses.map((c) => c.name),
];
