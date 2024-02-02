class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  // Getter methods
   getTitle() {
    return this.title;
  }

  getArtist() {
    return this.artist;
  }

  getDuration() {
    return this.duration;
  }

  // Display method
  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Artist: ${this.artist}`);
    console.log(`Duration: ${this.duration} seconds`);
  }
}

// Example usage
const mySong = new Song("Song Title", "Artist Name", 180);
mySong.displayInfo();
