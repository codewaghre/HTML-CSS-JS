//Post method
const popBtn = document.querySelector('#popBtn').addEventListener('click', popBtnhandler)

function popBtnhandler() {
    // use this for post request




    test = new XMLHttpRequest()
    const dataPost = 'https://reqres.in/api/users'
        // const dataPost = 'https://dummy.restapiexample.com/api/v1/create'
    test.open('POST', dataPost, true)
    test.getResponseHeader('Content-type', 'application/json');
    test.onreadystatechange = function() {
        if (test.readyState == 4) {

            console.log(this.readyState);
        }
    }


    test.onprogress = function() {
        console.log('On progress');
    }


    params = `{ "name": "abhishek999", "salary": "1234", "age": "23" }`

    test.send(params)


    // console.log("we are done");
}