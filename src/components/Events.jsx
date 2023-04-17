import React from 'react'
import Event1 from './events/Event1'
import Footer from './homepage/Footer'
import OtherNavbar from './homepage/OtherNavbar'

const Events = () => {
  return (
    <div className='bg-blue-100 h-auto'>
      <OtherNavbar />

      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 -mb-10">
          <h2 className="sm:text-5xl text-4xl font-sans font-bold text-black">
            Cypress Events        
          </h2>
          <p className="text-3xl mt-4 w-auto mx-auto text-gray-700">
            Advance your testing skills with Cypress
          </p>          
        </div>

      <Event1 
        title1= 'Testing APIs With Cypress'
        title2= 'Quickly Export Cypress Tests Directly from Google Chrome'
        date1 = 'Feb 25, 2023'
        date2 = 'Oct 20, 2022'
        description1 = 'API testing with Cypress is quickly becoming the go-to tool for developers to test their applications. With its intuitive user interface and powerful features, Cypress is revolutionizing the way developers approach'
        description2 = 'Join the Cypress Tools Team, along with Jecelyn Yeen from Google DevTools, to learn more about Chrome’s new DevTools Recorder and Cypress’ Chrome extension that allows you to quickly export Cypress tests directly'
      />

      <Event1 
        title1= "What's New in Cypress - September 2022"
        title2= "Livestream: What's New in Cypress"
        date1 = 'Sep 29, 2022'
        date2 = 'Sep 28, 2022'
        description1 = 'The Cypress team shares updates from Cypress 10.8 and 10.9 and showcases new features like WebKit support and Svelte Component Testing. Find upcoming Cypress community events at community.cypress.io. Keep up the conversation in Discord '
        description2 = 'Join the Cypress team for a rundown of the new and upcoming releases in the Cypress app. You will learn more about experimental features like WebKit support and Cypress Studio and new framework support with Svelte component testing. Come with your questions about the newest Cypress releases. We are looking forward to seeing you!'
      />

      <Event1 
        title1= 'All Things Angular with Cypress Webinar'
        title2= 'Cypress Best Practices with Cypress Ambassadors'
        date1 = 'Aug 25, 2022'
        date2 = 'Apr 7, 2022'
        description1 = 'Webinar recording from the All Things Angular with Cypress event on August 24, 2022. Hosts Ely Lucas (twitter.com/elylucas) and Jordan Powell (twitter.com/JordanPowell88) Event page: community.cypress.io/events/details/cypress-cypress.'
        description2 = 'Join three Cypress Ambassadors to find out how they implement Cypress into their work. You will learn best practices, helpful use cases, and how to get involved with the Cypress Community. Moderator - Jordan Powell (twitter.com/JordanPowell88) Panelists - Tobias Struckmeier (twitter.com/tobmaster)'
      />


      <Event1 
        title1= 'Faire + Cypress: Building an E2E Strategy that Scales'
        title2= 'Flaky Test Management with Cypress'
        date1 = 'Sept 30, 2021'
        date2 = 'May 20, 2021'
        description1 = 'Faire’s fast-growing online marketplace enables over 30,000 independent brands to connect with over 250,000 retailers across the world. Find out how the team built their E2E testing setup from scratch using Cypress, and how they accomplished a scalable release verification strategy with nearly 100 front-end and back-end developers '
        description2 = 'In this webcast, Cecelia Martinez, Technical Account Manager at Cypress, and Mike Cataldo, DX Engineer at Cypress, will show you how to find and manage flaky tests in your test suite. We’ll explain how to focus your efforts with test-writing best practices, understanding different types of flake, and the many ways in which Cypress can help you eliminate flake for good'
      />

      <Event1 
        title1= 'How Cypress helped Ansible re-write their entire UI from scratch'
        title2= 'How Pendo Maintains a Culture of Quality with Cypress'
        date1 = 'Apr 16, 2021'
        date2 = 'Apr 7, 2021'
        description1 = 'In this webcast, John Hill, Senior Automation Engineer at Ansible, and Gleb Bahmutov, Distinguished Engineer at Cypress, will show how the Ansible team completely re-wrote the Ansible Tower UI and revamped their testing efforts by deleting all of their old tests and starting from scratch with Cypress’s next-generation test tooling'
        description2 = 'In this webcast, George Palfreyman, Senior Quality Engineer at Pendo, and Gleb Bahmutov, Distinguished Engineer at Cypress, will show how Pendo’s quality engineers completely rebuilt their test suite with Cypress and ushered in a new era of quality for their team.'
      />     

      <Footer /> 

    </div>
  )
}

export default Events