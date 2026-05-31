const API = '/api/jobs';

async function loadJobs() {
  const res = await fetch(API);
  const jobs = await res.json();
  renderJobs(jobs);
  updateStats(jobs);
}

function renderJobs(jobs) {
  const list = document.getElementById('jobList');
  if (jobs.length === 0) {
    list.innerHTML = '<div class="empty">No applications yet. Add your first one above! 👆</div>';
    return;
  }
  list.innerHTML = jobs.map(job => `
    <div class="job-card ${job.status}">
      <div class="job-info">
        <div class="company">${job.company}</div>
        <div class="role">${job.role}</div>
        ${job.notes ? `<div class="notes">📝 ${job.notes}</div>` : ''}
        <div class="date">Applied: ${new Date(job.appliedDate).toLocaleDateString()}</div>
      </div>
      <div class="job-actions">
        <span class="status-badge badge-${job.status}">${job.status}</span>
        <select class="status-select" onchange="updateStatus('${job._id}', this.value)">
          <option value="Applied"   ${job.status==='Applied'   ? 'selected':''}>Applied</option>
          <option value="Interview" ${job.status==='Interview' ? 'selected':''}>Interview</option>
          <option value="Offered"   ${job.status==='Offered'   ? 'selected':''}>Offered</option>
          <option value="Rejected"  ${job.status==='Rejected'  ? 'selected':''}>Rejected</option>
        </select>
        <button class="btn-delete" onclick="deleteJob('${job._id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function updateStats(jobs) {
  document.getElementById('total').textContent = jobs.length;
  document.getElementById('interview').textContent = jobs.filter(j => j.status === 'Interview').length;
  document.getElementById('offered').textContent = jobs.filter(j => j.status === 'Offered').length;
  document.getElementById('rejected').textContent = jobs.filter(j => j.status === 'Rejected').length;
}

async function addJob() {
  const company = document.getElementById('company').value.trim();
  const role    = document.getElementById('role').value.trim();
  const status  = document.getElementById('status').value;
  const notes   = document.getElementById('notes').value.trim();

  if (!company || !role) {
    showToast('Please fill in Company and Role ⚠️');
    return;
  }

  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ company, role, status, notes })
  });

  document.getElementById('company').value = '';
  document.getElementById('role').value = '';
  document.getElementById('notes').value = '';

  showToast('Application added ✅');
  loadJobs();
}

async function updateStatus(id, status) {
  await fetch(`${API}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  });
  showToast('Status updated ✅');
  loadJobs();
}

async function deleteJob(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  showToast('Application removed 🗑️');
  loadJobs();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

loadJobs();