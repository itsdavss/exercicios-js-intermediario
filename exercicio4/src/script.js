const inputText = document.querySelectorAll(".input");

inputText.forEach(input => {
    input.addEventListener('change', function(){
        if(input.value !== ''){
            input.classList.add('verde')
        } else {
            input.classList.remove('verde')
        }
    })
});
