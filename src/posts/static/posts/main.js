console.log("hello world")

const helloWorldBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response){
        console.log('success',response.text)
        helloWorldBox.textContent = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})



$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response){
        console.log(response)
        const data = response.data
        setTimeout(() => {
            console.log(data)
            data.forEach(el => {
                postsBox.innerHTML +=  `
                ${el.title} - <b> ${el.body}</b></br>
                `
                spinnerBox.classList.add('not-visible')
            });
        }, 100);

    },
    error: function(response){
        console.log(error)  
    }
})