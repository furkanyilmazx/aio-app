node("npm") {
    updateGitlabCommitStatus name: 'build', state: 'running'
    try {
        sh 'npm i'
        sh 'npm run build'
    }catch(e) {
        updateGitlabCommitStatus name: 'build', state: 'failed'
        echo "not exist command"
        return
    }
    updateGitlabCommitStatus name: 'build', state: 'success'
    updateGitlabCommitStatus name: 'test', state: 'running'
    // tests here
    updateGitlabCommitStatus name: 'test', state: 'success'
}