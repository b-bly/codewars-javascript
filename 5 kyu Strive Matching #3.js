//https://www.codewars.com/kata/56c2a067585d9ac8280003c9/solutions/javascript

function match(candidate, job) { 
    var can = candidate.skills, job = job.skills;
    var sub = false;
    var result;
    for (var j = 0; j < job.length; j++) {
        result = false;
        for (var i = 0; i < can.length; i++) {
            for (var k = 0; k < job[j].substitutions.length; k++) {
                if (can[i].name === job[j].substitutions[k])
                 sub = true;
            }
            if (candidate.skills[i].preference === 'desired') {
                candidate.skills[i].experience *= 1.5;
    }
            if ((can[i].name === job[j].name ||
                sub === true) &&
                can[i].experience >= job[j].idealYears &&
                candidate.preference !== 'avoid') {
                    result = true;
                }
        }
        if (result === false) return false;
    }
    return true;
}
