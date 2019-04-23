function isUsZipcode(srt) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if(regexp.test(srt)){
        alert("this is UsZipcode");
    }else {
        alert("no, it isn't");
    }
}