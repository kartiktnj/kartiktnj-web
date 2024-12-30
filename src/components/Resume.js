import React, { Component } from 'react';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
    };
    this.resumeRef = React.createRef();
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

  handleDownload = () => {
    window.open('https://drive.google.com/file/d/18rRgtuUHuAl2XW9aKxhZlh7PVne5Z1m_/view?usp=sharing', '_blank');
  };

  render() {
    const { resumeData } = this.props;
    const { showButton } = this.state;

    return (
      <section id="resume" ref={this.resumeRef}>
        {showButton && (
          <button className="download-button" onClick={this.handleDownload}>
            <div className="circle">
              <div className="download-icon centered-icon">
                <i className="fas fa-file-download"></i>
              </div>
            </div>
            <span className="button-text">Download Resume</span>
          </button>
        )}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData?.work?.map((item, index) => (
                <div className="row item" key={index}>
                  <div className="twelve columns">
                    <h3>{item.role}</h3>
                    <p className="info">
                      {item.CompanyName}
                      <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em>
                    </p>
                    <ul className='description-point'>
                      {item.description.map((desc, descIndex) => (
                        <li key={`${index}-${descIndex}`}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
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

export default Resume;