import { ListeningTest } from "@/types/listening";
import op1 from "../assets/listening/q1-o1.png";
import op2 from "../assets/listening/q1-o2.png";
import op3 from "../assets/listening/q1-o3.png";
import op4 from "../assets/listening/q1-o4.png";
import manwoman from "../assets/listening/man-woman.png";

const listeningTestMockData = {
  testName: "Practice Test A - Listening Test",
  hasAnswerKey: true,
  mainInstruction: [
    "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this sample test, you can.",
    "For more information on test format, click here.",
    "Please note that the order of question types on the official test may differ from the order presented here.",
    "This Listening Test is identical in format to the official test except that the Listening section of the official test may be slightly longer as it might contain additional questions included for research and development purposes.",
  ],
  videoInstruction:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Listening.mp4",
  demoTest: {
    title: "Practice Test A - Listening Practice Task",
    audioUrl:
      "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L_Practice_01.ogg",
    audioInfo: "Listen to a short statement. You will hear it only once.",
    questions: [
      {
        time: 20,
        questionText:
          "Choose the sentence that is closest in meaning to the statement.",
        audioInfo: "",
        audioUrl: "",
        options: [
          { type: "text", value: "I want to see the concert again." },
          { type: "text", value: "I didn’t attend the concert." },
          { type: "text", value: "The concert was cancelled." },
          { type: "text", value: "The concert wasn’t good." },
        ],
        correctAnswer: 1,
      },
    ],
  },
  parts: [
    {
      partNumber: 1,
      title: "Practice Test A - Listening Part 1: Listening to Problem Solving",
      subtitle: "Listening Test Instructions",
      instruction: [
        "You will hear a conversation in 3 sections. You will hear each section only once.",
        "After each section, you will hear 2 or 3 questions. You will hear the questions only once.",
        "Choose the best answer to each question.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/NL1_Instructions.mp3",
      subInstruction:
        "You will hear a conversation between a woman and a man. The man is a bus driver and the woman is a passenger trying to get somewhere.",
      subInstructionImg: manwoman,
      sections: [
        {
          sectionNumber: 1,
          title:
            "Practice Test A - Listening Part 1: Listening to Problem Solving",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_c1_playground.ogg",
          audioInfo:
            "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.",
          questions: [
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q1_playground.ogg",
              options: [
                { type: "image", value: op1 },
                { type: "image", value: op2 },
                { type: "image", value: op3 },
                { type: "image", value: op4 },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q2_playground.ogg",
              options: [
                { type: "text", value: "He isn’t interested." },
                { type: "text", value: "He makes a guess." },
                { type: "text", value: "He refuses to help." },
                { type: "text", value: "He shows the way." },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q3_playground.ogg",
              options: [
                { type: "text", value: "ask another passenger" },
                { type: "text", value: "use her smartphone" },
                { type: "text", value: "look for the restaurant" },
                { type: "text", value: "go to the water fountain" },
              ],
              correctAnswer: 0,
            },
          ],
        },
        {
          sectionNumber: 2,
          title:
            "Practice Test A - Listening Part 1: Listening to Problem Solving",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_c2_playground.ogg",
          audioInfo:
            "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.",
          questions: [
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q4_playground.ogg",
              options: [
                { type: "text", value: "He was taking a walk in the park." },
                { type: "text", value: "She was going back to his bus." },
                { type: "text", value: "They were both lost in the park." },
                { type: "text", value: "They were both looking at a sign." },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q5_playground.ogg",
              options: [
                { type: "text", value: "She was looking for her smartphone." },
                {
                  type: "text",
                  value: "She walked to the far side of the park.",
                },
                { type: "text", value: "He helped her by using a smartphone." },
                { type: "text", value: "He spent his break walking with her." },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q6_playground.ogg",
              options: [
                { type: "text", value: "Follow posted maps and signs." },
                { type: "text", value: "Take the green bus in 5 minutes." },
                { type: "text", value: "Walk to the far side of the park." },
                { type: "text", value: "Get on the little red shuttle bus." },
              ],
              correctAnswer: 0,
            },
            // Add more questions if needed
          ],
        },
        {
          sectionNumber: 3,
          title:
            "Practice Test A - Listening Part 1: Listening to Problem Solving",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_c3_playground.ogg",
          audioInfo:
            "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.",
          questions: [
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q7_playground.ogg",
              options: [
                { type: "text", value: "because she does not seem angry" },
                { type: "text", value: "because she didn’t take the red bus" },
                {
                  type: "text",
                  value: "because his other riders aren’t upset",
                },
                { type: "text", value: "because his bus hasn’t broken down" },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q8_playground.ogg",
              options: [
                {
                  type: "text",
                  value: "No, she’ll just get another bus home.",
                },
                {
                  type: "text",
                  value: "No, she’ll just visit the petting zoo.",
                },
                {
                  type: "text",
                  value: "Yes, and she’ll arrive there on time.",
                },
                {
                  type: "text",
                  value: "Yes, but she’ll arrive there a bit late.",
                },
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    {
      partNumber: 2,
      title:
        "Practice Test A - Listening Part 2: Listening to a Daily Life Conversation",
      subtitle: "Listening to a Daily Life Conversation",
      instruction: [
        "You will hear a conversation followed by 5 questions.",
        "Listen to each question. You will hear the question only once.",
        "Choose the best answer to each question.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L3_Instructions.mp3",
      subInstruction:
        "You will hear a conversation. The conversation is between two co-workers. The woman is having some challenges finishing a project.",

      sections: [
        {
          sectionNumber: 1,
          title:
            "Practice Test A - Listening Part 2: Listening to a Daily Life Conversation",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L3_C.ogg",
          audioInfo:
            "Listen to the conversation. You will hear the conversation only once. It is about 1.5 to 2 minutes long.",
          questions: [
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q1.ogg",
              options: [
                { type: "text", value: "because the woman looked angry" },
                { type: "text", value: "because the woman looked unwell" },
                { type: "text", value: "because the woman looked sad" },
                {
                  type: "text",
                  value: "because the woman didn’t finish her work",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q2.ogg",
              options: [
                {
                  type: "text",
                  value: "He suggested that the woman stay after work hours.",
                },
                {
                  type: "text",
                  value:
                    "He suggested that the woman ask her husband for help.",
                },
                {
                  type: "text",
                  value: "He suggested that the woman take her work home.",
                },
                {
                  type: "text",
                  value: "He suggested that the woman ask her boss for help.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q3.ogg",
              options: [
                {
                  type: "text",
                  value: "because her son doesn’t sleep at night",
                },
                {
                  type: "text",
                  value: "because she has to do too much housework",
                },
                { type: "text", value: "because her husband doesn’t help her" },
                { type: "text", value: "because she has to meet a deadline" },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q4.ogg",
              options: [
                { type: "text", value: "because her boss doesn’t like her" },
                { type: "text", value: "because she’s not competent" },
                {
                  type: "text",
                  value: "because she’s hoping to get a promotion",
                },
                { type: "text", value: "because she already asked for one" },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q5.ogg",
              options: [
                {
                  type: "text",
                  value: "He’s taking the son away for the weekend.",
                },
                {
                  type: "text",
                  value: "He’s bringing the son to daycare on the weekend.",
                },
                { type: "text", value: "He’s working during the day too." },
                {
                  type: "text",
                  value: "He’s taking a day off work to look after their son.",
                },
              ],
              correctAnswer: 0,
            },
            // Add more questions if needed
          ],
        },
      ],
    },
    {
      partNumber: 3,
      title: "Practice Test A - Listening Part 3: Listening for Information",
      subtitle: "Listening for Information",
      instruction: [
        "You will hear a conversation followed by 6 questions.",
        "Listen to each question. You will hear the question only once.",
        "Choose the best answer to each question.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L4_Instructions.mp3",
      subInstruction:
        "You will hear a conversation. A man is interviewing a woman about perfectionism in the workplace.",

      sections: [
        {
          sectionNumber: 1,
          title:
            "Practice Test A - Listening Part 3: Listening for Information",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L4_C.ogg",
          audioInfo:
            "Listen to the conversation. You will hear the conversation only once. It is about  2 to 2.5 minutes long.",
          questions: [
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q1.ogg",
              options: [
                { type: "text", value: "She is a business manager." },
                { type: "text", value: "She is a family doctor." },
                { type: "text", value: "She is a researcher." },
                { type: "text", value: "She is a journalist." },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q2.ogg",
              options: [
                {
                  type: "text",
                  value: "They are always persevering and successful.",
                },
                {
                  type: "text",
                  value:
                    "Their work is better because of their high standards.",
                },
                {
                  type: "text",
                  value: "They are productive in group environments.",
                },
                {
                  type: "text",
                  value: "They often fail to complete tasks at work.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q3.ogg",
              options: [
                { type: "text", value: "affect job stability and social life" },
                { type: "text", value: "help people with depression" },
                { type: "text", value: "help with making friendships" },
                { type: "text", value: "reduce people’s anxiety" },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q4.ogg",
              options: [
                { type: "text", value: "because of the stressful workplace" },
                {
                  type: "text",
                  value: "because they have insufficient friendships",
                },
                {
                  type: "text",
                  value: "because they have poor time management",
                },
                {
                  type: "text",
                  value: "because they have incompetent workmates",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q5.ogg",
              options: [
                { type: "text", value: "Avoid working in groups." },
                { type: "text", value: "Focus on details." },
                { type: "text", value: "Prioritize tasks." },
                { type: "text", value: "Take time off." },
              ],
              correctAnswer: 0,
            },
            {
              time: 20,
              questionText: "Choose the best answer to each question.",
              audioInfo: "Listen to the question. You will hear it only once.",
              audioUrl:
                "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q6.ogg",
              options: [
                {
                  type: "text",
                  value: "time management skills and lowering anxiety",
                },
                {
                  type: "text",
                  value: "the role of social isolation on anxiety",
                },
                {
                  type: "text",
                  value: "the importance of friendships on anxiety",
                },
                {
                  type: "text",
                  value: "the importance of friendships on anxiety",
                },
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    {
      partNumber: 4,
      title: "Practice Test A - Listening Part 4: Listening to a News Item",
      subtitle: "Listening to a News Item",
      instruction: [
        "You will hear a news item once. It is about 1.5 minutes long.",
        "Then 5 questions will appear.",
        "Choose the best way to complete each statement from the drop-down menu.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L5_Instructions.mp3",
      subInstruction:
        "You will hear a news item about a unique medical procedure.",

      sections: [
        {
          sectionNumber: 1,
          title:
            "Practice Test A - Listening Part 4: Listening to a News Item",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L5.ogg",
          audioInfo:
            "Listen to the conversation. You will hear the conversation only once. It is about  1.5 minutes long.",
          questions: [
            {
              time: 180,
              questionText: "The news item is about",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "an Australian doctor." },
                { type: "dropdown", value: "a medical breakthrough." },
                { type: "dropdown", value: "an eye disease." },
                { type: "dropdown", value: "a computer program." },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: "Before the surgery, Dianne was unable",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "to see with either eye." },
                { type: "dropdown", value: "to see with one eye." },
                { type: "dropdown", value: "to see colour." },
                { type: "dropdown", value: "to see black and white." },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: "With the prototype, Dianne won’t be able to",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "see details." },
                { type: "dropdown", value: "see movement." },
                { type: "dropdown", value: "see shapes." },
                { type: "dropdown", value: " see outlines." },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: "Dianne’s prototype will soon be",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "activated." },
                { type: "dropdown", value: "re-installed." },
                { type: "dropdown", value: " monitored." },
                { type: "dropdown", value: "replaced." },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: "The two other patients",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: " are doing well with their prototypes.",
                },
                {
                  type: "dropdown",
                  value: "have not yet received their prototypes.",
                },
                { type: "dropdown", value: "cannot afford their prototypes." },
                { type: "dropdown", value: "didn’t adapt to the prototypes." },
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },

    {
      partNumber: 5,
      title: "Practice Test A - Listening Part 5: Listening to a Discussion",
      subtitle: "Listening to a Discussion",
      instruction: [
        "You will watch a 2-minute video. Then 8 questions will appear.",
        "Choose the best way to answer each question.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/NL5_Instructions.mp3",
      subInstruction:
        "You will watch a discussion between three people at a cafe. They all belong to a conversation club where some members are improving their English and some are improving their French.",

      sections: [
        {
          sectionNumber: 1,
          title:
            "Practice Test A - Listening Part 5: Listening to a Discussion",
          audioUrl: "",
          videoUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/NL5_LanguageExchangeVideo.mp4",
          audioInfo: "",
          videoInfo:
            "Watch the discussion. You will watch the discussion only once. It is about 1.5 to 2 minutes long.",
          questions: [
            {
              time: 180,
              questionText: " What is the main topic being discussed?",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "what to learn" },
                { type: "dropdown", value: "where to meet" },
                { type: "dropdown", value: "whether to grow" },
                { type: "dropdown", value: "whom to invite" },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "In the discussion, what were the three speakers mainly doing?",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "considering their options" },
                { type: "dropdown", value: "disputing a decision" },
                { type: "dropdown", value: "estimating their numbers" },
                { type: "dropdown", value: "sharing encouragement" },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "Which saying would the man in the sweater probably agree with?",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "Hold hands and stick together." },
                {
                  type: "dropdown",
                  value: "Small is beautiful; less is more.",
                },
                {
                  type: "dropdown",
                  value: "The more, the merrier; bigger is better.",
                },
                { type: "dropdown", value: "Two’s company; three’s a crowd." },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "What best describes the woman’s attitude to Marta?",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "admiration" },
                { type: "dropdown", value: "envy" },
                { type: "dropdown", value: " gratitude" },
                { type: "dropdown", value: "scorn" },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: " Who must be the best speaker of French?",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: " The woman in the video" },
                { type: "dropdown", value: "The man wearing short sleeves" },
                { type: "dropdown", value: "The woman they talked about" },
                { type: "dropdown", value: "The man wearing a sweater" },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                " What is definitely true of the club’s allophones?",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: " They are all trying to improve their French.",
                },
                {
                  type: "dropdown",
                  value: "They do not like serving as translators.",
                },
                {
                  type: "dropdown",
                  value: "They lose interest while on waitlists.",
                },
                {
                  type: "dropdown",
                  value: "They outnumber the other two groups.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                " What do the woman and the man in the sweater disagree on? ",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: " allophone skill levels" },
                { type: "dropdown", value: "Colleen and Liam" },
                { type: "dropdown", value: "keeping waitlists" },
                { type: "dropdown", value: "Marta’s first language" },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "What does the man wearing short sleeves agree to do?",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: " form a separate club for allophones",
                },
                {
                  type: "dropdown",
                  value: "move the whole group to a bigger restaurant",
                },
                {
                  type: "dropdown",
                  value: "organize everyone into groups of four",
                },
                {
                  type: "dropdown",
                  value: "start additional meetups at a second location",
                },
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },

    {
      partNumber: 6,
      title: "Practice Test A - Listening Part 6: Listening for Viewpoints",
      subtitle: "Listening for Viewpoints",
      instruction: [
        "You will hear a report once. It is about 3 minutes long.",
        "Then 6 questions will appear.",
        "Choose the best way to answer each question from the drop-down menu.",
      ],
      audioUrl:
        "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L6_Instructions.mp3",
      subInstruction:
        "You will hear a report about a controversial bill being proposed to reduce jail time for prisoners.",

      sections: [
        {
          sectionNumber: 1,
          title:
            "Practice Test A - Listening Part 6: Listening for Viewpoints",
          audioUrl:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L6.ogg",
          audioInfo:
            "Listen to the following report. You will hear the report only once. It is about 3 minutes long.",
          questions: [
            {
              time: 180,
              questionText: "This is a story about a",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: "law that forces prisoners to read books.",
                },
                {
                  type: "dropdown",
                  value: "proposed law to reduce some prisoners’ sentences.",
                },
                {
                  type: "dropdown",
                  value: "man who spent 36 days reading books in prison.",
                },
                {
                  type: "dropdown",
                  value: "project that teaches prisoners to read and write.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "Prisoners' access to the program would depend on their ",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: "frequency at the prison’s library.",
                },
                { type: "dropdown", value: "crime and behaviour in jail." },
                {
                  type: "dropdown",
                  value: "knowledge of grammar and spelling.",
                },
                { type: "dropdown", value: "previous reading level." },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: "The purpose of the project is to",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: "diminish conflict and promote personal growth.",
                },
                {
                  type: "dropdown",
                  value: "teach prisoners to read and write better.",
                },
                {
                  type: "dropdown",
                  value: "increase prisoners’ level of education.",
                },
                {
                  type: "dropdown",
                  value: "help prisoners to find jobs when they leave.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: "Critics argue that the project",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: "should focus more on recent literature.",
                },
                {
                  type: "dropdown",
                  value: "penalizes those with poor English language skills.",
                },
                {
                  type: "dropdown",
                  value:
                    " creates conflict between the educated and uneducated.",
                },
                {
                  type: "dropdown",
                  value:
                    "only helps prisoners find jobs if they’ve read Shakespeare.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "Chris Kendhi, who’s worked in prison libraries for 20 years, believes the project ",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: "will fail because prisoners are bitter.",
                },
                {
                  type: "dropdown",
                  value: "will help prisoners earn more money.",
                },
                {
                  type: "dropdown",
                  value: "will transform some prisoners’ lives.",
                },
                {
                  type: "dropdown",
                  value: "will make prison administrators optimistic.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText: " If the bill becomes law, it will",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: "apply to the whole province." },
                { type: "dropdown", value: "apply to the whole country." },
                {
                  type: "dropdown",
                  value: "be debated by the general public.",
                },
                {
                  type: "dropdown",
                  value: "be discussed by government branches.",
                },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                " What do the woman and the man in the sweater disagree on? ",
              audioInfo: "",
              audioUrl: "",
              options: [
                { type: "dropdown", value: " allophone skill levels" },
                { type: "dropdown", value: "Colleen and Liam" },
                { type: "dropdown", value: "keeping waitlists" },
                { type: "dropdown", value: "Marta’s first language" },
              ],
              correctAnswer: 0,
            },
            {
              time: 180,
              questionText:
                "What does the man wearing short sleeves agree to do?",
              audioInfo: "",
              audioUrl: "",
              options: [
                {
                  type: "dropdown",
                  value: " form a separate club for allophones",
                },
                {
                  type: "dropdown",
                  value: "move the whole group to a bigger restaurant",
                },
                {
                  type: "dropdown",
                  value: "organize everyone into groups of four",
                },
                {
                  type: "dropdown",
                  value: "start additional meetups at a second location",
                },
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
  ],

  endPage: {
    title: "Practice Test A - End of the Listening Test",
    instruction: [
      `This is the end of the Listening Test.`,
      `Click here to view the Listening Transcripts. Transcripts will not be provided on the official test.`,
      `Click "NEXT" to continue.`,
    ],
  },
};

export const listening : ListeningTest = {
  type: "Listening",
  structure: [
    {
      title: "Listening Test",
      instructions: [
        {
          text: "Listening Test Instructions",
        },
        {
          text: "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this sample test, you can.",
        },
        {
          text: "For more information on test format, click here.",
        },
        {
          text: "Please note that the order of question types on the official test may differ from the order presented here.",
        },
        {
          text: "This Listening Test is identical in format to the official test except that the Listening section of the official test may be slightly longer as it might contain additional questions included for research and development purposes.",
        },
      ],
    },
    {
      title: "Listening Instructional Video",
      instructions: [
        {
          video: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Listening.mp4",
        },
      ],
    },
    {
      title: "Listening Practice Task",
      instructions: [
        {
          text: "Listen to a short statement. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the sentence that is closest in meaning to the statement.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L_Practice_01.ogg",
              choices: [
                {
                  text: "I want to see the concert again.",
                },
                {
                  text: "I didn’t attend the concert.",
                },
                {
                  text: "The concert wasn’t good.",
                },
                {
                  text: "The concert was cancelled.",
                },
              ],
              correctAnswer: "The concert wasn’t good.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description: "Listening to Problem Solving",
      instructions: [
        {
          text: "Listening Test Instructions",
        },
        {
          text: "You will hear a conversation in 3 sections. You will hear each section only once.",
        },
        {
          text: "After each section, you will hear 2 or 3 questions. You will hear the questions only once.",
        },
        {
          text: "Choose the best answer to each question.",
        },
        {
          audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/NL1_Instructions.mp3",
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description: "Instructions:",
      instructions: [
        {
          text: "You will hear a conversation between a woman and a man. The man is a bus driver and the woman is a passenger trying to get somewhere.",
        },
        {
          image: manwoman,
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description: "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.:",
      instructions: [
        {
          audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_c1_playground.ogg",
        },
      ]
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q1_playground.ogg",
              choices: [
                {
                  image: op1,
                },
                {
                  image: op2,
                },
                {
                  image: op3,
                },
                {
                  image: op4,
                },
              ],
              correctAnswer: op2,
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q2_playground.ogg",
              choices: [
                {
                  text: "He isn’t interested.",
                },
                {
                  text: "He makes a guess.",
                },
                {
                  text: "He refuses to help.",
                },
                {
                  text: "He shows the way.",
                },
              ],
              duration: 10,
              correctAnswer: "He shows the way.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q3_playground.ogg",
              choices: [
                {
                  text: "ask another passenger",
                },
                {
                  text: "use her smartphone",
                },
                {
                  text: "look for the restaurant",
                },
                {
                  text: "go to the water fountain",
                },
              ],
              duration: 4,
              correctAnswer: "go to the water fountain",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description:
        "You will hear the second section of the conversation shortly.",
      prepTime: 10,
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description:
        "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.",
      instructions: [
        {
          audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_c2_playground.ogg",
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q4_playground.ogg",
              choices: [
                {
                  text: "He was taking a walk in the park.",
                },
                {
                  text: "She was going back to his bus.",
                },
                {
                  text: "They were both lost in the park.",
                },
                {
                  text: "They were both looking at a sign.",
                },
              ],
              duration: 4,
              correctAnswer: "They were both looking at a sign.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q5_playground.ogg",
              choices: [
                {
                  text: "She was looking for her smartphone.",
                },
                {
                  text: "She walked to the far side of the park.",
                },
                {
                  text: "He helped her by using a smartphone.",
                },
                {
                  text: "He spent his break walking with her.",
                },
              ],
              duration: 3,
              correctAnswer: "He spent his break walking with her.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q6_playground.ogg",
              choices: [
                {
                  text: "Follow posted maps and signs.",
                },
                {
                  text: "Take the green bus in 5 minutes.",
                },
                {
                  text: "Walk to the far side of the park.",
                },
                {
                  text: "Get on the little red shuttle bus.",
                },
              ],
              duration: 4,
              correctAnswer: "Get on the little red shuttle bus.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description:
        "You will hear the third section of the conversation shortly.",
      prepTime: 10,
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      description:
        "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.",
      instructions: [
        {
          audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_c3_playground.ogg",
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q7_playground.ogg",
              choices: [
                {
                  text: "because she does not seem angry",
                },
                {
                  text: "because she didn’t take the red bus",
                },
                {
                  text: "because his other riders aren’t upset",
                },
                {
                  text: "because his bus hasn’t broken down",
                },
              ],
              duration: 5,
              correctAnswer: "because his bus hasn’t broken down",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 1: Listening to Problem Solving",
      instructions: [
        {
          text: "Listen to the question. You will hear it only once.",
        },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/nl1_q8_playground.ogg",
              choices: [
                {
                  text: "No, she’ll just get another bus home.",
                },
                {
                  text: "No, she’ll just visit the petting zoo.",
                },
                {
                  text: "Yes, and she’ll arrive there on time.",
                },
                {
                  text: "Yes, but she’ll arrive there a bit late.",
                },
              ],
              duration: 4,
              correctAnswer: "Yes, but she’ll arrive there a bit late.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      description: "Listening to a Daily Life Conversation",
      instructions: [
        {
          text: "You will hear a conversation followed by 5 questions.",
        },
        {
          text: "Listen to each question. You will hear the question only once.",
        },
        {
          text: "Choose the best answer to each question.",
        },
        {
          audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L3_Instructions.mp3",
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      description: "Instructions:",
      instructions: [
        {
          text: "You will hear a conversation. The conversation is between two co-workers. The woman is having some challenges finishing a project.",
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      description:
        "Listen to the conversation. You will hear the conversation only once. It is about 1.5 to 2 minutes long.",
      instructions: [
        {
          audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L3_C.ogg",
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Choose the best answer to each question.",
            },
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q1.ogg",
              choices: [
                {
                  text: "because the woman looked angry",
                },
                {
                  text: "because the woman looked unwell",
                },
                {
                  text: "because the woman looked sad",
                },
                {
                  text: "because the woman didn’t finish her work",
                },
              ],
              duration: 4,
              correctAnswer: "because the woman didn’t finish her work",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q2.ogg",
              choices: [
                {
                  text: "He suggested that the woman stay after work hours.",
                },
                {
                  text: "He suggested that the woman ask her husband for help.",
                },
                {
                  text: "He suggested that the woman take her work home.",
                },
                {
                  text: "He suggested that the woman ask her boss for help.",
                },
              ],
              duration: 4,
              correctAnswer:
                "He suggested that the woman ask her boss for help.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q3.ogg",
              choices: [
                {
                  text: "because her son doesn’t sleep at night",
                },
                {
                  text: "because she has to do too much housework",
                },
                {
                  text: "because her husband doesn’t help her",
                },
                {
                  text: "because she has to meet a deadline",
                },
              ],
              duration: 5,
              correctAnswer: "because she has to meet a deadline",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q4.ogg",
              choices: [
                {
                  text: "because her boss doesn’t like her",
                },
                {
                  text: "because she’s not competent",
                },
                {
                  text: "because she’s hoping to get a promotion",
                },
                {
                  text: "because she already asked for one",
                },
              ],
              duration: 4,
              correctAnswer: "because she already asked for one",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 2: Listening to a Daily Life Conversation",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L03_PT2_Q5.ogg",
              choices: [
                {
                  text: "He’s taking the son away for the weekend.",
                },
                {
                  text: "He’s bringing the son to daycare on the weekend.",
                },
                {
                  text: "He’s working during the day too.",
                },
                {
                  text: "He’s taking a day off work to look after their son.",
                },
              ],
              duration: 4,
              correctAnswer:
                "He’s taking a day off work to look after their son.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      description: "Listening for information",
      instructions: [
        { text: "You will hear a conversation followed by 6 questions." },
        {
          text: "Listen to each question. You will hear the question only once.",
        },
        { text: "Choose the best answer to each question." },
        { audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L4_Instructions.mp3" },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      description: "Instructions:",
      instructions: [
        {
          text: "You will hear a conversation. A man is interviewing a woman about perfectionism in the workplace.",
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      description:
        "Listen to the conversation. You will hear the conversation only once. It is about 2 to 2.5 minutes long.",
      instructions: [{ audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L4_C.ogg" }],
    },
    {
      title: "Listening Part 3: Listening for Information",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          // correct 
          instructions: [
            {
              text:"Choose the best answer to each question."
            }
          ],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q1.ogg",
              choices: [
                {
                  text: "She is a business manager.",
                },
                {
                  text: "She is a family doctor.",
                },
                {
                  text: "She is a researcher.",
                },
                {
                  text: "She is a journalist.",
                },
              ],
              duration: 5,
              correctAnswer: "She is a journalist.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q2.ogg",
              choices: [
                {
                  text: "They are always persevering and successful.",
                },
                {
                  text: "Their work is better because of their high standards.",
                },
                {
                  text: "They are productive in group environments.",
                },
                {
                  text: "They often fail to complete tasks at work.",
                },
              ],
              duration: 6,
              correctAnswer: "They often fail to complete tasks at work.",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q3.ogg",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              duration: 6,
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q4.ogg",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              duration: 6,
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q5.ogg",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              duration: 6,
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 3: Listening for Information",
      instructions: [
        { text: "Listen to the question. You will hear it only once." },
      ],
      duration: 30,
      questionSets: [
        {
          instructions: [{ text: "Choose the best answer to each question." }],
          questions: [
            {
              type: "mcq",
              text: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L04_PT2_Q6.ogg",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              duration: 6,
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 4: Listening to a News Item",
      description: "Listening to a News Item",
      instructions: [
        {
          text: "You will hear a news item once. It is about 1.5 minutes long.",
        },
        { text: "Then 5 questions will appear." },
        {
          text: "Choose the best way to complete each statement from the drop-down menu.",
        },
        { audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L5_Instructions.mp3" },
      ],
    },
    {
      title: "Listening Part 4: Listening to a News Item",
      description: "Instructions:",
      instructions: [
        { text: "You will hear a news item about a unique medical procedure." },
      ],
    },
    {
      title: "Listening Part 4: Listening to a News Item",
      description:
        "Listen to the conversation. You will hear the conversation only once. It is about 1 to 1.5 minutes long.",
      instructions: [{ audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L5.ogg" }],
    },
    {
      title: "Listening Part 4: Listening to a News Item",
      description:
        "Choose the best answer to each question from the drop-down menu (-).",
      duration: 60,
      questionSets: [
        {
          questions: [
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Listening Part 5: Listening to a Discussion",
      description: "Listening to a Discussion",
      instructions: [
        {
          text: "You will watch a 2-minute video. Then 8 questions will appear.",
        },
        { text: "Choose the best way to answer each question." },
        { audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/NL5_Instructions.mp3" },
      ],
    },
    {
      title: "Listening Part 5: Listening to a Discussion",
      description: "Instructions:",
      instructions: [
        {
          text: "You will watch a discussion between three people at a cafe. They all belong to a conversation club where some members are improving their English and some are improving their French.",
        },
      ],
    },
    {
      title: "Listening Part 5: Listening to a Discussion",
      description:
        "Watch the discussion. You will watch the discussion only once. It is about 1.5 to 2 minutes long.",
      instructions: [{ video: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/NL5_LanguageExchangeVideo.mp4" }],
    },
    {
      title: "Listening Part 5: Listening to a Discussion",
      description:
        "Choose the best answer to each question from the drop-down menu (-).",
      duration: 60,
      questionSets: [
        {
          questions: [
            {
              type: "mcq",
              text: "The news item is about 1",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 2",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 3",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 4",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 5",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 6",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 7",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about 8",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },

    {
      title: "Listening Part 6: Listening for Viewpoints",
      description: "Listening for Viewpoints",
      instructions: [
        { text: "You will hear a report once. It is about 3 minutes long." },
        { text: "Then 6 questions will appear." },
        {
          text: "Choose the best way to answer each question from the drop-down menu.",
        },
        { audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/L6_Instructions.mp3" },
      ],
    },
    {
      title: "Listening Part 6: Listening for Viewpoints",
      description: "Instructions:",
      instructions: [
        {
          text: "You will hear a report about a controversial bill being proposed to reduce jail time for prisoners.",
        },
      ],
    },
    {
      title: "Listening Part 6: Listening for Viewpoints",
      description:
        "Listen to the following report. You will hear the report only once. It is about 3 minutes long.",
      instructions: [{ audio: "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/audio/PT2L6.ogg" }],
    },
    {
      title: "Listening Part 6: Listening for Viewpoints",
      description:
        "Choose the best answer to each question from the drop-down menu (-).",
      duration: 60,
      questionSets: [
        {
          questions: [
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
            {
              type: "mcq",
              text: "The news item is about",
              choices: [
                {
                  text: "text 1",
                },
                {
                  text: "text 2",
                },
                {
                  text: "text 3",
                },
                {
                  text: "text 4",
                },
              ],
              correctAnswer: "text 4",
              score: 5,
            },
          ],
        },
      ],
    },
  ],
};


export default listeningTestMockData;
