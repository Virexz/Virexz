document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('virexz-wizard-container');
  if (!container) return; // Sicherheitscheck

  const html = `
    <div class="vx-wizard">
      <div class="vx-header">
        <h2>🚀 Virexz Setup</h2>
        <p>Finde deine perfekte Website-Lösung in 4 Schritten</p>
      </div>

      <div class="vx-body">
        <div class="vx-step active" data-step="1">
          <div class="vx-title">Was ist dein Vorhaben?</div>
          <div class="vx-options" id="step1-options">
            <div class="vx-option" onclick="selectOption(this, 'vorhaben', 'sales')">
              <input type="radio" name="vorhaben" value="sales">
              <div class="vx-option-label">Verkaufen</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'vorhaben', 'leads')">
              <input type="radio" name="vorhaben" value="leads">
              <div class="vx-option-label">Leads</div>
            </div>
          </div>
          <div class="vx-input-group">
            <textarea class="vx-textarea" id="vorhaben-custom" placeholder="Oder beschreibe es hier..."></textarea>
          </div>
          <div class="vx-error" id="error-1" style="display:none; color:red;">⚠️ Bitte Auswahl treffen</div>
        </div>

        <div class="vx-step" data-step="2" style="display:none;">
          <div class="vx-title">Branche?</div>
          <div class="vx-options">
            <div class="vx-option" onclick="selectOption(this, 'industry', 'coaching')">
              <input type="radio" name="industry" value="coaching"> Coaching
            </div>
            <div class="vx-option" onclick="selectOption(this, 'industry', 'other')">
              <input type="radio" name="industry" value="other"> Andere
            </div>
          </div>
          <div id="industry-custom" style="display:none;">
            <input type="text" id="industry-text" placeholder="Welche Branche?">
          </div>
          <div class="vx-error" id="error-2" style="display:none; color:red;">⚠️ Branche wählen</div>
        </div>

        <div class="vx-step" data-step="3" style="display:none;">
             <div class="vx-title">Zielgruppe</div>
             <textarea id="target-audience" placeholder="Deine Zielgruppe..."></textarea>
             <div class="vx-error" id="error-3" style="display:none; color:red;">⚠️ Bitte ausfüllen</div>
        </div>

        <div class="vx-step" data-step="4" style="display:none;">
             <div class="vx-title">Lösung</div>
             <div class="vx-options">
                <div class="vx-option" onclick="selectOption(this, 'solution', 'landing')">
                    <input type="radio" name="solution" value="landing"> Landing Page
                </div>
                <div class="vx-option" onclick="selectOption(this, 'solution', 'funnel')">
                    <input type="radio" name="solution" value="funnel"> Funnel
                </div>
             </div>
             <div class="vx-error" id="error-4" style="display:none; color:red;">⚠️ Bitte wählen</div>
        </div>

        <div class="vx-step" id="success-screen" style="display:none;">
          <h3>✅ Fertig!</h3>
          <p id="template-name"></p>
        </div>
      </div>

      <div class="vx-footer">
        <span id="current-step">1</span> / 4
        <button id="prev-btn" onclick="vxPrev()" disabled>Zurück</button>
        <button id="next-btn" onclick="vxNext()">Weiter</button>
      </div>
    </div>
  `;

  container.innerHTML = html;
});

// GLOBALE VARIABLEN & FUNKTIONEN (Außerhalb des Listeners)
let currentStep = 1;
const totalSteps = 4;
let wizardData = {};

const templates = {
  landing: { name: '📄 Landing Page Pro' },
  funnel: { name: '🔀 Sales Funnel System' },
  shop: { name: '🛒 Online Shop' }
};

window.selectOption = function(el, name, value) {
  const parent = el.parentElement;
  parent.querySelectorAll('.vx-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  const input = el.querySelector(`input[name="${name}"]`);
  if(input) input.checked = true;

  // Spezialfall "Andere" für Step 2
  if (name === 'industry') {
    const customDiv = document.getElementById('industry-custom');
    if (customDiv) customDiv.style.display = (value === 'other') ? 'block' : 'none';
  }
};

window.vxNext = function() {
  if (!validate(currentStep)) return;

  if (currentStep < totalSteps) {
    currentStep++;
    updateUI();
  } else {
    showSuccess();
  }
};

window.vxPrev = function() {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
};

function validate(step) {
  const error = document.getElementById(`error-${step}`);
  if(error) error.style.display = 'none';

  if (step === 1) {
    const selected = document.querySelector('input[name="vorhaben"]:checked');
    const custom = document.getElementById('vorhaben-custom').value.trim();
    if (!selected && !custom) {
      if(error) error.style.display = 'block';
      return false;
    }
    wizardData.vorhaben = selected ? selected.value : custom;
  }
  
  if (step === 2) {
    const selected = document.querySelector('input[name="industry"]:checked');
    if (!selected) {
        if(error) error.style.display = 'block';
        return false;
    }
  }

  return true; // Vereinfacht für dieses Beispiel
}

function updateUI() {
  document.querySelectorAll('.vx-step').forEach(s => s.style.display = 'none');
  const activeStep = document.querySelector(`.vx-step[data-step="${currentStep}"]`);
  if(activeStep) activeStep.style.display = 'block';

  document.getElementById('current-step').textContent = currentStep;
  document.getElementById('prev-btn').disabled = (currentStep === 1);
  document.getElementById('next-btn').textContent = (currentStep === totalSteps) ? 'Fertigstellen' : 'Weiter';
}

function showSuccess() {
  document.querySelectorAll('.vx-step').forEach(s => s.style.display = 'none');
  document.getElementById('success-screen').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('prev-btn').style.display = 'none';
  
  const solution = document.querySelector('input[name="solution"]:checked')?.value || 'landing';
  document.getElementById('template-name').textContent = "Gewähltes Template: " + (templates[solution]?.name || "Standard");
}
