---
title: "Hotspot App"
image: "/assets/img/mockup1.webp"
alt: "A mockup of an iPhone 16 Pro showcasing the Hotspot app"
description: "A PWA app that annually helps over 8000 students connect with employers."
category: "Case Study, Project"
date: "2024"
---
# Summary

Hotspot is a Progressive Web App (PWA) engineered to transform the annual job fair experience at Karlstad University. With over 8,000 students and more than 130 companies converging for a 5.5-hour event, traditional printed maps and fragmented event information proved inefficient. I recognized the need for a digital solution that could quickly consolidate essential details into one intuitive platform. In this case study, I share my journey through the design, development, and testing phases of Hotspot, highlighting key decisions, challenges, and the lessons I learned along the way.

# Background

[Hotspot](https://hotspot.kau.se/) is an organization that hosts Sweden's largest annual job fair at [Karlstad University](https://www.kau.se/en). Founded by students in 1998, the event has consistently attracted over 130 companies and sees more than 8000 student visitors each year.

As Hotspot's popularity grew, new challenges emerged: 
- **Students** found it difficult to navigate the event, struggling with confusing maps and a lack of company information they had to look up themselves.
- **Companies** voiced concerns about their booth visibility, as those farther from the event's center received less attention.
- **The Hotspot team** faced increasing logistical strain, from handling event planning to addressing unauthorized acces by non-university students.

To summarize, we see clear problems from three sides:
| Hotspot | Students | Companies |
|---------|----------|-----------|
| Resource-intensive logistics | Confusing navigation with printed maps | Booths in less visible areas recieved fewer visitors |
| Unauthorized students attending | Lack of company information | Struggled to attract the right students |

To address these concerns, Hotspot sought an **innovative matchmaking solution** that could bridge the gap between students and companies. They turned to the web development program at Karlstad University, inviting students **to deisgn and develop a digital solution** for the event.

I joined the Hotspot project team in 2023 during my university studies, taking charge of planning and development alongside **a team of three people**—two web developers (including myself) and one UI/UX-designer.

# Objectives

The **Hotspot app** was designed to directly address the challenges faced by students, companies, and the Hotspot team. Its key objectives were to:
1. **Match students with the right companies** - Make it easier for students to find relevant exhibitors.
1. **Increase company visibility** - Ensure all exhibitors receive recognition, regardless of booth placement.
1. **Enhance the user experience** - Create a smooth intuitive event navigation system.
1. **Reduce logistical strain on the Hotspot team** - Implement digital solutions that streamline even management, allowing the team to focus on engaging with participants.

# Understanding User Needs

Before development began, we focused on **understanding the problem itself**, what students were looking for, what companies had to offer, and how we could bridge the gap effectively. Rather than conducting formal studies, we relied on firsthand experience and available data to identify pain points and inform our technical decisions.

## Key Challenges
- The event lasts **only 5.5 hours on a single day per year**, making efficiency crucial. Students must find relevant companies quickly.
- **Students struggled** to locate companies suited to their field, leading to missed opportunities.
- **Companies had diverse offerings**, from full-time employment to internships and thesis work, but lacked a way to effectively match with the right students.
- **The event format was limiting**, without a structured way to explore industries and roles, many participants navigated the fair at random.

## Industries & Roles
To understand the range of opportunities available, we categorized the industries and roles companies provided:

| Industries | Roles |
|------------|-------|
| Economics and law | Employment |
| Healthcare and social work | Trainee |
| Engineering | Extra job |
| IT | Thesis work |
| Teacher training | Summer job |
| Music, dance and culture | Internship |
| Social sciences and humanities | Membership |

Addtionally, we looked into other data points such as:
- Company locations
- Additional information companies provided
- Booth location at the event

These insights shaped the **core functionality** of the Hotspot app—**helping students quickly connect with relevant companies** while ensuring companies gained visibility among the right audience.

# Design and Development Process
The development of the app incorprated some Agile elements and was planned entirely by me to ensure delivery on time with the intended features and a polished end product.

## Planning
During the planning phase, we laid out the foundation of the project, by evaluating which frameworks to use, dividing tasks, and distinguishing between 'core' vs 'ideal' features.

> **Core Feature**: An essential functionality necessary to achieve the app’s goals, backed by logical reasoning and careful consideration.

> **Ideal Feature**: A desirable functionality that would enhance the app, though not strictly necessary.

### Project Management Tools
`Notion` was used for most of the project management within the development team, for keeping track of progress, meetings, and development of the app. This is also where we did all the documentation for future Hotspot members who will be maintaining this app. For the rest of the Hotspot team, `Podio` was used for management (see how we utilized this under the *Development* section).

![Screenshot of Notion in Timeline view](/assets/blog/images/blog-hotspot-notion.png)

### Technology Considerations
Early experimentation helped us identify the best technologies for our needs. While we explored options like Capacitor with the Ionic library and Expo for converting React code into React Native for more native-like features on mobile, we ultimately settled on `React` for frontend and `Express` for backend (see *Development* section for more details). 

We chose these technologies based on criteria such as:

- **Ease of use** - Developer-friendly framework.
- **Learning curve** - Minimal learning curve for quicker development process.
- **Maintainability** - Easily maintainable for future developers working on this app.
- **Modularity** - Modular and expandable, having both scalabilty and flexibility in mind for potential future uses of the app.
- **Device support** - Consistent performance and predictable behavior across iOS, Android, and more.
- **Resource usage** - Efficient in battery, bandwidth, and overall performance.

## Design
The visual design was crafted by our UI/UX designer through brainstorming sessions and collaborative workshops with the development team. The user interface underwent several revisions and prototype discussions with the Hotspot team before arriving at the final design.

![Four mockup interfaces showcasing the Hotspot app](/assets/blog/images/blog-hotspot-prototypes.jpeg)
*Final revisions of the app design proposed by our designer.*

## Development
We held multiple workshops with our designer to finalize the design and ensure it was achievable in code. This phase helped us identify and address any inconsistencies or complications early on.

During development, we used `Github` for version control, and set up standardized procedures for naming, documentation, and code practices to ensure consistency and quality throughout the project.

### Tech Stack
- `React` - For frontend. Chosen for its flexibility and future-proofing of the app. We were already familiar with React so it was easier to get started.
- `Express` - For backend and server side of things. Managing data retrieval from external sources (like Podio), caching images, and serving data to the frontend.
- `Podio API` - We integrated Podio into our backend server for easy access to company data to be displayed in the app, while still maintaining the same workflow for other team members when updating this data.
- `JSON` - Used as a local database to consolidate data from different sources into one accessible format, generated at build time by the backend, with scheduled updates to receive the latest data.
- `SCSS` - For easier development and maintainance of design code in the future, enabling us to implement our own design system which we used across the entire app.

### Challenges Faced
1. **JavaScript Stability:** The dynamic nature of JavaScript led to unexpected bugs. We had to explicitly set data types and closely trace the data lifecycle to resolve these issues.
1. **File Access:** We encountered difficulties accessing backend files (images) from the frontend during JSON updates.

## Testing
We set an initial deadline for the app to reach a state ready for testing. Early tests within the Hotspot team revealed several issues:
- **UX Problems:** Some users experienced unresponsive interactivity and navigation issues. Particularly with search and filtering functionality on iOS devices.
- **Crashes:** For some users, the "Favorites" pages caused a complete app crash, which was a critical red flag.

We took note of all the bugs encountered and told the team to write "mini bug reports" that included: 
1. The device and browser used.
1. Steps to reproduce the bug.
1. Screenshots and additional context.

With a **1-week** window to fix these issues, we managed to address minor bugs immediately and conducted further investigations on more significant problems—particularly a persistent issue with company logos not displaying on the frontend.

## Launch
After resolving most of the bugs, we launched the app on schedule. With assistance from an IT consultant, we deployed the app on our university servers. The marketing team then had approximately **1 week** to promote the app and attract users.

*Note: We had plans to set up usage statistics trackers for further user research but didn't have time to implement this feature.*

# Key Features and Functionality
The Hotspot app is packed with features designed to streamline the job fair experience for both students and companies.

## Quick and Easy Access
The app is PWA and engineered for immediate use. Its responsive and efficient design ensures that students can quickly open the app and access event information without delay, a crucial benefit during the fast-paced 5.5-hour job fair. Launch it from any browser on various operating systems or save it to your homepage for quicker access.

## Onboarding and Recommendations
![Mockup of iPhone showcasing Hotspot app onboarding page)](/assets/blog/images/blog-hotspot-onboarding.png)

Upon launching the app, users are guided through an onboarding process that helps them get started quickly. This process not only introduces key features but also offers tailored recommendations, ensuring that students are directed toward companies that match their interests from the outset.

## Information at a Glance
![Hotspot app showcasing a company card with arrows and labels (company, description, tags, favorite)](/assets/blog/images/blog-hotspot-card.png)

The app presents company information in a concise, glanceable format. Key details such as *company name, description, tags*, and an option to *favorite* allow users to quickly determine which companies align with their interests. This is especially important during the event, where students have only **5.5 hours** to navigate through **130 company booths**. Given that interactions at each booth can last anywhere from **15 minutes to 1 hour**, quick access to essential details is critical.

## Ability to Favorite Companies
![Mockup of iPhone showcasing company card favorite button](/assets/blog/images/blog-hotspot-favorite.png)

The user can save companies in a `Favorites` list and view them at any time. The `Favorites` list has the same advanced searching and filtering options as the main page, and the user can search, sort and filter as they like within this list. The user then can click on the card to reveal more information about the company.

This is helpful when students want to do research about the companies prior to the main event day.

## Advanced Search, Sort and Filtering Options
![Mockup of iPhone showcasing search bar and filter button](/assets/blog/images/blog-hotspot-search.png)

To further enhance usability, the app provides advanced options for searching, sorting, and filtering company listings. These tools empower students to tailor their exploration based on specific criteria, ensuring they can quickly identify opportunities that best fit their career interests.

# Results
While we didn’t conduct a formal empirical study, and the marketing team had limited time to attract a large user base, the early anecdotal feedback has been overwhelmingly positive.
- **Enhanced User Experience:** Despite the limited data, both students and team members have found the app incredibly useful. Its seamless onboarding process and glanceable company details made navigating the 5.5-hour event much easier.
- **Improved Company Visibility:** The app’s advanced search and filtering features helped companies, even those with less prominent booth positions, gain better recognition among students.
- **Operational Efficiency:** The app’s advanced search and filtering features helped companies, even those with less prominent booth positions, gain better recognition among students.
- **Personal Endorsement:** On a personal note, I found the app so effective and intuitive that I kept coming back to it. Its seamless functionality truly underscored the purpose it was designed to serve.
- **Room for Future Enhancements:** While the feedback has been positive, we did encounter minor stability issues and other challenges during testing. These experiences have provided valuable insights for future improvements.

# Conclusion
The Hotspot app has emerged as a vital digital solution for enhancing the annual job fair at Karlstad University. By addressing the unique challenges faced by students, companies, and the Hotspot team, the app streamlines the process of connecting students with the right companies, while also reducing the logistical burdens traditionally associated with the event.

Despite limited marketing time and a modest initial user base, early anecdotal feedback has confirmed the app’s effectiveness. Students appreciated its intuitive design and quick access to essential information during the tight 5.5-hour event, and companies benefited from improved visibility, even those with less prominent booth placements. Personally, I found the app so compelling that I continued using it, a testament to the thoughtful design and purposeful functionality behind it.

Developed using an agile approach, the project showcased careful planning, strategic technology choices, and close collaboration between developers and designers. This process not only met immediate needs but also laid the groundwork for future enhancements. As we refine and expand the app, our goal remains to create an even more seamless and engaging job fair experience for everyone involved.

In summary, the Hotspot app stands as a successful example of how targeted digital innovation can transform traditional events, delivering meaningful improvements for students, companies, and event organizers alike.

# Parting Words
This project has been more than just a technical challenge—it’s been a journey of learning, problem-solving, and personal growth. Building the Hotspot app allowed me to dive deep into real-world issues and explore how digital solutions can make a tangible difference, even within the tight constraints of an annual event. I hope this case study offers you a window into my thought process and the creative decisions that guided this project.

**Thank you** for joining me on this journey. Whether you’re a fellow developer or simply curious about digital innovation, I appreciate you reading my story. I look forward to future challenges and opportunities, hope our paths cross again in the world of tech. Until then, happy problem-solving!