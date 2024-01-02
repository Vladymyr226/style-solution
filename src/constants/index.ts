import { Feature, Question, Step } from "../types";
import Phone1 from "../assets/images/desktop-phone-1.png";
import Phone2 from "../assets/images/desktop-phone-2.png";
import Phone3 from "../assets/images/desktop-phone-3.png";
import Step1 from "../assets/images/first-step.png";
import Step2 from "../assets/images/second-step.png";
import Step3 from "../assets/images/third-step.png";
import Step4 from "../assets/images/forth-step.png";

export const FEATURES: Feature[] = [
  {
    title: "Chat",
    description: [
      {
        title: "New Level Of Privacy",
        text: "Embrace True Privacy with Hidegram, Where Anonymity Is the Key. Without Sessions or Cookies to Track You, We Ensure Absolute Zero Knowledge of Your Identity. Stay Invisible, Stay Secure – With Every Conversation.",
      },
      {
        title: "Control Your Encryption",
        text: "Empowerment Is Knowing That You Are the Sole Guardian of Your Keys. Hidegram Entrusts All Encryption Keys to Its Users, Reinforcing the Personal Stronghold on Your Private Exchanges. Own Your Keys, Own Your Conversations.",
      },
    ],
    image: Phone1,
  },
  {
    title: "Change",
    description: [
      {
        title: "Effortless Key Exchange",
        text: "Can't Meet in Person to Exchange Keys? No Problem. Change by Hidegram Makes Secure Key Exchange Effortless, Ensuring Your Communication Is Always Protected. Stay Connected and Secure, No Matter the Distance.",
      },
      {
        title: "Quickstart Conversation",
        text: "Begin Your Chat Journey with Just a Few Clicks. Send a Secure Link or Code Through Another Messenger—It's Safe with Change. Start Your Private Conversation with Hidegram Quickly and with Confidence.",
      },
    ],
    image: Phone2,
  },
  {
    title: "Access",
    description: [
      {
        title: "Unified Key Management",
        text: "Access Provides a Centralized, Secure Hub for Your Encryption Keys. Manage and Access Your Keys from Any Device, Ensuring That You Can Always Communicate Safely on Hidegram. Your Privacy, Conveniently Accessible Wherever You Go.",
      },
      {
        title: "Simplify Your Security",
        text: "Access Is the Future of Privacy Management. Streamlining the Way You Store and Retrieve Your Encryption Keys, Hidegram Is Designing Access to Make Privacy Easy and Consistent Across All Your Devices. Keep an Eye Out—Seamless Security Is Coming Soon.",
      },
    ],
    image: Phone3,
  },
];

export const STEPS: Step[] = [
  {
    step: "Q1",
    year: "2023",
    title: "Proof of Concept",
    text: "Launching the Foundation - Hidegram's Proof of Concept Emerges, Showcasing the Revolutionary Potential of Privacy-Focused Communication Without Compromising on User-Friendliness.",
    image: Step1,
  },
  {
    step: "Q1",
    year: "2024",
    title: "User-Friendly Prototype",
    text: "Usability Meets Security - Hidegram Introduces the First User-Friendly Prototype, Blending Robust Encryption with an Intuitive Interface for Effortless Adoption.",
    image: Step2,
  },
  {
    step: "Q2",
    year: "2024",
    title: "File Sharing Features",
    text: "Expanding Functionality - Hidegram Evolves with the Integration of File-Sharing Capabilities, Ensuring Secure and Private Document Transfers Within the Chat Environment.",
    image: Step3,
  },
  {
    step: "Q3-Q4",
    year: "2024",
    title: "Launch of Access",
    text: "Complete Control - The Latter Half of 2024 Will See the Launch of Access, Hidegram’s Key Management System, Providing Users with Unprecedented Control Over Their Encryption Keys Across Devices.",
    image: Step4,
  },
];

export const QUESTIONS: Question[] = [
  {
    title: "How Does Hidegram Ensure My Conversations Are Private?",
    text: "Hidegram Ensures Privacy by Encrypting Messages Client-Side and Not Storing Any Personal Data—Ensuring Only You Can Access Your Conversations.",
  },
  {
    title: "How Can I Get Started With Using Hidegram?",
    text: "Begin with Hidegram by Sending a Secure Code via Your Current Messenger Using Change, Then Start Your Encrypted Chat Instantly on Our Platform.",
  },
  {
    title: "Is Hidegram Free To Use, Or Are There Any Fees?",
    text: "Hidegram Will Remain Free Until We Ensure Our Platform's Usability Aligns with the Highest Market Standards, Providing an Unmatched User Experience.",
  },
  {
    title: "What Makes Hidegram Different From Other Messaging Apps?",
    text: "Hidegram Stands Out by Eliminating the Need for User Accounts, Offering Unparalleled Privacy Through a Unique Encryption Key System Controlled Solely by You.",
  },
  {
    title: "How Can I Trust That My Messages Are Truly Secure?",
    text: "Hidegram's Open Database Enhances Transparency, While User-Generated Strong Encryption Keys Ensure Message Privacy.",
  },
  {
    title: "What Happens If I Lose My Encryption Key?",
    text: "If You Lose Your Encryption Key, the Messages Cannot Be Recovered for Security Reasons; It's Crucial to Back Up Your Key Safely.",
  },
];
