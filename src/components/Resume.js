import React, { Component } from 'react';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
    this.resumeRef = React.createRef();
  }

  handleDownload = () => {
    window.open('https://drive.google.com/file/d/18rRgtuUHuAl2XW9aKxhZlh7PVne5Z1m_/view?usp=sharing', '_blank');
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.setState({ showButton: entry.isIntersecting });
      },
      { threshold: 0.1 }
    );

    if (this.resumeRef.current) {
      observer.observe(this.resumeRef.current);
    }
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume" ref={this.resumeRef}>
        {this.state.showButton &&
          <button className="download-button" onClick={this.handleDownload}>
            <div className="circle">
              <div className="icon arrow"></div>
            </div>
            <span className="button-text">Download Resume</span>
          </button>
        }
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.role}</h3>
                      <p className="info">
                        {item.CompanyName}
                        <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em></p>
                      <ul className='description-point'>
                        {item.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            {/* <p>
          {resumeData.skillsDescription}
        </p> */}
            <div className="bars">
              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}