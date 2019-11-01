import React from 'react';

export const RaceData = [
    {
        name: "Android",
        description: `Complex technological creations crafted to resemble humans, androids were originally a servitor 
        race, but they have since broken free to form their own society. Unlike ordinary robots or ship AIs, androids 
        do not simply respond according to their programming; rather, they have independent consciousnesses and are 
        animated by souls—a distinction crucial to their generally accepted status as people rather than property.`,
        details: [
            {
                title: 'Size and Type',
                description: `Humans are Medium humanoids and have the human subtype.`
            },
            {
                title: `Constructed`,
                description: `For effects targeting creatures by type, androids count as both humanoids and constructs 
                (whichever effect is worse). They receive a +2 racial bonus to saving throws against disease, 
                mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. 
                In addition, androids do not breathe or suffer the normal environmental effects of being in a vacuum.`
            },
            {
                title: 'Exceptional Vision',
                description: `Androids have low-light vision and darkvision. As a result, they can see in dim light as 
                if it were normal light, and they can see with no light source at all to a range of 60 feet in black 
                and white only.`
            },
            {
                title: 'Flat Affect',
                description: `Androids find emotions confusing and keep them bottled up. They take a –2 penalty to 
                Sense Motive checks, but the DCs of Sense Motive checks attempted against them increase by 2`
            },
            {
                title: 'Upgrade Slot',
                description: `Androids have a single armor upgrade slot in their bodies. Regardless of whether androids 
                are wearing physical armor, they can use this slot to install any one armor upgrade that could be 
                installed into light armor.`
            }
        ],
        hp: 4,
        stats: {
            str: 0,
            dex: 2,
            con: 0,
            int: 2,
            wis: 0,
            cha: -2
        }
    },
    {
        name: "Human",
        description: `Ambitious, creative, and endlessly curious, humans have shown more drive to explore their system 
        and the universe beyond than any of their neighbor races—for better and for worse. They’ve helped usher in a 
        new era of system-wide communication and organization and are admired for their passion and tenacity, but their 
        tendency to shoot first and think about the consequences later can make them a liability for those races 
        otherwise inclined to work with them.`,
        details: [
            {
                title: 'Size and Type',
                description: `Humans are Medium humanoids and have the human subtype.`
            }
        ],
        hp: 4,
        stats: {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
            // anyStat gives asks the user to apply a bonus to any state. Multiple anyStat means they can apply
            // multiple bonuses to multiple stats.
            anyState1: 2,
            anyStat2: 0,
        },
        feats: {

        }
    },
    {
        name: "Kasathas",
        hp: 4,
        details: [
            {
                title: 'Size and Type',
                description: `Humans are Medium humanoids and have the human subtype.`
            }
        ],
        stats: {
            str: 2,
            dex: 0,
            con: 0,
            int: -2,
            wis: 2,
            cha: 0,
            // anyStat gives asks the user to apply a bonus to any state. Multiple anyStat means they can apply
            // multiple bonuses to multiple stats.
            anyState1: 2,
            anyStat2: 0,
        },
        skills: {
            acrobatics: 2,
            athletics: 2
        },
        feats: {

        }
    },
    {
        name: "Lashunta (Korasha)",
        description: `Idealized by many other humanoid races and gifted with innate psychic abilities, lashuntas are at 
         consummate scholars and enlightened warriors, naturally divided into two specialized subraces with different 
         abilities and societal roles.`,
        details: [
            {
                title: 'Size and Type',
                description: `Lashuntas are Medium humanoids with the lashunta subtype.`
            },
            {
                title: 'Dimorphic',
                description: <>
                    All lashuntas gain +2 Charisma at character creation. <br/>
                    Korasha lashuntas are muscular (+2 Strength at character creation) but often brash and unobservant (–2 Wisdom at character creation).
                </>

            }
        ],
        hp: 4,
        stats: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: -2,
            cha: 2,
            // anyStat gives asks the user to apply a bonus to any state. Multiple anyStat means they can apply
            // multiple bonuses to multiple stats.
            anyState1: 2,
            anyStat2: 0,
        },
        feats: {

        }
    },
    {
        name: "Lashunta (Damaya)",
        hp: 4,
        description: `Idealized by many other humanoid races and gifted with innate psychic abilities, lashuntas are at 
         consummate scholars and enlightened warriors, naturally divided into two specialized subraces with different 
         abilities and societal roles.`,
        details: [
            {
                title: 'Size and Type',
                description: `Lashuntas are Medium humanoids with the lashunta subtype.`
            },
            {
                title: 'Dimorphic',
                description: <>
                    All lashuntas gain +2 Charisma at character creation. <br/>
                    Damaya lashuntas are typically clever and well-spoken (+2 Intelligence at character creation) but 
                    somewhat delicate (–2 Constitution at character creation).
                </>
            }
        ],
        stats: {
            str: 0,
            dex: 0,
            con: -2,
            int: 2,
            wis: 0,
            cha: 2,
            // anyStat gives asks the user to apply a bonus to any state. Multiple anyStat means they can apply
            // multiple bonuses to multiple stats.
            anyState1: 2,
            anyStat2: 0,
        },
        feats: {

        },
        skills: {
          anySkill1: 2,
          anySkill2: 2,
        }
    },
    {
        name: "Shirrens",
        hp: 6,
        stats: {
            str: 0,
            dex: 0,
            con: 2,
            int: 0,
            wis: 2,
            cha: -2,
            // anyStat gives asks the user to apply a bonus to any state. Multiple anyStat means they can apply
            // multiple bonuses to multiple stats.
            anyState1: 2,
            anyStat2: 0,
        },
        feats: {

        },
        skills: {
            culture: 2,
            diplomacy: 2
        }
    },
    {
        name: "Vesk",
        hp: 6,
        stats: {
            str: 2,
            dex: 0,
            con: 2,
            int: -2,
            wis: 0,
            cha: 0,
        },
        feats: {

        },
        skills: {

        }
    },
    {
        name: "Ysoki",
        description: "Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every starship needs a few rats.",
        hp: 2,
        stats: {
            str: -2,
            dex: 2,
            con: 0,
            int: 2,
            wis: 0,
            cha: 0,
        },
        feats: {

        },
        skills: {

        }
    },
];
