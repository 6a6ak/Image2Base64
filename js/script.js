function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = document.createElement("img");
        const format = document.getElementById("formatSelect").value;
        img.src = "data:" + format + ";base64," + event.target.result.split(",")[1];
        img.classList.add("img-fluid");  // Bootstrap class for responsive images
        document.getElementById("imagePreview").innerHTML = "";
        document.getElementById("imagePreview").appendChild(img);
        document.getElementById("base64Data").value = event.target.result;
    };

    reader.readAsDataURL(file);
}

function copyToClipboard() {
    const base64Data = document.getElementById("base64Data");
    base64Data.select();
    document.execCommand("copy");
    alert("Base64 data copied to clipboard!");
}
