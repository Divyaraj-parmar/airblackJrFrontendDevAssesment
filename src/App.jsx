import logo from "./assets/logo.svg";
import social from "./assets/socialMedia.svg";
import bookmark from "./assets/bookmark.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header>
        <img src={logo} />
        <p className="colorWhite">PRESENTS</p>
      </header>
      {/* Main */}
      <main>
        <div id="details">
          <h3>Professional Online MakeUp Course</h3>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label
              style={{
                display: "flex",
                backgroundColor: "gray",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <img src={bookmark} />
              Certification Programme
            </label>
            <label style={{ color: "yellow" }}>Rated 4.85/5</label>
          </div>
          <ul>
            <li>India’s No.1 Online Makeup Course</li>
            <li>Learn by LIVE Do-it-Together Classes</li>
            <li>Unlimited Practise Session to master skills</li>
          </ul>
        </div>
        <form style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
          }}>
          <h4 style={{ color: "white", backgroundColor: "lightpink" }}>
            FILL THE FORM BELOW TO ENQUIRE
          </h4>
          <div className="formDiv">
            <p>*Enter Name</p>
            <input placeholder="Eg. Aneesha Mehra"></input>
          </div>
          <div className="formDiv">
            <p>*Enter Your WhatsApp No</p>
            <select>
              <option>+91</option>
            </select>
            <input placeholder="Eg. Aneesha Mehra"></input>
          </div>
          <div className="formDiv">
            <p>*select yout goal</p>
            <select
              style={{ width: "90%" }}
              placeholder="Choose the most relevant answer"
            ></select>
          </div>
          <div className="formDiv">
            <p>*select yout profession</p>
            <select style={{ width: "90%" }} placeholder="Choose the most relevant answer"></select>
          </div>
          <div className="formDiv">
            <p>*Select your City</p>
            <select style={{ width: "90%" }} placeholder="Choose the most relevant answer"></select>
          </div>
          <div className="formDiv">
            <button
              type="Submit"
              style={{
                color: "white",
                backgroundColor: "lightpink",
                width: "100%",
                border: "none",
                height: "30px",
                marginLeft: "20px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <div
          id="joiningDiv"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Why Should You Join Airblack?</h3>
          <div>
            <label>Do-it-together, live on zoom</label>
            <label>4.8 /5 Rated Classes</label>
            <label>35000+ Members</label>
          </div>
          <div className="formDiv">
            <button
              type="Submit"
              style={{
                color: "white",
                backgroundColor: "lightpink",
                width: "100%",
                border: "none",
                height: "30px",
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
        <div id="certification"></div>
      </main>
      {/* Footer */}
      <footer>
        <h3 style={{ color: "white", width: "50%" }}>
          Join our growing community of 35,000+ alumni
        </h3>
        <div className="formDiv">
        <button type="Submit" style={{ color: "white", backgroundColor: "lightpink",width: "100%",border: "none",height: "30px",}}>
          Apply Now
        </button>
        </div>
        <div>
          <img src={social} />
        </div>
      </footer>
    </>
  );
}

export default App;
