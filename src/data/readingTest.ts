import { v4 as uuidv4 } from "uuid";

import train from "../assets/reading/train.png";
import car from "../assets/reading/car.png";
import plane from "../assets/reading/plane.png";
import bus from "../assets/reading/bus.png";
import { ReadingTest } from "@/types/reading";

export const readingTestMockData = {
  testName: "Practice Test A - Reading Test",
  hasAnswerKey: true,
  mainInstruction: [
    "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this sample test, you can.",
    "Watch the timer in the top right corner to make sure that you complete the Reading Test before the time is up. For more information on test format, click here.",
    "This Reading Test is identical in format to the official test except that the Reading section of the official test may be slightly longer as it might contain additional questions included for research and development purposes.",
  ],
  videoInstruction:
    "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Reading.mp4",
  demoTest: {
    title: "Practice Test A - Reading Practice Task",
    exercise: [
      {
        id: uuidv4(),
        title: "",
        passageInfo: "Read the following message.",
        questionInfo:
          "Using the drop-down menu (▼), choose the best option according to the information given in the message.",
        passage: `Canada is surrounded on three sides by oceans. To the north, the Arctic Ocean borders Yukon, Northwest Territories, and Nunavut. Off the west coast of British Columbia is the Pacific Ocean. The Atlantic Ocean, meanwhile, sits to the east of Canada's Maritime provinces, which include Nova Scotia, New Brunswick, and Prince Edward Island.`,
        timeLimit: 120,
        type: "correspondence",
        questions: [
          {
            id: uuidv4(),
            text: "Which province is on the Pacific Ocean?",
            options: [
              "Prince Edward Island",
              "Nunavut",
              "British Columbia",
              "Nova Scotia",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  exercise: [
    {
      id: uuidv4(),
      title: "Practice Test A - Reading Part 1: Reading Correspondence",
      passageInfo: "Read the following message.",
      questionInfo:
        "Using the drop-down menu (▼), choose the best option according to the information given in the message.",
      passage: `Hi Mea,

I’m sorry for taking so long to reply to your email. As you know, I’ve been very busy this summer with Marco’s university graduation and my family’s visit from Chile. The graduation ceremony was great! Too bad you guys couldn’t make it, but we understand it’s a bit of a drive from Calgary. You were truly missed. My Mum remembers you well from when we were kids. After the celebrations, we took the family sightseeing here in Vancouver. They loved it! They left yesterday for Victoria, and will catch a plane back home from there in three days.

Just when we thought things would slow down, Marco broke the news that he had accepted a job offer in Tokyo. He leaves at the end of the month! He was invited to work at a top engineering firm that specializes in rebuilding cities after large disasters. Needless to say Marco is very excited about it. The firm has been really active in the reconstruction efforts following the 2011 earthquake in Japan, and it’s a great first step into his career, not to mention the opportunity to experience a new culture, and learn a new language. He’s a little apprehensive about communicating in Japanese but the firm has a translator and a tutor to help him.

Marco is over the moon, but Jack and I are having a tougher time with it. We think he’s so young to be so far away, but we know it’s for the best. Just the other day Jack and I were talking about that trip all of us took to Disneyland when the kids were little, do you remember that? It’s been 20 years! Time flies, doesn’t it? Well, get prepared, Cindy is next!

In any event, we are planning a farewell party for friends next weekend, and Marco cannot imagine not having you, Jason and Cindy there. The party will be at his apartment. He really does not want to leave without saying goodbye to you all. We hope you can make it, after all we haven’t seen you since last Christmas. Let me know so I can get the rooms ready.

We’ll be in touch,

Love,
Maria`,
      timeLimit: 120,
      type: "correspondence",
      questions: [
        {
          id: uuidv4(),
          text: "Maria's mother is now",
          options: ["in Vancouver", "in Victoria", "in Chile", "not mentioned"],
          correctAnswer: 0,
        },
        {
          id: uuidv4(),
          text: "In a few weeks, Maria's son Marco will",
          options: [
            "graduate from university",
            "move to Tokyo",
            "visit Disneyland",
            "get married",
          ],
          correctAnswer: 0,
        },
        {
          id: uuidv4(),
          text: "Marco is feeling",
          options: ["apprehensive", "excited", "sad", "indifferent"],
          correctAnswer: 0,
        },
        {
          id: uuidv4(),
          text: "Marco's employers are",
          options: [
            "providing language support",
            "paying for his move",
            "offering a low salary",
            "not mentioned",
          ],
          correctAnswer: 0,
        },
        {
          id: uuidv4(),
          text: "Maria and Jack are worried about",
          options: [
            "Marco's youth",
            "Marco's job prospects",
            "the cost of living in Tokyo",
            "Marco's language skills",
          ],
          correctAnswer: 0,
        },
        {
          id: uuidv4(),
          text: "Mea and Maria",
          options: [
            "are sisters",
            "are old friends",
            "work together",
            "live in the same city",
          ],
          correctAnswer: 0,
        },
      ],
      fillInTheBlankQuestion: {
        info: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-down menu (▼).",
        text: `Hi Maria,

This is such wonderful news! Count us in, we would hate to miss {7}. We'll leave {8} at 6am Saturday morning. We'll be there by early afternoon. That way if you need any help setting up the {9} you'll have some extra help. Cindy is great with decorations.

Also, we want to give Marco a graduation gift. Initially we thought about a sofa for his Vancouver apartment, but I guess that {10}. Do you have any suggestions? Does he have everything he needs for the {11}? Winter clothes, perhaps?

Let me know, and see you on Saturday!

Love,
Mea`,
        blankOptions: [
          {
            id: 7,
            options: ["the party", "Marco's farewell", "the graduation"],
            correctAnswer: 0,
          },
          {
            id: 8,
            options: ["Calgary", "Vancouver", "Victoria"],
            correctAnswer: 0,
          },
          {
            id: 9,
            options: ["party", "decorations", "apartment"],
            correctAnswer: 0,
          },

          {
            id: 10,
            options: [
              "won't be necessary",
              "is too expensive",
              "isn't practical",
            ],
            correctAnswer: 0,
          },
          { id: 11, options: ["job", "move", "winter"], correctAnswer: 0 },
        ],
      },
    },
    {
      id: uuidv4(),
      title: "Practice Test A - Reading Part 2: Reading to Apply a Diagram",
      type: "diagram",
      questionInfo:
        "Read the following email message about the diagram on the left. Complete the email by filling in the blanks. Select the best choice for each blank from the drop-down menu (▼).",
      passageInfo: "Using the drop-down menu (▼), choose the best option.",
      diagramOptions: [
        {
          type: "Train",
          image: train,
          features: [
            "first-class",
            "scenic trip along the coast",
            "free wi-fi internet",
          ],
          price: "$ 260- return ticket",
          duration: "4 hr, 25 min",
        },
        {
          type: "Bus",
          image: bus,
          features: [
            "no checked baggage allowed",
            "no washrooms, no stops",
            "only morning trips to Seattle",
          ],
          price: "$ 100- return ticket",
          duration: "3 hr, 30 min",
        },
        {
          type: "Plane",
          image: plane,
          features: [
            "in-flight snack",
            "free movie entertainment",
            "airport close to town",
          ],
          price: "$ 240- return ticket",
          duration: "45 min",
        },
        {
          type: "Car",
          image: car,
          features: [
            "freedom to explore the city",
            "no need to pay for cabs to and from hotel",
          ],
          price: "Price: $180 (90/ each) -for gas",
          duration: "4 hours",
        },
      ],
      timeLimit: 240,
      questions: [
        {
          id: uuidv4(),
          options: [
            "work together.",
            "are friends.",
            "are neighbours.",
            "live together.",
          ],
          correctAnswer: 0,
          text: "Peter and Janice",
        },
        {
          id: uuidv4(),
          options: [
            "to attend a business meeting.",
            "to visit a tourist attraction.",
            "to speak at a conference.",
            "to visit a doctor.",
          ],
          correctAnswer: 0,
          text: "The main purpose of the trip is",
        },
        {
          id: uuidv4(),
          options: ["sympathetic.", "apathetic.", "cooperative.", "unhelpful."],
          correctAnswer: 0,
          text: "Peter seems",
        },
      ],
      fillInTheBlankQuestion: {
        info: "Complete the email by selecting the best option for each blank.",
        text: `Subject: Seattle conference presentation
To: Janice Wong <jwong@ubc.ca>
From: Peter Kull <pkull@ubc.ca>

Hi Janice,

You will find attached our presentation file. It’s ready! I’ve also done some research on travel. Remember, the conference is a week away and we haven’t decided how to get there yet. Here are our options. Buses are the {1} because the fleet is old and there are no stopovers. The train seems more relaxed and we have plenty of time to get some work done if needed. It {2} than I had expected, especially when compared to airfares. Plus, the {3} is far from the hotel. Flying would save us time, and the airport is close to the hotel and the university in case we want to visit Dr. Kitayama. Lastly, I really wouldn’t mind {4}. My car is economical and would give us flexibility to {5}. After all, we have both worked so hard on this project!

Best,
Peter`,
        blankOptions: [
          {
            id: 1,
            options: [
              "cheapest option",
              "fastest option",
              "least comfortable",
              "most expensive",
            ],
            correctAnswer: 0,
          },
          {
            id: 2,
            options: [
              "is more expensive",
              "is cheaper",
              "takes longer",
              "is more comfortable",
            ],
            correctAnswer: 0,
          },
          {
            id: 3,
            options: ["train station", "bus station", "airport", "hotel"],
            correctAnswer: 0,
          },
          {
            id: 4,
            options: [
              "taking the scenic route",
              "flying",
              "driving",
              "staying an extra day",
            ],
            correctAnswer: 0,
          },
          {
            id: 5,
            options: [
              "commute.",
              "go sightseeing.",
              "go to the conference.",
              "go to the hotel.",
            ],
            correctAnswer: 0,
          },
        ],
      },
    },
    {
      id: uuidv4(),
      title: "Practice Test A - Reading Part 3: Reading for Information",
      type: "correspondence",
      questionInfo: "",
      passageInfo: "Read the following passage.",
      passage: `A. The narwhal is an endangered type of whale found in the frigid waters of the Arctic, extending from Canada through the Norwegian waters to Russia. Narwhal means "corpse whale", and it has earned its name because of its mottled dark grey colour. Narwhals are regularly harvested for meat and ivory in northern Canada and Greenland. Narwhals share physical characteristics with Beluga whales, having similar shape and size. Both species lack dorsal fins, have short beaks, rounded heads and a thick layer of blubber to adapt to glacial conditions.

B. The narwhals’ distinctive characteristic lies in the presence of a long 2.5 meter spiralling tusk that protrudes from the males' foreheads, resembling a unicorn. The horn-like formation, however, is a long left tooth. The right tooth remains embedded in the skull and measures roughly 30 centimeters. Female tusks have a more regularly defined morphology. They are much shorter, straighter, and do not collect as much algae on the surface, thus appearing whiter.

C. For hundreds of years the purpose of the tusk on the "unicorn whale" has puzzled scientists and local aboriginal elders alike. A northern aboriginal legend explains the narwhal's tusk was created when a woman shooting with a harpoon rope was dragged into the ocean after the harpoon had struck a large narwhal whale. She then was transformed into a narwhal herself, and her hair, which was long and twisted, became the characteristic of the spiral tusk. In academic circles, the tusk remains an evolutionary mystery that defies many of the known principles of mammalian teeth. Preliminary studies suggest the tusk enables whales to determine salinity levels and allows them to detect food in their environment.

D. Narwhal behaviour also intrigues researchers. Males frequently engage in episodes of rubbing their tusks together, or “tusking,” for as-yet unknown reasons. The same behaviour is not observed in the female counterparts or between females and males. Some studies theorize about the possibility of these being mating behaviours aimed at displaying genetic superiority. Support for such a theory, however, has proved scarce since unlike other mammalian species the behaviour is not aggressive. Narwhals are a migratory species. In an attempt to learn about their migration patterns and social behavior, their populations are being observed and recorded through satellite tracking conducted by scientists in Canada and Greenland.

E. Not given in any of the above paragraphs.`,
      timeLimit: 240,
      questions: [],
      fillInTheBlankQuestion: {
        info: "Decide which paragraph, A to D, has the information given in each statement below. Select E if the information is not given in any of the paragraphs.",
        text: `
{1}  - 1. There are physical differences between Narwhal males and females.
{2}  - 2. Narwhals are also referred to as death-like.
{3}  - 3. There are aspects of narwhals’ anatomy that remain unexplained.
{4}  - 4. Narwhals present puzzling social interactions.
{5}  - 5. Narwhal whales are connected to Canadian aboriginal folklore.
{6}  - 6. There is a sound understanding of narwhals’ mating behaviour.
{7}  - 7. Different countries are documenting narwhal behaviour patterns.
{8}  - 8. The narwhal population is in jeopardy.
{9}  - 9. Narwhals’ physical characteristics are also observed in other whale groups.`,
        blankOptions: [
          {
            id: 1,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 2,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 3,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 4,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 5,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 6,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 7,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 8,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
          {
            id: 9,
            options: ["A", "B", "C", "D", "E", "F"],
            correctAnswer: 0,
          },
        ],
      },
    },
    {
      id: uuidv4(),
      title: "Practice Test A - Reading Part 4: Reading for Viewpoints",
      type: "correspondence",
      questionInfo:
        "Using the drop-down menu (▼), choose the best option according to the information given on the website.",
      passageInfo: "Read the following article from a website.",
      passage: `Visitors walking through Carleton High School are often surprised when they pass Bradley Gordon's French class and see students riding on exercise bikes and sitting on yoga balls. Is it a French class, or is it a gym class? Well, it's a bit of both!

Two major concerns in education are childhood obesity and ADHD, or Attention Deficit Hyperactivity Disorder, a disorder that results in restlessness, hyperactivity, and impulsivity. With high rates of obesity and also students struggling with ADHD in classes across the country, Mr. Gordon came up with an innovative intervention to address both. He decided to infuse academic studies with physical activity in his own classroom.

The idea came to Gordon after a personal experience in university while working on his bachelor's degree. "I didn't have time to schedule a separate slot for exercise, and my health deteriorated rapidly," said Gordon. "After feeling sick and fatigued for months, I decided to couple my studying with my workouts. To my surprise it proved incredibly helpful. My grades started improving and so did my overall fitness and health."

Gordon implemented the approach with his students to great effect last year. Despite the students' excitement and academic improvement, he met resistance from the school's principal, Dawn Epstein, who was not convinced that academics and physical exercise should be amalgamated. "Although exercise is certainly important, I didn't think it had any place in academics. I assumed exercise would exacerbate ADHD,” Epstein asserted.

It turns out Ms. Epstein’s reaction is a common misconception. As Dr. John Ratney, psychiatry professor at Harvard Medical School, explains: “Exercise turns the attention system on, and helps with working memory, prioritizing and sustaining attention.” Sustained physical exertion causes kids to be less impulsive and more prone to learn. That’s precisely what Mr. Gordon found a year into the intervention. “My students’ endurance, both physical and mental, has improved. They are fit, and eager to learn. Even students diagnosed with ADHD have displayed less physical agitation, which has helped them to learn better.” So, when you walk by Mr. Gordon’s class and see bikes spinning, know that minds are at work.`,
      timeLimit: 720,
      questions: [
        {
          id: uuidv4(),
          options: [
            "a conventional high school teacher with an unconventional idea.",
            "an ADHD expert teacher in Carleton High School.",
            "a partnership between a gym and a French teacher.",
            "a program introduced by Carleton High School’s principal.",
          ],
          correctAnswer: 0,
          text: "This article is about",
        },
        {
          id: uuidv4(),
          options: [
            "is part of a medical treatment for overweight children with ADHD.",
            "was inspired by his own successful experience as a student.",
            "was designed to make students lose weight in one year.",
            "diminished exercising to focus on academic performance.",
          ],
          correctAnswer: 0,
          text: "Mr. Gordon’s intervention",
        },
        {
          id: uuidv4(),
          options: [
            "initially well received by the school principal.",
            "supported by medical research professionals.",
            "appealing to his high school students.",
            "conducted in the students’ educational setting.",
          ],
          correctAnswer: 0,
          text: " The intervention was not",
        },
        {
          id: uuidv4(),
          options: [
            "increases physical agitation and diminishes attention.",
            "diminishes hyperactivity and increases attention.",
            "increases ADHD symptoms, especially impulsivity.",
            "is more important than sustaining attention.",
          ],
          correctAnswer: 0,
          text: " According to Dr. Ratney, exercising",
        },
        {
          id: uuidv4(),
          options: [
            "produced the results Mr. Gordon expected.",
            "confirmed Ms. Epstein’s initial reaction.",
            "contradicted Professor Ratney’s expectations.",
            "yielded undesirable effects on Mr. Gordon’s students.",
          ],
          correctAnswer: 0,
          text: "At the one-year mark, the intervention",
        },
      ],
      fillInTheBlankQuestion: {
        info: "The following is a comment by a visitor to the website page. Complete the comment by choosing the best option to fill in each blank.",
        text: `Interesting article! I’ve been a high school teacher for fifteen years and I am quite dubious of Mr. Gordon’s attempt to 6. {6} Although Dr. Ratney claims that this project 7. {7} I often find the opposite is true. Indeed, it is the students that play soccer or basketball at lunchtime that 8. {8} in the afternoon. It would be a mistake to 9. {9} prior to the end of a busy school day. There is also the question of time management. It simply is not possible to get through the curriculum while the students 10. {10}`,
        blankOptions: [
          {
            id: 6,
            options: [
              "reduce the weight of his students.",
              "bring exercise into the classroom.",
              "develop a cure for ADHD.",
              "finish university while teaching.",
            ],
            correctAnswer: 0,
          },
          {
            id: 7,
            options: [
              "was implemented at Harvard for a year,",
              "was more important than academic study,",
              "will improve students’ concentration,",
              "will reduce unpremeditated aggression,",
            ],
            correctAnswer: 0,
          },
          {
            id: 8,
            options: [
              "are most likely to fade",
              "are the best students",
              "will exercise more",
              "have the best behaviour",
            ],
            correctAnswer: 0,
          },
          {
            id: 9,
            options: [
              "limit students’ diet",
              "overwork the students",
              "provide too many assignments",
              "distract youths with ADHD",
            ],
            correctAnswer: 0,
          },
          {
            id: 10,
            options: [
              "are too unfit to focus properly.",
              "are bouncing around on yoga balls.",
              "really need to get more exercise.",
              "don’t have time to do the assignments.",
            ],
            correctAnswer: 0,
          },
        ],
      },
    },
  ],

  endPage: {
    title: "Practice Test A - End of the Writing Test",
    instruction: [
      `This is the end of the Writing Test.`,
      `Click "NEXT" to continue.`,
    ],
  },
};

export const reading: ReadingTest = {
  type: "Reading",
  structure: [
    {
      title: "Reading Test",

      instructions: [
        {
          text: "Reading Test Instructions",
        },
        {
          text: "On the official test, once you leave a page, you cannot go back to it to change your answers. However, in this sample test, you can.",
        },
        {
          text: "Watch the timer in the top right corner to make sure that you complete the Reading Test before the time is up. For more information on test format, click here.",
        },
        {
          text: "This Reading Test is identical in format to the official test except that the Reading section of the official test may be slightly longer as it might contain additional questions included for research and development purposes.",
        },
      ],
    },
    {
      title: "Reading Instructional Video",
      instructions: [
        {
          video:
            "https://instructionalproducts.paragontesting.ca/InstructionalProducts/Areas/FreeOnlineSampleTest/Content/video/CELPIP-G_Reading.mp4",
        },
      ],
    },
    {
      title: "Reading Practice Task",
      description:
        "Canada is surrounded on three sides by oceans. To the north, the Arctic Ocean borders Yukon, Northwest Territories, and the leaving party.. Off the west coast of British Columbia is the Pacific Ocean. The Atlantic Ocean, meanwhile, sits to the east of Canada's Maritime provinces, which include Nova Scotia, New Brunswick, and Prince Edward Island.",
      instructions: [{ text: "Read the following message" }],
      duration: 30,
      questionSets: [
        {
          instructions: [
            {
              text: "Using the drop-down menu (▼), choose the best option according to the information given in the message.",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Reading Part 1: Reading Correspondence",
      description:
        "Hi Mea,I’m sorry for taking so long to reply to your email. As you know, I’ve been very busy this summer with Marco’s university graduation and my family’s visit from Chile. The graduation ceremony was great! Too bad you guys couldn’t make it, but we understand it’s a bit of a drive from Calgary. You were truly missed. My Mum remembers you well from when we were kids. After the celebrations, we took the family sightseeing here in Vancouver. They loved it! They left yesterday for Victoria, and will catch a plane back home from there in three days.",
      instructions: [{ text: "Read the following message" }],
      duration: 600,
      questionSets: [
        {
          instructions: [
            {
              text: "Using the drop-down menu (  ), choose the best option according to the information given in the message.",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },

            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
        {
          instructions: [
            {
              text: "Here is a response to the message. Complete the response by filling in the blanks. Select the best choice for each blank from the drop-downmenu (-).",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Reading Part 2: Reading to Apply a Diagram",
      description: "image markdown here",
      duration: 600,
      questionSets: [
        {
          instructions: [
            {
              text: "Read the following email message about the diagram on the left. Complete the email by filling in the blanks. Select the best choice for each blank from the drop-down menu (  ).",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },

            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
        {
          instructions: [
            {
              text: "Using the drop-down menu (-), choose the best option.",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Reading Part 3: Reading for Information",
      instructions: [{ text: "Read the following passage." }],
      description: "complete markdown passage",
      questionSets: [
        {
          instructions: [
            {
              text: "Decide which paragraph, A to D, has the information given in each statement below. Select E if the information is not given in any of the paragraphs.",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
      ],
    },
    {
      title: "Reading Part 4: Reading for Viewpoints",
      instructions: [{ text: "Read the following article from a website." }],
      description: `Visitors walking through Carleton High School are often surprised when they pass Bradley Gordon's French class and see students riding on exercise bikes and sitting on yoga balls. Is it a French class, or is it a gym class? Well, it's a bit of both!\n\nTwo major concerns in education are childhood obesity and ADHD, or Attention Deficit Hyperactivity Disorder, a disorder that results in restlessness, hyperactivity, and impulsivity. With high rates of obesity and also students struggling with ADHD in classes across the country, Mr. Gordon came up with an innovative intervention to address both. He decided to infuse academic studies with physical activity in his own classroom.\n\nThe idea came to Gordon after a personal experience in university while working on his bachelor's degree. "I didn't have time to schedule a separate slot for exercise, and my health deteriorated rapidly," said Gordon. "After feeling sick and fatigued for months, I decided to couple my studying with my workouts. To my surprise it proved incredibly helpful. My grades started improving and so did my overall fitness and health."\n\nGordon implemented the approach with his students to great effect last year. Despite the students' excitement and academic improvement, he met resistance from the school's principal, Dawn Epstein, who was not convinced that academics and physical exercise should be amalgamated. "Although exercise is certainly important, I didn't think it had any place in academics. I assumed exercise would exacerbate ADHD,” Epstein asserted.\n\nIt turns out Ms. Epstein’s reaction is a common misconception. As Dr. John Ratney, psychiatry professor at Harvard Medical School, explains: “Exercise turns the attention system on, and helps with working memory, prioritizing and sustaining attention.” Sustained physical exertion causes kids to be less impulsive and more prone to learn. That’s precisely what Mr. Gordon found a year into the intervention. “My students’ endurance, both physical and mental, has improved. They are fit, and eager to learn. Even students diagnosed with ADHD have displayed less physical agitation, which has helped them to learn better.” So, when you walk by Mr. Gordon’s class and see bikes spinning, know that minds are at work.`,
      duration: 600,
      questionSets: [
        {
          instructions: [
            {
              text: "Using the drop-down menu (  ), choose the best option according to the information given on the website.",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
        {
          instructions: [
            {
              text: "The following is a comment by a visitor to the website page. Complete the comment by choosing the best option to fill in each blank.",
            },
          ],
          questions: [
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
            {
              question: "Which province is on the Pacific Ocean?",
              type: "mcq",
              choices: [
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
                {
                  text: "the leaving party.",
                },
              ],
              correctAnswer: "answer",
              score: 5,
            },
          ],
        },
      ],
    },
  ],
};
