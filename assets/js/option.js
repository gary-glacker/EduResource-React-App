/* on here we going to create the option depending
 to other according the selecting option */

document.getElementById("boards").onchange = function () {
    document.getElementById('subject').disabled = false; // enabling subject select
    document.getElementById('subject').innerHTML = ""; // clear subject to avoid conflicts between options values

    // Create options for the "subject" dropdown
    const opt0 = document.createElement('option');
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');
    const opt3 = document.createElement('option');


    if (this.value === 'reb') {
        opt0.textContent = "-- Select level --";
        opt1.textContent = "O Level";
        opt2.textContent = "A Level";
        document.getElementById('subject').appendChild(opt0);
        document.getElementById('subject').appendChild(opt1);
        document.getElementById('subject').appendChild(opt2);
    } else if (this.value === 'rtb') {
        opt0.textContent = "-- Select Sector or Level --";
        opt1.textContent = "ICT & Multimedia";
        opt2.textContent = "Technical Services";
        document.getElementById('subject').appendChild(opt0);
        document.getElementById('subject').appendChild(opt1);
        document.getElementById('subject').appendChild(opt2);
    }
};

// Create options that depend on the previous selection
document.getElementById('subject').onchange = function () {
    document.getElementById('level').disabled = false; // Enable the "level" dropdown
    document.getElementById('level').innerHTML = ''; // Clear previous options

    // Create new options for the "level" dropdown
    if (this.value === 'O Level') {

        const opt0 = document.createElement('option');
        const opt1 = document.createElement('option');
        const opt2 = document.createElement('option');
        const opt3 = document.createElement('option');

        opt0.textContent = '-- Select Level --';
        opt1.textContent = 'S1';
        opt2.textContent = 'S2';
        opt3.textContent = 'S3';

        document.getElementById('level').appendChild(opt0);
        document.getElementById('level').appendChild(opt1);
        document.getElementById('level').appendChild(opt2);
        document.getElementById('level').appendChild(opt3);

    } else if (this.value === 'A Level') {

        const opt0 = document.createElement('option');
        const opt1 = document.createElement('option');
        const opt2 = document.createElement('option');
        const opt3 = document.createElement('option');
        opt0.textContent = '-- Select Level --';
        opt1.textContent = 'S4';
        opt2.textContent = 'S5';
        opt3.textContent = 'S6';
        document.getElementById('level').appendChild(opt0);
        document.getElementById('level').appendChild(opt1);
        document.getElementById('level').appendChild(opt2);
        document.getElementById('level').appendChild(opt3);

    } else if (this.value === 'ICT & Multimedia') {
        const opt0 = document.createElement('option');
        const opt1 = document.createElement('option');
        const opt2 = document.createElement('option');
        const opt3 = document.createElement('option');
        const opt4 = document.createElement('option');
        const opt5 = document.createElement('option');
        const opt6 = document.createElement('option');
        const opt7 = document.createElement('option');
        const opt8 = document.createElement('option');
        const opt9 = document.createElement('option');


        opt0.textContent = '-- Select Level --';
        opt1.textContent = ' L3 Software Development';
        opt2.textContent = " L3 Networking & Internet technology";
        opt3.textContent = " L3 Computer System & Aritchecture";
        opt4.textContent = " L4 Software Development";
        opt5.textContent = " L4 Networking & Internet technology";
        opt6.textContent = " L4 Computer System & Aritchecture";
        opt7.textContent = " L5 Software Development";
        opt8.textContent = " L5 Networking & Internet technology";
        opt9.textContent = " L5 Computer System & Aritchecture";
        document.getElementById('level').appendChild(opt0);
        document.getElementById('level').appendChild(opt1);
        document.getElementById('level').appendChild(opt2);
        document.getElementById('level').appendChild(opt3);
        document.getElementById('level').appendChild(opt4);
        document.getElementById('level').appendChild(opt5);
        document.getElementById('level').appendChild(opt6);
        document.getElementById('level').appendChild(opt7);
        document.getElementById('level').appendChild(opt8);
        document.getElementById('level').appendChild(opt9);
    } else if (this.value === 'Technical Services') {
        const opt0 = document.createElement('option');
        const opt1 = document.createElement('option');
        const opt2 = document.createElement('option');
        const opt3 = document.createElement('option');

        opt0.textContent = '-- Select Level --';
        opt1.textContent = 'L3 Electronics & Telecommunication';
        opt2.textContent = 'L4 Electronics & Telecommunication';
        opt3.textContent = 'L5 Electronics & Telecommunication';

        document.getElementById('level').appendChild(opt0);
        document.getElementById('level').appendChild(opt1);
        document.getElementById('level').appendChild(opt2);
        document.getElementById('level').appendChild(opt3);
        

    } else {
        const opt0 = document.createElement('option');
        opt0.textContent = '-- No options available --';
        document.getElementById('level').appendChild(opt0);
    }
};

// create options for the level and class for gives subjects as past papers
document.getElementById('level').onchange = function () {
    document.getElementById('Modules').disabled = false; // Enable the "Modules" dropdown
    document.getElementById('Modules').innerHTML = ''; // Clear previous options

    // Get the selected level
    const selectedLevel = this.value;

    // Check if the selected level exists in the JSON data
    if (modulesData[selectedLevel]) {
        // Populate the "Modules" dropdown with options from the JSON data
        modulesData[selectedLevel].forEach(module => {
            const option = document.createElement('option');
            option.textContent = module;
            document.getElementById('Modules').appendChild(option);
        });
    } else {
        // If no modules are available, show a default message
        const option = document.createElement('option');
        option.textContent = '-- No modules available --';
        document.getElementById('Modules').appendChild(option);
    }
};

// This is the JSON data for modules
const modulesData = {
    "S1": [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Kiswahili"
    ],
    "S2": [
        "Mathematics",
        "Physics",
        "Chemistry", 
        "Biology", 
        "History", 
        "Geography"
        ],
    "S3": [
        "Mathematics", 
        "Physics", 
        "Chemistry", 
        "Biology",
         "Economics", 
        "ICT"],
    "S4": [
        "Advanced Mathematics", 
        "Physics", 
        "Chemistry", 
        "Biology", 
        "Literature"],
    "S5": [
        "Advanced Mathematics", 
        "Physics", 
        "Chemistry", 
        "Biology", 
        "Philosophy"],
    "S6": [
        "Advanced Mathematics", 
        "Physics", 
        "Chemistry", 
        "Biology", "Entrepreneurship"],
    "L3 Software Development": [
        "WEB Development",
        "JavaScript Fundamentals", 
        "VueJS",
        "Control Version System",
        "Analysis Project Requirements",
        "UI/UX Design" 
    ],
    "L3 Networking & Internet technology": [
        "-- coming soon --",
    ],
    "L3 Computer System & Aritchecture": [
        "-- coming soon --",
    ],
    "L4 Software Development": [
        "PHP Programming",
        "Database Development",
        "Backend System Development",
        "Networking Fundamentals",
        "Windows Server Administration",
        "Backend Application Development",
        "Data Structures and Algorithms"
    ],
    "L4 Networking & Internet technology": [
        "-- coming soon --",
    ],
    "L4 Computer System & Aritchecture": [
        "-- coming soon --",
    ],
    "L5 Software Development": [
        "-- coming soon --",
    ],
    "L5 Networking & Internet technology": [
        "-- coming soon --",
    ],
    "L5 Computer System & Aritchecture": [
         "-- coming soon --",
    ],
    "L3 Electronics & Telecommunication": [
        "-- comming soon--",
    ],
    "L4 Electronics & Telecommunication": [
        "-- comming soon--",
    ],
    "L5 Electronics & Telecommunication": [
        "-- comming soon--",
    ]


};