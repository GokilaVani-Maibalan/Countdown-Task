
const show = () => {
    let button = document.querySelector('button');
    button.remove();

    let data = document.querySelector('.container');
    let display = document.querySelector('.countdown');
    let countDown = 10;
    setTimeout(() => {
        display.innerText = countDown;
        data.append(display);
        countDown--;
        setTimeout(() => {
            display.innerText = countDown;
            data.append(display);
            countDown--;
            setTimeout(() => {
                display.innerText = countDown;
                data.append(display);     
                countDown--;
                setTimeout(() => {
                    display.innerText = countDown;
                    data.append(display);                    
                    countDown--;
                    setTimeout(() => {
                        display.innerText = countDown;
                        data.append(display);                       
                        countDown--;
                        setTimeout(() => {
                            display.innerText = countDown;
                            data.append(display);                          
                            countDown--;
                            setTimeout(() => {
                                display.innerText = countDown;
                                data.append(display);                                
                                countDown--;
                                setTimeout(() => {
                                    display.innerText = countDown;
                                    data.append(display);                                    
                                    countDown--;
                                    setTimeout(() => {
                                        display.innerText = countDown;
                                        data.append(display);                                       
                                        countDown--;
                                        setTimeout(() => {
                                            display.innerText = countDown;
                                            data.append(display);                                           
                                            countDown--;
                                            setTimeout(() => {
                                                let remove = document.querySelector('.countdown')
                                                remove.remove();
                                                let image = document.createElement('img');
                                                image.setAttribute('src', '6cf53e30fcc6595bd753ef7f4b9f3baa.gif');
                                                image.setAttribute('height','650');
                                                image.setAttribute('width','350')
                                                data.append(image);
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 100)
};