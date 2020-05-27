var config = {
  style: 'mapbox://styles/mapbox/streets-v11',
  accessToken: 'pk.eyJ1IjoiYWFkaXR0YW1iZSIsImEiOiJjazdtcXYwdGwwNGUzM25udmtvZ3JxaGw3In0.sNryHVsON8s-Ubw8pTDYHA',
  showMarkers: true,
  theme: 'dark',
  alignment: 'left',
  title: 'Interactive: How are the UI’s peer institutions reacting to the COVID-19 outbreak?',
  subtitle: '',
  byline: 'The Daily Iowan',
  footer: 'Created by Aadit Tambe/The Daily Iowan',
  chapters: [{
      id: 'slug-style-id',
      title: 'University of Iowa',
      image: 'images/iowanew.png',
      description: 'The state Board of Regents have asked universities to prepare to move class instruction online amid coronavirus cases identified in Iowa. UI officials, however, have said they’re following the campus’ critical-incident management plan to cooperate with public entities that manage disaster control to continuously plan and minimize risk from such incidents.',
      location: {
        center: [-91.53624, 41.66109],
        zoom: 14.55,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ]
    },

    {
      id: 'intro',
      title: 'The UI Peer Group',
      image: '',
      showMarkers: false,
      description: 'This interactive maps explains how the UI’s peer universities are dealing with the outbreak. <br> <strong> What’s the UI’s peer group?</strong> Because the members of the Big Ten and CIC differ from one another in a variety of ways (for example, some campuses have large health sciences centers and others do not), the University of Iowa regularly uses an "official UI Peer Group" to benchmark itself against other, similar, institutions. The university formed the official UI Peer Group in the mid-1980s, and the Board of Regents approved it. It included all of the public universities in the Big Ten at the time (Penn State was not yet a member), except for Michigan State and Purdue, which did not have comparable health science centers. In addition, four comparable campuses from various geographical regions of the country were added. ',
      location: {
        center: [-91.53624, 41.66109],
        zoom: 3.71,
        pitch: 0.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'other-identifier',
      title: 'University of Illinois',
      image: 'images/illinois.jpg',
      description: 'March 10: The University of Illinois is currently exploring a shift to online classes if necessary, and created working groups to look at what that would mean for different areas and people. They have cancelled all school-sanctioned international spring break trips and domestic spring break trips that require flying. . <a href="https://news.illinois.edu/view/6367/806780">More information</a>',
      location: {
        center: [-88.22690, 40.11054],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-other-identifier',
      title: 'Indiana University',
      image: 'images/indiana.jpg',
      description: 'March 10: Indiana University has suspended all in-person classes starting March 23 (after spring break), and are set to resume April 6, though that is subject to change. Classes will be held online. Faculty and staff have a telecommuting option. International and domestic travel outside of Indiana has been suspended through April 5. No new, non-essential gatherings will be allowed through April 5. Visitors are strongly discouraged. <a href="https://www.chicagotribune.com/coronavirus/ct-coronavirus-indiana-university-school-closing-20200310-urpfxahk7nez5pna4uwfqb5hky-story.html">More information</a>',
      location: {
        center: [-86.51814, 39.17379],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'my-my-other-identifier',
      title: 'University of Arizona',
      image: 'images/arizona.png',
      description: 'March 10: The University of Arizona has banned travel to China, Italy, Iran, and South Korea until further notice. Facilities management has implemented cleaning products that are better at killing virus bacteria. All domestic out-of-state travel has been suspended. <a href="https://health.arizona.edu/healthalerts">More information</a>',
      location: {
        center: [-110.95030, 32.23337],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-other-identifier',
      title: 'University of California',
      image: 'images/ucla.jpg',
      description: 'March 10: UCLA is cancelling in-person classes “wherever possible” through April 10, as well as barring nonessential gatherings of over 100 people. Winter Quarter finals will be offered remotely. While the campus, including residence halls, will remain open, students are encouraged to start the Spring Quarter remotely. <a href="https://newsroom.ucla.edu/stories/coronavirus-information-for-the-ucla-campus-community">More information</a>',
      location: {
        center: [-118.44416, 34.07062],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-my-other-identifier',
      title: 'University of Michigan',
      image: 'images/michigan.jpg',
      description: 'March 9: The University of Michigan has cancelled in-person classes on all three of its campuses through the end of the semester, April 21. All classes will be held online. Gatherings of more than 100 people will be banned as well, and only parents and members of the press are allowed at sporting events. All spring study abroad programs have been canceled, and international travel has been suspended. <a href="https://publicaffairs.vpcomm.umich.edu/2019-novel-coronavirus-covid-19/">More information</a>',
      location: {
        center: [-83.70861, 42.29543],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-my-my-other-identifier',
      title: 'University of Minnesota',
      image: 'images/minnesota.png',
      description: 'March 10: The University of Minnesota has canceled all non-essential, University-funded travel from March 16 - April 30 and are encouraging their faculty to “begin preparing to move classroom instruction online.” Courses on all five campuses will be taught through alternative methods.” <a href="https://safe-campus.umn.edu/public-health-alerts">More information</a>',
      location: {
        center: [-93.23718, 44.96728],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-my-my-my-other-identifier',
      title: 'University of North Carolina',
      image: 'images/unc.jpeg',
      description: 'March 10: The University of North Carolina has extended spring break until March 22. The majority of classes will be taught remotely until further notice, but campus will remain open. The university is banning any travel that is affiliated by the University of North Carolina to CDC Warning Level 3 and Level 2 countries, including China, South Korea, Iran, Italy, and Japan. Any person returning to campus from any of those countries are to self-quarantine for 14 days. Travel to places that have declared a state of emergency is also restricted.” <a href="https://www.unc.edu/coronavirus/">More information</a>',
      location: {
        center: [-79.04786, 35.90558],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-my-my-my-my-other-identifier',
      title: 'Ohio State University',
      image: 'images/osu.jpg',
      description: 'March 9: Ohio State University is suspending all in-person classes until at least March 30, according to an email to students and staff on March 9. While most classes will take place via virtual instruction, more guidance to lab or performance-based classes will come this week. Students can choose to either go to their permanent residences during the suspension or return to campus. In addition, all university-sponsored international travel is suspended, including trips booked between now and April 20.” <a href="https://wexnermedical.osu.edu/-/media/files/wexnermedical/features/corona-virus-university-updates/coronavirus-update-no_-7_-march-9.pdf?la=en&hash=BD14ED338880B156AECDA3CC9B40485693786ED0">More information</a>',
      location: {
        center: [-83.02967, 40.00496],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-my-my-my-my-my-other-identifier',
      title: 'University of Texas',
      image: 'images/texas.png',
      description: 'March 10: All University of Texas-sponsored travel over spring break, Maymester and summer is suspended to France, Germany, Spain, and all countries with a CDC Warning Level 3, Alert Level 2, and Watch Level 1. Any students currently in France, Germany, Spain, and Japan must submit a request if they wish to stay in-country for the rest of the semester.” <a href="https://www.utexas.edu/coronavirus">More information</a>',
      location: {
        center: [-97.73250, 30.28394],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

    {
      id: 'my-my-my-my-my-my-my-my-my-other-identifier',
      title: 'University of Wisconsin - Madison',
      image: 'images/wisc.jpg',
      description: 'March 10: University of Wisconsin — Madison has moved all classes online through April 10, and is asking students to not come back to residence halls. It suspended and canceled all university-sponsored travel to countries “severely impacted” by COVID-19, including China, France, Germany, Italy, Iran, Japan, South Korea, and Spain. They also “strongly advise” people to reconsider any non-essential personal or business travel out of Dane County over spring break.” <a href="https://www.uhs.wisc.edu/covid-19-travel-updates-from-chancellor-blank/">More information</a>',
      location: {
        center: [-89.43013, 43.07804],
        zoom: 8.00,
        pitch: 45.00,
        bearing: 0.00
      },
      onChapterEnter: [],
      onChapterExit: []
    },

  ]
};
