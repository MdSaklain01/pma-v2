const path = require("path");

module.exports = {

    clinicName: "Dr Khan's HomoeoCARE",
    tagline: "Homeopathy for Health",

    phone: "8100099839 / 8910984590",
    website: "www.drkhanshomoeocare.com",
    email: "info@drkhanshomoeocare.com",
    address: "",

    logo: path.join(__dirname, "assets", "logo.jpeg"),
    signature: path.join(__dirname, "assets", "signature.png"),

    doctors: {

        primary: {

            name: "Dr. E. S. Khan",
            // qualification: "MD (Hom.) | AF Hom. (London)",
            qualifications: [
                "MD (Hom.)",
                "AF Hom. (London)"
            ],
            designation: "Associate Consultant",
            achievements: [
                "Affiliate Faculty of Homeopathy London (U.K.)",
                `Associate Professor, Department of Organon of Medicine <br/> &nbsp; Metropolitan Homoeopathic Medical College & Hospital, Kolkata`,
                "Ex. House Physician, D.N. Dey Homoeopathic Medical College & Hospital <br/> &nbsp; Govt. of West Bengal",
            ]

        },

        consultants: [

            {

                name: "Dr. Fatma Zeba",
                qualification: "MD (Hom.)",
                designation: "Associate Consultant",
                achievements: [
                    "Assistant Professor, Department of Practice of Medicine <br/> &nbsp; H.M.H Medical College & Hospital, Bihar",
                    "Ex. House Physician, The Calcutta Homoeopathic Medical College & Hospital <br/> &nbsp; Govt. of West Bengal",
                ]

            }

        ]

    },
    branches: [
        "CENTRAL BRANCH -50, PHEARS LANE, KOLKATA - 700073 | 6:30 PM TO 10:30 P.M. DAILY EXCEPT SUNDAY",
        "TOPSIA BRANCH - 57A, TOPSIA ROAD, KOLKATA-700046 | GERMAN HOMOEO PHARMACY | SUNDAY 6:30P.M to 10:30 P.M.",
        "Residence: Second Floor 155/2, Keshab Chandra Sen Street, Kolkata-700009. At Raja Bazar Crossing, Above Danish Music. SUNDAY 11 AM to 2 P.M.",
        "For Same Day Appointment Call: 9007567004 | 7 P.M to 9 P.M",
        "NB: 1. FOR EMERGENCY CONTACT LOCAL HOSPITAL/DOCTOR | 2. PLEASE BRING THIS PRESCRIPTION ON YOUR NEXT VISIT.",
    ]
};