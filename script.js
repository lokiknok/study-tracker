
let xp=Number(localStorage.getItem('xp')||0);
update();

function saveHours(){
let h=Number(document.getElementById('hours').value||0);
localStorage.setItem('hours',h);
xp+=h*10;
localStorage.setItem('xp',xp);
document.getElementById('hoursOut').innerText=h+' hours saved';
document.getElementById('progress').value=Math.min(h*10,100);
update();
}

function saveGoal(){
localStorage.setItem('goal',document.getElementById('goal').value);
}

function update(){
document.getElementById('xp').innerText='XP: '+xp;
document.getElementById('level').innerText='Level '+Math.floor(xp/100+1);
document.getElementById('badge').innerText=xp>500?'🏆 Scholar':'🎯 Beginner';
document.getElementById('streak').innerText='🔥 '+Math.floor(xp/50)+' day streak';
}

function quote(){
const q=[
'Small steps every day',
'Discipline beats motivation',
'Focus creates success',
'Study now shine later'
];
document.getElementById('quote').innerText=q[Math.floor(Math.random()*q.length)];
}

function toggleMode(){
document.body.classList.toggle('dark');
}

function exportData(){
const data={xp,hours:localStorage.getItem('hours')};
const a=document.createElement('a');
a.href='data:text/json,'+encodeURIComponent(JSON.stringify(data));
a.download='study-data.json';
a.click();
}

function startTimer(){
let t=1500;
let el=document.getElementById('timer');
let i=setInterval(()=>{
t--;
el.innerText=Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
if(t<=0) clearInterval(i);
},1000);
}
