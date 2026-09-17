/* Client-side prototype state. Replace with a server-side auth provider and database before production. */
const RahApp = (() => {
  const key = 'rah-user';
  const read = () => JSON.parse(localStorage.getItem(key) || 'null');
  const write = user => localStorage.setItem(key, JSON.stringify(user));
  const get = () => read();
  const login = (name, email) => write({name: name || 'Rah student', email, saved: read()?.saved || [], applications: read()?.applications || {}});
  const logout = () => localStorage.removeItem(key);
  const toggleSaved = id => { const u=read(); if(!u) return false; u.saved=u.saved||[]; u.saved.includes(id)?u.saved=u.saved.filter(x=>x!==id):u.saved.push(id); write(u); return u.saved.includes(id); };
  const setStatus = (id,status) => { const u=read(); if(!u) return; u.applications=u.applications||{}; u.applications[id]={...(u.applications[id]||{}),status}; if(!u.saved.includes(id))u.saved.push(id);write(u); };
  const rootPrefix = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const depth = path.endsWith('/') ? segments.length : segments.length - 1;
    return '../'.repeat(Math.max(depth, 0));
  };
  const nav = () => { const u=read(); document.querySelectorAll('[data-auth-nav]').forEach(el=>{ const root=rootPrefix(); el.innerHTML=u ? `<details class="account-menu"><summary class="nav-cta">${u.name.split(' ')[0]} ▾</summary><div class="menu-popover"><a href="${root}dashboard.html">My Profile & dashboard</a><a href="${root}dashboard.html">Saved Scholarships</a><a href="${root}dashboard.html">My Applications</a><a href="${root}profile.html">My Preferences</a><a href="${root}profile.html">Settings</a><button type="button" data-logout>Log Out</button></div></details>` : `<a class="nav-cta" href="${root}login.html">Login / Sign Up</a>`; }); document.querySelectorAll('[data-logout]').forEach(b=>b.addEventListener('click',()=>{logout();location.href=rootPrefix()+'index.html'})); };
  return {get,login,logout,toggleSaved,setStatus,nav};
})();
document.addEventListener('DOMContentLoaded', RahApp.nav);
