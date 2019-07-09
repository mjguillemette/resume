import React, { Component } from 'react'
import Showdown from 'showdown'

Showdown.setOption('tables', 'true')

const converter = new Showdown.Converter()
const resume = `## Objective

I am looking to leverage my passion for technology and design, along with my proven ability to produce results in team-oriented environments, into a career in web software development. My ideal workplace challenges me to continue to educate myself and provides an environment and community which necessitates both the cultivation of strong working relationships and constant personal development.
## Technical Skills

| JavaScript    | Standards               | Design               | Misc.                      |
| ------------- | ----------------------- | -------------------- | -------------------------- |
| React.js      | HTML5 / Accessibility   | Adobe Creative Suite | Linux CLI / Bash scripting |
| Node.js / npm | CSS / Preprocessors     | Illustration         | Java                       |
| ECMAScript 6  | Test Driven Development | Typography           | SQL / GraphQL Databases    |
| Gatsby.js     | Object Oriented Design  |                      |                            |
|               | Git / Version Control   |                      |                            |

## Work Experience

**Bartender & Web Admin, Lexx Restaurant, Lexington MA**  
November 2015 – Present  
- Worked with a team to ensure guest satisfaction and provide remarkable customer experiences
- Design and implementation of website and online menu; Increased unique traffic in 2018 by 17%
- Creation and management of web strategy and online content

**Technical Assistant, Francesca Anderson Fine Art, Lexington MA**  
November 2016 – April 2017

- Responsible for the design of web and print content, carefully ensuring consistent branding
- Provided a diverse array of technical support such as data backup and storage solutions
- Extensive use of the Adobe Creative Suite for both print and web content creation

## Projects

**Prod Perfect, Technical Lead, Student Team**  
June 2019 - Present

- Working with senior leadership team and marketing coordinator to develop a lead-generating marketing web application.
- Guiding team in technical decisions such as tech stack and implementation of software.

## Education

**Framingham State University & Stack Education**  
May 2019 - August 2019  
_Framingham State certified Web Development Bootcamp program_  
_Certificate of Web Development from Framingham State University_

**Middlesex Community College** _In Progress_  
2017 - Present  
_Completed 40 credits toward Associate of Science degree, transfer program_ 
`

const html = converter.makeHtml(resume)

class Menu extends Component {
  render() {
    return (
      <div
        style={{
          color: '#16161d',
          padding: '3em 0'
        }}
        dangerouslySetInnerHTML={{ __html: html }}
        id="resume"
      />
    )
  }
}

export default Menu
