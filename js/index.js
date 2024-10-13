require({
    urlArgs: "v=" + (new Date()).getTime(),
    packages: [{
        name: "msu",
        location: "./"
    }],
    paths: {
        "knockout": "./lib/knockout-latest",
        "text": "./lib/text",
        "css": "./lib/css.min",
        "material-components-web": "./lib/material-components-web.min"
    },
    map: {
        "*": {
        }
    },
    config: {
        "msu/pages/index": {
            version: "1.0.0",
            experience: {
                title: "Experience",
                items: [{
                    title: "Head of Enterprise Application Development",
                    subtitle: "Alanata, Inc., Bratislava, Slovakia",
                    start: "November 2023",
                    end: "Present",
                    description: "Head of the department responsible for the development of enterprise solutions for the end customers and team leader. Overseeing dev operations, implementing the SCRUM process, setting goals for the department and evaluating performance. Information systems architecture design. Design and implementation of database systems.",
                    tags: "java,.net,scrum,html,css,less,c#,sql,oracle,xml,javascript,azure devops,jira,iis,linq,rest,soap,uml".split(",")
                }, {
                    title: "Head of Implementation Department",
                    subtitle: "Slovanet, Inc., Bratislava, Slovakia",
                    start: "April 2019",
                    end: "October 2023",
                    description: "Head of the department responsible for the development of enterprise solutions for the end customers and for the company itself. Technical Leader. Overseeing dev operations, implementing the SCRUM process, setting goals for the department and evaluating performance. Designing and developing of applications using .NET technologies. Designing of database systems. Object Oriented Analysis and Design. Member of the company's management.",
                    tags: ".net,razor,html,css,less,c#,blazor,sql,sql-server,oracle,xml,javascript,jquery,dojo,azure devops,entity-framework,iis,linq,leaflet,wcf,ajax,rest,soap,scrum,knockout.js,uml".split(",")
                }, {
                    title: "Software architect, Head of Implementation Department",
                    subtitle: "Zymestic Solutions, Ltd., Bratislava, Slovakia",
                    start: "October 2010",
                    end: "March 2019",
                    description: "Technical Leader. Designing and developing of Web applications especially GIS applications using .NET technologies. Designing of database systems. Object Oriented Analysis and Design.",
                    tags: "asp.net,asp.net-mvc,razor,html,css,less,c#,sql,sql-server,oracle,xml,javascript,jquery,dojo,tfs,entity-framework,iis,linq,esri,arcgis,arcgis-js-api,leaflet,wcf,ajax,rest,soap,scrum,knockout.js,uml".split(",")
                }, {
                    title: "Software developer",
                    subtitle: "Kentico Software, Ltd., Brno, Czech Republic",
                    start: "July 2010",
                    end: "September 2010",
                    description: "Developing and designing of an application (Kentico CMS) used worldwide, using ASP.NET technology. Designing of database systems using MS SQL databases.",
                    tags: "asp.net,javascript,html,css,c#,sql,sql-server,xml,tfs,mockups,uml,jquery".split(",")
                }, {
                    title: "Software developer",
                    subtitle: "ON Semiconductor Slovakia, Inc, Bratislava, Slovakia",
                    start: "April 2007",
                    end: "June 2010",
                    description: "Developing and designing of intranet applications used worldwide by all employees of the company using ASP.NET technology. Designing of database systems using MS SQL databases.",
                    tags: "asp.net,javascript,html,css,c#,sql,sql-server,xml,linq,tfs,mockups,uml,visio,jquery,svn".split(",")
                }]
            },
            education: {
                title: "Education",
                items: [{
                    title: "Master's Degree in Applied Informatics",
                    subtitle: "Faculty of Electrical Engineering and Information Technology, Slovak University of Technology in Bratislava",
                    start: "2008",
                    end: "2010"
                }, {
                    title: "Bachelor degree in Applied Informatics",
                    subtitle: "Faculty of Electrical Engineering and Information Technology, Slovak University of Technology in Bratislava",
                    start: "2005",
                    end: "2008"
                }]
            }
        },
        "msu/components/intro/intro": {
            title: "Martin Šutka",
            description: [
                "Software Engineer, Web Developer, and Father in Bratislava, Slovakia",
                "You can click the button below to view my repo. If you’d like to get in touch, feel free to say hello through any of the social links."
            ],
            image: "img/avatar.jpg",
            action: {
                text: "View my repo",
                icon: "code",
                url: "https://github.com/xxxmatko?tab=repositories"
            }
        },
        "msu/components/projects/projects": {
            title: "Projects",
            items: [{
                title: "tooltip.js",
                description: "The simplest HTML tooltip for your web sites.",
                url: "https://xxxmatko.github.io/tooltip.js",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M216 50H40a14 14 0 0 0-14 14v160a13.88 13.88 0 0 0 8.09 12.69A14.1 14.1 0 0 0 40 238a13.87 13.87 0 0 0 9-3.31l.06-.05L82.23 206H216a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H80a6 6 0 0 0-3.92 1.46l-34.82 30.07A2 2 0 0 1 38 224V64a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-52-80a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m0 32a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6'/></svg>"
            }, {
                title: "tutorial.js",
                description: "The best step-by-step feature introduction for your web sites, that's a promise!",
                url: "https://xxxmatko.github.io/tutorial.js",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M216 42H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h61.59l14.25 25a14 14 0 0 0 24.32 0l14.25-25H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2h-65.07a6 6 0 0 0-5.21 3l-16 28a2 2 0 0 1-3.48 0l-16-28a6 6 0 0 0-5.21-3H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Z'/></svg>"
            }, {
                title: "google drive browser",
                description: "Simple browser application that makes requests to the Google Drive API.",
                url: "https://xxxmatko.github.io/google.drive.browser",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M235.9 144.82L167.43 32.58A13.91 13.91 0 0 0 155.56 26h-55.13a13.92 13.92 0 0 0-11.87 6.58v.05L20.13 144.76a14 14 0 0 0-.28 14.37L47.17 207a14 14 0 0 0 12.15 7h137.35a14 14 0 0 0 12.16-7l27.32-47.82a14 14 0 0 0-.25-14.36M222.56 146h-51.17L135 85.33l25.08-41.79Zm-124 0L128 97l29.4 49Zm66 12L191 202H65l26.4-44ZM128 73.67L106.6 38h42.8ZM95.93 43.54L121 85.33L84.6 146H33.43ZM33 158h44.4l-22.73 37.89Zm168.3 37.89L178.59 158H223Z'/></svg>"
            }, {
                title: "onedrive browser",
                description: "Simple browser application that makes requests to the OneDrive API.",
                url: "https://github.com/xxxmatko/onedrive.browser",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M188.24 164.24a6 6 0 0 1-8.48 0L158 142.49V208a6 6 0 0 1-12 0v-65.51l-21.76 21.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 0 1 0 8.48M160 42a86.1 86.1 0 0 0-77.57 48.88A62 62 0 1 0 72 214h40a6 6 0 0 0 0-12H72a50 50 0 0 1 0-100a51 51 0 0 1 5.91.36A85.5 85.5 0 0 0 74 128a6 6 0 0 0 12 0a74 74 0 1 1 103.6 67.85a6 6 0 0 0 4.8 11A86 86 0 0 0 160 42'/></svg>"
            }, {
                title: "boilerplate knockout.js",
                description: "Application template built with knockout.js and require.js.",
                url: "https://github.com/xxxmatko/boilerplate-knockout",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M214 120V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v26a6 6 0 0 0 12 0m-56-73.52L193.52 82H158ZM66 160v48a6 6 0 0 1-12 0v-18H30v18a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0v18h24v-18a6 6 0 0 1 12 0m56 0a6 6 0 0 1-6 6h-10v42a6 6 0 0 1-12 0v-42H84a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m72 0v48a6 6 0 0 1-12 0v-30l-13.2 17.6a6 6 0 0 1-9.6 0L146 178v30a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.8-3.6L164 182l19.2-25.6A6 6 0 0 1 194 160m56 48a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v42h22a6 6 0 0 1 6 6'/></svg>"
            }]
        },
        "msu/components/footer/footer": {
            links: [{
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/martin-sutka-2641a989",
                image: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'/></svg>"
            }, {
                title: "GitHub",
                url: "https://github.com/xxxmatko",
                image: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'/></svg>"
            }, {
                title: "StackOverflow",
                url: "https://stackoverflow.com/users/2519175/xxxmatko",
                image: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76zm1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62zm2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37zm4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21zM6.59 18.41v-1.8h8.98v1.8z'/></svg>"
            }, {
                title: "Blog",
                url: "https://xxxmatko.github.io/blog",
                image: "<svg xmlns='http://www.w3.org/2000/svg' width='0.88em' height='1em' viewBox='0 0 448 512'><path fill='currentColor' d='M162.4 196c4.8-4.9 6.2-5.1 36.4-5.1c27.2 0 28.1.1 32.1 2.1c5.8 2.9 8.3 7 8.3 13.6c0 5.9-2.4 10-7.6 13.4c-2.8 1.8-4.5 1.9-31.1 2.1c-16.4.1-29.5-.2-31.5-.8c-10.3-2.9-14.1-17.7-6.6-25.3m61.4 94.5c-53.9 0-55.8.2-60.2 4.1c-3.5 3.1-5.7 9.4-5.1 13.9c.7 4.7 4.8 10.1 9.2 12c2.2 1 14.1 1.7 56.3 1.2l47.9-.6l9.2-1.5c9-5.1 10.5-17.4 3.1-24.4c-5.3-4.7-5-4.7-60.4-4.7m223.4 130.1c-3.5 28.4-23 50.4-51.1 57.5c-7.2 1.8-9.7 1.9-172.9 1.8c-157.8 0-165.9-.1-172-1.8c-8.4-2.2-15.6-5.5-22.3-10c-5.6-3.8-13.9-11.8-17-16.4c-3.8-5.6-8.2-15.3-10-22S0 420.3 0 256.3C0 93.2 0 89.7 1.8 82.6C8.1 57.9 27.7 39 53 33.4c7.3-1.6 332.1-1.9 340-.3c21.2 4.3 37.9 17.1 47.6 36.4c7.7 15.3 7-1.5 7.3 180.6c.2 115.8 0 164.5-.7 170.5m-85.4-185.2c-1.1-5-4.2-9.6-7.7-11.5c-1.1-.6-8-1.3-15.5-1.7c-12.4-.6-13.8-.8-17.8-3.1c-6.2-3.6-7.9-7.6-8-18.3c0-20.4-8.5-39.4-25.3-56.5c-12-12.2-25.3-20.5-40.6-25.1c-3.6-1.1-11.8-1.5-39.2-1.8c-42.9-.5-52.5.4-67.1 6.2c-27 10.7-46.3 33.4-53.4 62.4c-1.3 5.4-1.6 14.2-1.9 64.3c-.4 62.8 0 72.1 4 84.5c9.7 30.7 37.1 53.4 64.6 58.4c9.2 1.7 122.2 2.1 133.7.5c20.1-2.7 35.9-10.8 50.7-25.9c10.7-10.9 17.4-22.8 21.8-38.5c3.2-10.9 2.9-88.4 1.7-93.9'/></svg>"
            }, {
                title: "Email",
                url: "mailto:martin.sutka@gmail.com",
                image: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2'/></svg>"
            }]
        }
    }
}, ["msu/pages/index"]);