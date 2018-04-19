window.addEventListener('load', fetchIssues, false);
document.getElementById('form-issue-input').addEventListener("submit", saveIssue);

function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    if (!issues) {
        return;
    }
    var issuseList = document.getElementById('issue-list');

    issuseList.innerHTML = "";
    var content = '';

    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var des = issues[i].description;
        var severity = issues[i].severity;
        var assignee = issues[i].assignee;
        var status = issues[i].status;

        content += '<div class="well">' +
            '<h6>Issue ID: ' + id + '</h6>' +
            '<p><span class="label label-info">' + status + '</span></p>' +
            '<h3>' + des + '</h3>' +
            '<p><span class="glyphicon glyphicon-time></span> ' + severity + ' ' +
            '<span class="glyphicon glyphicon-user></span> ' + assignee + '</p>' +
            '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')">Close</a> ' +
            '<a href="#" class="btn btn-danger" onclick="deleteIssue(\'' + id + '\')">Delete</a>' +
            '</div>';
    }

    issuseList.innerHTML = content;
}

function saveIssue(e) {
    var issueId = chance.guid();
    var issueDes = document.getElementById('input-issue-des').value;
    var issueSeverity = document.getElementById('input-issue-severity').value;
    var issueAssignee = document.getElementById('input-issue-assignee').value;
    var issueStatus = 'Open';

    var issue = {
        id: issueId,
        description: issueDes,
        serevity: issueSeverity,
        assignee: issueAssignee,
        status: issueStatus
    }

    if (localStorage.getItem('issues') === null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    document.getElementById('form-issue-input').reset();
    fetchIssues();
    e.preventDefault();
}

function setStatusClosed(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    for (var i = 0; i < issues.length; i++) {
        if (id == issues[i].id) {
            issues[i].status = 'Closed';
            break;
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();
}

function deleteIssue(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {
        if (id == issues[i].id) {
            issues.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();
}