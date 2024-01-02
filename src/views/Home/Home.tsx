import s from "./Home.module.css";
import HeroImage from "../../assets/images/hero-phones.png";
import { FEATURES, QUESTIONS, STEPS } from "../../constants";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import StepCard from "../../components/StepCard/StepCard";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={s.home}>
      <section id="home" className={s.hero}>
        <div className={s.heroContent}>
          <h1 className={s.title}>Reclaim Your Privacy With Every Message</h1>

          <p className={s.description}>
            Hidegram Gives You Secure Chats Without Logins Or Registrations,
            Ensuring Your Conversations Remain Private. With Hidegram, You're In
            Control.
          </p>

          <button className={s.downloadBtn}>Open Secure Line</button>
        </div>

        <img src={HeroImage} alt="iphone" className={s.heroImage} />
      </section>

      <section className={s.features}>
        {!isDesktop && <h2 className={s.subTitle}>features</h2>}
        <ul className={s.featureList}>
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </ul>
      </section>

      <section id="timeline" className={s.timeline}>
        <h2 className={s.subTitle}>timeline</h2>
        <h3 className={s.stepsTitle}>Where Are We Now?</h3>
        {isDesktop && (
          <p className={s.timelineDescription}>
            We're in motion, evolving privacy with every step. Our vision is
            clear; our goals, set. Each quarter edges us closer to redefining
            secure communication.
          </p>
        )}
        <ul className={s.stepsList}>
          {STEPS.map((step, idx) => (
            <StepCard key={idx} step={step} />
          ))}
        </ul>
      </section>

      <section id="FAQ" className={s.timeline}>
        <h2 className={s.subTitle}>faq</h2>
        <h3 className={s.questionsTitle}>
          Your Trust <br /> Our Commitment
        </h3>
        {isDesktop && (
          <p className={s.questionsDescription}>
            Quick queries on Hidegram? Find fast facts and straightforward
            support right here in our FAQ.
          </p>
        )}

        <ul className={s.questionsList}>
          {QUESTIONS.map((question, idx) => (
            <QuestionCard key={idx} isOdd={idx % 2 === 0} question={question} />
          ))}
        </ul>
      </section>
    </div>
  );
}
