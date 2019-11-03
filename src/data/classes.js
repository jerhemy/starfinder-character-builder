import Envoy from '../assets/images/envoy.png'
import Mechanic from '../assets/images/mechanic.png'
import Mystic from '../assets/images/mystic.png'
import Operative from '../assets/images/operative.png'
import Solarian from '../assets/images/solarian.png'
import Soldier from '../assets/images/soldier.png'
import Technomancer from '../assets/images/technomancer.png'

export const ClassData = [
    {
        id: 1,
        name: "Envoy",
        image: Envoy,
        hp: 6,
        stamina: 6,
        skillRanksMod: 8,
        skillRanksStat: 'int',
        classSkills: [
            "Acrobatics",
            "Athletics",

        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Grenades",
            "Small Arms"
        ]
    },
    {
        name: "Mechanic",
        image: Mechanic,
        hp: 6,
        stamina: 6,
        skillRanksMod: 4,
        skillRanksStat: 'int',
        classSkills: [
            "Acrobatics",
            "Athletics",

        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Grenades",
            "Small Arms"
        ]
    },
    {
        name: "Mystic",
        image: Mystic,
        hp: 6,
        stamina: 6,
        skillRanksMod: 6,
        skillRanksStat: 'int',
        keyAbility: `Your Wisdom determines your spellcasting ability, the saving throw DCs of your spells, and the 
        number of bonus spells you can cast per day, so Wisdom is your key ability score. A high Charisma score can 
        also help you in social situations.`,
        classSkillMod: 6,
        classSkillStat: `int`,
        classSkills: [
            "Acrobatics",
            "Athletics",
        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Small Arms"
        ]
    },
    {
        name: "Operative",
        image: Operative,
        hp: 6,
        stamina: 6,
        skillRanksMod: 8,
        classSkills: [
            "Acrobatics",
            "Athletics",

        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Small Arms"
        ]
    },
    {
        name: "Solarian",
        image: Solarian,
        hp: 7,
        stamina: 7,
        skillRanksMod: 4,
        classSkills: [
            "Acrobatics",
            "Athletics",

        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Grenades",
            "Small Arms"
        ]
    },
    {
        name: "Soldier",
        image: Soldier,
        hp: 7,
        stamina: 7,
        skillRanksMod: 4,
        classSkills: [
            "Acrobatics",
            "Athletics",

        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Grenades",
            "Small Arms"
        ]
    },
    {
        name: "Technomancer",
        image: Technomancer,
        hp: 5,
        stamina: 5,
        skillRanksMod: 4,
        classSkills: [
            "Acrobatics",
            "Athletics",

        ],
        proficiencies: [
            "Light Armor",
            "Basic Melee Weapons",
            "Grenades",
            "Small Arms"
        ]
    },
];