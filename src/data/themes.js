import Pilot from "../assets/images/pilot.png";

export const ThemeData = [
    {
        name: "Ace Pilot",
        image: Pilot,
        stat: {
            dex: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `You are obsessed with starships and vehicles, and have committed to memory almost every 
                related tidbit of knowledge you've ever come across. Reduce the DC of Culture checks to recall 
                knowledge about starship and vehicle models and parts as well as famous hotshot pilots by 5. Piloting 
                is a class skill for you, though if it is a class skill from the class you take at 1st level, you 
                instead gain a +1 bonus to your Piloting checks. In addition, you gain an ability adjustment of +1 to 
                Dexterity at character creation.`,
                skills: [
                    { skill: 'piloting', addOrBonus: 1 }
                ]
            },
            {
                name: `Lone Wolf`,
                level: 6,
                description: `You know at least a little bit about handling every role  on a starship, and you can sub 
                in for certain tasks in a pinch. Whenever you need to attempt a skill check either during starship 
                combat or to directly repair or otherwise maintain your starship, you can treat half your ranks in 
                Piloting as your ranks in the appropriate skill for the check, if that would be better (since you 
                effectively have ranks in the related skill, you are considered trained in the skill for the purposes 
                of this check).`
            },
            {
                name: `Need For Speed`,
                level: 12,
                description: `Speeding in a vehicle gives you a heady rush, and you can easily handle operating vehicles
                 at high velocities that might send lesser pilots spinning out of control. Reduce any penalties to 
                 Piloting checks you make when on a vehicle by 1. When you take the double maneuver action during a 
                 vehicle chase (see page 283), reduce the penalty for each action by 1. Whenever a Piloting check has a 
                 penalty for failing by 5 or more, you take that penalty only if you fail by 10 or more.`
            },
            {
                name: `Master Pilot`,
                level: 18,
                description: `Your piloting accomplishments invigorate you, giving you renewed purpose and zeal. Up to 
                twice per day, when you defeat a significant foe in starship combat as a pilot or succeed in a vehicle 
                chase (meaning that you’ve either escaped a pursuer or caught or defeated your opponent), you recover 1 
                Resolve Point.`
            },
        ]
    },
    {
        name: "Bounty Hunter",
        image: Pilot,
        stat: {
            con: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Icon",
        image: Pilot,
        stat: {
            cha: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Mercenary",
        image: Pilot,
        stat: {
            str: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Outlaw",
        image: Pilot,
        stat: {
            dex: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Priest",
        image: Pilot,
        stat: {
            wis: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Scholar",
        image: Pilot,
        stat: {
            int: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Spacefarer",
        image: Pilot,
        stat: {
            con: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    },
    {
        name: "Xenoseeker",
        image: Pilot,
        stat: {
            cha: 1
        },
        abilities: [
            {
                name: `Theme Knowledge`,
                level: 1,
                description: `Your mind is a cold steel trap when it comes to scraps of information about the creatures 
                you’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or 
                specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to 
                recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and 
                practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability 
                helps you learn facts only about the identity you know about, not any other unknown identities. Once you 
                defeat your mark, as an action that takes 1 minute, you can study dossiers and database information 
                about another individual to be your new mark. You can instead abandon your mark for a new one without 
                defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a 
                class skill for you, though if it is a class skill from the class you take at 1st level, you instead 
                gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution 
                at character creation.`,
                stats: {
                    con: 1
                },
                themeSkill: `Survival`
            },
            {
                name: `Swift Hunter`,
                level: 6,
                description: `You know just how to ask around about your marks to gain information and insight in a 
                hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, 
                and you reduce the penalty for following tracks using Survival while moving at full speed to 0.`
            },
            {
                name: `Relentless`,
                level: 12,
                description: `You never seem to get tired, even when working longer and harder than  everyone else in 
                pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing 
                hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt 
                Constitution checks for a forced march (see page 258), and you can hustle for 2 hours a day during
                 overland travel (see page 258) instead of 1 hour. Reduce the penalty for following tracks using 
                 Survival while moving at double speed to –10.`
            },
            {
                name: `Master Hunter`,
                level: 18,
                description: `Your relentless pursuit of your mark steels your determination and can renew your inner 
                reserves of strength. Once per day while in pursuit of your mark, you can review current information 
                about your mark for 10 minutes to regain 1 Resolve Point; this doesn’t count as resting to regain 
                Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.`
            },
        ]
    }
]