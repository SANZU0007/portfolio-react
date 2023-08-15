import React from "react";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Govt Boys High School, Singampunari, Tamilnadu
          </h3>
          <p> SSLC 84% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Govt Boys High School, Singampunari, Tamilnadu
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          
          </h4>

          <p> HSC 57%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Yadava Arts and Science Collage , Madurai Kamaraj University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            B.SC(cs)
          </h4>
          <p>71.5%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022-2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack developer - GUVI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            chennai
          </h4>
          <p>
             learning 2 major features by  both in the front
            end and back end.
            with certificate
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
