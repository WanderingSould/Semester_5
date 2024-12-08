
let registration = [
    // input inu id kodukana same names

    "name" , "age" , "phone" , 
    "male" , "female" ,
    "address", 
    "country" , "state"
]


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