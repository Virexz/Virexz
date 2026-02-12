document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('virexz-wizard-container');
  
  const html = `
    <div class="vx-wizard">
      <div class="vx-header">
        <h2>🚀 Virexz Setup</h2>
        <p>Finde deine perfekte Website-Lösung in 4 Schritten</p>
      </div>

      <div class="vx-body">
        <!-- STEP 1 -->
        <div class="vx-step active" data-step="1">
          <div class="vx-title">Was ist dein Vorhaben?</div>
          <div class="vx-desc">Wähle aus, was am meisten zu dir passt</div>

          <div class="vx-options" id="step1-options">
            <div class="vx-option" onclick="selectOption(this, 'vorhaben', 'sales')">
              <input type="radio" name="vorhaben" value="sales">
              <div class="vx-option-icon">📈</div>
              <div class="vx-option-label">Verkaufen</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'vorhaben', 'leads')">
              <input type="radio" name="vorhaben" value="leads">
              <div class="vx-option-icon">🎯</div>
              <div class="vx-option-label">Leads</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'vorhaben', 'community')">
              <input type="radio" name="vorhaben" value="community">
              <div class="vx-option-icon">👥</div>
              <div class="vx-option-label">Community</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'vorhaben', 'brand')">
              <input type="radio" name="vorhaben" value="brand">
              <div class="vx-option-icon">⭐</div>
              <div class="vx-option-label">Marke</div>
            </div>
          </div>

          <div class="vx-input-group">
            <label class="vx-label">Oder erzähl uns mehr:</label>
            <textarea class="vx-textarea" id="vorhaben-custom" placeholder="Dein Vorhaben..."></textarea>
          </div>

          <div class="vx-error" id="error-1">⚠️ Bitte wähle ein Vorhaben oder beschreibe es</div>
        </div>

        <!-- STEP 2 -->
        <div class="vx-step" data-step="2">
          <div class="vx-title">In welcher Branche bist du?</div>
          <div class="vx-desc">Das hilft uns, dir die beste Lösung zu empfehlen</div>

          <div class="vx-options" id="step2-options">
            <div class="vx-option" onclick="selectOption(this, 'industry', 'coaching')">
              <input type="radio" name="industry" value="coaching">
              <div class="vx-option-icon">🎓</div>
              <div class="vx-option-label">Coaching</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'industry', 'ecommerce')">
              <input type="radio" name="industry" value="ecommerce">
              <div class="vx-option-icon">🛍️</div>
              <div class="vx-option-label">Shop</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'industry', 'services')">
              <input type="radio" name="industry" value="services">
              <div class="vx-option-icon">💼</div>
              <div class="vx-option-label">Services</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'industry', 'agency')">
              <input type="radio" name="industry" value="agency">
              <div class="vx-option-icon">🎨</div>
              <div class="vx-option-label">Agentur</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'industry', 'other')">
              <input type="radio" name="industry" value="other">
              <div class="vx-option-icon">➕</div>
              <div class="vx-option-label">Andere</div>
            </div>
          </div>

          <div class="vx-custom-input" id="industry-custom">
            <input type="text" class="vx-input" id="industry-text" placeholder="z.B. Fitness, Mode, Immobilien...">
          </div>

          <div class="vx-error" id="error-2">⚠️ Bitte wähle eine Branche</div>
        </div>

        <!-- STEP 3 -->
        <div class="vx-step" data-step="3">
          <div class="vx-title">Wer ist deine Zielgruppe?</div>
          <div class="vx-desc">Beschreib die Menschen, die du erreichen möchtest</div>

          <div class="vx-input-group">
            <label class="vx-label">Deine Zielgruppe:</label>
            <textarea class="vx-textarea" id="target-audience" placeholder="z.B. Frauen 25-45 Jahre, die ihr Business ausbauen möchten..."></textarea>
          </div>

          <div class="vx-input-group">
            <label class="vx-label">Wo findest du sie?</label>
            <div class="vx-checkboxes">
              <div class="vx-checkbox">
                <input type="checkbox" id="ch-social" name="channels" value="social">
                <label for="ch-social">📱 Social Media (Instagram, Facebook, LinkedIn)</label>
              </div>
              <div class="vx-checkbox">
                <input type="checkbox" id="ch-email" name="channels" value="email">
                <label for="ch-email">📧 Email Marketing</label>
              </div>
              <div class="vx-checkbox">
                <input type="checkbox" id="ch-seo" name="channels" value="seo">
                <label for="ch-seo">🔍 Google / SEO</label>
              </div>
              <div class="vx-checkbox">
                <input type="checkbox" id="ch-ads" name="channels" value="ads">
                <label for="ch-ads">📢 Bezahlte Werbung</label>
              </div>
            </div>
          </div>

          <div class="vx-error" id="error-3">⚠️ Bitte beschreibe deine Zielgruppe</div>
        </div>

        <!-- STEP 4 -->
        <div class="vx-step" data-step="4">
          <div class="vx-title">Was möchtest du aufbauen?</div>
          <div class="vx-desc">Wähle die Lösung, die am besten zu dir passt</div>

          <div class="vx-options" id="step4-options">
            <div class="vx-option" onclick="selectOption(this, 'solution', 'landing')">
              <input type="radio" name="solution" value="landing">
              <div class="vx-option-icon">📄</div>
              <div class="vx-option-label">Landing Page</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'solution', 'funnel')">
              <input type="radio" name="solution" value="funnel">
              <div class="vx-option-icon">🔀</div>
              <div class="vx-option-label">Sales Funnel</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'solution', 'shop')">
              <input type="radio" name="solution" value="shop">
              <div class="vx-option-icon">🛒</div>
              <div class="vx-option-label">Online Shop</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'solution', 'community')">
              <input type="radio" name="solution" value="community">
              <div class="vx-option-icon">👥</div>
              <div class="vx-option-label">Community</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'solution', 'blog')">
              <input type="radio" name="solution" value="blog">
              <div class="vx-option-icon">✍️</div>
              <div class="vx-option-label">Blog</div>
            </div>
            <div class="vx-option" onclick="selectOption(this, 'solution', 'website')">
              <input type="radio" name="solution" value="website">
              <div class="vx-option-icon">🌐</div>
              <div class="vx-option-label">Website</div>
            </div>
          </div>

          <div class="vx-error" id="error-4">⚠️ Bitte wähle eine Lösung</div>
        </div>

        <!-- SUCCESS SCREEN -->
        <div class="vx-step vx-success" id="success-screen" data-step="success">
          <div class="vx-success-icon">✅</div>
          <h3>Perfekt!</h3>
          <p>Dein Setup ist abgeschlossen</p>
          
          <div class="vx-template-info">
            <strong>📋 Dein Template:</strong>
            <span id="template-name">Loading...</span>
          </div>

          <p style="color: var(--text-light); font-size: 13px;">
            Klick unten um deine Website zu bearbeiten
          </p>
        </div>
      </div>

      <div class="vx-footer">
        <div class="vx-progress">
          <span id="current-step">1</span> / <span id="total-steps">4</span>
        </div>
        <div class="vx-buttons">
          <button class="vx-btn vx-btn-secondary" id="prev-btn" onclick="vxPrev()" disabled>← Zurück</button>
          <button class="vx-btn vx-btn-primary" id="next-btn" onclick="vxNext()">Weiter →</button>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
  initWizard();
});

let currentStep = 1;
const totalSteps = 4;
let wizardData = {};

const templates = {
  landing: { name: '📄 Landing Page Pro - Perfekt für schnelle Conversions' },
  funnel: { name: '🔀 Sales Funnel System - Optimiert für Verkaufsprozesse' },
  shop: { name: '🛒 Online Shop - Mit Zahlungssystem' },
  community: { name: '👥 Community Hub - Für Coaches & Berater' },
  blog: { name: '✍️ Blog & Portfolio - Um deine Expertise zu zeigen' },
  website: { name: '🌐 Complete Website - Alles in einem' }
};

function initWizard() {
  // Event Listener für "Andere" Option bei Branche
  const industryOther = document.querySelector('input[value="other"][name="industry"]');
  if (industryOther) {
    industryOther.parentElement.addEventListener('click', function() {
      const customInput = document.getElementById('industry-custom');
      if (customInput.classList.contains('show')) {
        customInput.classList.remove('show');
      } else {
        customInput.classList.add('show');
        document.getElementById('industry-text').focus();
      }
    });
  }
}

function selectOption(el, name, value) {
  const parent = el.parentElement;
  parent.querySelectorAll('.vx-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector(`input[name="${name}"]`).checked = true;
}

function validate(step) {
  const error = document.getElementById(`error-${step}`);
  error.classList.remove('show');

  if (step === 1) {
    const selected = document.querySelector('input[name="vorhaben"]:checked');
    const custom = document.getElementById('vorhaben-custom').value.trim();
    if (!selected && !custom) {
      error.classList.add('show');
      return false;
    }
    wizardData.vorhaben = selected ? selected.value : custom;
  }

  if (step === 2) {
    const selected = document.querySelector('input[name="industry"]:checked');
    const customText = document.getElementById('industry-text').value.trim();
    if (!selected) {
      error.classList.add('show');
      return false;
    }
    if (selected.value === 'other' && !customText) {
      error.classList.add('show');
      return false;
    }
    wizardData.industry = selected.value === 'other' ? customText : selected.value;
  }

  if (step === 3) {
    const audience = document.getElementById('target-audience').value.trim();
    if (!audience) {
      error.classList.add('show');
      return false;
    }
    wizardData.audience = audience;
    wizardData.channels = Array.from(document.querySelectorAll('input[name="channels"]:checked')).map(ch => ch.value);
  }

  if (step === 4) {
    const selected = document.querySelector('input[name="solution"]:checked');
    if (!selected) {
      error.classList.add('show');
      return false;
    }
    wizardData.solution = selected.value;
  }

  return true;
}

function vxNext() {
  if (!validate(currentStep)) return;

  if (currentStep < totalSteps) {
    currentStep++;
    updateUI();
  } else {
    showSuccess();
  }
}

function vxPrev() {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
}

function updateUI() {
  document.querySelectorAll('.vx-step').forEach(step => step.classList.remove('active'));
  document.querySelector(`.vx-step[data-step="${currentStep}"]`).classList.add('active');
  document.getElementById('current-step').textContent = currentStep;
  document.getElementById('prev-btn').disabled = currentStep === 1;
  document.getElementById('next-btn').textContent = currentStep === totalSteps ? '✅ Fertigstellen' : 'Weiter →';
}

function showSuccess() {
  document.querySelectorAll('.vx-step').forEach(step => step.classList.remove('active'));
  document.getElementById('success-screen').classList.add('active');
  
  const template = templates[wizardData.solution] || templates.landing;
  document.getElementById('template-name').textContent = template.name;
  
  document.getElementById('prev-btn').style.display = 'none';
  document.getElementById('next-btn').textContent = '🚀 Jetzt starten';
  document.getElementById('next-btn').onclick = function() {
    console.log('Deine Daten:', wizardData);
    alert('✅ Erfolgreich!\n\nTemplate: ' + template.name + '\n\nDu wirst zu deinem Editor weitergeleitet...');
    // Hier würde die echte Weiterleitung stattfinden
  };
  document.getElementById('current-step').textContent = '✓';
let currentStep = 1;
const totalSteps = 4;
let wizardData = {};

const templates = {
  landing: { name: '📄 Landing Page Pro - Perfekt für schnelle Conversions' },
  funnel: { name: '🔀 Sales Funnel System - Optimiert für Verkaufsprozesse' },
  shop: { name: '🛒 Online Shop - Mit Zahlungssystem' },
  community: { name: '👥 Community Hub - Für Coaches & Berater' },
  blog: { name: '✍️ Blog & Portfolio - Um deine Expertise zu zeigen' },
  website: { name: '🌐 Complete Website - Alles in einem' }
};

function initWizard() {
  // Event Listener für "Andere" Option bei Branche
  const industryOther = document.querySelector('input[value="other"][name="industry"]');
  if (industryOther) {
    industryOther.parentElement.addEventListener('click', function() {
      const customInput = document.getElementById('industry-custom');
      if (customInput.classList.contains('show')) {
        customInput.classList.remove('show');
      } else {
        customInput.classList.add('show');
        document.getElementById('industry-text').focus();
      }
    });
  }
}

function selectOption(el, name, value) {
  const parent = el.parentElement;
  parent.querySelectorAll('.vx-option').forEach(opt => opt.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector(`input[name="${name}"]`).checked = true;
}

function validate(step) {
  const error = document.getElementById(`error-${step}`);
  error.classList.remove('show');

  if (step === 1) {
    const selected = document.querySelector('input[name="vorhaben"]:checked');
    const custom = document.getElementById('vorhaben-custom').value.trim();
    if (!selected && !custom) {
      error.classList.add('show');
      return false;
    }
    wizardData.vorhaben = selected ? selected.value : custom;
  }

  if (step === 2) {
    const selected = document.querySelector('input[name="industry"]:checked');
    const customText = document.getElementById('industry-text').value.trim();
    if (!selected) {
      error.classList.add('show');
      return false;
    }
    if (selected.value === 'other' && !customText) {
      error.classList.add('show');
      return false;
    }
    wizardData.industry = selected.value === 'other' ? customText : selected.value;
  }

  if (step === 3) {
    const audience = document.getElementById('target-audience').value.trim();
    if (!audience) {
      error.classList.add('show');
      return false;
    }
    wizardData.audience = audience;
    wizardData.channels = Array.from(document.querySelectorAll('input[name="channels"]:checked')).map(ch => ch.value);
  }

  if (step === 4) {
    const selected = document.querySelector('input[name="solution"]:checked');
    if (!selected) {
      error.classList.add('show');
      return false;
    }
    wizardData.solution = selected.value;
  }

  return true;
}

function vxNext() {
  if (!validate(currentStep)) return;

  if (currentStep < totalSteps) {
    currentStep++;
    updateUI();
  } else {
    showSuccess();
  }
}

function vxPrev() {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
}

function updateUI() {
  document.querySelectorAll('.vx-step').forEach(step => step.classList.remove('active'));
  document.querySelector(`.vx-step[data-step="${currentStep}"]`).classList.add('active');
  document.getElementById('current-step').textContent = currentStep;
  document.getElementById('prev-btn').disabled = currentStep === 1;
  document.getElementById('next-btn').textContent = currentStep === totalSteps ? '✅ Fertigstellen' : 'Weiter →';
}

function showSuccess() {
  document.querySelectorAll('.vx-step').forEach(step => step.classList.remove('active'));
  document.getElementById('success-screen').classList.add('active');
  
  const template = templates[wizardData.solution] || templates.landing;
  document.getElementById('template-name').textContent = template.name;
  
  document.getElementById('prev-btn').style.display = 'none';
  document.getElementById('next-btn').textContent = '🚀 Jetzt starten';
 document.getElementById('next-btn').onclick = function() {
  console.log('Deine Daten:', wizardData);
  alert('✅ Erfolgreich!\n\nTemplate: ' + template.name);
  // Hier würde die echte Weiterleitung stattfinden
};

document.getElementById('current-step').textContent = '✓';
});
