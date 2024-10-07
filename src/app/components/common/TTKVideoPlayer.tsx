import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Box, IconButton, Slider, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { styled } from "@mui/material/styles";

// You can use any video player library here. I'm using 'react-player' as an example.
// Make sure to install it: npm install react-player
import ReactPlayer from "react-player";

interface TTKVideoPlayerProps {
  videoUrl: string;
}

const TTKVideoPlayer: React.FC<TTKVideoPlayerProps> = ({ videoUrl }) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
    setIsMuted(false);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (playerRef.current) {
      playerRef.current.getInternalPlayer()?.requestFullscreen();
    }
  };

  const handleProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    if (!seeking) {
      setPlayed(state.played);
      setCurrentTime(state.playedSeconds);
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = (event: Event, newValue: number | number[]) => {
    setSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo(newValue as number);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedTime = `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  useEffect(() => {
    if (playerRef.current) {
      const playerDuration = playerRef.current.getDuration();
      setDuration(playerDuration);
    }
  }, [playerRef.current]);

  const StyledSlider = styled(Slider)({
    color: "#1e88e5", // Customize slider color
    "& .MuiSlider-thumb": {
      backgroundColor: "#1e88e5", // Customize thumb color
    },
  });

  return (
    <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={isPlaying}
        volume={volume}
        muted={isMuted}
        onProgress={handleProgress}
        width="100%"
        height="100%"
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // ➜  Add this
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <IconButton onClick={handlePlayPause} sx={{ color: "white" }}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <StyledSlider
            min={0}
            max={1}
            step={0.01}
            value={played}
            onChange={handleSeekMouseUp}
            onMouseDown={handleSeekMouseDown}
            sx={{
              width: "100%",
              ml: 2,
              // ➜  Add this
              "& .MuiSlider-root": {
                flexGrow: 1, // Allow the slider to take up available space
              },
            }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" ,ml:2}}
        >
          {" "}
          {/* Prevent wrapping */}
          <Typography
            variant="body2"
            sx={{
              color: "white",
              mr: 1,
              maxWidth: 100,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {formatTime(currentTime)} / {formatTime(duration)}
          </Typography>
          <IconButton onClick={handleMute} sx={{ color: "white" }}>
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
          <StyledSlider
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            sx={{ width: 100, ml: 2 }}
          />
          <IconButton onClick={handleFullscreen} sx={{ color: "white" }}>
            {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TTKVideoPlayer;
