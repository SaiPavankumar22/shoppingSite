document.getElementById('scan-btn').addEventListener('click', function () {
    const qrReader = new Html5Qrcode("qr-reader");

    qrReader.start(
        { facingMode: "environment" }, // Use rear camera
        {
            fps: 10, // Frame rate
            qrbox: 250 // QR code scanning box
        },
        qrCodeMessage => {
            document.getElementById('qr-reader-results').innerText = `QR Code Message: ${qrCodeMessage}`;
            qrReader.stop().then(() => {
                console.log("QR Code scanning stopped.");
            }).catch(err => {
                console.error("Unable to stop scanning.", err);
            });
        },
        errorMessage => {
            // Optional callback for error
            console.error("QR Code scanning error.", errorMessage);
        }
    ).catch(err => {
        console.error("Unable to start scanning.", err);
    });
});
