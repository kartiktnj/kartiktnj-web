import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: resumeData
    };
  }

  componentDidMount() {
    // Any side effects or data fetching can be done here
  }

  render() {
    const { resumeData } = this.state;
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        {/* <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/> */}
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;