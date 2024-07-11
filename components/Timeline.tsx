import React from "react";

interface TimelineEvent {
  year: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="space-y-3">
      {events.map((event, index) => (
        <div key={index} className="flex">
          <div className="w-[75px] flex-shrink-0 font-extrabold">
            {event.year}
          </div>
          <div className="flex-grow">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
