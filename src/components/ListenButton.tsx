import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playArabicTTS, isTTSSupported } from '../utils/audio';

interface ListenButtonProps {
  arabicText: string;
  label?: string;
  size?: 'sm' | 'md';
  /** If true, renders a compact icon-only button */
  compact?: boolean;
}

/**
 * LISTEN BUTTON — Arabic Vocabulary & Reading Pronunciation.
 *
 * Governance Notice:
 * This component uses browser TTS for ARABIC VOCABULARY and READING TRAINER ONLY.
 * It must NEVER be used on Quran recitation pages as an authoritative audio source.
 * The user-facing label clearly reads "Arabic Pronunciation" not "Quran Recitation."
 */
const ListenButton: React.FC<ListenButtonProps> = ({
  arabicText,
  label,
  size = 'md',
  compact = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const supported = isTTSSupported();

  const handleListen = () => {
    if (!supported || !arabicText) return;
    setIsPlaying(true);
    playArabicTTS(arabicText);
    // Reset visual state after estimated duration
    setTimeout(() => setIsPlaying(false), 1500);
  };

  if (!supported) {
    return (
      <span className="text-[10px] text-charcoal/30 dark:text-ivory/30 flex items-center space-x-1">
        <VolumeX className="w-3 h-3" />
        <span>Audio not supported</span>
      </span>
    );
  }

  if (compact) {
    return (
      <button
        onClick={handleListen}
        title={`Listen: ${arabicText}`}
        className={`p-1.5 rounded-lg transition-all ${
          isPlaying
            ? 'bg-emerald/10 text-emerald'
            : 'text-charcoal/40 dark:text-ivory/40 hover:text-emerald hover:bg-emerald/5'
        }`}
      >
        <Volume2 className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </button>
    );
  }

  return (
    <button
      onClick={handleListen}
      className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
        isPlaying
          ? 'bg-emerald/10 border-emerald/30 text-emerald'
          : 'border-charcoal/10 dark:border-ivory/10 text-charcoal/60 dark:text-ivory/60 hover:border-emerald/40 hover:text-emerald bg-white dark:bg-charcoal'
      }`}
    >
      <Volume2 className={`${size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${isPlaying ? 'animate-pulse' : ''}`} />
      <span>{isPlaying ? 'Playing...' : (label || '🔊 Listen')}</span>
    </button>
  );
};

export default ListenButton;
