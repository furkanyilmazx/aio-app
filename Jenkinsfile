pipeline {
    agent {
        node {
            label 'npm'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm i'
                sh 'npm build'
            }
        }
    }
}