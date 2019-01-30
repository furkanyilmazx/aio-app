pipeline {
    agent { docker { image 'node:8.11-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}