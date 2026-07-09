// Department Data


const departments = {



cardiology:{

name:"Cardiology",

image:"https://randomuser.me/api/portraits/men/32.jpg",

doctor:"Dr. Raj Kumar",

qualification:"MD Cardiology",

experience:"12 Years Experience",

info:
"Cardiology department treats heart related diseases like chest pain, heart attack, high BP and heart rhythm problems.",

patients:
"Patients should check blood pressure, avoid smoking, maintain healthy food habits and do regular heart checkups."

},





neurology:{

name:"Neurology",

image:"https://randomuser.me/api/portraits/men/45.jpg",

doctor:"Dr. Arjun Sharma",

qualification:"DM Neurology",

experience:"10 Years Experience",

info:
"Neurology provides treatment for brain, spine and nervous system disorders like migraine, stroke and epilepsy.",

patients:
"Patients with frequent headaches, dizziness or memory issues should consult specialists."

},





orthopedic:{

name:"Orthopedics",

image:"https://randomuser.me/api/portraits/men/50.jpg",

doctor:"Dr. Vikram Rao",

qualification:"MS Orthopedics",

experience:"15 Years Experience",

info:
"Treatment for bone fractures, joint pain, arthritis and spine problems.",

patients:
"Maintain calcium levels, exercise regularly and avoid unnecessary strain."

},





dermatology:{

name:"Dermatology",

image:"https://randomuser.me/api/portraits/women/40.jpg",

doctor:"Dr. Priya Sharma",

qualification:"MD Dermatology",

experience:"8 Years Experience",

info:
"Skin, hair and nail care including acne, allergy and infections.",

patients:
"Keep skin clean and consult doctor for long-lasting skin problems."

},





pediatrics:{

name:"Pediatrics",

image:"https://randomuser.me/api/portraits/women/65.jpg",

doctor:"Dr. Anjali",

qualification:"MD Pediatrics",

experience:"9 Years Experience",

info:
"Healthcare for children including vaccination, fever and growth monitoring.",

patients:
"Parents should maintain vaccination schedules and regular health checks."

},





oncology:{

name:"Oncology",

image:"https://randomuser.me/api/portraits/men/60.jpg",

doctor:"Dr. Rahul",

qualification:"MD Oncology",

experience:"14 Years Experience",

info:
"Cancer diagnosis, treatment planning and patient support.",

patients:
"Early diagnosis and regular screening improve treatment outcomes."

},





gynecology:{

name:"Gynecology",

image:"https://randomuser.me/api/portraits/women/55.jpg",

doctor:"Dr. Sneha",

qualification:"MD Gynecology",

experience:"11 Years Experience",

info:
"Women's health, pregnancy care and reproductive health services.",

patients:
"Regular checkups are important for women's health."

},





ent:{

name:"ENT",

image:"https://randomuser.me/api/portraits/men/70.jpg",

doctor:"Dr. Mohan",

qualification:"ENT Specialist",

experience:"10 Years Experience",

info:
"Ear, nose and throat treatments including hearing and sinus problems.",

patients:
"Avoid self medication for ear and throat infections."

},





urology:{

name:"Urology",

image:"https://randomuser.me/api/portraits/men/22.jpg",

doctor:"Dr. Kiran",

qualification:"MS Urology",

experience:"13 Years Experience",

info:
"Kidney, bladder and urinary system treatment.",

patients:
"Drink enough water and maintain kidney health."

},





general:{

name:"General Medicine",

image:"https://randomuser.me/api/portraits/men/35.jpg",

doctor:"Dr. Suresh",

qualification:"MD Physician",

experience:"15 Years Experience",

info:
"Treatment for common diseases like fever, diabetes and infections.",

patients:
"Regular health checkups help early disease detection."

},





dental:{

name:"Dental",

image:"https://randomuser.me/api/portraits/women/30.jpg",

doctor:"Dr. Meena",

qualification:"BDS",

experience:"7 Years Experience",

info:
"Dental cleaning, tooth problems and oral surgeries.",

patients:
"Brush regularly and maintain oral hygiene."

},





eye:{

name:"Ophthalmology",

image:"https://randomuser.me/api/portraits/women/20.jpg",

doctor:"Dr. Kavya",

qualification:"MS Ophthalmology",

experience:"9 Years Experience",

info:
"Eye checkups, vision correction and eye surgery.",

patients:
"Regular eye tests protect your vision."

},





physio:{

name:"Physiotherapy",

image:"https://randomuser.me/api/portraits/men/80.jpg",

doctor:"Dr. Rohan",

qualification:"Physiotherapist",

experience:"8 Years Experience",

info:
"Pain recovery, rehabilitation and physical therapy.",

patients:
"Follow exercise plans recommended by specialists."

},





emergency:{

name:"Emergency Care",

image:"https://randomuser.me/api/portraits/men/90.jpg",

doctor:"Emergency Medical Team",

qualification:"24/7 Trauma Specialists",

experience:"Available Always",

info:
"Immediate treatment for accidents and critical conditions.",

patients:
"Call emergency services immediately during serious conditions."

},





surgery:{

name:"General Surgery",

image:"https://randomuser.me/api/portraits/men/25.jpg",

doctor:"Dr. Naveen",

qualification:"MS Surgery",

experience:"16 Years Experience",

info:
"Advanced surgical procedures and post surgery care.",

patients:
"Follow doctor's instructions before and after surgery."

}


};









// Show department information


function showDept(id){


let d = departments[id];


document.getElementById("departmentInfo").innerHTML = `


<img src="${d.image}">


<h2>${d.name}</h2>


<h3>${d.doctor}</h3>


<p>${d.qualification}</p>


<p>${d.experience}</p>


<hr>


<h3>Department Information</h3>


<p>${d.info}</p>



<h3>Patient Guidance</h3>


<p>${d.patients}</p>


`;



}









// Ambulance location


function emergency(){



if(navigator.geolocation){



navigator.geolocation.getCurrentPosition((pos)=>{


let lat = pos.coords.latitude;

let lon = pos.coords.longitude;



window.open(

`https://www.google.com/maps/search/ambulance/@${lat},${lon},15z`

);


});


}

else{


alert("Location not available");


}



}









// Report system


function downloadReport(){


let id = document.getElementById("patientId").value;



if(id==""){


alert("Please enter Patient ID");


return;


}



document.getElementById("reportMsg").innerHTML =


"✓ Report ready for Patient ID: "+id;



}









// Appointment


document
.getElementById("appointmentForm")
.addEventListener("submit",function(e){


e.preventDefault();


document.getElementById("appointmentMsg").innerHTML =


"✓ Appointment booked successfully. Payment completed.";



this.reset();


});