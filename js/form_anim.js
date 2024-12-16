
const button_form = document.getElementById("submit")


button_form.addEventListener('click', () => {

    clearInterval()

    const label = document.getElementById("platform")

    let start = Date.now();
  
    label.style.display = 'block';
    label.style.left = -200 + 'px';
    label.style.top = 50 + 'px';

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
    
      if (timePassed >= 8700) {
        clearInterval(timer);
        label.style.display = 'none'
        return;
      }
    
      label.style.left = (timePassed / 5) + 'px';
      label.style.backgroundColor = `rgb(244, 160, ${(timePassed/10)%160})`
      
    }, 20);
    
})