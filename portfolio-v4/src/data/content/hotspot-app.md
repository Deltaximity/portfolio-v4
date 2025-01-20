---
title: "Hotspot App"
image: "/assets/img/mockup1.webp"
alt: "A mockup of an iPhone 16 Pro showcasing the Hotspot app"
description: "A PWA app that annually helps over 8000 students connect with employers."
category: "Case Study, Project"
date: "2024"
---
# Summary

- Provide a high-level overview of the project. Briefly outline the problem, the goal of the app, the target users, and the solution provided.
- Summarize key outcomes or impacts (e.g., user satisfaction, engagement rates, or productivity improvements).

# Background

[Hotspot](https://hotspot.kau.se/) is an organization that arranges annual job fair events at [Karlstad University](https://www.kau.se/en). It was founded by students in 1998, and is Sweden's largest job fair organizer. During their first job fair, over 130 exhibitors participated. As of year 2024, Hotspot still attracts well over 130 companies from across the country, and over 8000 students visit the job fair annually.

With the rise in demand and popularity, Hotspot needed to come up with more innovative ways to design their job fairs. Students were not satisfied with the event, claiming that they couldn’t find the right companies and that the navigation of the map/list of companies (provided upon visiting the event) was too confusing to use. This was also resource-intensive on Hotspot team’s side, due to the planning and work involved in handling all the logistics. Furthermore, unauthorized students from outside the university were entering the event, exacerbating the issues. Additionally, companies complained about how their booths didn’t get enough recognition due to the layout of the event itself. Naturally, those located farther away from the event gained less recognition from students.

To summarize, we see clear problems from three sides:
| Hotspot | Students | Companies |
|---------|----------|-----------|
| Resource-intensive to handle all the logistics | Confusing navigation using the printed map | Not getting enough recognition |
| Unauthorized access by students outside the university | No info about the companies | Not getting the right students |

Hotspot needed a solution to address these concerns, so they reached out to students in the web development program with a proposal of coming up with a matchingmaking solution for students and companies. 

I joined the Hotspot project team in 2023 during my university studies and was in charge of the planning and development of this proposed app. Together with a development team of three people; two web developers (including me) and one UI/UX-designer.

# Objectives

The Hotspot app is aimed to address the issues highlighted in the three categories above. The app's goals are:
1. Help students match with the right companies.
1. Help companies get recognized.
1. Provide a pleasant and seamless user experience for all event participants.
1. Offload the work off the Hotspot team with innovative digital solutions—This way the team can be more present with the participants at the event.

# Research and User Analysis

The research process started with understanding the problem itself.

| Industries | Roles |
|------------|-------|
| Economics and law | Employment |
| Healthcare and social work | Trainee |
| Engineering | Extra job |
| IT | Thesis work |
| Teacher training | Summer job |
| Music, dance and culture | Internship |
| Social sciences and humanities | Membership |

---

- Outline the research conducted to understand the user needs, including methods like surveys, interviews, or usability studies.
- Discuss any personas developed or key insights uncovered about users’ goals, behaviors, pain points, or preferences.
- Share any initial sketches, wireframes, or prototypes used to validate ideas with users.

# Design and Development Process
The development of the app incorprated some Agile elements and was planned entirely by me to ensure delivery on time with the intended features and a polished end product.

## Planning
During the planning phase, we started laying out the foundation of the project. We discussed and evaluated which frameworks to use. How we were going to divide the tasks. And also which 'core' vs 'ideal' features to implement.

> **Core Feature**: A feature we believe is what's necessary to get the job done, backed by logical reasoning and careful consideration.

> **Ideal Feature**: A feature we believe is a nice-to-have, or that we envision to be necessary but may not necessarily be.

### Project Management Tools
`Notion` was used for most of the project management within the development team, for keeping track of progress, meetings, and development of the app. This is also where we did all the documentation for future Hotspot members who will be maintaining this app. For the rest of the Hotspot team, `Podio` was used for managing everything, including logistics and client bookings (see how we utilized this under the *Development* section).

![Screenshot of Notion in Timeline view](/assets/blog/images/blog-hotspot-notion.png)

### Technology Considerations
There was careful consideration and early experimentation of which frameworks and technologies to use for the development of the Hotspot app. I experimented with technologies like `Capacitor` with the `Ionic` library for more native-like features on mobile, `Expo` for the ability to convert `React` code into `React Native`.

For the technologies used, we settled on `React` for frontend and `Express` for backend (see *Development* section for more details). The following criteria were considered:
- **Ease of use** - The chosen technology should be easy to use and work with for the developers.
- **Learning curve** - The chosen technology should be easy to learn and not take much time of the development process just learning the tools.
- **Maintainability** - The chosen technology should be easily maintainable for future developers working on this app.
- **Modularity** - The chosen technology should be modular and expandable, having both scalabilty and flexibility in mind for potential future uses of the app.
- **Device support** - The final product should run on different devices and operating systems in a consistent and predictable manner (iOS, Android and more).
- **Resource usage** - The final product shouldn't require much resources to run, saving both battery life, bandwidth data and time for the users.

## Design
The visual design of the app was taken care of by our UI/UX-designer. With initial brainstorming and workshop meetings with us the developers. The user interface design underwent a few revisions and early prototype discussions with the Hotspot team before finally landing where it is now. 

![Four mockup interfaces showcasing the Hotspot app](/assets/blog/images/blog-hotspot-prototypes.jpeg)
*Final revisions of the app design proposed by our designer.*

## Development
We started with a few workshop meetings with our designer to finalize the design and provide feedback on how achievable the design is with code, and whether there are any inconsistencies or complications with the design. 

During the development phase, we used `Github` for version control, and set up standard procedures for naming, documentation and other practices for development.

### Tech Stack
- `React` - For the frontend. We chose React for the flexibility and future-proofing of the app. We were already familiar with React so it was easier to get into.
- `Express` - For the backend. We used Express.js for the server side of things. The server was responsilbe for retrieving data from external sources (Podio), caching images, and providing the frontend with the necessary data to work with.
- `Podio API` - We integrated Podio into our backend server for easy access to company data to be displayed in the app, while still maintaining the same workflow for other team members when updating this data.
- `JSON` - For local database. JSON was used to keep things neat internally, to link data from different sources into one accessible place by the frontend, created at build time by the backend.
- `SCSS` - We used Sass for easier development and maintainance of design code in the future, enabling us to implement our own design system which can be used across the whole app.

### Challenges Faced
1. Using JavaScript wasn't the best option when it came to stability and predictibility. We encountered hidden and unexpected bugs during development and we couldn't exactly figure out why until we explicitly set datatypes and traced the life cycle of data.
1. We experienced issues trying to access backend files (images) from the frontend when we were updating the JSON datasheet.

## Testing
We had set an initial deadline for when the app would be in its complete state and ready for testing. Once the app reached this state, we ran our first early tests within the Hotspot team. This was very helpful as it helped us encounter bugs early on before running further tests or releasing it to the public. Some members encountered UX problems, the app interactivity not working as intended or becoming unresponsive. Others encountered complete app crashes upon visiting a specific page, which to me was a major red flag and needed to be addressed ASAP.

We took note of all the bugs encountered and told the team to write "mini bug reports" to us developers, where they wrote: 
1. What device and browser they used
1. The steps to reproduce the error/bug
1. Screenshots and other useful information

We had **1 week** to fix the encountered bugs before the final release date. We managed to fix some of the minor bugs on the spot and did further investigation on the bigger bugs. There was one bug in particular we had a hard to fixing; company logos not being displayed in the frontend.

## Launch
After we squashed most of the bugs, we launched the app upon delivery deadline on time. We used the help of one our IT consultants to set up the app on our university servers. The marketing team had roughly **1 week** to market the app and attract as many users as possible.

*We had plans to set up usage statistics trackers for the app but didn't have time to implement this feature.*

# Key Features and Functionality
Below is a list of features and functionalities implemented for the Hotspot app.

## Quick and Easy Access

## Onboarding and Recommendations
The app walks the user through an onboarding process to quickly get them started.

## Information at a Glance
![Hotspot app showcasing a company card with arrows and labels (company, description, tags, favorite)](/assets/blog/images/blog-hotspot-card.png)

The app shows easily glancable information, giving the user information they can use to find the right company before they look for further details (especially useful during the main event day).

Quick information is crucial when searching for the right company, especially on the main event day where students only have **5.5 hours** to explore among 130 company booths. A conversation at a company booth could last anywhere from **15 min to 1 hour**.

## Ability to Favorite Companies
The user can save companies in a `Favorites` list and view them at any time. The `Favorites` list has the same advanced searching and filtering options as the main page, and the user can search, sort and filter as they like within this list. The user then can click on the card to reveal more information about the company.

This is helpful when students want to do research about the companies that will be participating the job fair prior to the main event day.

## Advanced Search, Sort and Filtering Options

---

- Highlight the app’s main features and explain how each addresses a specific user need.
- Include screenshots or visual examples of the user interface to illustrate the functionality.

# Results

- Discuss the outcomes achieved after the app’s launch. Include quantitative metrics (like user acquisition rates, app downloads, or engagement time) and qualitative feedback (user reviews or testimonials).
- Address any improvements in user satisfaction, productivity, or other areas relevant to the app’s goals.

# Lessons Learned and Future Improvements

- Reflect on any significant takeaways from the project, such as insights about user behavior, technical challenges, or design constraints.
- Mention potential areas for improvement, feature expansion, or further testing to enhance the app’s functionality or user experience.

# Conclusion

- Summarize the main achievements and the value the app has provided to users.
- Reiterate how the app has addressed the initial problem and aligned with the project goals.

# Appendix

- Include any additional data, charts, or in-depth explanations that support the case study but don’t fit in the main text.

### Tips for Writing a Strong Case Study
- Be Concise but Thorough: Focus on the aspects that most impact the reader’s understanding of the development journey.
- Use Visuals: Screenshots, flowcharts, or sketches can make the case study more engaging.
- Highlight User-Centric Decisions: Emphasize how the app was shaped by user needs and feedback.
- Use Metrics and Data: Where possible, back up statements with quantitative data to strengthen credibility.