/**
 * QIRAZ AUDIO UTILITIES
 *
 * Strict separation policy:
 * - playArabicTTS: Browser speech synthesis ONLY for Arabic vocabulary words and letters.
 *   NOT to be used for Quran recitation under any circumstances.
 * - Quran recitation must use only explicitly approved human reciter audio files.
 *
 * Future architecture hooks:
 * - prerecorded pronunciation audio files
 * - listening comprehension exercises
 * - repeat-after-me exercises
 * - slow playback (0.5x)
 * - AI speech evaluation (not implemented in V1)
 */

/**
 * Play Arabic text using browser Speech Synthesis (TTS).
 * For VOCABULARY and READING TRAINER use ONLY.
 * NEVER use this for Quran recitation.
 */
export function playArabicTTS(arabicText: string): void {
  if (!window.speechSynthesis) {
    console.warn('QIRAZ Audio: Web Speech API not supported in this browser.');
    return;
  }

  // Cancel any current utterance before playing a new one
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(arabicText);
  utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia)
  utterance.rate = 0.85;    // Slightly slower for learners
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  // Try to find an Arabic voice if available
  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
  if (arabicVoice) {
    utterance.voice = arabicVoice;
  }

  window.speechSynthesis.speak(utterance);
}

/**
 * Play Arabic TTS at a specific playback rate.
 * For slow/fast practice in reading exercises.
 */
export function playArabicTTSAtRate(arabicText: string, rate: number): void {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(arabicText);
  utterance.lang = 'ar-SA';
  utterance.rate = Math.max(0.5, Math.min(2.0, rate));
  utterance.pitch = 1.0;
  utterance.volume = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;

  window.speechSynthesis.speak(utterance);
}

/**
 * Check if Web Speech API is supported in this browser.
 */
export function isTTSSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

/**
 * Stop any currently playing TTS speech.
 */
export function stopTTS(): void {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
