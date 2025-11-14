document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#btn-bar .btn-custom");
    let currentSts = "baru";

    function updateSts(newSts) {
        currentSts = newSts;
        
        buttons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.status === newSts);
        });

        if (newSts === "diantar") {
            printNota(currentSts);
        }
    }



    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            updateSts(btn.dataset.status);
        });
    });

    function printNota(currentSts) {
        const notaWindow = window.open("", "", "width=400,height=600");
        const htmlnota= `
            <!DOCTYPE html>
            <html>
            <head><title>Nota Pesanan</title></head>
            <body style="font-family: sans-serif; padding: 20px;">
                <h2>Nota Pesanan #27729992</h2>
                <p>Status: ${currentSts}</p>
                <hr>
                <p><strong>Nama:</strong> Qin Shi Huang</p>
                <p><strong>Metode Pembayaran:</strong> Ovo (Lunas)</p>
                <p><strong>Alamat:</strong> Jl. Ketintang</p>
                <br>
                <p>Terima kasih telah berbelanja!</p>
            </body>
            </html>
        `;

        console.log("Popup dibuat:", notaWindow);
        notaWindow.document.open();
        notaWindow.document.write(htmlnota);
        notaWindow.document.close();
        console.log("HTML nota sudah ditulis!");
        notaWindow.print();
    
        
    }

    updateSts(currentSts);

});