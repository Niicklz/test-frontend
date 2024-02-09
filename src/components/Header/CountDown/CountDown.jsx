import React, { useState, useEffect } from "react";
import "./CountDown.css";
import { Paragraph } from "../../commons/Paragraph/Paragraph";
import { countdownInDays } from "../../../utils/countdownInDays";

export const CountDown = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(24);
  const [days, setDays] = useState(170);

  useEffect(() => {
    countdownInDays(days, ({ days, hours, minutes, seconds }) => {
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    });
  }, []);

  return (
    <section className="countdown-section">
      <Paragraph className="countdown-section-text">
        Lorem ipsum dolor sit amet consectetur.
      </Paragraph>
      <div className="time-container">
        <Paragraph className="days">
          <span>{days}</span>
          <span>days</span>
        </Paragraph>

        <Paragraph className="hours">
          <span>{hours}</span>
          <span>hours</span>
        </Paragraph>
        <Paragraph className="minutes">
          <span>{minutes}</span>
          <span>minutes</span>
        </Paragraph>
        <Paragraph className="seconds">
          <span>{seconds}</span>
          <span>seconds</span>
        </Paragraph>
      </div>
    </section>
  );
};
