import React from 'react';
import AndroidImage from '../assets/images/race_android.png';
import HumanImage from '../assets/images/race_human.png';

export const RaceData = [
    {
        name: "Android",
        image: AndroidImage,
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
        image: HumanImage,
        description: `Ambitious, creative, and endlessly curious, humans have shown more drive to explore their system 
        and the universe beyond than any of their neighbor races—for better and for worse. They’ve helped usher in a 
        new era of system-wide communication and organization and are admired for their passion and tenacity, but their 
        tendency to shoot first and think about the consequences later can make them a liability for those races 
        otherwise inclined to work with them.`,
        details: [
            {
                title: 'Size and Type',
                description: `Humans are Medium humanoids and have the human subtype.`
            },
            {
                title: 'Bonus Feat',
                description: `Humans are Medium humanoids and have the human subtype.`
            },
            {
                title: 'Skilled',
                description: `Humans are Medium humanoids and have the human subtype.`
            },
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
        description: `Originally from a planet orbiting a dying star, the four-armed kasathas maintain a reputation as 
        a noble and mysterious people. They are famous for their anachronistic warriors, ancient wisdom, and strange 
        traditions.`,
        hp: 4,
        details: [
            {
                title: 'Size and Type',
                description: `Kasathas are Medium humanoids with the kasatha subtype.`
            },
            {
                title: 'Desert Stride',
                description: `Kasathas can move through nonmagical difficult terrain in deserts, hills, and mountains at 
                their normal speed.`
            },
            {
                title: 'Four-Armed',
                description: `Kasathas have four arms, which allows them to wield and hold up to four hands’ worth of 
                weapons and equipment. While their multiple arms increase the number of items they can have at the 
                ready, it doesn't increase the number of attacks they can make during combat.`
            },
            {
                title: 'Historian',
                description: `Due to their in-depth historical training and the wide-ranging academic background 
                knowledge they possess, kasathas receive a +2 racial bonus to Culture checks.`
            },
            {
                title: 'Natural Grace',
                description: `Kasathas receive a +2 racial bonus to Acrobatics and Athletics checks.`
            },
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
        name: "Lashunta",
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
                description: `All lashuntas gain +2 Charisma at character creation.  Korasha lashuntas are muscular 
                (+2 Strength at character creation) but often brash and unobservant (–2 Wisdom at character creation).
                Damaya lashuntas are typically clever and well-spoken (+2 Intelligence at character creation) but 
                somewhat delicate (–2 Constitution at character creation).`
            },
            {
                title: 'Lashunta Magic',
                description: <>
                    Lashuntas gain the following spell-like abilities:<br/>
                    <b>   At will:</b> daze, psychokinetic hand<br/>
                    <b>   1/day:</b> detect thoughts<br/>
                    See Spell-like Abilities on page 262. The caster level for these effects is equal to the lashunta's level.
                </>
            },
            {
                title: 'Limited Telepathy',
                description: `Lashuntas can mentally communicate with any creatures within 30 feet with whom they share 
                a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as 
                listening to multiple people speaking.`
            },
            {
                title: 'Student',
                description: `Lashuntas love to learn, and they receive a +2 racial bonus to any two skills of their 
                choice.`
            }
        ],
        stats: {
            str: 0,
            dex: 0,
            con: -2,
            int: 2,
            wis: 0,
            cha: 2,
        },
        feats: {

        },
        skills: {
          anySkill1: 2,
          anySkill2: 2,
        },
        variants: [
            {
                name: "Damaya",
                stats: {
                    str: 0,
                    dex: 0,
                    con: -2,
                    int: 2,
                    wis: 0,
                    cha: 2,
                },
            },
            {
                name: "Korasha",
                stats: {
                    str: 2,
                    dex: 0,
                    con: 0,
                    int: 0,
                    wis: -2,
                    cha: 2,
                }
            }
        ]
    },
    {
        name: "Shirrens",
        description: `Once part of a ravenous hive of locust-like predators, the insectile shirrens only recently broke 
        with their hive mind to become a race of telepaths physically addicted to their own individualism, yet 
        dedicated to the idea of community and harmony with other races.`,
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
        description: `Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and 
        technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every 
        starship needs a few rats.`,
        hp: 2,
        stats: {
            str: -2,
            dex: 2,
            con: 0,
            int: 2,
            wis: 0,
            cha: 0,
        },
        details: [
            {
                title: 'Size and Type',
                description: `Ysoki are Small humanoids with the ysoki subtype.`
            },
            {
                title: 'Cheek Pouches',
                description: `Ysoki can store up to 1 cubic foot of items weighing up to 1 bulk in total in their cheek 
                pouches, and they can transfer a single object between hand and cheek as a swift action. A ysoki can 
                disgorge the entire contents of his pouch onto the ground in his square as a move action that does not 
                provoke an attack of opportunity. `
            },
            {
                title: 'Darkvision',
                description: `Ysoki can see up to 60 feet in the dark. See page 263 for more information. `
            },
            {
                title: 'Moxie',
                description: `Ysoki are scrappy and nimble even when the odds are against them. A ysoki can stand from 
                prone as a swift action. Additionally, when off-kilter (see page 276), a ysoki does not take the normal 
                penalties to attacks or gain the  flat-footed condition. When attempting an Acrobatics check to tumble 
                through the space of an opponent at least one size category larger than himself, a ysoki receive a +5 
                racial bonus to the check.`
            },
            {
                title: 'Scrounger',
                description: `Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks.`
            }
        ],
        feats: {

        },
        skills: {

        }
    },
    {
        name: "Dwarf",
        source: `Legacy Races`,
        description: `Dwarves are a stocky race, roughly a foot shorter than humans, with broad, heavy frames. 
            Dwarves trace their heritage to the missing planet of Golarion, yet for them, this is not merely a matter of 
            , but identity—they were forged in the furnace of Golarion’s subterranean passages, and many dwarves born 
            long after the planet’s disappearance still feel the sting of its loss, kept alive in dwarven song and legend.`,
        hp: 6,
        stats: {
        str: 0,
            dex: 0,
            con: 2,
            int: 0,
            wis: 2,
            cha: -2,
    },
        details: [
            {
                title: 'Size and Type',
                description: <>Dwarves are Medium humanoids with the dwarf subtype.</>
            },
            {
                title: 'Darkvision',
                description: <>Dwarves are Medium humanoids with the dwarf subtype.</>
            },
            {
                title: 'Slow but Steady',
                description: `Dwarves have a land speed of 20 feet, which is never modified when they are encumbered or 
                wearing heavy armor. They also gain a +2 racial bonus to saving throws against poisons, spells, and 
                spell-like abilities, and when standing on the ground they gain a +4 racial bonus to their KAC against 
                 rush and trip combat maneuvers.`
            },
            {
                title: 'Stonecunning',
                description: `Dwarves gain a +2 bonus to Perception checks to notice unusual stonework, such as traps
                and hidden doors located in stone walls or floors. They receive a check to notice such features whenever 
                they pass within 10 feet of them, whether or not they are actively looking.`
            },
            {
                title: 'Traditional Enemies',
                description: `Dwarves still train to fight their ancient enemies. A dwarf gains a +1 racial bonus to 
                attack rolls against a creature with the goblinoid or orc subtype and a +4 racial bonus to AC against 
                an attack from a creature with the giant subtype.`
            },
            {
                title: 'Weapon Familiarity',
                description: `Dwarves are proficient with basic and advanced melee weapons and gain specialization with 
                those weapons at 3rd level.`
            },
        ],
        feats: {

        },
        skills: {

        }
    },
    {
        name: "Elf",
        description: `Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and 
        technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every 
        starship needs a few rats.`,
        hp: 2,
        stats: {
            str: -2,
            dex: 2,
            con: 0,
            int: 2,
            wis: 0,
            cha: 0,
        },
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
        feats: {

        },
        skills: {

        }
    },
    {
        name: "Gnome",
        description: `Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and 
        technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every 
        starship needs a few rats.`,
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
    {
        name: "Half-Elf",
        description: `Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and 
        technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every 
        starship needs a few rats.`,
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
    {
        name: "Half-Orc",
        description: `Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and 
        technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every 
        starship needs a few rats.`,
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
    {
        name: "Halfling",
        description: `Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and 
        technological prowess, they’ve spread throughout the solar system, giving truth to the old adage that every 
        starship needs a few rats.`,
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
