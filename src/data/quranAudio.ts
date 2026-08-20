import { QuranAudio } from '../types';

/**
 * QURAN AUDIO REGISTRY
 * 
 * CONTENT GOVERNANCE POLICY:
 * - All entries are approved: false by default.
 * - No audio source is automatically trusted or selected.
 * - The project owner must explicitly set approved: true in the Settings panel.
 * - Never use AI voice generation for Quran recitation.
 * - Never automatically search the internet for Quran audio files.
 * - audioUrl must point to a human reciter approved by the project owner.
 * 
 * Until the project owner supplies and approves an audio source,
 * the player will display a clearly marked placeholder.
 */

export const quranAudioRegistry: QuranAudio[] = [
  {
    id: 'audio-fatihah-1',
    surahNumber: 1,
    ayahNumber: 1,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  },
  {
    id: 'audio-fatihah-2',
    surahNumber: 1,
    ayahNumber: 2,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  },
  {
    id: 'audio-fatihah-3',
    surahNumber: 1,
    ayahNumber: 3,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  },
  {
    id: 'audio-fatihah-4',
    surahNumber: 1,
    ayahNumber: 4,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  },
  {
    id: 'audio-fatihah-5',
    surahNumber: 1,
    ayahNumber: 5,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  },
  {
    id: 'audio-fatihah-6',
    surahNumber: 1,
    ayahNumber: 6,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  },
  {
    id: 'audio-fatihah-7',
    surahNumber: 1,
    ayahNumber: 7,
    reciterName: 'Pending Owner Approval',
    audioUrl: '',
    sourceName: 'Pending Owner Review',
    sourceUrl: '',
    approved: false,
    notes: 'Project owner must supply an approved reciter and audio URL before this can be played.'
  }
];

export function getAudioForVerse(surahNumber: number, ayahNumber: number): QuranAudio | undefined {
  return quranAudioRegistry.find(
    a => a.surahNumber === surahNumber && a.ayahNumber === ayahNumber
  );
}

export function isAudioApproved(audio: QuranAudio, dynamicApprovals?: Record<string, boolean>): boolean {
  if (dynamicApprovals && dynamicApprovals[audio.id] !== undefined) {
    return dynamicApprovals[audio.id];
  }
  return audio.approved;
}
