const e = require('express')
const express = require('express')
const { renameSync } = require('fs-extra')
const router = express.Router()

// Add your routes here - above the module.exports line

//EVENT NOTIFICATIONS --> 


const events = [
    {
        eventTitle: "Manchester AAN regional meet-up",
        type: "In person",
        date: "Thursday 27th October 2022",
        eventDetail: "Join AAN colleagues across your region toupdate on recent activity, share insight and celebrate achievements.",
        eventLocation: "north-west",
        eventBuilding: "Manchester Town Hall, Albert square, M2 5DB",
        start: "19:00",
        end: "21:00",
        contact: "rebecca.morrell@aan.com",
        industry: "care-services",
        eventId: 1
    },
    {
        eventTitle: "Clifton High School apprenticeship event",
        type: "Hybrid",
        date: "Monday 31st October 2022",
        eventDetail: "An opportunity to champion apprenticeships and talk to students about your own journey as an apprentice.",
        summary1: "An opportunity to champion apprenticeships and talk to students at Clifton High School about your own journey as an apprentice.", 
        summary2: "Share the biggest challenges you have faced, your success stories and inspire those who are considering an apprenticeship as the next step in their career.",
        eventLocation: "south-west",
        eventBuilding: "Clifton High School, College Road, Clifton, Bristol, BS8 3JD",
        start: "17:00",
        end: "19:30",
        contact: "rebecca.morrell@aan.com",
        industry: "creative-and-design",
        eventId: 2
    },
    {
        eventTitle: "AAN Online Case Study Session",
        type: "Online",
        date: "Tuesday 1st November 2022",
        eventDetail: "Share your own case studies with colleagues across the region.",
        summary1: "Share your current case studies with AAN colleagues across your region and stay up to date with recent activity within the network.", 
        summary2: "For those wishing to present, please contact Sam Kershaw prior to Tuesday 25 October outlining your case studies and how long you need allocating in the agenda.",
        summary3: "*please note: this session will be recorded for those who are unable to attend.", 
        eventLocation: "north-east",
        eventBuilding: "Join event online via Zoom or Teams",
        start: "13:00",
        end: "14:30",
        contact: "sam.kershaw@aan.com",
        industry: "construction",
        eventId: 3
    }, 
    {
        eventTitle: "Event 4",
        eventDetail: "West Midlands meetup",
        eventLocation: "west-midlands",
        industry: "business-and-administration",
        eventId: 4
    },
    {
        eventTitle: "Event 5",
        eventDetail: "Bristol schools event",
        eventLocation: "south-west",
        industry: "care-services",
        eventId: 5
    }, 
    {
        eventTitle: "London online event",
        eventDetail: "an online monthly catch up ",
        eventLocation: "london",
        industry: "business-and-administration",
        eventId: 6
    }, 
    {
        eventTitle: "Manchester hybrid event",
        eventDetail: "an online monthly catch up ",
        eventLocation: "north-west",
        industry: "creative-and-design",
        eventId: 7
    }, 
    {
        eventTitle: "Newcastle hybrid event",
        eventDetail: "an online monthly catch up ",
        eventLocation: "north-east",
        industry: "creative-and-design",
        eventId: 8
    }, 
]

// Events 

const feedbackForms = [
    {
        eventName: "AAN Manchester regional meet-up",
        eventTitle:  "AAN Manchester regional meet-up feedback form",
        description: "You attended the regional Manchester meet-up on 27 September 2022. Use the event feedback form link to provide feedback and add this event to your network stats table.",
        location: "Manchester Town Hall",
        date: "Wednesday 21st September",
        feedbackId: 1
    },
    {
        eventName: "Irlam High School apprenticeship event",
        eventTitle: "Irlam High School apprenticeship event feedback form",
        description: "You attended the Irlam High School apprenticeship event on 27 September 2022. Use the event feedback form link to provide feedback and add this event to your network stats table.",
        location: "Irlam High School",
        date: "Tuesday 13 September",
        feedbackId: 2
    }
]

const networkSettings = [
    {
        title: "Your notification preferences",
        details: "Set your notifications so the AAN only get in touch with relevant opportunties.",
        networkId: "notification-preferences"
    },
    {
        title: "Leave the network",
        details: "Complete a brief form to let AAN know you wish to leave the network.",
        networkId: "leave-network"
    }
]

let regions = [
    {
      value: "choose-region",
      text: "Choose a Region",
      selected: false
    },
    {
      value: "south-west",
      text: "South West",
      selected: false
    },
    {
      value: "north-east",
      text: "North East",
      selected: false
    },
    {
      value: "east-midlands",
      text: "East Midlands",
      selected: false
    },
    {
      value: "north-west",
      text: "North West",
      selected: false
    },
    {
        value: "south-east",
        text: "South East",
        selected: false
    },
    {
        value: "west-midlands",
        text: "West Midlands",
        selected: false
      },
    {
        value: "east-of-england",
        text: "East of England",
        selected: false
    },
    {
        value: "yorkshire-and-humber",
        text: "Yorkshire and Humber",
        selected: false
    },
    {
        value: "london",
        text: "London",
        selected: false
    },
  ]

let industries = [
    {
        value: "choose-industry",
        text: "Choose a sector",
        selected: false
      },
      {
        value: "business-and-administration",
        text: "Business and administration",
        selected: false
      },
      {
        value: "creative-and-design",
        text: "Creative and design",
        selected: false
      },
      {
        value: "health-and-science",
        text: "Health and science",
        selected: false
      },
      {
        value: "care-services",
        text: "Care-services",
        selected: false
      },
      {
          value: "sales-marketing-and-procurement",
          text: "Sales, marketing and procurement",
          selected: false
      },
      {
          value: "transport-and-logistics",
          text: "Transport and logistics",
          selected: false
        },
      {
          value: "legal-finance-and-accounting",
          text: "Legal, finance and accounting",
          selected: false
      },
      {
          value: "protective-services",
          text: "Protective services",
          selected: false
      },
      {
          value: "catering-and-hospitality",
          text: "Catering and hospitality",
          selected: false
      },
      {
        value: "digital",
        text: "Digital",
        selected: false
        },
    {
        value: "engineering-and-manufacturing",
        text: "Engineering and manufacturing",
        selected: false
    },
    {
        value: "hair-and-beauty",
        text: "Hair and beauty",
        selected: false
    },
    {
        value: "agriculture-environmental-and-animal-care",
        text: "Agriculture, environmental and animal care",
        selected: false
    }, 
    {
        value: "construction",
        text: "Construction",
        selected: false
    }, 
    {
        value: "education-and-childcare",
        text: "Education and childcare",
        selected: false
    }
]

let apprentices = [
    {
        value: "choose-region",
        text: "Choose a Region",
        selected: false
      },
      {
        value: "Current",
        text: "Current Apprentice",
        selected: false
      },
      {
        value: "Former",
        text: "Former Apprentice",
        selected: false
      }
]

let profiles = [
    {
        name: "Rob Stark",
        location: "South west",
        region: "south-west",
        city: "Bristol",
        appr: "Former",
        events: 2,
        date: "17th August 2022",
        industry: "business-and-administration",
        id: 1,
        src: "/public/images/Julian.jpg",
        email: "apprentice@gov.uk",
        role: "Business administrator",
        employer: "City Sprint"
    },
    {
        name: "Leslie Knope",
        location: "North west",
        region: "north-west",
        city: "Manchester",
        appr: "Current",
        events: 5,
        date: "17th February 2022",
        industry: "care-services",
        id: 2,
        src: "/public/images/Amy.jpg",
        email: "apprentice@gov.uk",
        role: "Care worker",
        employer: "St Johns Uk"
    },
    {
        name: "Dave Grohl",
        location: "London",
        region: "london",
        city: "London",
        appr: "Current",
        events: 0,
        date: "26th May 2022",
        industry: "creative-and-design",
        id: 3,
        src: "/public/images/Steve.jpg",
        email: "apprentice@gov.uk",
        role: "Leather Craftsperson",
        employer: "Denmons Services"

    },
    {
        name: "Sarah Thompson",
        location: "South West",
        region: "south-west",
        city: "Bristol",
        appr: "Former",
        events: 3,
        date: "26th September 2022",
        industry: "hair-and-beauty",
        id: 4,
        src: "/public/images/Etta.jpg",
        email: "apprentice@gov.uk",
        role: "Advanced and creative hair professional",
        employer: "Celly's Unisex Hair Salon"

    },
    {
        name: "Fiona Smith",
        location: "West Midlands",
        region: "west-midlands",
        city: "Birmingham",
        appr: "Current",
        events: 3,
        date: "26th September 2022",
        industry: "construction",
        id: 4,
        src: "/public/images/Fiona.jpg",
        email: "apprentice@gov.uk",
        role: "Chartered surveyor",
        employer: "Mace Ltd"
    },
    {
        name: "David Attenborough",
        location: "North East",
        region: "north-east",
        city: "Barnard Castle",
        appr: "Current",
        events: 7,
        date: "5th June 2019",
        industry: "agriculture-environmental-and-animal-care",
        id: 5,
        src: "/public/images/david.jpg",
        email: "apprentice@gov.uk",
        role: "Equine groom",
        employer: "Karen Roberts Ltd"

    },
    {
        name: "Christopher Long",
        location: "Yorkshire and Humber",
        region: "yorkshire-and-humber",
        city: "York",
        appr: "Former",
        events: 7,
        date: "21st March 2021",
        industry: "business-and-administration",
        id: 6,
        src: "/public/images/Christopher.jpg",
        email: "apprentice@gov.uk",
        role: "Business administrator",
        employer: "Reynolds Porter"
    },
    {
        name: "Kevin Parker",
        location: "East of England",
        region: "east-of-england",
        city: "Norfolk",
        appr: "Current",
        events: 1,
        date: "1st September 2020",
        industry: "creative-and-design",
        id: 7,
        src: "/public/images/Kevin.jpg",
        email: "apprentice@gov.uk",
        role: "Spectacle Maker",
        employer: "Specsavers"
    },
    {
        name: "Christina Green",
        location: "South West",
        region: "south-west",
        city: "Bristol",
        appr: "Current",
        events: 0,
        date: "31st November 2021",
        industry: "health-and-science",
        id: 8,
        src: "/public/images/christina.jpg",
        email: "apprentice@gov.uk",
        role: "Dental Nurse",
        employer: "The Dental Touch"
    },
    {
        name: "Annie Macmanus",
        location: "North East",
        region: "north-east",
        city: "Newcastle",
        appr: "Current",
        events: 1,
        date: "31st January 2022",
        industry: "hair-and-beauty",
        id: 9,
        src: "/public/images/annie.jpg",
        email: "apprentice@gov.uk",
        role: "Beauty Therapist",
        employer: "Kimmys Nails"
        
    }
]

let members = [
    {
        name: "Amy",
        src: "/public/images/Amy.jpg"
    },
    {
        name: "Etta",
        src: "/public/images/Etta.jpg"
    },
    {
        name: "John",
        src: "/public/images/david.jpg"
    },
    {
        name: "Julian",
        src: "/public/images/Julian.jpg"
    },
    {
        name: "Steve",
        src: "/public/images/Steve.jpg"
    },
    {
        name: "Susan",
        src: "/public/images/Susan.jpg"
    },
    {
        name: "Kevin",
        src: "/public/images/Kevin.jpg"
    }
]

let selectedEvent = null

router.get('/aanApplication', (req, res) => {
    res.render('aanApplication',  {regions} )
})


// event notifications page - to display list of cards

router.get('/event-notifications', (req, res) => {
    res.render('event-notifications', { events } )
    
})

// Direct event number to template page and fill with data

router.get('/event-notifications/:eventid', (req, res) => {
    let id = parseFloat(req.params.eventid)
    console.log(id)
  
     selectedEvent = events.find(item => {
        return item.eventId == id
      })

      console.log(selectedEvent)

      if(selectedEvent){
          res.render('event-detail-template', { selectedEvent, members })
      }
      else {
          res.send("sorry no event details")
      }
    },


// success confirmation page using selected event variable from event notifications

router.get('/success-manage-event', function (req, res) {
    res.render('success-manage-event', { selectedEvent })
}),


// SEARCH EVENT

// filter with query string 

router.get('/event-search', (req, res) => {
    let filterR = req.query.r
    let filterI = req.query.i

    let filteredEvents = [...events]

    if ((filterR == undefined || filterR == 'choose-region') && (filterI == undefined || filterI == 'choose-industry')){
       filteredEvents = [...events]
    }
    else {
        if(filterR && filterR !== 'choose-region') {
            filteredEvents = filteredEvents.filter(event => {
                return event.eventLocation === filterR
            })
        }
        if(filterI && filterI !== 'choose-industry'){
            filteredEvents = filteredEvents.filter(event => {
                console.log(filteredEvents)
                return event.industry == filterI
            })
        }
    }

    let selectedRegions = regions.map(region => {
       if(region.value === filterR){
        return {...region, selected: true}
       }
       else {
           return region
       }
    })
    let selectedIndustry = industries.map(industry => {
        if(industry.value === filterI){
         return {...industry, selected: true}
        }
        else {
            return industry
        }
     })

    res.render('event-search', { events, filterR, filterI, selectedRegions, filteredEvents, selectedIndustry })
    
}),

// MANAGE EVENTS 
router.get('/manage-event', (req, res) => {
    res.render('manage-event', { feedbackForms }  )    
}),

router.get('/manage-event/:id', (req, res) => {
    let id = parseFloat(req.params.id)
    let selectedForm = feedbackForms.find(form => {
       return form.feedbackId == id   
    })
    if(selectedForm){
        res.render('feedback-template', { selectedForm })
    }
    else {
        res.send("Sorry no feedback forms")
    }
}),

router.get('/remove-event', (req, res) => {
    res.render('remove-event', { members, events })
}),


// PROFILE SETTINGS 

router.get('/profile-settings', (req, res) => {
    res.render('profile-settings', { networkSettings }  )    
}),


//Network Directory --> filtering via Region

router.get('/network-directory', (req, res) => {

    let filterR = req.query.r
    let filterI = req.query.i
    let filterA = req.query.a

    console.log(filterR)
    
    let filteredProfiles = [...profiles]

    if((filterR == undefined || filterR == 'choose-region') && (filterI == undefined || filterI == 'choose-region') && (filterA == undefined || filterA == 'choose-region')){
        filteredProfiles = [...profiles]
    }
    else { 
        if(filterR && filterR !== 'choose-region'){
            filteredProfiles = filteredProfiles.filter(profile => {
            return profile.region == filterR
            })
        }
        if(filterI && filterI !== 'choose-region'){
            filteredProfiles = filteredProfiles.filter(profile => {
                return profile.industry == filterI
            })
        }
        console.log(filteredProfiles )

        if(filterA && filterA !== 'choose-region'){
            filteredProfiles = filteredProfiles.filter(profile => {
                 return profile.appr == filterA
            })
         }
    }
   

    console.log(filteredProfiles)

    let profileRows = filteredProfiles.map(profile => {
        return [ 
            {   
                html: `<a href="profile/${profile.id}">${profile.name}</a>`,
                classes: "govuk-link"
            },
            {
                text: profile.location
            },
            {
                text: profile.events
            },
            {
                text: profile.date
            }  
        ]
    })
   
    let selectedRegions = regions.map(region => {
        if(region.value === filterR){
         return {...region, selected: true}
        }
        else {
            return region
        }
     })

     let selectedIndustry = industries.map(industry => {
        if(industry.value === filterI){
         return {...industry, selected: true}
        }
        else {
            return industry
        }
     })
     console.log(selectedIndustry)

     let selectedApprentice = apprentices.map(apprentice => {
         if (apprentice.value === filterA){
             return {...apprentice, selected: true}
         }
         else {
             return apprentice
         }
     })


    res.render('network-directory', { profileRows, selectedRegions, selectedIndustry, selectedApprentice } )
}),

router.get('/profile/:id', (req, res) => {
    let id = parseFloat(req.params.id)

    let selectedProfile = profiles.find(profile => {
        return profile.id == id
    })
    if (selectedProfile) {
        res.render('profile-template', { selectedProfile })
    }
    
    else {
        res.send("Sorry cannot find profile")
    }
}),



router.get('/event-detail', function (req, res) {
    let page = req.query.number
    res.render('event-detail', { page })
}),

module.exports = router
)
