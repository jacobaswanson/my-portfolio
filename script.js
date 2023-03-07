const skills = ['HTML5', 'CSS3', 'Git', 'Vanilla JavaScript', 'Web Design', 'GitHub', 'Responsive Design'];
const skillLine = document.querySelector('#skills');
const cursorString = "<span class='blinking-cursor'>_</span>";

const setSkill = i => {
    setTimeout(function() {
        let skillText = ''
        for(let j = 0; j < skills[i].length; j++) {
            setTimeout(function() {
                skillText += skills[i][j];
                skillLine.innerHTML = skillText;
                if(j = skills[i].length -1){
                    skillLine.innerHTML += cursorString;
                }
            }, 150 * j);
        }
        console.log(cursorString);
        skillLine.innerHTML += cursorString;
    }, 4000 * i);
}

const removeSkill = i => {
    setTimeout(function() {
        for(let j = 0; j > skills[i].length * -1; j--){
            setTimeout(function() {
                skillLine.textContent = `${skills[i].slice(0, j)}`;
            }, 150 * j);
        }
    }, 4000 * i);
}

for(let i = 0; i < skills.length; i++) {
    setSkill(i);
    removeSkill(i);
}