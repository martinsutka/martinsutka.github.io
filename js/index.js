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
        "msu/components/skills/skills": {
            title: "Skills",
            items: [
                { text: "C#", value: 5 },
                { text: "JavaScript", value: 5 },
                { text: "SQL", value: 4 },
                { text: "UML", value: 5 },
                { text: ".NET", value: 5 },
                { text: "CSS", value: 5 },
                { text: "HTML", value: 5 },
                { text: "XML", value: 5 },
                { text: "Azure DevOps Server", value: 5 },
                { text: "SCRUM", value: 5 },
                { text: "UI/UX", value: 4 }
            ]
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
        "msu/components/certifications/certifications": {
            title: "Certifications",
            items: [{
                title: "Microsoft&reg; Certified Educator",
                date: "2023",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M208 138h-80a6 6 0 0 0-6 6v57.45a6 6 0 0 0 4.93 5.91l80 14.54a5.5 5.5 0 0 0 1.07.1a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 70.81l-68-12.36V150h68ZM96 138H32a6 6 0 0 0-6 6v40a6 6 0 0 0 4.93 5.9l64 11.64a6.4 6.4 0 0 0 1.07.1a6 6 0 0 0 6-6V144a6 6 0 0 0-6-6m-6 50.45L38 179v-29h52ZM211.84 35.39a6 6 0 0 0-4.91-1.29l-80 14.54a6 6 0 0 0-4.93 5.91V112a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6V40a6 6 0 0 0-2.16-4.61M202 106h-68V59.55l68-12.36ZM99.84 55.76a6 6 0 0 0-4.91-1.3l-64 11.64A6 6 0 0 0 26 72v40a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V60.36a6 6 0 0 0-2.16-4.6M90 106H38V77l52-9.46Z'/></svg>",
                url: "files/certificates/MS_Certified_Educator.pdf",
            }, {
                title: "Esri&reg; Web Application Developer Associate 10.4",
                date: "2018",
                icon: "<svg version='1.1' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><title>esri</title><path d='m247.71-100.55a123.86 123.86 0 1 1-123.86-123.81 123.86 123.86 0 0 1 123.86 123.81' style='fill:#fff'></path><path d='m10.78 23.043c-0.33953-0.19135-0.76729-0.49463-1.1615-0.75677a3.7185 3.7092 0 0 0-0.42872 0.52907c0.45462 0.15595 1.0675 0.16934 1.5902 0.2277m-1.7907-1.2131c-0.72605-0.53577-2.5234-2.2407-3.2706-3.2653-0.27335 0.16073-0.57547 0.59795-0.97446 0.66971-0.15634 0.0287-0.50641 0.0718-0.61 0.0287s0.023978-0.26119 0.13524-0.40756a4.8618 4.8496 0 0 1 0.89102-0.89933c-0.88047-1.2916-1.3054-2.2378-1.9077-3.7992a9.0157 8.9932 0 0 0-0.90445 0.65057c-0.10263 0.0804-0.38365 0.13107-0.51984 0.01-0.24841-0.22196-0.25129-0.61231 0.095912-0.86105 0.14387-0.10237 0.85169-0.5903 1.0167-0.72807-0.43544-1.2524-0.7999-2.8979-0.89581-3.7513a10.174 10.149 0 0 1-0.81333 0.61518 0.5467 0.54533 0 0 1-0.32322-0.0144 14.871 14.834 0 0 0 0.55341 5.483c0.90828 3.028 3.4528 5.9154 6.8874 6.9841a6.9219 6.9047 0 0 1 0.63973-0.72137m-7.0505-13.265c-0.04316-0.65536-0.095912-1.5518-0.095912-1.5518-0.47956 1.0467-0.76729 1.6771-0.90541 2.8989 0.33761-0.59699 1.0013-1.3471 1.0013-1.3471m5.1543-7.4921c1.995-0.81991 3.9372-1.2763 6.1796-0.97012 0.24841 0.0344 0.22827 0.24492-0.03645 0.24684l-0.3165 9e-3c-1.806 0.0277-4.4628 0.59986-5.8362 1.3767-0.028773 0.91367 0.14483 2.3669 0.32802 3.5121 1.2469-0.52428 3.1795-1.062 4.646-1.2227a17.102 17.059 0 0 0-2.0995-1.8178 0.55341 0.55203 0 0 1-0.20333-0.47836c0.01918-0.398 0.36159-0.44775 0.54574-0.40087 0.61-0.11863 1.2171-0.25066 2.251-0.22005 4.3678-0.19134 8.3587 2.2741 9.8789 5.085 3.8585 6.0877 0 14.486-5.0517 16.723-2.1609 0.95673-4.0149 1.3691-7.4303 0.89454-3.4154-0.47454-6.2218-2.1459-8.3951-5.6543-2.6731-4.3168-1.1663-9.353-0.78935-10.409 1.6113-3.7915 4.2527-5.8006 6.3302-6.6732m-4.5174 4.6066c-0.058506 0.45636 0 1.2973 0.11797 2.3028 0.92842-0.82852 2.7239-1.9134 4.2201-2.5707-0.16976-1.1404-0.35487-2.9582-0.33281-3.4433-1.3898 0.75868-2.9138 2.2856-4.0283 3.8518m0.22827 3.0797c0.1314 0.90315 0.56588 2.852 0.95912 3.8413 0.92938-0.69842 3.0337-1.9938 4.2249-2.5172-0.41626-1.5136-0.69632-2.4693-0.92938-3.9972-1.6861 0.7472-3.4662 1.9077-4.2556 2.6731m1.3207 4.7148c0.55245 1.5709 1.0857 2.7745 1.783 3.758 0.81429-0.70702 2.4851-1.8226 3.7626-2.4339-0.42009-0.9022-1.0282-2.5889-1.4511-3.8518a23.028 22.971 0 0 0-4.0945 2.5277m2.3019 4.444c0.8632 1.1079 2.2223 2.5143 3.1651 3.2921 0.89582-0.71946 1.9048-1.3892 2.7498-1.7939-0.72605-1.1232-1.7993-2.7554-2.2491-3.759-1.6123 0.71276-2.5263 1.3098-3.6638 2.2607m3.7252 3.781c0.34336 0.34634 1.7053 1.2438 1.7053 1.2438a14.659 14.623 0 0 0 2.8668-0.20953c-0.44982-0.5128-1.5749-2.1048-1.9182-2.6358a11.963 11.933 0 0 0-2.6539 1.6016m5.5226 0.80078c0.45942-0.14734 1.6305-0.67641 1.8722-0.83618a24.615 24.553 0 0 0 0.0096-2.6482c-1.2296 0-2.9608 0.35877-3.9535 0.77304a20.031 19.981 0 0 0 2.0717 2.7114m2.5206-1.1854c0.92363-0.57404 1.7907-1.2342 2.4198-2.0283-0.5419-0.13585-1.7523-0.29945-2.3518-0.26118 0 0-0.01918 1.4351-0.0681 2.2894m2.7105-2.3966a3.5104 3.5016 0 0 0 0.5371-0.75772c0.10167-0.87254 0.10454-2.6616 0.06714-3.183-1.055-0.42766-2.6855-0.76539-3.8758-0.85245 0.38365 1.4179 0.58026 3.5026 0.61 4.1819 0.57067 0.0584 2.0141 0.3492 2.6615 0.61134m1.548-4.046c-0.04796 0.16455-0.33857 0.33102-0.47476 0.28701a21.437 21.384 0 0 1-0.12564 2.3172 15.507 15.468 0 0 0 0.70687-1.8819l0.16401-0.64005a10.34 10.314 0 0 0 0.21292-4.9004c-0.53135-2.7487-1.5288-3.7312-1.8779-4.1666-0.88526-0.47836-2.2251-0.91654-2.2251-0.91654 1.2142 1.6408 1.6305 2.4119 2.3613 4.3655 0.42105 0.21814 1.1855 0.64101 1.2804 0.75677 0.07769 0.0957 0.07865 0.25545-0.16113 0.25258-0.1995 0-0.58698-0.19135-0.88718-0.27171 0.31939 1.0639 0.56588 3.051 0.54766 4.3828 0 0 0.52656 0.25449 0.47956 0.41904m-2.0333-9.905c-1.6842-2.0579-5.4967-3.8078-9.7408-3.5399 0.94857 0.62378 1.7379 1.5652 2.4294 2.3411 1.055-0.0957 3.285 0.0775 4.1242 0.30902-0.14291-0.16838-0.31747-0.33485-0.36254-0.4334-0.11893-0.25544 0.16689-0.30998 0.39611-0.1636a5.0008 4.9884 0 0 1 0.89102 0.67641c0.49203 0.11002 1.7024 0.52333 2.2645 0.81513m1.079 9.2803c-0.07289-1.327-0.27622-3.0998-0.76729-4.334-1.3073-0.52333-3.0922-0.85053-4.6603-0.86105 0.47956 1.1251 1.0464 3.0051 1.3207 4.2153 1.1327 0.13586 2.9042 0.45541 4.1089 0.98352m-3.6792-9.5022c-1.1797-0.21335-2.9023-0.35017-4.1798-0.27267 0.87088 1.2036 1.5096 2.2512 2.1101 3.7446 1.6161 0.0402 3.8125 0.52142 4.7131 0.87445-0.53327-1.4332-1.5566-3.2443-2.6433-4.3464m-7.4034 9.6916a13.861 13.827 0 0 1 6.17-1.2227c-0.58122-2.0091-0.91404-2.94-1.408-4.1618a15.847 15.807 0 0 0-6.2208 1.5528s0.67714 2.1727 1.4607 3.8317m6.3877-0.37791c-2.4093-0.0287-4.5136 0.5463-5.9513 1.2514 0.60904 1.3098 1.8146 3.0434 2.2645 3.7571a12.482 12.451 0 0 1 2.2789-0.61135 14.158 14.123 0 0 1 2.1149-0.19134c-0.10742-1.5241-0.28774-2.5516-0.70687-4.2096m-8.1218-4.2756a19.196 19.148 0 0 1 6.1767-1.5422 13.595 13.562 0 0 0-2.206-3.6528 16.864 16.822 0 0 0-5.0718 1.2658c0.21772 1.1481 0.62918 2.542 1.1011 3.9293' style='stroke-width:.095792'></path></svg>",
                url: "files/certificates/Web Application Developer Associate 10.4 certificate.pdf",
            }, {
                title: "Certified ScrumMaster&reg;",
                date: "2015",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M126 136a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6-38H72a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m110 62.62V224a6 6 0 0 1-9 5.21l-25-14.3l-25 14.3a6 6 0 0 1-9-5.21v-26H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v31.38a49.91 49.91 0 0 1 0 73.24M196 86a38 38 0 1 0 38 38a38 38 0 0 0-38-38m-34 100v-25.38a50 50 0 0 1 56-81.51V56a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v128a2 2 0 0 0 2 2Zm56-17.11a49.91 49.91 0 0 1-44 0v44.77l19-10.87a6 6 0 0 1 6 0l19 10.87Z'/></svg>",
                url: "files/certificates/ScrumAlliance_CSM_Certificate.pdf",
            }, {
                title: "Microsoft&reg; Certified Professional",
                date: "2013",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M208 138h-80a6 6 0 0 0-6 6v57.45a6 6 0 0 0 4.93 5.91l80 14.54a5.5 5.5 0 0 0 1.07.1a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 70.81l-68-12.36V150h68ZM96 138H32a6 6 0 0 0-6 6v40a6 6 0 0 0 4.93 5.9l64 11.64a6.4 6.4 0 0 0 1.07.1a6 6 0 0 0 6-6V144a6 6 0 0 0-6-6m-6 50.45L38 179v-29h52ZM211.84 35.39a6 6 0 0 0-4.91-1.29l-80 14.54a6 6 0 0 0-4.93 5.91V112a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6V40a6 6 0 0 0-2.16-4.61M202 106h-68V59.55l68-12.36ZM99.84 55.76a6 6 0 0 0-4.91-1.3l-64 11.64A6 6 0 0 0 26 72v40a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V60.36a6 6 0 0 0-2.16-4.6M90 106H38V77l52-9.46Z'/></svg>",
                url: "files/certificates/MCP.pdf",
            }, {
                title: "Microsoft&reg; Certified Technology Specialist (MCTS)",
                subtitle: "Silverlight 4",
                date: "2013",
                icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 256 256'><path fill='currentColor' d='M208 138h-80a6 6 0 0 0-6 6v57.45a6 6 0 0 0 4.93 5.91l80 14.54a5.5 5.5 0 0 0 1.07.1a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 70.81l-68-12.36V150h68ZM96 138H32a6 6 0 0 0-6 6v40a6 6 0 0 0 4.93 5.9l64 11.64a6.4 6.4 0 0 0 1.07.1a6 6 0 0 0 6-6V144a6 6 0 0 0-6-6m-6 50.45L38 179v-29h52ZM211.84 35.39a6 6 0 0 0-4.91-1.29l-80 14.54a6 6 0 0 0-4.93 5.91V112a6 6 0 0 0 6 6h80a6 6 0 0 0 6-6V40a6 6 0 0 0-2.16-4.61M202 106h-68V59.55l68-12.36ZM99.84 55.76a6 6 0 0 0-4.91-1.3l-64 11.64A6 6 0 0 0 26 72v40a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V60.36a6 6 0 0 0-2.16-4.6M90 106H38V77l52-9.46Z'/></svg>",
                url: "files/certificates/MCTS_Silverlight-4-Developmen.pdf",
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