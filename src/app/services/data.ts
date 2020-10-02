export const AGENTS = [
    {
        agentId: 'A7f63308a',
        fullName: 'Harvey Pekar',
        email: 'harvey.pekar@crossover.com'
    },
    {
        agentId: '7f63308ab',
        fullName: 'Jonah Jameson',
        email: 'jonah.jameson@crossover.com'
    },
    {
        agentId: '7f63308ac',
        fullName: 'Deadpool',
        email: 'deadpool@crossover.com'
    },
    {
        agentId: '7f63308ad',
        fullName: 'Jenny Sparks',
        email: 'jenny.sparks@crossover.com'
    },
    {
        agentId: '7f63308ae',
        fullName: 'Scott Pilgrim',
        email: 'scott.pilgrim@crossover.com'
    }
]

export const CALLS = [
    {
        callId: '572a41e7a',
        callTypeId: 'f44785ceA',
        agent: {
                agentId: 'A7f63308a',
                channelNo: 1
            },
        customer: {
                fullName: 'Luke Skywalker',
                channelNo: 2
            },
        callStartTime: '2020-07-20 01:00:45',
        gsFileUrl: 'gs://recordings/572a41e7A.wav',
        duration: 238900
    }
]

export const CALL_DETAILS = [
    {
        callId: '572a41e7a',
        callTypeId: 'f44785ceA',
        agent: {
            agentId: 'A7f63308a',
            channelNo: 1
        },
        customer: {
            fullName: 'Luke Skywalker',
            channelNo: 2
        },
        callStartTime: '2020-07-20 01:00:45',
        gsFileUrl: 'gs://recordings/572a41e7A.wav',
        duration: 238900,
        script: [
            {
                order: 0,
                similarity: 0.14,
                sentence: 'Hi, good afternoon.',
                matchingSentence: 'Hi.'
            },
            {
                order: 1,
                similarity: 0.82,
                sentence: 'I would like to speak with :name:.',
                matchingSentence: 'Hello, I would like to speak with Luke.'
            },
            {
                order: 2,
                similarity: 0.61,
                // tslint:disable-next-line:max-line-length
                sentence: 'I\'m an executive recruiter from Crossover and I\'m calling you about your recent application for the Software Architect - Angular role.',
                matchingSentence: 'I\'m an executive recruiter from Crossover and I\'m calling about your application for the Software Architect.'
            },
            {
                order: 3,
                similarity: 0.23,
                sentence: 'Do you remember this application?',
                matchingSentence: 'Do you remember how long I think perfect perfect.'
            },
            {
                order: 4,
                similarity: 0.95,
                sentence: 'So first of all, I should let you know that this call is being recorded for quality and training purposes.',
                matchingSentence: 'So first of all, I should let you know that this call is being recorded for quality and training purposes so Luke.'
            },
            {
                order: 5,
                similarity: 0.35,
                sentence: 'I want to check if you are still interested in continuing with this application?',
                matchingSentence: 'So, are you still interested in continuing with the application for Angular?'
            },
            {
                order: 6,
                similarity: 0.52,
                sentence: 'Do you think that you would be able to complete the remaining step by :commitment-date: which you set as your commitment date?',
                matchingSentence: 'Do you think you would be able to complete the remaining step by 27th of July your commitment date?'
            },
            {
                order: 7,
                similarity: 0.18,
                sentence: 'Have you seen the links with further instructions in your email?',
                matchingSentence: 'You haven\'t seen the links in your application in I mean in your email.'
            },
            {
                order: 8,
                similarity: 0.48,
                sentence: 'Do you have any question related to this role or Crossover that I can help you with before we close the call?',
                matchingSentence: 'Did you have any questions that I can help you with before closing the call?'
            },
            {
                order: 9,
                similarity: 0.21,
                sentence: 'Perfect... I wish you good luck and hope to see you soon in our organization.',
                matchingSentence: 'So, I wish you good luck and let me start anything.'
            },
            {
                order: 10,
                similarity: 1,
                sentence: 'Have a good day.',
                matchingSentence: 'Have a good day.'
            }
        ],
        transcript: [
            {
                order: 0,
                similarity: 0.82,
                sentence: 'Hello, I would like to speak with Luke.',
                matchingSentence: 'I would like to speak with :name:.',
                channel: 1,
                timeFrom: 15,
                timeTo: 20
            },
            {
                order: 1,
                similarity: 0.14,
                sentence: 'Hi.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 20,
                timeTo: 22
            },
            {
                order: 2,
                similarity: 0.44,
                sentence: 'Hi.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 24,
                timeTo: 26
            },
            {
                order: 3,
                similarity: 0.08,
                sentence: 'Yes, it\'s Luke speaking.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 28,
                timeTo: 32
            },
            {
                order: 4,
                similarity: 0.13,
                sentence: 'Hi, this is also.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 32,
                timeTo: 36
            },
            {
                order: 5,
                similarity: 0.61,
                sentence: 'I\'m an executive recruiter from Crossover and I\'m calling about your application for the Software Architect.',
                matchingSentence: 'I\'m an executive recruiter from Crossover and I\'m calling you about your recent application for the Software Architect - Angular role.',
                channel: 1,
                timeFrom: 38,
                timeTo: 50
            },
            {
                order: 6,
                similarity: 0.23,
                sentence: 'Do you remember how long I think perfect perfect.',
                matchingSentence: 'Do you remember this application?',
                channel: 0,
                timeFrom: 55,
                timeTo: 70
            },
            {
                order: 7,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 70,
                timeTo: 71
            },
            {
                order: 8,
                similarity: 0.19,
                sentence: 'Yes I do.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 72,
                timeTo: 76
            },
            {
                order: 9,
                similarity: 0.95,
                sentence: 'So first of all, I should let you know that this call is being recorded for quality and training purposes so Luke.',
                matchingSentence: 'So first of all, I should let you know that this call is being recorded for quality and training purposes.',
                channel: 1,
                timeFrom: 78,
                timeTo: 102
            },
            {
                order: 10,
                similarity: -0.04,
                sentence: 'How are you doing today?',
                matchingSentence: '',
                channel: 1,
                timeFrom: 105,
                timeTo: 107
            },
            {
                order: 11,
                similarity: -0.02,
                sentence: 'No, no, I\'m very good and yourself?',
                matchingSentence: '',
                channel: 2,
                timeFrom: 109,
                timeTo: 116
            },
            {
                order: 12,
                similarity: 0.12,
                sentence: 'I\'m doing fine.',
                matchingSentence: '',
                channel: 0,
                timeFrom: 118,
                timeTo: 120
            },
            {
                order: 13,
                similarity: 0.38,
                sentence: 'Thank you.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 122,
                timeTo: 122
            },
            {
                order: 14,
                similarity: 0,
                sentence: 'So, you know, I wanted to call and say congratulations and you\'re at the last stage of the process and in the last five percent of that they can further.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 125,
                timeTo: 138
            },
            {
                order: 15,
                similarity: 0.36,
                sentence: 'Good.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 140,
                timeTo: 141
            },
            {
                order: 16,
                similarity: -0.06,
                sentence: 'Oh so you are very close to finish line.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 143,
                timeTo: 150
            },
            {
                order: 17,
                similarity: 0.2,
                sentence: 'So well.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 150,
                timeTo: 152
            },
            {
                order: 18,
                similarity: 0.2,
                sentence: 'Yes, good.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 154,
                timeTo: 155
            },
            {
                order: 19,
                similarity: 0.18,
                sentence: 'Thank you very much.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 156,
                timeTo: 159
            },
            {
                order: 20,
                similarity: 0.03,
                sentence: 'My pleasure, of course, so at this point of your application, this is the final step of the assessment the section that will be more intense and that even deeper it sure the type of things that you will be potentially working on and giving you insight into Agriculture and principals and the stage is a wonderful opportunity for you.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 161,
                timeTo: 172
            },
            {
                order: 21,
                similarity: 0.39,
                sentence: 'Okay.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 175,
                timeTo: 177
            },
            {
                order: 22,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 177,
                timeTo: 177
            },
            {
                order: 23,
                similarity: 0.01,
                sentence: 'I think you stock it can show your creativity and level of detail that will highlight to you are the best candidate for the role and if you haven\'t seen you can find all the details instructions for the step in your  portal along with a time estimate for development, and I would like to confirm your interest.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 180,
                timeTo: 189
            },
            {
                order: 24,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 191,
                timeTo: 191
            },
            {
                order: 25,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 192,
                timeTo: 193
            },
            {
                order: 26,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 193,
                timeTo: 193
            },
            {
                order: 27,
                similarity: 0.35,
                sentence: 'So are you still interested in continuing with the application for Angular?',
                matchingSentence: 'I want to check if you are still interested in continuing with this application?',
                channel: 1,
                timeFrom: 193,
                timeTo: 198
            },
            {
                order: 28,
                similarity: 0.15,
                sentence: 'Yes, I am.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 198,
                timeTo: 201
            },
            {
                order: 29,
                similarity: -0.09,
                sentence: 'Okay, good to hear that so.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 203,
                timeTo: 206
            },
            {
                order: 30,
                similarity: 0.52,
                sentence: 'Do you think you would be able to complete the remaining step by 27th of July your commitment date?',
                matchingSentence: 'Do you think that you would be able to complete the remaining step by :commitment-date: which you set as your commitment date?',
                channel: 1,
                timeFrom: 207,
                timeTo: 216
            },
            {
                order: 31,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 219,
                timeTo: 219
            },
            {
                order: 32,
                similarity: -0.09,
                sentence: 'Yes, I would like to finish as soon as possible.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 220,
                timeTo: 225
            },
            {
                order: 33,
                similarity: 0.05,
                sentence: 'I\'ve had it looked but I haven\'t received any taste links or anything like that on my email.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 225,
                timeTo: 239
            },
            {
                order: 34,
                similarity: 0.18,
                sentence: 'You haven\'t seen the links in your application in I mean in your email.',
                matchingSentence: 'Have you seen the links with further instructions in your email?',
                channel: 1,
                timeFrom: 241,
                timeTo: 250
            },
            {
                order: 35,
                similarity: 0.41,
                sentence: 'No, no.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 250,
                timeTo: 252
            },
            {
                order: 36,
                similarity: -0.03,
                sentence: 'No, I haven\'t received the received a link for that application.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 252,
                timeTo: 260
            },
            {
                order: 37,
                similarity: 0.01,
                sentence: 'Okay, so you need to go online and follow the instructions in your application portal but this role is left up is with our partner devstrack often referred.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 263,
                timeTo: 270
            },
            {
                order: 38,
                similarity: 0.39,
                sentence: 'Okay.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 276,
                timeTo: 277
            },
            {
                order: 39,
                similarity: 0.03,
                sentence: 'That email has not come yet.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 279,
                timeTo: 281
            },
            {
                order: 40,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 282,
                timeTo: 284
            },
            {
                order: 41,
                similarity: 0.05,
                sentence: 'Is this the one that you referred?',
                matchingSentence: '',
                channel: 1,
                timeFrom: 285,
                timeTo: 289
            },
            {
                order: 42,
                similarity: 0.41,
                sentence: 'No, no.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 291,
                timeTo: 293
            },
            {
                order: 43,
                similarity: 0,
                sentence: 'No, I have application that\'s open.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 294,
                timeTo: 297
            },
            {
                order: 44,
                similarity: -0.06,
                sentence: 'And I have received it full and I did this on Saturday on Sunday, but now I\'m still waiting bought this for this applications for this link.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 298,
                timeTo: 305
            },
            {
                order: 45,
                similarity: -0.06,
                sentence: 'Okay, so let me check for this role.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 307,
                timeTo: 309
            },
            {
                order: 46,
                similarity: -0.05,
                sentence: 'Yes, you can get an email from Protractor track since this is Pro track and it\'s been take 48 hours from starting to real work stage though.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 309,
                timeTo: 316
            },
            {
                order: 47,
                similarity: 0.39,
                sentence: 'Okay.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 318,
                timeTo: 318
            },
            {
                order: 48,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 318,
                timeTo: 319
            },
            {
                order: 49,
                similarity: 0.01,
                sentence: 'We experience some delays has the volume of the application through you know received.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 320,
                timeTo: 326
            },
            {
                order: 50,
                similarity: -0.03,
                sentence: 'Please contact them regularly checking your email including spam folder for instructions.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 327,
                timeTo: 334
            },
            {
                order: 51,
                similarity: 0.23,
                sentence: 'Yes, please.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 336,
                timeTo: 337
            },
            {
                order: 52,
                similarity: 0.39,
                sentence: 'Okay?',
                matchingSentence: '',
                channel: 1,
                timeFrom: 339,
                timeTo: 340
            },
            {
                order: 53,
                similarity: 0.46,
                sentence: 'Yes.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 341,
                timeTo: 342
            },
            {
                order: 54,
                similarity: 0.39,
                sentence: 'Okay.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 342,
                timeTo: 343
            },
            {
                order: 55,
                similarity: 0.37,
                sentence: 'Perfect.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 343,
                timeTo: 345
            },
            {
                order: 56,
                similarity: -0.07,
                sentence: 'No problems are allowed to do that.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 345,
                timeTo: 349
            },
            {
                order: 57,
                similarity: -0.07,
                sentence: 'Okay, so you have time to come 27th?',
                matchingSentence: '',
                channel: 1,
                timeFrom: 351,
                timeTo: 353
            },
            {
                order: 58,
                similarity: -0.05,
                sentence: 'And you said you can complete it until that time?',
                matchingSentence: '',
                channel: 1,
                timeFrom: 354,
                timeTo: 357
            },
            {
                order: 59,
                similarity: 0.23,
                sentence: 'That\'s good.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 358,
                timeTo: 359
            },
            {
                order: 60,
                similarity: -0.1,
                sentence: 'And I will send you an e-mail more information about this stuff.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 359,
                timeTo: 364
            },
            {
                order: 61,
                similarity: 0.15,
                sentence: 'Yes, perfect.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 365,
                timeTo: 368
            },
            {
                order: 62,
                similarity: -0.12,
                sentence: 'It\'s not the practice direct e-mail though.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 369,
                timeTo: 373
            },
            {
                order: 63,
                similarity: -0.02,
                sentence: 'It\'s my email and you will get my contact details in case you need me.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 375,
                timeTo: 381
            },
            {
                order: 64,
                similarity: 0.04,
                sentence: 'You can reach out over email.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 383,
                timeTo: 385
            },
            {
                order: 65,
                similarity: 0.39,
                sentence: 'Okay.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 386,
                timeTo: 387
            },
            {
                order: 66,
                similarity: 0.48,
                sentence: 'Did you have any questions that I can help you with before closing the call?',
                matchingSentence: 'Do you have any question related to this role or Crossover that I can help you with before we close the call?',
                channel: 1,
                timeFrom: 388,
                timeTo: 398
            },
            {
                order: 67,
                similarity: -0.08,
                sentence: 'No, no, I think I think everything is fine for now.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 399,
                timeTo: 403
            },
            {
                order: 68,
                similarity: 0.17,
                sentence: 'Let\'s get home.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 404,
                timeTo: 406
            },
            {
                order: 69,
                similarity: 0.06,
                sentence: 'Okay, the thing here.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 408,
                timeTo: 409
            },
            {
                order: 70,
                similarity: 0.21,
                sentence: 'So, I wish you good luck and let me start anything.',
                matchingSentence: 'Perfect... I wish you good luck and hope to see you soon in our organization.',
                channel: 1,
                timeFrom: 411,
                timeTo: 415
            },
            {
                order: 71,
                similarity: 0.4,
                sentence: 'Please.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 416,
                timeTo: 417
            },
            {
                order: 72,
                similarity: -0.07,
                sentence: 'Let me know what we\'re email.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 418,
                timeTo: 420
            },
            {
                order: 73,
                similarity: 0.39,
                sentence: 'Okay?',
                matchingSentence: '',
                channel: 1,
                timeFrom: 421,
                timeTo: 421
            },
            {
                order: 74,
                similarity: 0.19,
                sentence: 'Okay, perfect.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 423,
                timeTo: 424
            },
            {
                order: 75,
                similarity: 0.18,
                sentence: 'Thank you very much.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 425,
                timeTo: 427
            },
            {
                order: 76,
                similarity: 0.38,
                sentence: 'Thank you.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 428,
                timeTo: 430
            },
            {
                order: 77,
                similarity: 0.38,
                sentence: 'Thank you.',
                matchingSentence: '',
                channel: 1,
                timeFrom: 431,
                timeTo: 433
            },
            {
                order: 78,
                similarity: 1,
                sentence: 'Have a good day.',
                matchingSentence: 'Have a good day.',
                channel: 1,
                timeFrom: 435,
                timeTo: 437
            },
            {
                order: 79,
                similarity: 0.06,
                sentence: 'What was a good day?',
                matchingSentence: '',
                channel: 2,
                timeFrom: 437,
                timeTo: 439
            },
            {
                order: 80,
                similarity: 0.38,
                sentence: 'Thank you.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 440,
                timeTo: 442
            },
            {
                order: 81,
                similarity: 0.38,
                sentence: 'Thank you.',
                matchingSentence: '',
                channel: 2,
                timeFrom: 443,
                timeTo: 445
            }
        ]
    }
]
