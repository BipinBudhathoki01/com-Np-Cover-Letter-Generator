var app = new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        address: '',
        isShowing: false,

    },
    methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
            return date;
        },
        coverLetter() {
            this.address = this.address;
            this.name = this.name;
            this.email = this.email;
            if (this.name && this.email && this.address !== "") {
                this.isShowing = true;
            }

        },
        async printThis() {
            console.log("printing..");
            const el = this.$refs.printcontent;

            const options = {
                type: "dataURL"
            };
            const printCanvas = await html2canvas(el, options);

            const link = document.createElement("a");
            link.setAttribute("download", "cover-letter.jpg");
            link.setAttribute(
                "href",
                printCanvas
                .toDataURL("image/jpg")
                .replace("image/jpg", "image/octet-stream")
            );
            link.click();

            console.log("done");
        },
    }
})