import core_purpose from './../../../assets/images/corepurpose/core_purpose.jpg';

const OurCorePurpose = () => {
  return (
    <>
    <div className="sections" id="ourcorepurpose">
      <h2>Our Core Purpose</h2>

      <div className="c1_2 c1-sm c1-xs main">
        <div className="half-circle-div">
          <div>
            <img src={core_purpose} className="half-circle" title="Core Purpose" alt="Core Purpose" 
               style={{ width: '100%' }}/>
          </div>
        </div>

        <div class="ourcorepurpose-right-div">
          <div className="flex content">
            <h1>1</h1>
            <h3>&nbsp;Enhancing Everyday Living</h3>
          </div>

          <div className="flex num">
            <div class="line-div">
              <div class="line"></div>
            </div>
            <p>Our core purpose is to improve the quality of life by providing accessible, reliable, 
              and value-driven real estate and essential services. We simplify the process of owning, investing, and living in quality spaces, ensuring 
              comfort, convenience, and peace of mind for our clients.</p>
          </div>

          <div className="flex content">
            <h1>2</h1>
            <h3>Creating Lasting Impact</h3>
          </div>

          <div className="flex num">
            <div class="line-div">
              <div class="line"></div>
            </div>
            <p>We are driven by a commitment to make a meaningful difference through 
              sustainable developments, innovative solutions, and community-focused initiatives. 
              Our goal is to build environments and opportunities that empower individuals, 
              support businesses, and contribute to long-term growth.</p>
          </div>

          <div className="flex content">
            <h1>3</h1>
            <h3>Delivering Value & Satisfaction</h3>
          </div>

          <div className="flex num">
            <div class="line-div">
              <div class="line hidden"></div>
            </div>
            <p>Beyond providing services, we focus on delivering exceptional value and complete 
              customer satisfaction. Through professionalism, responsiveness, and a client-first 
              approach, we ensure every interaction with Festrut Group is seamless, 
              rewarding, and built on trust.</p>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}
export default OurCorePurpose;