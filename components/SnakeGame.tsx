import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, Trophy, RefreshCw, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface SnakeGameProps {
  onClose: () => void;
}

interface Point {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const TILE_COUNT = 20; // 20x20 grid
const SPEED = 100;

export const SnakeGame: React.FC<SnakeGameProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Point>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  
  // Audio refs (optional, but good structure)
  const eatSound = useRef<HTMLAudioElement | null>(null);

  // Initialize game
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * TILE_COUNT),
        y: Math.floor(Math.random() * TILE_COUNT),
      };
      // Check if food spawns on snake
      const onSnake = currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  // Handle Input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default scrolling for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      if (gameOver) return;

      if (!gameStarted && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        setGameStarted(true);
      }

      setDirection(prev => {
        switch (e.key) {
          case 'ArrowUp':
            if (prev.y === 1) return prev;
            return { x: 0, y: -1 };
          case 'ArrowDown':
            if (prev.y === -1) return prev;
            return { x: 0, y: 1 };
          case 'ArrowLeft':
            if (prev.x === 1) return prev;
            return { x: -1, y: 0 };
          case 'ArrowRight':
            if (prev.x === -1) return prev;
            return { x: 1, y: 0 };
          default:
            return prev;
        }
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, gameStarted]);

  // Game Loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(prevSnake => {
        const head = { x: prevSnake[0].x + direction.x, y: prevSnake[0].y + direction.y };

        // Wall Collision
        if (head.x < 0 || head.x >= TILE_COUNT || head.y < 0 || head.y >= TILE_COUNT) {
          setGameOver(true);
          return prevSnake;
        }

        // Self Collision
        if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Eat Food
        if (head.x === food.x && head.y === food.y) {
          setScore(s => {
            const newScore = s + 10;
            if (newScore > highScore) setHighScore(newScore);
            return newScore;
          });
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop(); // Remove tail
        }

        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver, gameStarted, highScore, generateFood]);

  // Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#FDFBF7'; // warm-50
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid (optional, subtle)
    ctx.strokeStyle = '#EBE7DE'; // warm-200
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= TILE_COUNT; i++) {
      ctx.beginPath();
      ctx.moveTo(i * GRID_SIZE, 0);
      ctx.lineTo(i * GRID_SIZE, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * GRID_SIZE);
      ctx.lineTo(canvas.width, i * GRID_SIZE);
      ctx.stroke();
    }

    // Draw Food
    ctx.fillStyle = '#FB923C'; // peach-400
    ctx.beginPath();
    ctx.arc(
      food.x * GRID_SIZE + GRID_SIZE / 2,
      food.y * GRID_SIZE + GRID_SIZE / 2,
      GRID_SIZE / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Draw Snake
    ctx.fillStyle = '#111827'; // gray-900
    snake.forEach((segment, index) => {
      // Rounded rectangles for snake
      const x = segment.x * GRID_SIZE + 1;
      const y = segment.y * GRID_SIZE + 1;
      const size = GRID_SIZE - 2;
      
      ctx.fillRect(x, y, size, size);
      
      // Eyes for head
      if (index === 0) {
        ctx.fillStyle = '#fff';
        const eyeSize = 3;
        // Logic to position eyes based on direction could be added here
        // Simple center eyes for now
        ctx.fillRect(x + 4, y + 4, eyeSize, eyeSize);
        ctx.fillRect(x + size - 7, y + 4, eyeSize, eyeSize);
        ctx.fillStyle = '#111827';
      }
    });

  }, [snake, food]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full border border-warm-200 relative">
        
        {/* Header */}
        <div className="bg-warm-50 p-6 flex justify-between items-center border-b border-warm-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Snake</h3>
            <p className="text-xs text-gray-500 font-medium">Use arrow keys to play</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-warm-200 rounded-full transition-colors text-gray-500">
            <X size={20} />
          </button>
        </div>

        {/* Game Container */}
        <div className="p-6 flex flex-col items-center justify-center bg-white relative">
          
          <div className="mb-4 flex gap-8 w-full justify-between px-4">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Score</span>
              <span className="text-2xl font-bold text-gray-900">{score}</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-bold flex items-center gap-1 justify-end">
                <Trophy size={12} className="text-peach-400" /> Best
              </span>
              <span className="text-2xl font-bold text-gray-900">{highScore}</span>
            </div>
          </div>

          <div className="relative border-4 border-gray-900 rounded-lg shadow-sm bg-warm-50">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="block rounded"
            />
            
            {!gameStarted && !gameOver && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px]">
                <div className="text-center animate-pulse">
                  <p className="text-lg font-bold text-gray-900">Press Arrow Keys</p>
                  <p className="text-sm text-gray-500">to start</p>
                </div>
              </div>
            )}

            {gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-[2px]">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">Game Over!</h4>
                <p className="text-gray-500 mb-6">Score: {score}</p>
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-transform active:scale-95 shadow-lg"
                >
                  <RefreshCw size={18} /> Play Again
                </button>
              </div>
            )}
          </div>
          
          {/* Mobile Controls (Visual Only / Simple Touch could be added) */}
          <div className="mt-6 grid grid-cols-3 gap-2 text-gray-300 md:hidden">
            <div></div>
            <div className="flex justify-center"><ArrowUp /></div>
            <div></div>
            <div className="flex justify-center"><ArrowLeft /></div>
            <div className="flex justify-center"><ArrowDown /></div>
            <div className="flex justify-center"><ArrowRight /></div>
          </div>
        </div>

      </div>
    </div>
  );
};
