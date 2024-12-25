// fetch all songes frrom the data base

const UseCaseInterface = require("../interface/UseCaseInterfaces");
const Song = require("../../domain/entities/song");
const { getAllSongs } = require("../../infrastructure/db/queries/songQueries");


// get daily quotes  => call gemini => {morning, noon, evening}

// prpvide advice {bad}

class GetSongs extends UseCaseInterface {
    async execute() {
        try {
            const songRows = await getAllSongs();
            return songRows.map(song => new Song({
                id: song.id,
                title: song.title,
                author: song.author,
                songlink: song.link,
            }));
        } catch (error) {
            console.error("Error in GetSongs use case:", error);
            throw error;
        }
    }
}

module.exports = GetSongs;