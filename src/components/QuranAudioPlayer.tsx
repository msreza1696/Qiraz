import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, AlertTriangle, Loader2, ShieldAlert } from 'lucide-react';
import { QuranAudio } from '../types';
import { isAudioApproved } from '../data/quranAudio';

interface QuranAudioPlayerProps {
  audioItems: QuranAudio[];
  currentVerseIndex: number;
  onVerseChange: (index: number) => void;
  dynamicApprovals?: Record<string, boolean>;
}

/**
 * QURAN AUDIO PLAYER
 *
 * Content Governance Policy:
 * - Only plays audio entries where approved=true (or dynamically approved by owner).
 * - If no approved audio exists, displays a clearly marked governance warning.
 * - Never uses AI voice generation for Quran recitation.
 * - Never automatically fetches audio from arbitrary websites.
 * - Browser TTS is explicitly BLOCKED for Quran recitation.
 */
const QuranAudioPlayer: React.FC<QuranAudioPlayerProps> = ({
  audioItems,
  currentVerseIndex,
  onVerseChange,
  dynamicApprovals = {}
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const currentAudio = audioItems[currentVerseIndex];
  const approved = currentAudio ? isAudioApproved(currentAudio, dynamicApprovals) : false;

  // Reset player state when verse changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setHasError(false);
    setIsLoading(false);
  }, [currentVerseIndex]);

  // Apply volume and playback rate to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
    }
  }, [volume, playbackRate]);

  const handlePlayPause = () => {
    if (!audioRef.current || !approved || !currentAudio?.audioUrl) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => setHasError(true));
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (currentVerseIndex > 0) {
      onVerseChange(currentVerseIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentVerseIndex < audioItems.length - 1) {
      onVerseChange(currentVerseIndex + 1);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = t;
      setCurrentTime(t);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // ─── Unapproved Placeholder ───────────────────────────────────────────────
  if (!currentAudio || !approved) {
    return (
      <div className="bg-charcoal dark:bg-charcoal-light border border-amber-800/30 rounded-2xl p-4 flex flex-col space-y-3">
        {/* Governance notice */}
        <div className="flex items-start space-x-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-400">Recitation Pending Owner Approval</p>
            <p className="text-[10px] text-ivory/50 mt-0.5 leading-relaxed">
              QIRAZ does not currently have an approved recitation source for this verse.
              Quran audio must be supplied and explicitly approved by the project owner.
              AI voice generation is strictly prohibited for Quran recitation.
            </p>
          </div>
        </div>

        {/* Disabled player controls */}
        <div className="flex items-center justify-between opacity-30 pointer-events-none select-none">
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full bg-white/5"><SkipBack className="w-4 h-4 text-ivory" /></button>
            <button className="p-3 rounded-full bg-white/10"><Play className="w-5 h-5 text-ivory" /></button>
            <button className="p-2 rounded-full bg-white/5"><SkipForward className="w-4 h-4 text-ivory" /></button>
          </div>
          <span className="text-[10px] text-ivory/40 font-mono">—:—— / —:——</span>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full" />
      </div>
    );
  }

  // ─── Active Player ────────────────────────────────────────────────────────
  return (
    <div className="bg-charcoal dark:bg-charcoal-light rounded-2xl p-4 space-y-3 border border-charcoal/20">
      
      {/* Reciter info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-ivory/40 uppercase font-bold tracking-wider">Quran Recitation</p>
          <p className="text-xs text-ivory font-semibold">{currentAudio.reciterName}</p>
          <p className="text-[9px] text-ivory/30">{currentAudio.sourceName}</p>
        </div>
        <div className="text-[10px] text-emerald font-mono bg-emerald/10 px-2 py-0.5 rounded">
          Verse {currentAudio.ayahNumber} / {audioItems.length}
        </div>
      </div>

      {/* Seek Bar */}
      <div className="space-y-1">
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1 accent-emerald cursor-pointer"
        />
        <div className="flex justify-between text-[9px] text-ivory/40 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-between">
        
        {/* Transport */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentVerseIndex === 0}
            className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 text-ivory transition-all"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={handlePlayPause}
            className="p-3 rounded-full bg-emerald hover:bg-emerald-dark text-white transition-all shadow-lg"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNext}
            disabled={currentVerseIndex === audioItems.length - 1}
            className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 text-ivory transition-all"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Speed selector */}
        <div className="flex items-center space-x-1">
          {[0.75, 1.0, 1.25].map(rate => (
            <button
              key={rate}
              onClick={() => setPlaybackRate(rate)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                playbackRate === rate
                  ? 'bg-emerald text-white'
                  : 'bg-white/5 text-ivory/50 hover:bg-white/10'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>

        {/* Volume */}
        <div className="flex items-center space-x-1.5">
          <Volume2 className="w-3.5 h-3.5 text-ivory/40" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={e => setVolume(Number(e.target.value))}
            className="w-16 h-1 accent-emerald cursor-pointer"
          />
        </div>
      </div>

      {/* Error state */}
      {hasError && (
        <div className="flex items-center space-x-2 text-red-400 text-[10px]">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Audio failed to load. Check the audio URL in the registry.</span>
        </div>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentAudio.audioUrl}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => { setHasError(true); setIsPlaying(false); }}
        onEnded={() => { setIsPlaying(false); if (currentVerseIndex < audioItems.length - 1) handleNext(); }}
      />
    </div>
  );
};

export default QuranAudioPlayer;
