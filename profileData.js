// This file contains all the data for your profile website.
// You can edit this file to update your information instantly.

const profileData = {
    // Basic Info
    name: "Siva Reddy Durgempudi",
    role: "Java Full Stack Developer",

    // Age Configuration
    // Set showAge to true if you want to display your age
    age: 35,
    showAge: false,

    // Photo
    // 1. Copy your photo into this folder (personal_profile)
    // 2. Change the line below to: photoUrl: "./your-photo-name.jpg",
    photoUrl: "./profile-pic.jpg",

    // Experience
    // You can use HTML tags like <br> for new lines or <strong> for bold text
    experience: `
        <strong>I am Java Full Stack Developer</strong> with 10+ years of experience building scalable, high-performance web applications. 
        <br><br>
        Over the past 6 years, I’ve specialized in <strong>backend Java development</strong>, and for the last 4 years, I’ve honed my skills in <strong>frontend Angular development</strong>, delivering seamless, user-friendly interfaces.
        <br><br>
        I have extensive experience in cloud-native development using <strong>AWS</strong>, including designing and deploying applications with CI/CD pipelines, serverless architecture, and cloud infrastructure management. Skilled in RESTful APIs, microservices, and database design (SQL & NoSQL), I deliver end-to-end solutions bridging frontend, backend, and cloud environments.
        <br><br>
        Proficient with <strong>GitHub Copilot</strong> (2+ years) and knowledgeable in the latest AI tools, I am passionate about integrating AI-driven solutions into development workflows and eager to work with cutting-edge OpenAI technologies.
        <br><br>
        Committed to building robust, scalable, and efficient full-stack applications while continuously exploring new cloud and AI tools to drive innovation.
    `,

    // Education Details
    education: [
        {
            degree: "Masters in CIS (Specialization)",
            school: "Southern Arkansas University, USA",
            year: "Dec 2022"
        },
        {
            degree: "Bachelors in ECE",
            school: "JNTUK, India",
            year: "2014"
        }
    ],

    // Certifications
    certifications: [
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            date: "May 2025 (Expired)",
            badgeUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
        }
    ],

    // Detailed Professional Experience
    detailedExperience: [
        {
            company: "Gainwell Technologies Company",
            location: "Irving, TX",
            role: "Senior Java Full Stack Developer",
            duration: "Feb 2024 - Present",
            responsibilities: [
                "Follow Agile methodology for the development and participate in Sprint and retrospective meetings and daily scrum calls with my team using JIRA board.",
                "Designed and developed scalable Java/J2EE microservices using Spring Boot, with a strong focus on security and performance, across multiple enterprise projects.",
                "Develop applications using Java 17 programming language and Spring framework and/or Spring boot framework and handle the security using spring security.",
                "Troubleshooting the LDAP authentication issues while resetting passwords in the Flagstar ECM applications.",
                "Write SQL queries using relational database to perform Create, Read, Update, delete operations using Oracle.",
                "Used Spring JDBC to update data in the database & Fixed JDBC connection issues while working on multiple requests.",
                "Based on the Vendor documents format developed code to pull & push documents to p8 using FileNet system.",
                "Spring Controllers with Angular 18 route to Java services and utilize ng-templates and form validators.",
                "Developed code to use LDAPS urls instead of LDAP urls to provide security to the ECM applications & Working on TLS 1.1 Vulnerabilities.",
                "Developed Rest webservices to allow communication between users and servers over HTTP using Spring boot.",
                "Developed cloud-native applications using Spring Boot and deployed them on AWS (EC2, Lambda, S3, API Gateway) with secure access control using IAM roles and policies.",
                "Configured AWS IAM policies to control access to services and integrated with Java-based applications for secure resource handling across multiple environments.",
                "Created application interfaces using HTML5 & CSS3 Layouts, Positioning, text, border and padding.",
                "Spearheaded integration of Identity and Access Management (IAM) systems including SSO (Single Sign-On) and OAuth 2.0 flows for secure, centralized authentication across all current and past projects.",
                "Migrating apps from Harvest to GitHub, Validating GitHub workflows to build the ECM applications.",
                "Consumed RESTFUL webservices using Angular HTTP module and transformed the response using RXJS operators.",
                "Used Angular 18 Reactive forms to implement complex forms and performed the validations using Form builder.",
                "Worked on Angular to deal with troubleshooting and deal with the Angular virtual environment bugs.",
                "Writing Junit test cases after code development to ensure all the functions and assisting others in validating that the solution performs as expected.",
                "Deploying apps to the Prod servers with the help of Operations team during deployment night.",
                "Build Java applications using Maven and deploy using Github actions as CI/CD pipelines.",
                "Check the vulnerabilities using CheckMarx and verify test code coverage using SonarQube.",
                "Create complete documentation in the confluence page after development for a smooth transition of the product to the maintenance and enhancement."
            ]
        },
        {
            company: "Walmart",
            location: "TX",
            role: "Senior Java Full Stack Developer",
            duration: "Dec 2022 - Feb 2024",
            responsibilities: [
                "Follow Agile methodology for the development and participate in Sprint and retrospective meetings and daily scrum calls with my team using JIRA board.",
                "Develop applications using Java 17 programming language and Spring framework and/or Spring boot framework and handle the security using spring security.",
                "Troubleshooting the LDAP authentication issues while resetting passwords in the Flagstar ECM applications.",
                "Write SQL queries using relational database to perform Create, Read, Update, delete operations using Oracle.",
                "Used Spring JDBC to update data in the database & Fixed JDBC connection issues while working on multiple requests.",
                "Based on the Vendor documents format developed code to pull & push documents to p8 using FileNet system.",
                "Spring Controllers with Angular 18 route to Java services and utilize ng-templates and form validators.",
                "Developed code to use LDAPS urls instead of LDAP urls to provide security to the ECM applications & Working on TLS 1.1 Vulnerabilities.",
                "Developed Rest webservices to allow communication between users and servers over HTTP using Spring boot.",
                "Created application interfaces using HTML5 & CSS3 Layouts, Positioning, text, border and padding.",
                "Migrating apps from Harvest to GitHub, Validating GitHub workflows to build the ECM applications.",
                "Consumed RESTFUL webservices using Angular HTTP module and transformed the response using RXJS operators.",
                "Used Angular 18 Reactive forms to implement complex forms and performed the validations using Form builder.",
                "Worked on Angular to deal with troubleshooting and deal with the Angular virtual environment bugs.",
                "Writing Junit test cases after code development to ensure all the functions and assisting others in validating that the solution performs as expected.",
                "Using SOAP UI and POSTMAN for testing Workday endpoint URL's and development of webservices.",
                "Deploying apps to the Prod servers with the help of Operations team during deployment night.",
                "Build Java applications using Maven and deploy using Github actions as CI/CD pipelines.",
                "Check the vulnerabilities using CheckMarx and verify test code coverage using SonarQube.",
                "Create complete documentation in the confluence page after development for a smooth transition of the product to the maintenance and enhancement."
            ]
        },
        {
            company: "BCBS",
            location: "India",
            role: "Sr. Java Full Stack Developer",
            duration: "July 2019 - Nov 2021",
            responsibilities: [
                "Create functional documents on the Cerner wiki page with model diagrams and flowcharts about how to implement requirements to Dragonfly applications.",
                "Designed and developed scalable Java/J2EE microservices using Spring Boot, with a strong focus on security and performance.",
                "Configured AWS IAM policies to control access to services and integrated with Java-based applications for secure resource handling.",
                "Migrated HDXTS legacy applications using Spring boot to improve the performance of Dragonfly application.",
                "Working on end-to-end application development using Java 8, Spring framework modules, Rest API, Messaging queues.",
                "Created and Configured Queue managers to our dragonfly applications and Monitored MQ queues managers using MQ Explorer.",
                "Developed Error handling flows while publishing message to the queue and log the error message.",
                "Worked with database team to create stored procedures and tested it using SQL Developer tool.",
                "Used Oracle as database and Involved in the development of SQL backend implementation and using SQL created Select, Update and Delete statements.",
                "Extensively used Spring JDBC template to perform database transactions.",
                "Developed a third-party API with OAUTH 2.0 authentication and used as a gateway for all the web services.",
                "Developed Micro services using RESTful services allowing communication over HTTP by utilizing Spring Boot.",
                "Implemented OAUTH 2 (Rest service authentication) in our application to communicate securely with other protected resources.",
                "Developed Junit test cases for all the developed modules to meet Sonar coverage requirements.",
                "Created and worked on a common Angular library with shared components, published in GIT and integrated that library into the root projects.",
                "Migrated the existing application, which is in Angular JS to Angular 8.",
                "Created Typescript reusable components and services to consume REST API's using Component-based architecture provided by Angular 6/8.",
                "Using Gradle 7.5.1 version as a build tool automating the building, testing, publishing, and deployment.",
                "Analyzed and resolved production disconnect issues when Clients connecting to HDXTS cloud-Next environment.",
                "Used Splunk to check production error logs and informed route cause to the team and fixed it in on-time.",
                "Using Jenkins plugins for code coverage and to run all the tests before generating jar file.",
                "Developed cloud-native applications using Spring Boot and deployed them on AWS (EC2, Lambda, S3, API Gateway).",
                "Created automated pipelines in AWS Code Pipeline to deploy Docker containers in AWS ECS.",
                "Experience working with Docker to improve our Continuous Delivery framework to streamline releases.",
                "Used eclipse extensively in development and debugging the application and Git tools to manage the Code versions.",
                "Used GIT to maintain the version of the files and took the responsibility to do the code merges.",
                "Written chef cookbooks for DB configurations to modularize and optimize the application properties.",
                "Created Chef recipes automation tools and builds and do overall process improvement to any manual process.",
                "Fix security code vulnerabilities of my development using Fortify scan and doing test code coverage using SonarQube."
            ]
        },
        {
            company: "Infinity Data Technologies",
            location: "",
            role: "Java Full stack Developer",
            duration: "August 2014 - July 2019",
            responsibilities: [
                "Designing & Developing business logic in service class as per Business requirements with Java core, collections and java 8 features.",
                "Extensively working on Intellij, Eclipse for code development and debugging purposes.",
                "Modernized legacy Java applications to microservices with Spring Boot, implementing OAuth2 Authorization Code Flow and SSO login.",
                "Migrated Shared directory legacy web applications to spring boot 2.0 like Cli-tools and ONS-admin webapp.",
                "Developed DAOs using JPA, hibernate persistence API for the database operations to interact with Oracle 12c Database.",
                "Created several Rest endpoints for ECM (Enterprise client manager) Project.",
                "Web services developed for SD to allow communication between applications through SOAP over HTTP.",
                "Design and Development of web applications and Integration with Hibernate using Spring MVC framework.",
                "Created RESTAPI to retrieve configuration JSON data and test API using postman and documented using SWAGGER.",
                "Developed user authentication and authorization by using Spring security OAUTH 2.0.",
                "Developed Shared directory clearxchange UI web pages using JSP and Java script and HTML5 and CSS3.",
                "Involving in Enhancement of existing application utilizing Angular 8, creating HTML navigation menu that is role-based.",
                "Developed the interactive web pages using Angular 8 framework.",
                "Developed the Maven build file for preparing war/jar files used to deploy application into Apache Tomcat Server.",
                "Using SOAP UI to test the web services, I developed and created SOAP UI test cases.",
                "Deployed WAR, JAR files manually in Linux/Unix environments using Shell scripting.",
                "I integrated the Azure function apps with Zelle API Gateway and used OAUTH2 for Authorization.",
                "Creating log files in Linux environments for debugging and monitoring purpose using Log4J logging API framework.",
                "Handling kafka brokers’ failures and converted applications to send kafka messages in an asynchronous way.",
                "Involving fixing security code vulnerabilities with static code analysis tool such as Fortify Scan.",
                "Identifying and developing test cases and test scripts to perform load tests for Performance and regression testing.",
                "Developed the maven script to generate the jar bundle for deployment in Dev and QA environments.",
                "Participated in fixing production issues within hours by checking the logs using Splunk.",
                "After code development of Rest APIs for end-to-end testing writing spock tests using Groovy.",
                "Implemented unit test cases for the code snippets that I developed used Junit.",
                "Worked on Atlassian products like Jira, Bitbucket, and Confluence for Issue tracking, Code review and documentation."
            ]
        }
    ],

    // Social Links (Optional - leave empty string "" to hide)
    socialLinks: {
        linkedin: "#",
        phone: "tel:+1234567890", // Replace with your actual phone number
        email: "mailto:your.email@example.com"
    },

    // Theme Configuration
    // You can change these colors to customize the look
    theme: {
        primaryColor: "#00f3ff",   // Neon Cyan
        secondaryColor: "#bc13fe", // Neon Magenta
        accentColor: "#ffffff",    // Bright White
        backgroundColor: "#050510" // Deep Void
    }
};
