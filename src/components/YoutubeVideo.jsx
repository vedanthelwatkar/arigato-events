"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'
import { cn } from "@/lib/utils"

const YouTubePlayer = ({ videoId, thumbnailUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const progressRef = useRef(null)
  const hideControlsTimeoutRef = useRef(null)

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }

    window.onYouTubeIframeAPIReady = initializePlayer

    if (window.YT && window.YT.Player) {
      initializePlayer()
    }

    return () => {
      window.onYouTubeIframeAPIReady = null
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }
  }, [videoId])

  // Update time display
  useEffect(() => {
    let interval = null

    if (isPlaying && playerRef.current) {
      interval = setInterval(() => {
        const current = playerRef.current.getCurrentTime()
        setCurrentTime(current)
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying])

  const initializePlayer = () => {
    if (window.YT && window.YT.Player) {
      if (playerRef.current) {
        playerRef.current.destroy()
      }

      const playerId = `youtube-player-${videoId}`

      playerRef.current = new window.YT.Player(playerId, {
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 0,
          modestbranding: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }
  }

  const onPlayerReady = (event) => {
    setIsLoaded(true)
    setDuration(event.target.getDuration())
  }

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true)
    } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
      setIsPlaying(false)
    }
  }

  const togglePlay = () => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const toggleMute = () => {
    if (!playerRef.current) return

    if (isMuted) {
      playerRef.current.unMute()
      setIsMuted(false)
    } else {
      playerRef.current.mute()
      setIsMuted(true)
    }
  }

  const handleSeek = (e) => {
    if (!progressRef.current || !playerRef.current || !duration) return

    const rect = progressRef.current.getBoundingClientRect()
    const position = (e.clientX - rect.left) / rect.width
    const seekTime = position * duration

    playerRef.current.seekTo(seekTime, true)
    setCurrentTime(seekTime)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      containerRef.current.requestFullscreen()
    }
  }

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true)
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
    }
  }

  const handleMouseLeave = () => {
    if (isPlaying) {
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 1000)
    }
  }

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true)
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current)
      }
      hideControlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-lg shadow-lg cursor-pointer"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* YouTube player container */}
      <div id={`youtube-player-${videoId}`} className="w-full h-full"></div>

      {/* Thumbnail overlay (shown until video is loaded) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black">
          <img
            src={thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title || "Video thumbnail"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Center Play/Pause button - ONLY shows when paused or not started */}
      {isLoaded && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-black/80 hover:bg-black/90 flex items-center justify-center transition-all duration-200 hover:scale-110 pointer-events-auto"
            aria-label="Play video"
          >
            <Play size={32} className="text-orange-600 ml-1" fill="#ea580c" />
          </button>
        </div>
      )}

      {/* Click overlay for play/pause when playing */}
      {isPlaying && (
        <div
          className="absolute inset-0 top-12"
          onClick={togglePlay}
          style={{ pointerEvents: showControls ? "none" : "auto" }}
        />
      )}

      {/* Bottom controls - only show on hover when playing */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-all duration-300",
          showControls && isPlaying ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Progress bar */}
        <div
          className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer group"
          ref={progressRef}
          onClick={handleSeek}
        >
          <div
            className="h-full bg-orange-600 rounded-full relative group-hover:h-1.5 transition-all"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-600 rounded-full transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              className="text-orange-600 brightness-200 hover:brightness-100 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Volume button */}
            <button
              onClick={toggleMute}
              className="text-orange-600 brightness-200 hover:brightness-100 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Time display */}
            <div className="text-orange-600 brightness-200 text-sm font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Fullscreen button */}
            <button
              onClick={toggleFullscreen}
              className="text-orange-600 brightness-200 hover:brightness-100 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YouTubePlayer
