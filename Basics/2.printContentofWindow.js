function printContent(){
    let print = window.print(); // window is not refencing out of browser.
    return print;
}

// it will not Run
printContent();