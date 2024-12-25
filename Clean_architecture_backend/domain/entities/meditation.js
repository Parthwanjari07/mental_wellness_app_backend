class Meditation {
    constructor({ text }) {
        if (!text) {
            throw new Error("Meditation text is required");
        }
        this.text = text;
    }

    // Example method to display the meditation text
    display() {
        console.log(`Meditation Guidance: ${this.text}`);
    }
}

module.exports = Meditation;