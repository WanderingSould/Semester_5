
let registration = [
    // input inu id kodukana same names

    "name" , "age" , "phone" , 
    "male" , "female" ,
    "address", 
    "country" , "state"
]

let C2States = {
    "india" : ["Kerala" , "Karnataka"],
    "uae" : ["Dubai" , "Qatar"],
    "germany" : ["Hamburg" , "Bavaria"]
}


function validate() {
    let raidoChecked = true

    
    registration.forEach(element => {
        let input = document.getElementById(element)
        let value = input.value

        // inputs validate cheyyan
        if (value == "") {
            alert(element + " not filled")
        }

        // radio button validate cheyyan
        else if (element == "male" || element == "female") {
            if (!input.checked) {
                raidoChecked = false
            }
        }
        else if (element == "address") {
            if (value.trim() == "") {
                alert(element + " not filled")
            }
        }
    });
    if (!raidoChecked) {
        alert("gender not filled")

    }
}

function ChangeStates() {
    let country = document.getElementById("country").value
    let state = document.getElementById("state")
    

    state.innerHTML = '<option value="">Select a state</option>';



    if (C2States[country]) {
        C2States[country].forEach(element => {
            let option = document.createElement("option")
            option.value = element
            option.text = element

            state.appendChild(option)
        })
        
    }
}