const modulesData = {
    "S1": ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Kiswahili"],
    "S2": ["Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography"],
    "S3": ["Mathematics", "Physics", "Chemistry", "Biology", "Economics", "ICT"],
    "S4": ["Advanced Mathematics", "Physics", "Chemistry", "Biology", "Literature"],
    "S5": ["Advanced Mathematics", "Physics", "Chemistry", "Biology", "Philosophy"],
    "S6": ["Advanced Mathematics", "Physics", "Chemistry", "Biology", "Entrepreneurship"],
    "ICT & Multimedia": ["Software Development", "Networking & Internet Technology", "Computer System & Architecture"],
    "Technical Services": ["Electronics & Telecommunication"]
};

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