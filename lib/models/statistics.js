const { getCollection } = require('../database/database');
const { getAllNotes } = require('./notes');
const { getNumberOfWords } = require('../utils/utils');

const collectionName = 'notes';

async function getStatistics() {
  const statistics = {};

  // Get number of notes
  statistics.noteCount = await getDocumentCount();

  // Get number of words
  statistics.numberOfWords = await getNumberOfWordsInAllDocuments();

  // Get time of recorded audio
  statistics.audioLength = await getTimeOfRecordedAudio();

  return statistics;
}

async function getDocumentCount() {
  const notesCollection = await getCollection(collectionName);
  const documentCount = await notesCollection.countDocuments({});
  return documentCount;
}

async function getNumberOfWordsInAllDocuments() {
  const notes = await getAllNotes();
  let numberOfWords = 0;
  notes.map((note) => {
    if (note.title) {
      numberOfWords = numberOfWords + getNumberOfWords(note.title);
    }
    if (note.content) {
      numberOfWords = numberOfWords + getNumberOfWords(note.content);
    }
  });

  return numberOfWords;
}

async function getTimeOfRecordedAudio() {
  const notes = await getAllNotes();
  let audioLength = 0;
  notes.map((note) => {
    if (note.audioLength) {
      audioLength = audioLength + note.audioLength;
    }
  });

  // Calculate minutes from milliseconds
  audioLength = Math.floor(audioLength / 60000);

  return audioLength;
}

exports.getStatistics = getStatistics;
