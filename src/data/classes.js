import Pilot from '../../assets/imgs/pilot.png';

export const ClassData = [
    {
        name: "Android",
        img: Pilot,
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
        name: "Lashunta (Korasha)",
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
];
