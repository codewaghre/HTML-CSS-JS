console.log("Ajax XmlHttpReques ");

let fetchbtn = document.querySelector('#fetchBtn').addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    // install xhr object
    const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest()

    // open the reuqest 
    xhr.open('GET', requestUrl, true)

    // checking for eventListtner is click or not
    console.log("you clicked");


    // Onprogress Method   (optionl)
    xhr.onprogress = function() {
        console.log("On progrss");
    }

    // get the date using two method


    // first method 

    // when data is loading  fetch the followers data
    xhr.onload = function() {
        let date = JSON.parse(this.responseText); // this will convert   into JSON Format 
        // console.log(this.responseText); // output is object 
        if (this.status === 200) {
            console.log(this.responseText); // output is object


        }
        if (this.responseText) {
            console.log(date.followers);

        } else {
            console.error("Data Not Found");
        }


    }


    // second method 

    // check on progress state
    // console.log(xhr.readyState);

    // to tract check progress continiously  and  fetch the followers data 
    // xhr.onreadystatechange = function() {

    //     console.log(xhr.readyState);
    //     if (xhr.readyState === 4) {
    //         let Data = JSON.parse(this.responseText); // this will convert   into JSON Format 
    //         console.log(Data.followers);
    //     }

    // }


    // send 
    xhr.send()
}