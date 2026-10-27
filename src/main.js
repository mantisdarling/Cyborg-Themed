// TECHFEST IIT BOMBAY CYBORG CONTROLLER
// Robotic Ferrofluid Simulation. High Energy Manga Animations. Zero slashes. Zero dashes.

const DIAGNOSTIC_MODES = {
  skeleton: {
    id: 'skeleton',
    name: 'TITANIUM SKELETON',
    subtitle: 'OSSEOINTEGRATED GRADE 5 TITANIUM',
    metrics: [
      { label: 'TENSILE STRENGTH', val: '4800 MPA' },
      { label: 'CHASSIS MASS', val: '38.5 KG' },
      { label: 'IMPACT YIELD', val: '18.5 KN' },
      { label: 'ARTICULAR JOINTS', val: '14 SPHERICAL' }
    ],
    svg: `
      <!-- Titanium Endoskeleton in Stark White Linework -->
      <g stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="square">
        <!-- Cranial Titanium Armor Cage -->
        <path d="M 170 35 C 135 35 125 65 125 100 C 125 130 145 150 170 155 C 195 150 215 130 215 100 C 215 65 205 35 170 35 Z" stroke-width="3" fill="#000000" />
        
        <!-- Ocular Sensor Ports -->
        <rect x="145" y="85" width="16" height="10" fill="#FFFFFF" />
        <rect x="180" y="85" width="16" height="10" fill="#FFFFFF" />
        <path d="M 152 130 L 170 142 L 188 130" stroke-width="2.2" />

        <!-- Cervical Vertebrae Stack -->
        <rect x="160" y="158" width="20" height="7" fill="#FFFFFF" />
        <rect x="158" y="169" width="24" height="7" fill="#FFFFFF" />
        <rect x="156" y="180" width="28" height="7" fill="#FFFFFF" />

        <!-- Clavicle Structural Spar -->
        <line x1="115" y1="195" x2="225" y2="195" stroke-width="4.5" />
        <circle cx="115" cy="195" r="6" fill="#FFFFFF" />
        <circle cx="225" cy="195" r="6" fill="#FFFFFF" />

        <!-- Central Spinal Rod -->
        <line x1="170" y1="185" x2="170" y2="330" stroke-width="5" />

        <!-- Ribcage Axial Struts -->
        <line x1="140" y1="220" x2="200" y2="220" stroke-width="3" />
        <line x1="135" y1="240" x2="205" y2="240" stroke-width="3" />
        <line x1="140" y1="260" x2="200" y2="260" stroke-width="3" />
        <line x1="150" y1="280" x2="190" y2="280" stroke-width="3" />

        <!-- Left Arm Titanium Bone -->
        <line x1="115" y1="195" x2="85" y2="270" stroke-width="4" />
        <circle cx="85" cy="270" r="5" fill="#000000" stroke="#FFFFFF" stroke-width="3" />
        <line x1="85" y1="270" x2="70" y2="345" stroke-width="3" />

        <!-- Right Arm Articulated Drive -->
        <line x1="225" y1="195" x2="255" y2="270" stroke-width="4" />
        <circle cx="255" cy="270" r="5" fill="#000000" stroke="#FFFFFF" stroke-width="3" />
        <line x1="255" y1="270" x2="270" y2="345" stroke-width="3" />

        <!-- Pelvic Girdle Hub -->
        <path d="M 135 330 L 170 365 L 205 330 Z" fill="#181818" stroke-width="3.5" />

        <!-- Technical Annotation Callout -->
        <line x1="170" y1="250" x2="285" y2="250" stroke="#777777" stroke-width="1" stroke-dasharray="2 2" />
        <circle cx="170" cy="250" r="3" fill="#FFFFFF" />
        <rect x="285" y="240" width="48" height="20" fill="#FFFFFF" />
        <text x="309" y="254" fill="#000000" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle" font-weight="700">TITANIUM</text>
      </g>
    `
  },

  musculature: {
    id: 'musculature',
    name: 'CARBON MUSCULATURE',
    subtitle: 'AGONIST ANTAGONIST FASCICLES',
    metrics: [
      { label: 'CONTRACTION SPEED', val: '0.12 MS' },
      { label: 'KINETIC MULTIPLIER', val: '14.2X' },
      { label: 'ACTIVE FIBERS', val: '128000 STRANDS' },
      { label: 'DYNAMIC YIELD', val: '94.2 PERCENT' }
    ],
    svg: `
      <!-- Carbon Fascicle Musculature Architecture -->
      <g stroke="#FFFFFF" stroke-width="2" fill="none">
        <!-- Cranial Muscle Bands -->
        <path d="M 135 55 Q 170 75 205 55" stroke-width="2.5" />
        <path d="M 130 80 Q 170 100 210 80" stroke-width="2.5" />
        <path d="M 140 105 Q 170 125 200 105" stroke-width="2.5" />

        <!-- Neck Cables -->
        <line x1="145" y1="130" x2="160" y2="175" stroke-width="3" />
        <line x1="195" y1="130" x2="180" y2="175" stroke-width="3" />

        <!-- Pectoral Fascicle Strands -->
        <path d="M 165 185 C 140 190 115 210 115 240 C 115 260 140 265 165 260" stroke-width="2" fill="#121212" />
        <line x1="120" y1="210" x2="160" y2="240" stroke-width="1.5" />
        <line x1="125" y1="225" x2="165" y2="250" stroke-width="1.5" />

        <path d="M 175 185 C 200 190 225 210 225 240 C 225 260 200 265 175 260" stroke-width="2" fill="#121212" />
        <line x1="220" y1="210" x2="180" y2="240" stroke-width="1.5" />
        <line x1="215" y1="225" x2="175" y2="250" stroke-width="1.5" />

        <!-- Abdominal Matrix Grid -->
        <rect x="145" y="270" width="20" height="22" stroke-width="1.5" fill="#000000" />
        <rect x="175" y="270" width="20" height="22" stroke-width="1.5" fill="#000000" />
        <rect x="145" y="298" width="20" height="22" stroke-width="1.5" fill="#000000" />
        <rect x="175" y="298" width="20" height="22" stroke-width="1.5" fill="#000000" />

        <!-- Bicep Hydraulic Piston Struts -->
        <path d="M 110 210 L 80 275 L 70 340" stroke-width="3" />
        <line x1="105" y1="225" x2="85" y2="285" stroke-width="2" />
        <path d="M 230 210 L 260 275 L 270 340" stroke-width="3" />
        <line x1="235" y1="225" x2="255" y2="285" stroke-width="2" />

        <!-- Annotation Callout -->
        <line x1="80" y1="275" x2="20" y2="250" stroke="#777777" stroke-width="1" stroke-dasharray="2 2" />
        <circle cx="80" cy="275" r="3" fill="#FFFFFF" />
        <rect x="5" y="240" width="55" height="20" fill="#FFFFFF" />
        <text x="32" y="254" fill="#000000" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle" font-weight="700">MYOFIBER</text>
      </g>
    `
  },

  neural: {
    id: 'neural',
    name: 'NEURAL BUS INTERCEPT',
    subtitle: 'INTRACORTICAL M1 MICROARRAY',
    metrics: [
      { label: 'CLOCK RATE', val: '4.20 GHZ' },
      { label: 'LOOP LATENCY', val: '0.38 MS' },
      { label: 'RECORDING AXONS', val: '1024 CHANNELS' },
      { label: 'SECURITY ENCLAVE', val: 'ED25519 SIGNED' }
    ],
    svg: `
      <!-- Synaptic Neural Bus Architecture in White Ink -->
      <g stroke="#FFFFFF" stroke-width="2" fill="none">
        <!-- Cranial Neural Processor Hub -->
        <circle cx="170" cy="95" r="25" stroke-width="3" fill="#000000" />
        <rect x="158" y="83" width="24" height="24" fill="#FFFFFF" />
        
        <!-- Cortical Array Synaptic Radiations -->
        <path d="M 170 67 L 150 50" stroke-dasharray="2 2" />
        <path d="M 170 67 L 190 50" stroke-dasharray="2 2" />
        <path d="M 142 95 L 120 95" stroke-dasharray="2 2" />
        <path d="M 198 95 L 220 95" stroke-dasharray="2 2" />

        <!-- Central Spinal Optical Trunk -->
        <path d="M 170 123 L 170 350" stroke-width="4" stroke-dasharray="4 2" />
        <circle cx="170" cy="165" r="3.5" fill="#FFFFFF" />
        <circle cx="170" cy="215" r="3.5" fill="#FFFFFF" />
        <circle cx="170" cy="265" r="3.5" fill="#FFFFFF" />
        <circle cx="170" cy="315" r="3.5" fill="#FFFFFF" />

        <!-- Efferent Axonal Branching to Limbs -->
        <path d="M 170 185 Q 120 195 85 275" stroke-width="2" stroke-dasharray="3 3" />
        <path d="M 170 185 Q 220 195 255 275" stroke-width="2" stroke-dasharray="3 3" />
        <circle cx="85" cy="275" r="4.5" fill="#FFFFFF" />
        <circle cx="255" cy="275" r="4.5" fill="#FFFFFF" />

        <line x1="85" y1="275" x2="70" y2="350" stroke-width="2" stroke-dasharray="2 2" />
        <line x1="255" y1="275" x2="270" y2="350" stroke-width="2" stroke-dasharray="2 2" />

        <!-- Callout -->
        <line x1="170" y1="95" x2="60" y2="65" stroke="#777777" stroke-width="1" stroke-dasharray="2 2" />
        <circle cx="170" cy="95" r="3" fill="#FFFFFF" />
        <rect x="15" y="55" width="50" height="20" fill="#FFFFFF" />
        <text x="40" y="69" fill="#000000" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle" font-weight="700">SYNAPSE</text>
      </g>
    `
  },

  dermal: {
    id: 'dermal',
    name: 'SYNTHETIC DERMAL SHIELD',
    subtitle: 'CUTANEOUS ELECTROTACILE MATRIX',
    metrics: [
      { label: 'TACTILE NODES', val: '4096 CELLS' },
      { label: 'THERMAL SHIELD', val: '280 CELSIUS' },
      { label: 'TENSILE LIMIT', val: '840 MPA' },
      { label: 'ARMOR CLASS', val: 'LEVEL 4 BALLISTIC' }
    ],
    svg: `
      <!-- Synthetic Dermal Armor in White Ink -->
      <g stroke="#FFFFFF" stroke-width="2.5" fill="none">
        <!-- Smooth Outer Cranial Shell -->
        <path d="M 170 35 C 130 35 115 65 115 100 C 115 140 140 160 170 165 C 200 160 225 140 225 100 C 225 65 210 35 170 35 Z" fill="#000000" stroke-width="3" />
        <!-- Micro Sensor Array Grid -->
        <path d="M 130 75 Q 170 85 210 75" stroke-dasharray="3 3" />
        <path d="M 125 105 Q 170 117 215 105" stroke-dasharray="3 3" />
        <path d="M 135 135 Q 170 145 205 135" stroke-dasharray="3 3" />

        <!-- Torso Outer Plating -->
        <path d="M 135 175 L 105 210 L 105 330 L 145 370 L 195 370 L 235 330 L 235 210 L 205 175 Z" fill="#000000" stroke-width="3" />
        <!-- Screentone Cross Hatching On Plates -->
        <line x1="120" y1="230" x2="220" y2="230" stroke="#FFFFFF" stroke-width="1.5" />
        <line x1="125" y1="250" x2="215" y2="250" stroke="#FFFFFF" stroke-width="1.5" />
        <line x1="135" y1="270" x2="205" y2="270" stroke="#FFFFFF" stroke-width="1.5" />
        <line x1="150" y1="290" x2="190" y2="290" stroke="#FFFFFF" stroke-width="1.5" />

        <!-- Arms Contour -->
        <path d="M 105 210 L 65 280 L 55 365" stroke-width="2.5" />
        <path d="M 235 210 L 275 280 L 285 365" stroke-width="2.5" />

        <!-- Callout -->
        <line x1="235" y1="240" x2="315" y2="210" stroke="#777777" stroke-width="1" stroke-dasharray="2 2" />
        <circle cx="235" cy="240" r="3" fill="#FFFFFF" />
        <rect x="315" y="200" width="48" height="20" fill="#FFFFFF" />
        <text x="339" y="214" fill="#000000" font-family="'JetBrains Mono', monospace" font-size="8" text-anchor="middle" font-weight="700">DERMAL</text>
      </g>
    `
  }
};

let activeMode = 'skeleton';

function setDiagnosticMode(modeId) {
  if (!DIAGNOSTIC_MODES[modeId]) return;
  activeMode = modeId;
  const mode = DIAGNOSTIC_MODES[modeId];

  document.querySelectorAll('.modeSelectBtn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === modeId);
  });

  const viewport = document.getElementById('schematicViewport');
  if (viewport) {
    viewport.style.opacity = '0.3';
    setTimeout(() => {
      viewport.innerHTML = mode.svg;
      viewport.style.opacity = '1';
    }, 90);
  }

  const nameEl = document.getElementById('diagNameText');
  if (nameEl) nameEl.textContent = mode.name;

  const readout = document.getElementById('telemetryReadout');
  if (readout && mode.metrics) {
    readout.innerHTML = mode.metrics.map(m => `
      <div class="telemetryBox">
        <div class="telemetryBoxLabel">${m.label}</div>
        <div class="telemetryBoxVal">${m.val}</div>
      </div>
    `).join('');
  }
}

// Web Audio API Mechanical Sound Synthesizer
let audioCtx = null;
function playClangSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(460, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.22);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.28);
  } catch (err) {
    // Non fatal if audio blocked by browser policy
  }
}

// --------------------------------------------------------------------------
// ROBOTIC FLUID / FERROFLUID INTERACTIVE CANVAS ENGINE
// Viscous Magnetic Fluid Currents with Microdroplets and Magnetic Flux Lines
// --------------------------------------------------------------------------
function initRoboticFluidSimulation() {
  const canvas = document.getElementById('roboticFluidCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Mouse interaction state
  let mouse = {
    x: width * 0.5,
    y: height * 0.5,
    targetX: width * 0.5,
    targetY: height * 0.5,
    active: false
  };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
  });

  // Viscous fluid magnetic node clusters (ferrofluid globules)
  const nodeCount = 18;
  const fluidNodes = [];

  for (let i = 0; i < nodeCount; i++) {
    fluidNodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      baseRadius: 65 + Math.random() * 85,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.015 + Math.random() * 0.02,
      spikes: 8 + Math.floor(Math.random() * 8)
    });
  }

  // Nano fluid particles streaming along hydraulic channels
  const particleCount = 42;
  const nanoParticles = [];
  for (let p = 0; p < particleCount; p++) {
    nanoParticles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.6 + Math.random() * 1.4,
      size: 1.5 + Math.random() * 2.5,
      angle: Math.random() * Math.PI * 2
    });
  }

  let time = 0;

  function renderRoboticFluid() {
    time += 0.018;

    // Smooth lerp mouse tracking
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    ctx.clearRect(0, 0, width, height);

    // Deep ink background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // 1. Draw Magnetic Flux Lines in pure monochrome ink
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;

    for (let r = 100; r < 600; r += 120) {
      ctx.beginPath();
      const waveOffset = Math.sin(time + r * 0.01) * 20;
      ctx.arc(mouse.x, mouse.y, r + waveOffset, 0, Math.PI * 2);
      ctx.stroke();
    }

    // 2. Update and render viscous robotic ferrofluid nodes
    fluidNodes.forEach((node, idx) => {
      node.phase += node.phaseSpeed;
      node.x += node.vx + Math.sin(time * 0.5 + idx) * 0.4;
      node.y += node.vy + Math.cos(time * 0.5 + idx) * 0.4;

      // Soft bounce against boundaries
      if (node.x < -100) node.x = width + 100;
      if (node.x > width + 100) node.x = -100;
      if (node.y < -100) node.y = height + 100;
      if (node.y > height + 100) node.y = -100;

      // Magnetic attraction to cursor
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 380 && dist > 1) {
        node.x += (dx / dist) * 0.8;
        node.y += (dy / dist) * 0.8;
      }

      // Draw morphing ferrofluid blob with robotic magnetic spikes
      ctx.save();
      ctx.translate(node.x, node.y);

      ctx.beginPath();
      const numPoints = 36;
      for (let p = 0; p <= numPoints; p++) {
        const theta = (p / numPoints) * Math.PI * 2;
        // Spiky ferrofluid profile
        const harmonic1 = Math.sin(theta * node.spikes + node.phase) * 14;
        const harmonic2 = Math.cos(theta * 3 + time) * 8;
        const r = node.baseRadius + harmonic1 + harmonic2;

        const px = Math.cos(theta) * r;
        const py = Math.sin(theta) * r;

        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();

      // Fluid interior: deep translucent graphite ink
      ctx.fillStyle = 'rgba(12, 12, 12, 0.8)';
      ctx.fill();

      // Viscous liquid edge: crisp white line with dynamic intensity
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Secondary inner meniscus tension ring
      ctx.beginPath();
      ctx.arc(0, 0, node.baseRadius * 0.45, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    });

    // 3. Draw streaming hydraulic nano particles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    nanoParticles.forEach((p) => {
      p.y -= p.speed;
      p.x += Math.sin(p.y * 0.015 + time) * 0.7;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Subtle connecting hydraulic filaments between nearby nodes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < fluidNodes.length; i++) {
      for (let j = i + 1; j < fluidNodes.length; j++) {
        const dist = Math.hypot(fluidNodes[i].x - fluidNodes[j].x, fluidNodes[i].y - fluidNodes[j].y);
        if (dist < 260) {
          ctx.beginPath();
          ctx.moveTo(fluidNodes[i].x, fluidNodes[i].y);
          ctx.lineTo(fluidNodes[j].x, fluidNodes[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(renderRoboticFluid);
  }

  renderRoboticFluid();
}

// Live Oscilloscope Bio-Electric Pulse Stream Canvas
function initOscilloscope() {
  const canvas = document.getElementById('nervePulseCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.parentElement.clientHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let phase = 0;

  function drawNerveStream() {
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    ctx.clearRect(0, 0, w, h);

    // Baseline axis
    ctx.strokeStyle = '#222222';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // Bio-electric action potential pulse wave
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.6;
    ctx.beginPath();

    for (let x = 0; x < w; x++) {
      const cycle = (x + phase * 75) % 180;
      let spike = 0;
      if (cycle > 75 && cycle < 98) {
        spike = -Math.sin((cycle - 75) / 23 * Math.PI) * (h * 0.38);
      }
      const baselineHum = Math.sin((x * 0.05) + phase) * 2.5;
      const y = (h / 2) + spike + baselineHum;

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    phase += 0.035;
    requestAnimationFrame(drawNerveStream);
  }

  drawNerveStream();
}

// Live Coordinate and Clock Ticker
function initCoordinateTicker() {
  const clockEl = document.getElementById('coordinateClock');
  if (!clockEl) return;

  setInterval(() => {
    const deg = (140 + Math.sin(Date.now() * 0.002) * 6).toFixed(1);
    const sync = (99.6 + Math.cos(Date.now() * 0.003) * 0.3).toFixed(1);
    clockEl.textContent = `ROTATION ${deg} DEG • SYNC ${sync} PERCENT`;
  }, 120);
}

function initDiagnosticController() {
  const modeButtons = document.querySelectorAll('.modeSelectBtn');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setDiagnosticMode(btn.dataset.mode);
      playClangSound();
    });
  });

  const soundBadge = document.getElementById('soundBadge');
  if (soundBadge) {
    soundBadge.addEventListener('click', playClangSound);
  }

  initRoboticFluidSimulation();
  initOscilloscope();
  initCoordinateTicker();
  setDiagnosticMode('skeleton');
}

document.addEventListener('DOMContentLoaded', initDiagnosticController);
