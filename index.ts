/* a .ts file can convert to a .js file with the tsc index.ts command */

/* change settings of typescript with a tsconfig.json file, and confirm them with  the tsc command */

/* there are many settings for tsconfig, including target, which allows you to change the js version converted to, 
watch, which lets typescript adjust the js file automatically on save, and lib, which allows you to add more libraries for the interpreter */

let tl_slider = document.getElementById('tl-range');
let tr_slider = document.getElementById('tr-range');
let bl_slider = document.getElementById('bl-range');
let br_slider = document.getElementById('br-range');
let output = document.getElementById('border-preview');

// Top left
tl_slider.oninput = function() {
    let text = document.getElementById('tl-text');
    let newVal = (<HTMLInputElement>this).value;
    output.style.borderTopLeftRadius = (newVal + 'px');
    text.textContent = newVal + "px border";
    console.log(text.textContent);
}

// Top right
tr_slider.oninput = function() {
    let text = document.getElementById('tr-text');
    let newVal = (<HTMLInputElement>this).value;
    output.style.borderTopRightRadius = (newVal + 'px');
    text.textContent = newVal + "px border";
    console.log(text.textContent);
}

// Bottom left
bl_slider.oninput = function() {
    let text = document.getElementById('bl-text');
    let newVal = (<HTMLInputElement>this).value;
    output.style.borderBottomLeftRadius = (newVal + 'px');
    text.textContent = newVal + "px border";
    console.log(text.textContent);
}

// Bottom right
br_slider.oninput = function() {
    let text = document.getElementById('br-text');
    let newVal = (<HTMLInputElement>this).value;
    output.style.borderBottomRightRadius = (newVal + 'px');
    text.textContent = newVal + "px border";
    console.log(text.textContent);
}