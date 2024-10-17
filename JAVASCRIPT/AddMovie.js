function confirmSubmission() {
    return confirm("Are you sure you want to submit the response?");
}

function verifySize() {
    var fileInput = document.getElementById('moviePoster');
    var fileSize = fileInput.files[0].size;
    var maxSize = 407 * 606; // Maximum allowed size (407x606px)

    if (fileSize > maxSize) {
        alert("The image size should be 407x606px.");
        return false;
    }

    return true;
}

function validateForm() {
    var movieTitle = document.getElementById('movieTitle').value;
    var releaseDate = document.getElementById('releaseDate').value;
    var trailerLink = document.getElementById('trailerLink').value;

    if (movieTitle === '' || releaseDate === '' || trailerLink === '') {
        alert("Please fill in all the fields in the form.");
        return false;
    }

    return true;
}

function validateSubmission() {
    if (confirmSubmission() && verifySize() && validateForm()) {
        return true; // Allow form submission
    } else {
        return false; // Cancel form submission
    }
}
