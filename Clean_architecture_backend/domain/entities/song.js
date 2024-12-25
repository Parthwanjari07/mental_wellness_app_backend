class Song {
    constructor({ id, title, author, songlink }) {
        if (!id || !title || !author || !songlink) {
            throw new Error("All song properties are required");
        }
        this.id = id;
        this.title = title;
        this.author = author;
        this.songlink = songlink;
    }
}


module.exports = Song;